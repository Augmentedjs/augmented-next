
describe("Given Augmented", () => {
	it("is defined", () => {
		expect(Augmented).to.not.be.undefined;
	});

	it("has a version defined", () => {
		expect(Augmented.VERSION).to.not.be.undefined;
	});

	it("has a codename defined", () => {
		expect(Augmented.codename).to.not.be.undefined;
	});

	it("has a release name defined", () => {
		expect(Augmented.releasename).to.not.be.undefined;
	});
	describe("Given ES6 or higher", () => {
		it("has Number.isInteger", () => {
			expect(Number.isInteger).to.not.be.undefined;
		});
		it("has String.endsWith", () => {
			expect(String.prototype.endsWith).to.not.be.undefined;
		});
		it("has Array.find", () => {
			expect(Array.prototype.find).to.not.be.undefined;
		});
		it("has Array.includes", () => {
			expect(Array.prototype.includes).to.not.be.undefined;
		});
	});

	describe("Given an Augmented exec", () => {
		const object = { stuff: () => { return true; } };

		it("is defined", () => {
			expect(Augmented.exec).to.not.be.undefined;
		});

		it("can exec a function by name", () => {
			expect(Augmented.exec("stuff", object)).to.be.true;
		});
	});

	describe("Given Augmented.result", () => {
		it("is defined", () => {
			expect(Augmented.result).to.not.be.undefined;
		});

		it("returns the function call", () => {
			const t = { test: () => { return true; } };
			expect(Augmented.result(t, "test")).to.be.true;
		});

		it("returns the property", () => {
			const t = { test: true };
			expect(Augmented.result(t, "test")).to.be.true;
		});
	});

	describe("Given arrays", () => {

		describe("Given ES6 Array.includes", () => {
			it("can check if a string is included", () => {
				const arr = ["x","y","z"];
				expect(arr.includes("z")).to.be.true;
			});
			it("can check if a number is included", () => {
				const arr = [1,2,3];
				expect(arr.includes(2)).to.be.true;
			});
			it("can check if a number is not included", () => {
				const arr = [1,2,3];
				expect(arr.includes(5)).to.be.false;
			});
		});

		describe("Given arrayHas", () => {
			it("can check if it has a string", () => {
				const arr = ["x","y","z"];
				expect(Augmented.arrayHas(arr, "z")).to.be.true;
			});
			it("can check if it has a number", () => {
				const arr = [1,2,3];
				expect(Augmented.arrayHas(arr, 2)).to.be.true;
			});
			it("can check if it does not have a number", () => {
				const arr = [1,2,3];
				expect(Augmented.arrayHas(arr, 5)).to.be.false;
			});
		});

		describe("Given ES6 Array.find", () => {
			const a = [{ "name": "Bubba", "id": 1 }, { "name": "Bill", "id": 2 }, { "name": "MonkeyBone", "id": 3 }], p = function(aa) { return (aa.id === 2); };
			it("checks if property is in an array", () => {
				const r = a.find(p);
				expect(r).to.deep.equal({ "name": "Bill", "id": 2 });
			});

			it("checks if property is not in an array", () => {
				const r = a.find(p);
				expect(r).not.to.deep.equal({ "name": "x", "id": 9 });
			});
		});
	});

	describe("Given Augmented has", () => {
		let o;
		beforeEach(() => {
			o = { x: "", y: () => { return true; } };
		});
		afterEach(() => {
			o = null;
		});
		it("checks if an object has a key", () => {
			expect(Augmented.has(o, "x")).to.be.true;
		});
		it("checks if an object does not have a key", () => {
			expect(Augmented.has(o, "xx")).to.be.false;
		});
		it("checks if an object has a function key", () => {
			expect(Augmented.has(o, "y")).to.be.true;
		});
	});

	describe("Given Augmented.isFunction", () => {
		const o = {}, p = 123, f = () => { return true; };

		it("is defined", () => {
			expect(Augmented.isFunction).to.not.be.undefined;
		});

		it("checks if object is an function", () => {
			expect(Augmented.isFunction(o)).to.be.false;
		});
		it("checks if number is not an function", () => {
			expect(Augmented.isFunction(p)).to.be.false;
		});
		it("checks if function is not an function", () => {
			expect(Augmented.isFunction(f)).to.be.true;
		});

		it("returns true for a function call", () => {
			const t = () => {};
			expect(Augmented.isFunction(t)).to.be.true;
		});

		it("returns false for a string value", () => {
			const t = "x";
			expect(Augmented.isFunction(t)).to.be.false;
		});

		it("returns false for a property call", () => {
			const t = { stuff: "stuff"};
			expect(Augmented.isFunction(t.stuff)).to.be.false;
		});

		it("returns false for an Array", () => {
			const t = [];
			expect(Augmented.isFunction(t)).to.be.false;
		});

		it("returns false for an Object", () => {
			const t = {};
			expect(Augmented.isFunction(t)).to.be.false;
		});

		it("returns false for an Augmented.Object", () => {
			const t = new Augmented.Object();
			expect(Augmented.isFunction(t)).to.be.false;
		});
	});

	describe("Given Augmented isObject", () => {
		const o = {}, p = 123, f = () => { return true; };

		it("checks if object is an object", () => {
			expect(Augmented.isObject(o)).to.be.true;
		});
		it("checks if number is not an object", () => {
			expect(Augmented.isObject(p)).to.be.false;
		});
		it("checks if function is an object", () => {
			expect(Augmented.isObject(f)).to.be.true;
		});
	});

	describe("Given Augmented isString", () => {
		const o = {}, n = 123, p = "123", f = () => { return true; };

		it("checks if object is a string", () => {
			expect(Augmented.isString(o)).to.be.false;
		});
		it("checks if number is not a string", () => {
			expect(Augmented.isFunction(p)).to.be.false;
		});
		it("checks if string is a string", () => {
			expect(Augmented.isString(p)).to.be.true;
		});
		it("checks if function is not a string", () => {
			expect(Augmented.isString(f)).to.be.false;
		});
		it("checks if a string ends with a set of characters", () => {
			const file = "test.json";
			expect(file.endsWith(".json")).to.be.true;
		});
	});

	describe("Given Augmented isDefined", () => {
		const y = {}, n = undefined, nn = null;

		it("checks if object is defined", () => {
			expect(Augmented.isDefined(y)).to.be.true;
		});
		it("checks if undefined is not defined", () => {
			expect(Augmented.isDefined(n)).to.be.false;
		});
		it("checks if null is defined", () => {
			expect(Augmented.isDefined(nn)).to.be.true;
		});
	});

	describe("Given Augmented allKeys", () => {
		let o;
		beforeEach(() => {
			o = { x: "", y: () => { return true; } };
		});
		afterEach(() => {
			o = null;
		});
		it("returns all keys", () => {
			const k = Augmented.allKeys(o);

			expect(k).to.equal(["x", "y"]);
		});
	});

	describe("Given Augmented object create", () => {
		let o;
		beforeEach(() => {
			o = { x: "", y: () => { return true; } };
		});
		afterEach(() => {
			o = null;
		});
		it("can create an object", () => {
			const k = Augmented.create(o, { "z": "z"});
			expect(k).to.not.be.undefined;
			expect(k.z).to.equal("z");
		});
	});

	describe("Given Augmented some", () => {
		let arr;
		const isLargerThanTen = (element, index, array) => {
  		return element >=10;
		};
		beforeEach(() => {
			arr = [10, 9, 8];
		});
		afterEach(() => {
			arr = null;
		});
		it("can create an object", () => {
			const result = arr.some(isLargerThanTen);
			expect(result).to.not.be.undefined;
			expect(result).to.be.true;
		});
	});

	describe("Given Augmented fibonacci", () => {
		it("can get a number in a sequence", () => {
			const result = Augmented.fibonacci(12);
			expect(result).to.not.be.undefined;
			expect(result).to.equal(144);
		});
		it("can create a sequence", () => {
			const result = Augmented.fibonacciSequence(13);
			expect(result).to.not.be.undefined;
			expect(result).to.equal([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]);
		});
	});
});
