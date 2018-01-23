import Augmented from "../dist/augmented-next.js";
import expect from "expect";

describe("Given an Augmented Object", () => {
  it("is defined", () => {
    expect(Augmented.Object).toBeDefined();
  });

  describe("Given an object instance", () => {
    let object;
    beforeEach(() => {
			object = new Augmented.Object({stuff: "stuff"});
		});

		afterEach(() => {
			object = null;
		});

    it("has initialize", () => {
      expect(object.initialize).toBeDefined();
    });

    it("can be created with options", () => {
      expect(object.options.stuff).toEqual("stuff");
    });

    it("can be extended", () => {
      class myObject extends Augmented.Object {
        constructor(stuff, special) {
          super(stuff);
          this._special = special;
        };
        get special() {
          return this._special;
        }
      }

      const mobject = new myObject({stuff: "stuff"}, "hello");
      expect(mobject.options.stuff).toEqual("stuff");
      expect(mobject.special).toEqual("hello");
    });

    it("can be initialized without options", () => {
      class myObject extends Augmented.Object {
        constructor() {
          super();
          this._special = "hello";
        };
        get special() {
          return this._special;
        }
      }

      const mobject = new myObject();
      expect(mobject.special).toEqual("hello");
    });

    describe("Given an events", () => {
      const cb = () => { console.log("x"); return "I'm here!"; };
      describe("Given an persistant events", () => {
        beforeEach(() => {
    			object.on("test", cb, object);
    		});

    		afterEach(() => {
    			object.off("test", cb, object);
    		});

        it("has events", () => {
          expect(object.events).toBeDefined();
        });

        it("can set events", () => {
          object.events = {};
          expect(object.events).toBeDefined();
        });

        it("has an registered event", () => {
          expect(object.events.test).toBeDefined();
        });

        it("can trigger an event", () => {
          const x = object.trigger("test");
          expect(x).toBeDefined();
        });
      });
      describe("Given an event used once", () => {
        let obj;
        beforeEach(() => {
    			obj = object.once("testOnce", cb, object);
    		});

    		afterEach(() => {
    			object.off("testOnce", cb, object);
          obj = null;
    		});

        it("can register an event once", () => {
          expect(object.events.testOnce).toBeDefined();
        });

        it("can trigger an event once", () => {
          const x = object.once("testOnce");
          const y = object.trigger("testOnce");
          expect(y).toBeDefined();
          expect(object.events.testOnce).not.toBeDefined();
        });
      });
    });
  });
});
