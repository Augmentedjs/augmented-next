const expect = require("expect");
import Augmented from "../src/augmented";

describe("Given Augmented Stack", () => {
  let s;
  beforeEach(() => {
    s = new Augmented.Utility.Stack();
  });
  afterEach(() => {
    s = null;
  });

  it("can create a stack", () => {
    expect(s instanceof Augmented.Utility.Stack).toBeTruthy();
  });

  it("can check for empty", () => {
    expect(s.empty()).toBeTruthy();
  });

  it("can push data to a stack", () => {
    s.push("monkey");
    expect(s.size()).not.toEqual(0);
  });

  it("can peek data in a stack", () => {
    s.push("monkey");
    const d = s.peek();
    expect(s.size()).not.toEqual(0);
    expect(d).toEqual("monkey");
  });

  it("can pop data in a stack", () => {
    s.push("monkey");
    s.pop();
    expect(s.size()).toEqual(0);
  });

  it("can search for data in a stack", () => {
    s.push("monkey");
    s.push("bonobo");
    s.push("chungito");
    expect(s.search("bonobo")).toEqual(1);
  });

  it("can check the size for data in a stack", () => {
    s.push("monkey");
    s.push("bonobo");
    s.push("chungito");
    expect(s.size()).toEqual(3);
  });

  it("can clear a stack", () => {
    s.push("monkey");
    s.clear();
    expect(s.empty()).toBeTruthy();
  });
});
