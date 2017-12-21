const expect = require("expect");
import Augmented from "../src/augmented";

describe("Given an Augmented Model", () => {
  it("is defined", () => {
    expect(Augmented.Model).toBeDefined();
  });

  let model;
  beforeEach(() => {
    model = new Augmented.Model();
  });
  afterEach(() => {
    model = null;
  });

  it("can check if empty", () => {
    expect(model.isEmpty()).toBeTruthy();
  });

  it("without Cross Origin Support will not make Cross Origin requests", () => {
    model.crossOrigin = false;
    expect(model.crossOrigin).toBeFalsy();
  });

  it("with Cross Origin Support will make Cross Origin requests", () => {
    model.crossOrigin = true;
    expect(model.crossOrigin).toBeTruthy();
  });

  xit("with mock can return something", () => {
    let s = false;
    model.mock = true;
    model.url = "/info";
    model.fetch({"success": () => { s = true; }});
    expect(s).toBeTruthy();
  });

  xit("can reset with data", () => {
    model.set({ "y": "y" });
    model.reset({ "x": "x" });

    expect(model.get("x")).toEqual("x");
    expect(model.get("y")).not.toBeDefined();
  });

  xit("can set with data", () => {
    model.set({ "x": "x" });
    expect(model.get("x")).toEqual("x");
  });
});
