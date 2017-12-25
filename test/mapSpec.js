import Augmented from "../src/augmented";
const expect = require("expect");


describe("Given a Map", () => {
  let map;

  beforeEach(() => {
    map = new Augmented.Utility.Map();
  });

  afterEach(() => {
    map = null;
  });

  it("is defined", () => {
    expect(Augmented.Utility.Map).toBeDefined();
  });

  it("can create an instance", () => {
    expect(map instanceof Augmented.Utility.Map).toBeTruthy();
  });

  it("can add a string to the map", () => {
    map.set("name", "bubba");

    expect(map.size()).toEqual(1);
  });

  it("can get a string from the map", () => {
    map.set("name", "bubba");

    expect(map.get("name")).toEqual("bubba");
  });

  it("can get an array from the map", () => {
    map.set("names", ["bubba", "bob"]);

    expect(map.get("names").length).toEqual(2);
  });

  it("can get an map from the map", () => {
    map.set("map", new Augmented.Utility.Map());
    const m = map.get("map");

    expect(m instanceof Augmented.Utility.Map).toBeTruthy();
  });

  it("can get an object to the map", () => {
    map.set("object", { "x": "y" });

    expect(map.get("object")).toEqual({ "x": "y" });
  });

  it("can remove a string to the map", () => {
    map.set("name", "bubba");
    map.remove("name");
    expect(map.size()).toEqual(0);
  });

  it("has a string in the map", () => {
    map.set("name", "bubba");

    expect(map.has("name")).toBeTruthy();
  });

  it("does not have a string in the map", () => {
    map.set("name", "bubba");

    expect(map.has("x")).toBeFalsy();
  });

  it("has a string key in the map", () => {
    map.set("name", "bubba");

    expect(map.key(0)).toEqual("name");
  });

  it("has a entries in the map", () => {
    map.set("name", "Bob");
    map.set("age", 36);
    map.set("height", "6.0\"");

    expect(map.entries().length).toEqual(3);
  });

  it("has a values in the map", () => {
    map.set("name", "Bob");
    map.set("age", 36);
    map.set("height", "6.0\"");

    expect(map.values().length).toEqual(3);
  });

  it("can marshall a map via constructor", () => {
    map.set("name", "Bob");
    map.set("age", 36);
    map.set("height", "6.0\"");

    const map2 = new Augmented.Utility.Map(map);
    expect(map.values()).toEqual(map2.values());
  });

  it("can marshall a map", () => {
    const map2 = new Augmented.Utility.Map();
    map2.set("name", "Bob");
    map2.set("age", 36);
    map2.set("height", "6.0\"");

    const success = map.marshall(map2);
    expect(map.values()).toEqual(map2.values());
  });

  it("can marshall a JSON object value pair", () => {
    const o = { p1: "p1", p2: "p2" };

    const success = map.marshall(o);
    expect(success);
    expect(map.toJSON()).toEqual(o);
  });

  it("does not marshall a string", () => {
    const success = map.marshall("junk");
    expect(success).toBeFalsy();
  });

  it("does not marshall a number", () => {
    const success = map.marshall(50);
    expect(success).toBeFalsy();
  });

  it("does not marshall an empty object", () => {
    const success = map.marshall({});
    expect(success).toBeFalsy();
  });

  it("does marshall an array as a numbered map", () => {
    const success = map.marshall(["x", "y", "z"]);
    expect(success).toBeTruthy();
  });

  it("can set an item with a number as a key", () => {
    map.set(16, "sixteen");
    expect(map.get(16)).toEqual("sixteen");
  });

  it("can set an item with an object as a key", () => {
    map.set({ name: "Bob", age: 36 }, { data: "xxxxxxx" });
    expect(map.get({ name: "Bob", age: 36 })).toEqual({ data: "xxxxxxx" });
  });

  it("can produce a string from the map", () => {
    const o = { p1: "p1", p2: "p2" };
    const success = map.marshall(o);
    expect(success).toBeTruthy();
    expect(map.toString()).toEqual("{\"p1\":\"p1\",\"p2\":\"p2\"}");
  });

  it("can marshall a stringified JSON", () => {
    const success = map.marshall("{\"p1\":\"p1\",\"p2\":\"p2\"}");
    expect(success).toBeTruthy();
    expect(map.toString()).toEqual("{\"p1\":\"p1\",\"p2\":\"p2\"}");
  });
});
