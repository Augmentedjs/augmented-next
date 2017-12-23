const expect = require("expect");
import Augmented from "../src/augmented";

describe("Given an Abstract Model", () => {
  it("is defined", () => {
    expect(Augmented.AbstractModel).toBeDefined();
  });

  let model;
  beforeEach(() => {
    model = new Augmented.AbstractModel();
  });
  afterEach(() => {
    model = null;
  });

  it("can check if empty", () => {
    expect(model.isEmpty()).toBeTruthy();
  });

  it("can reset with data", () => {
    model.set({ "y": "y" });
    model.reset({ "x": "x" });

    expect(model.get("x")).toEqual("x");
    expect(model.get("y")).not.toBeDefined();
  });

  it("can set with data", () => {
    model.set({ "x": "x" });
    expect(model.get("x")).toEqual("x");
  });

  describe("Given validation", () => {
	  beforeEach(() => {
	    model = new Augmented.AbstractModel();
	  });
	  afterEach(() => {
	    model = null;
	  });

		it("with no Schema does not support Validation", () => {
			expect(model.supportsValidation()).toBeFalsy();
		});

		it("with an empty Schema does support Validation", () => {
			model.schema = {};
			expect(model.supportsValidation()).toBeTruthy();
		});

		xit("can generate a schema from a model", () => {
			model.set({ "Name": "Bob", "ID": 123, "Email": "bob@augmentedjs.org", "Role": "Architect", "Active": true });
			const schema = Augmented.ValidationFramework.generateSchema(model);
			expect(schema).toBeDefined();
			expect(Augmented.isObject(schema)).toBeTruthy();
		});
	});
});
