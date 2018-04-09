describe("Given an Augmented Object", () => {
  it("is defined", () => {
    expect(Augmented.Object).to.not.be.undefined;
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
      expect(object.initialize).to.not.be.undefined;
    });

    it("can be created with options", () => {
      expect(object.options.stuff).to.equal("stuff");
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
      expect(mobject.options.stuff).to.equal("stuff");
      expect(mobject.special).to.equal("hello");
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
      expect(mobject.special).to.equal("hello");
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
          expect(object.events).to.not.be.undefined;
        });

        it("can set events", () => {
          object.events = {};
          expect(object.events).to.not.be.undefined;
        });

        it("has an registered event", () => {
          expect(object.events.test).to.not.be.undefined;
        });

        it("can trigger an event", () => {
          const x = object.trigger("test");
          expect(x).to.not.be.undefined;
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
          expect(object.events.testOnce).to.not.be.undefined;
        });

        it("can trigger an event once", () => {
          const x = object.once("testOnce");
          const y = object.trigger("testOnce");
          expect(y).to.not.be.undefined;
          expect(object.events.testOnce).to.be.undefined;
        });
      });
    });
  });
});
