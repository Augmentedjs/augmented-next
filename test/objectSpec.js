const expect = require("expect");
import Augmented from "../src/augmented";

describe("Given an Augmented Object", () => {
  it("is defined", () => {
    expect(Augmented.Object).toBeDefined();
  });

  describe("Given an obhject instance", () => {
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

      const object = new myObject({stuff: "stuff"}, "hello");
      expect(object.options.stuff).toEqual("stuff");
      expect(object.special).toEqual("hello");
    });

    describe("Given an events", () => {
      const cb = () => { console.log("x"); return "I'm here!"; };
      beforeEach(() => {
  			object.on("test", cb, object);
  		});

  		afterEach(() => {
  			object.off("test", cb, object);
  		});

      it("has events", () => {
        expect(object.events).toBeDefined();
      });

      it("has an registered event", () => {
        console.log(object.events.test);
        expect(object.events.test).toBeDefined();
      });

      it("can trigger an event", () => {
        const x = object.trigger("test");
        expect(x).toBeDefined();
      });

      it("can trigger an event", () => {
        const x = object.trigger("test");
        expect(x).toBeDefined();
      });
    });
  });
});
