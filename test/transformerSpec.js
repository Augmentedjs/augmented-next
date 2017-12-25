import Augmented from "../src/augmented";
const expect = require("expect");



const STRING = "string";
const NUMBER = "number";
const BOOLEAN = "boolean";
const OBJECT = "object";

describe("Given a Utility Transformer", () => {
	let source, out;
	describe("Given a number (100)", () => {
		beforeEach(() => {
			source = 100;
			out = null;
		});

		afterEach(() => {
			source = null;
			out = null;
		});

		it("can transform to a string", () => {
			out = Augmented.Utility.Transformer.transform(source, Augmented.Utility.TransformerType.STRING);
			expect(typeof out === STRING).toBeTruthy();
			expect(out).toEqual("100");
		});

		it("can transform to a integer", () => {
			out = Augmented.Utility.Transformer.transform(source, Augmented.Utility.TransformerType.INTEGER);
			expect(typeof out === NUMBER).toBeTruthy();
			expect(out).toEqual(100);
		});

		it("can transform to a number", () => {
			out = Augmented.Utility.Transformer.transform(source, Augmented.Utility.TransformerType.NUMBER);
			expect(typeof out === NUMBER).toBeTruthy();
			expect(out).toEqual(100);
		});

		it("can transform to a boolean", () => {
			out = Augmented.Utility.Transformer.transform(source, Augmented.Utility.TransformerType.BOOLEAN);
			expect(typeof out === BOOLEAN).toBeTruthy();
			expect(out).toEqual(true);
		});

		it("can transform to an array", () => {
			out = Augmented.Utility.Transformer.transform(source, Augmented.Utility.TransformerType.ARRAY);
			expect(Array.isArray(out)).toBeTruthy();
			expect(out).toEqual([100]);
		});

		it("can transform to an object", () => {
			out = Augmented.Utility.Transformer.transform(source, Augmented.Utility.TransformerType.OBJECT);
			expect(typeof out === OBJECT).toBeTruthy();
			expect(out).toEqual({100: 100});
		});
	});

	describe("Given a number (1024.55)", () => {
		beforeEach(() => {
			source = 1024.55;
			out = null;
		});

		afterEach(() => {
			source = null;
			out = null;
		});

		it("can transform to a string", () => {
			out = Augmented.Utility.Transformer.transform(source, Augmented.Utility.TransformerType.STRING);
			expect(typeof out === STRING).toBeTruthy();
			expect(out).toEqual("1024.55");
		});

		it("can transform to a integer", () => {
			out = Augmented.Utility.Transformer.transform(source, Augmented.Utility.TransformerType.INTEGER);
			expect(typeof out === NUMBER).toBeTruthy();
			expect(out).toEqual(1024);
		});

		it("can transform to a number", () => {
			out = Augmented.Utility.Transformer.transform(source, Augmented.Utility.TransformerType.NUMBER);
			expect(typeof out === NUMBER).toBeTruthy();
			expect(out).toEqual(1024.55);
		});

		it("can transform to a boolean", () => {
			out = Augmented.Utility.Transformer.transform(source, Augmented.Utility.TransformerType.BOOLEAN);
			expect(typeof out === BOOLEAN).toBeTruthy();
			expect(out).toEqual(true);
		});

		it("can transform to an array", () => {
			out = Augmented.Utility.Transformer.transform(source, Augmented.Utility.TransformerType.ARRAY);
			expect(Array.isArray(out)).toBeTruthy();
			expect(out).toEqual([1024.55]);
		});

		it("can transform to an object", () => {
			out = Augmented.Utility.Transformer.transform(source, Augmented.Utility.TransformerType.OBJECT);
			expect(typeof out === OBJECT).toBeTruthy();
			expect(out).toEqual({1024.55: 1024.55});
		});
	});

	describe("Given a string (\"12345.80\")", () => {
		beforeEach(() => {
			source = "12345.80";
			out = null;
		});

		afterEach(() => {
			source = null;
			out = null;
		});

		it("can transform to a string", () => {
			out = Augmented.Utility.Transformer.transform(source, Augmented.Utility.TransformerType.STRING);
			expect(typeof out === STRING).toBeTruthy();
			expect(out).toEqual("12345.80");
		});

		it("can transform to a integer", () => {
			out = Augmented.Utility.Transformer.transform(source, Augmented.Utility.TransformerType.INTEGER);
			expect(typeof out === NUMBER).toBeTruthy();
			expect(out).toEqual(12345);
		});

		it("can transform to a number", () => {
			out = Augmented.Utility.Transformer.transform(source, Augmented.Utility.TransformerType.NUMBER);
			expect(typeof out === NUMBER).toBeTruthy();
			expect(out).toEqual(12345.80);
		});

		it("can transform to a boolean", () => {
			out = Augmented.Utility.Transformer.transform(source, Augmented.Utility.TransformerType.BOOLEAN);
			expect(typeof out === BOOLEAN).toBeTruthy();
			expect(out).toEqual(true);
		});

		it("can transform to an array", () => {
			out = Augmented.Utility.Transformer.transform(source, Augmented.Utility.TransformerType.ARRAY);
			expect(Array.isArray(out)).toBeTruthy();
			expect(out).toEqual(["12345.80"]);
		});

		it("can transform to an object", () => {
			out = Augmented.Utility.Transformer.transform(source, Augmented.Utility.TransformerType.OBJECT);
			expect(typeof out === OBJECT).toBeTruthy();
			expect(out).toEqual({"12345.80": "12345.80"});
		});
	});

	describe("Given a boolean (false)", () => {
		beforeEach(() => {
			source = false;
			out = null;
		});

		afterEach(() => {
			source = null;
			out = null;
		});

		it("can transform to a string", () => {
			out = Augmented.Utility.Transformer.transform(source, Augmented.Utility.TransformerType.STRING);
			expect(typeof out === STRING).toBeTruthy();
			expect(out).toEqual("false");
		});

		it("will transform to a integer (NaN)", () => {
			out = Augmented.Utility.Transformer.transform(source, Augmented.Utility.TransformerType.INTEGER);
			expect(typeof out === NUMBER).toBeTruthy();
			expect(out).toEqual(NaN);
		});

		it("can transform to a number", () => {
			out = Augmented.Utility.Transformer.transform(source, Augmented.Utility.TransformerType.NUMBER);
			expect(typeof out === NUMBER).toBeTruthy();
			expect(out).toEqual(0);
		});

		it("can transform to a boolean", () => {
			out = Augmented.Utility.Transformer.transform(source, Augmented.Utility.TransformerType.BOOLEAN);
			expect(typeof out === BOOLEAN).toBeTruthy();
			expect(out).toEqual(false);
		});

		it("can transform to an array", () => {
			out = Augmented.Utility.Transformer.transform(source, Augmented.Utility.TransformerType.ARRAY);
			expect(Array.isArray(out)).toBeTruthy();
			expect(out).toEqual([false]);
		});

		it("can transform to an object", () => {
			out = Augmented.Utility.Transformer.transform(source, Augmented.Utility.TransformerType.OBJECT);
			expect(typeof out === OBJECT).toBeTruthy();
			expect(out).toEqual({false: false});
		});
	});

	describe("Given an array ([1,2,3])", () => {
		beforeEach(() => {
			source = [1,2,3];
			out = null;
		});

		afterEach(() => {
			source = null;
			out = null;
		});

		it("can transform to a string", () => {
			out = Augmented.Utility.Transformer.transform(source, Augmented.Utility.TransformerType.STRING);
			expect(typeof out === STRING).toBeTruthy();
			expect(out).toEqual("[1,2,3]");
		});

		it("will transform to a integer (first in array)", () => {
			out = Augmented.Utility.Transformer.transform(source, Augmented.Utility.TransformerType.INTEGER);
			expect(typeof out === NUMBER).toBeTruthy();
			expect(out).toEqual(1);
		});

		it("can transform to a number (NaN)", () => {
			out = Augmented.Utility.Transformer.transform(source, Augmented.Utility.TransformerType.NUMBER);
			expect(typeof out === NUMBER).toBeTruthy();
			expect(out).toEqual(NaN);
		});

		it("can transform to a boolean", () => {
			out = Augmented.Utility.Transformer.transform(source, Augmented.Utility.TransformerType.BOOLEAN);
			expect(typeof out === BOOLEAN).toBeTruthy();
			expect(out).toEqual(true);
		});

		it("can transform to an array", () => {
			out = Augmented.Utility.Transformer.transform(source, Augmented.Utility.TransformerType.ARRAY);
			expect(Array.isArray(out)).toBeTruthy();
			expect(out).toEqual([1,2,3]);
		});

		it("can transform to an object", () => {
			out = Augmented.Utility.Transformer.transform(source, Augmented.Utility.TransformerType.OBJECT);
			expect(typeof out === OBJECT).toBeTruthy();
			expect(out).toEqual([1,2,3]);
		});
	});

	describe("Given an object ({\"a\": \"a\"})", () => {
		beforeEach(() => {
			source = {"a": "a"};
			out = null;
		});

		afterEach(() => {
			source = null;
			out = null;
		});

		it("can transform to a string", () => {
			out = Augmented.Utility.Transformer.transform(source, Augmented.Utility.TransformerType.STRING);
			expect(typeof out === STRING).toBeTruthy();
			expect(out).toEqual("{\"a\":\"a\"}");
		});

		it("will transform to a integer (NaN)", () => {
			out = Augmented.Utility.Transformer.transform(source, Augmented.Utility.TransformerType.INTEGER);
			expect(typeof out === NUMBER).toBeTruthy();
			expect(out).toEqual(NaN);
		});

		it("can transform to a number (NaN)", () => {
			out = Augmented.Utility.Transformer.transform(source, Augmented.Utility.TransformerType.NUMBER);
			expect(typeof out === NUMBER).toBeTruthy();
			expect(out).toEqual(NaN);
		});

		it("can transform to a boolean", () => {
			out = Augmented.Utility.Transformer.transform(source, Augmented.Utility.TransformerType.BOOLEAN);
			expect(typeof out === BOOLEAN).toBeTruthy();
			expect(out).toEqual(true);
		});

		it("can transform to an array", () => {
			out = Augmented.Utility.Transformer.transform(source, Augmented.Utility.TransformerType.ARRAY);
			expect(Array.isArray(out)).toBeTruthy();
		});

		it("can transform to an object", () => {
			out = Augmented.Utility.Transformer.transform(source, Augmented.Utility.TransformerType.OBJECT);
			expect(typeof out === OBJECT).toBeTruthy();
			expect(out).toEqual(source);
		});
	});
});
