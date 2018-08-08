describe("Given Utilities", () => {
	it("is defined", () => {
		expect(Augmented.Utility).to.not.be.undefined;
	});

	describe("Given shuffle", () => {
		it("can shuffle an array", () => {
			const a = Augmented.Utility.shuffle([1, 2, 3, 4, 5]);
			expect(a).to.not.equal(null);
			expect(a).to.not.equal([]);
			expect(a).to.not.equal([1, 2, 3, 4, 5]);
		});
	});

	describe("Given object extend", () => {
		it("Extends an object with data", () => {
			const o = Augmented.Utility.extend({}, {"A": "B"});
			expect(o["A"]).to.deep.equal("B");
		});

		it("Extends an object with more data", () => {
			const o = Augmented.Utility.extend({}, {"A": "B"}, {"C": "D"});
			expect(o["C"]).to.deep.equal("D");
		});

		it("Extends an object prototype", () => {
			function Shape() {
				this.x = 0;
				this.y = 0;
			};

			function Circle() {
				Shape.call(this);
			};

			Circle.prototype = Augmented.Utility.extend(Shape.prototype, {
				"constructor": Circle
			});

			const circle = new Circle();
			expect(circle instanceof Circle).to.be.true;

			expect(circle instanceof Shape).to.be.true;
		});
	});

	describe("Given wrap", () => {
		const f = () => {};
		it("can wrap functions", () => {
			const ff = () => { return true; };
			const x = Augmented.Utility.wrap(f, ff);
			const y = x();
			expect(y).to.be.true;
		});
	});

	describe("Given an object", () => {
		const o = { "this": "this", "is": "is", "an": "an", "object": "object" };
		it("can pretty print", () => {
			const x = Augmented.Utility.prettyPrint(o);
			expect(x).to.not.equal("");
		});
	});

	describe("Given filterObject", () => {
		let o;
    beforeEach(() => {
			o = { "this": "this", "is": "is", "an": "an", "object": "object" };
		});

		afterEach(() => {
			o = null;
		});

		it("can filter objects to one key", () => {
			const x = Augmented.Utility.filterObject(o, ["object"]);
			expect(x["object"]).to.equal("object");
		});

		it("can filter objects to multiple keys", () => {
			const x = Augmented.Utility.filterObject(o, ["object", "is"]);
			expect(x.is).to.deep.equal("is");
		});
	});

	describe("Given pad", () => {
		it("can pad a string", () => {
			const a = Augmented.Utility.pad("_____", "This is a string", true);
			expect(a).to.not.equal(null);
			expect(a).to.not.equal("");
			expect(a).to.equal("_____This is a string");
		});
	});

	describe("Given a number", () => {
		it("can format as binary", () => {
			const a = Augmented.Utility.formatBinary(25, 8);
			expect(a).to.not.equal(25);
			expect(a).to.not.equal("");
			expect(a).to.equal("10011000");
		});
	});

	describe("Given a date", () => {
		it("can format as string in US format", () => {
			const a = Augmented.Utility.formatDate(new Date("12/25/1999"));
			expect(a).to.equal("12/25/1999 12:00am");
		});
	});
});
