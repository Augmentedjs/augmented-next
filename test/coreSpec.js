const expect = require("expect");
import Augmented from '../src/augmented';

describe("Given Augmented", () => {
	it("is defined", () => {
		expect(Augmented).toBeDefined();
	});

	it("has a version defined", () => {
		expect(Augmented.VERSION).toBeDefined();
	});

	it("has a codename defined", () => {
		expect(Augmented.codename).toBeDefined();
	});

	it("has a release name defined", () => {
		expect(Augmented.releasename).toBeDefined();
	});

	xit("supports noConflict", () => {
		expect(typeof Augmented.noConflict === "function").toBeTruthy();
	});

	describe("Given an Augmented exec", () => {
		const object = { stuff: () => { return true; } };

		it("is defined", () => {
			expect(Augmented.exec).toBeDefined();
		});

		it("can exec a function by name", () => {
			expect(Augmented.exec("stuff", object)).toBeTruthy();
		});
	});

	xdescribe("Given an Augmented Object", () => {
		it("is defined", () => {
			expect(Augmented.Object).toBeDefined();
		});

		it("can be created with options", () => {
			const object = new Augmented.Object({stuff: "stuff"});
			expect(object.options.stuff).toEqual("stuff");
		});

		it("can be extended", () => {
			const exObject = Augmented.Object.extend({stuff: "stuff"});
			const object = new exObject();
			expect(object.stuff).toEqual("stuff");
		});
	});

	describe("Given Augmented.result", () => {
		it("is defined", () => {
			expect(Augmented.result).toBeDefined();
		});

		it("returns the function call", () => {
			const t = { test: () => { return true; } };
			expect(Augmented.result(t, "test")).toBeTruthy();
		});

		it("returns the property", () => {
			const t = { test: true };
			expect(Augmented.result(t, "test")).toBeTruthy();
		});
	});

	describe("Given Augmented Array", () => {
		describe("Given Array.includes", () => {
			it("can check if a string is included", () => {
				const arr = ["x","y","z"];
				expect(arr.includes("z")).toBeTruthy();
			});
			it("can check if a number is included", () => {
				const arr = [1,2,3];
				expect(arr.includes(2)).toBeTruthy();
			});
			it("can check if a number is not included", () => {
				const arr = [1,2,3];
				expect(arr.includes(5)).toBeFalsy();
			});
		});

		xdescribe("Given arrayHas", () => {
			it("can check if it has a string", () => {
				const arr = ["x","y","z"];
				expect(arr.has("z")).toBeTruthy();
			});
			it("can check if it has a number", () => {
				const arr = [1,2,3];
				expect(arr.has(2)).toBeTruthy();
			});
			it("can check if it does not have a number", () => {
				const arr = [1,2,3];
				expect(arr.has(5)).toBeFalsy();
			});
		});

		describe("Given Array.find", () => {
			const a = [{ "name": "Bubba", "id": 1 }, { "name": "Bill", "id": 2 }, { "name": "MonkeyBone", "id": 3 }], p = function(aa) { return (aa.id === 2); };
			it("checks if property is in an array", () => {
				const r = a.find(p);
				expect(r).toEqual({ "name": "Bill", "id": 2 });
			});

			it("checks if property is not in an array", () => {
				const r = a.find(p);
				expect(r).not.toEqual({ "name": "x", "id": 9 });
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
			expect(Augmented.has(o, "x")).toBeTruthy();
		});
		it("checks if an object does not have a key", () => {
			expect(Augmented.has(o, "xx")).toBeFalsy();
		});
		it("checks if an object has a function key", () => {
			expect(Augmented.has(o, "y")).toBeTruthy();
		});
	});

	describe("Given Augmented.isFunction", () => {
		const o = {}, p = 123, f = () => { return true; };

		it("is defined", () => {
			expect(Augmented.isFunction).toBeDefined();
		});

		it("checks if object is an function", () => {
			expect(Augmented.isFunction(o)).toBeFalsy();
		});
		it("checks if number is not an function", () => {
			expect(Augmented.isFunction(p)).toBeFalsy();
		});
		it("checks if function is not an function", () => {
			expect(Augmented.isFunction(f)).toBeTruthy();
		});

		it("returns true for a function call", () => {
			const t = () => {};
			expect(Augmented.isFunction(t)).toBeTruthy();
		});

		it("returns false for a string value", () => {
			const t = "x";
			expect(Augmented.isFunction(t)).toBeFalsy();
		});

		it("returns false for a property call", () => {
			const t = { stuff: "stuff"};
			expect(Augmented.isFunction(t.stuff)).toBeFalsy();
		});

		it("returns false for an Array", () => {
			const t = [];
			expect(Augmented.isFunction(t)).toBeFalsy();
		});

		it("returns false for an Object", () => {
			const t = {};
			expect(Augmented.isFunction(t)).toBeFalsy();
		});

		xit("returns false for an Augmented.Object", () => {
			const t = new Augmented.Object();
			expect(Augmented.isFunction(t)).toBeFalsy();
		});
	});

	describe("Given Augmented isObject", () => {
		const o = {}, p = 123, f = () => { return true; };

		it("checks if object is an object", () => {
			expect(Augmented.isObject(o)).toBeTruthy();
		});
		it("checks if number is not an object", () => {
			expect(Augmented.isObject(p)).toBeFalsy();
		});
		it("checks if function is an object", () => {
			expect(Augmented.isObject(f)).toBeTruthy();
		});
	});

	describe("Given Augmented isString", () => {
		const o = {}, n = 123, p = "123", f = () => { return true; };

		it("checks if object is a string", () => {
			expect(Augmented.isString(o)).toBeFalsy();
		});
		it("checks if number is not a string", () => {
			expect(Augmented.isFunction(p)).toBeFalsy();
		});
		it("checks if string is a string", () => {
			expect(Augmented.isString(p)).toBeTruthy();
		});
		it("checks if function is not a string", () => {
			expect(Augmented.isString(f)).toBeFalsy();
		});
		it("checks if a string ends with a set of characters", () => {
			const file = "test.json";
			expect(file.endsWith(".json")).toBeTruthy();
		});
	});

	describe("Given Augmented isDefined", () => {
		const y = {}, n = undefined, nn = null;

		it("checks if object is defined", () => {
			expect(Augmented.isDefined(y)).toBeTruthy();
		});
		it("checks if undefined is not defined", () => {
			expect(Augmented.isDefined(n)).toBeFalsy();
		});
		it("checks if null is defined", () => {
			expect(Augmented.isDefined(nn)).toBeTruthy();
		});
	});
});
