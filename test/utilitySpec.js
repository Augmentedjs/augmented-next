const expect = require("expect");
import Augmented from "../src/augmented";

describe("Given Utilities", () => {
	it("is defined", () => {
		expect(Augmented.Utility).toBeDefined();
	});

	describe("Given shuffle", () => {
		it("can shuffle an array", () => {
			const a = Augmented.Utility.shuffle([1, 2, 3, 4, 5]);
			expect(a).not.toEqual(null);
			expect(a).not.toEqual([]);
			expect(a).not.toEqual([1, 2, 3, 4, 5]);
		});
	});

	describe("Given object sort", () => {
		it("can sort an array", () => {
			const o = [{"A": "B"}, {"A": "D"}, {"A": "C"}];
			const a = Augmented.Utility.sortObjects(o, "A");
			expect(a).not.toEqual(null);
			expect(a).not.toEqual([]);
			expect(a).toEqual([{"A": "B"}, {"A": "C"}, {"A": "D"}]);
		});
	});

	describe("Given object extend", () => {
		it("Extends an object with data", () => {
			const o = Augmented.Utility.extend({}, {"A": "B"});
			expect(o).toEqual({"A": "B"});
		});

		it("Extends an object with more data", () => {
			expect(Augmented.Utility.extend({}, {"A": "B"}, {"C": "D"})).toEqual({"A": "B", "C": "D"});
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
			expect(circle instanceof Circle).toBeTruthy();

			expect(circle instanceof Shape).toBeTruthy();
		});
	});

	xdescribe("Given Augmented Class Extend", () => {
		it("Extends a class object", () => {
			var x = Augmented.Model.extend({ x: "", url: "/" });
			var y = Augmented.Utility.ClassExtend(Augmented.Model, { x: "", url: "/" });
			var xx = new x();
			var yy = new y();

			expect(x.x).toEqual(y.x);
			expect(x.url).toEqual(y.url);
		});
	});

	describe("Given wrap", () => {
		const f = () => {};
		it("can wrap functions", () => {
			const ff = () => { return true; };
			const x = Augmented.Utility.wrap(f, ff);
			const y = x();
			expect(y).toBeTruthy();
		});
	});

	describe("Given an object", () => {
		const o = { "this": "this", "is": "is", "an": "an", "object": "object" };
		it("can pretty print", () => {
			const x = Augmented.Utility.prettyPrint(o);
			expect(x).not.toEqual("");
		});
	});

	// Transformer
	// filter
});
