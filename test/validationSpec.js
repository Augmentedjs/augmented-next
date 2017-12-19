const expect = require("expect");
import Augmented from "../src/augmented";

describe("Given Validation", () => {
	describe("Given the Augmented Validation Framework", () => {
		it("is defined", () => {
			expect(Augmented.ValidationFramework).toBeDefined();
		});

		it("can create an instance", () => {
			const v = new Augmented.ValidationFramework();
			expect(v).toBeDefined();
		});

	});

	xdescribe("Given an Augmented Model", () => {
		it("is defined", () => {
			expect(Augmented.Model).toBeDefined();
		});

		it("can generate a schema from a model", () => {
			var model = new Augmented.Model();
			model.set({ "Name": "Bob", "ID": 123, "Email": "bob@augmentedjs.org", "Role": "Architect", "Active": true });
			var schema = Augmented.ValidationFramework.generateSchema(model);
			expect(schema).toBeDefined();
			expect(Augmented.isObject(schema)).toBeTruthy();
		});

		it("with no Schema does not support Validation", () => {
			var model = new Augmented.Model();
			expect(model.supportsValidation()).toBeFalsy();
		});

		it("with an empty Schema does support Validation", () => {
			var model = new Augmented.Model();
			model.schema = {};
			expect(model.supportsValidation()).toBeTruthy();
		});
	});

	xdescribe("Given an Augmented Collection", () => {
		it("has an augmented Collection", () => {
			expect(Augmented.Collection).toBeDefined();
		});

		it("with no Schema does not support Validation", () => {
			var collection = new Augmented.Collection();
			expect(collection.supportsValidation()).toBeFalsy();
		});

		it("with an empty Schema does support Validation", () => {
			var collection = new Augmented.Collection();
			collection.schema = {};
			expect(collection.supportsValidation()).toBeTruthy();
		});
	});
});
