const _bind = require("lodash.bind");
import uniqueId from "./functions/uniqueId.js";
import once from "./functions/once.js";
import { eventsApi, internalOn, offApi, triggerApi } from "./events.js";

/**
 * Augmented Object
 * Base class for other classes to extend from
 * @class Augmented.Object
 * @param {object} options Object options
 * @memberof Augmented
 */
class AugmentedObject {
  constructor(options) {
    if (!options) {
      options = {};
    }
    if (!this._options) {
      this._options = {};
    }
    Object.assign(this._options, options);

    if (options && options.events) {
      this._events = options.events;
    } else {
      this._events = {};
    }

    this._listeningTo = {};
    this._listenId = {};
    this._listeners = {};
  };

  /**
   * Initialize the object
   * @method initialize
   * @returns {object} Returns this context
   * @memberof Augmented.Object
   */
  initialize(...args) {
    return this;
  };

  /**
   * The passed options
   * @property options
   * @memberof Augmented.Object
   */
  get options() {
    return this._options;
  };

  set options(options) {
    this._options = options;
  };

  /**
   * The Events
   * @property events
   * @memberof Augmented.Object
   */
  get events() {
    return this._events;
  };

  set events(events) {
    this._events = events;
  };

  /**
   * Trigger one or many events, firing all bound callbacks. Callbacks are
   * passed the same arguments as `trigger` is, apart from the event name
   * (unless you're listening on `"all"`, which will cause your callback to
   * receive the true name of the event as the first argument).
   * @method trigger
   * @param {string} name The name of the event
   * @param {any} args any number of additional arguments
   * @returns {object} Returns this context
   * @memberof Augmented.Object
   */
  trigger(name, ...args) {
    //console.log("events", this._events);
    //console.log("trigger: name", name);
    //console.log("trigger: args", args);
    if (this._events) {
      //const length = Math.max(0, args.length - 1);
      const argsA = (Array.isArray(args)) ? args : (Array.from(args));//(length);
      //let i = 0;
      //for (i = 0; i < length; i++) {
      //  argsA[i] = args[i + 1];
      //}
      //console.log(`calling eventsApi(${triggerApi}, ${this._events}, ${name}, ${void 0}, ${argsA});`);
      eventsApi(triggerApi, this._events, name, void 0, argsA);
    }
    return this;
  };

  /**
   * Bind an event to only be triggered a single time. After the first time
   * the callback is invoked, its listener will be removed. If multiple events
   * are passed in using the space-separated syntax, the handler will fire
   * once for each event, not once for a combination of all events.
   * @method once
   * @param {string} name The name of the event
   * @param {function} callback The callback to evoke
   * @param {object} context The context of the callback
   * @returns {object} Returns this context
   * @memberof Augmented.Object
   */
  once(name, callback, context) {
    // Map the event into a `{event: once}` object.
    const events = eventsApi(this._onceMap, {}, name, callback, _bind(this.off, this));
    if (typeof name === "string" && context == null) {
      callback = void 0;
    }
    return this.on(events, callback, context);
  };

  /**
   * Remove one or many callbacks. If `context` is null, removes all
   * callbacks with that function. If `callback` is null, removes all
   * callbacks for the event. If `name` is null, removes all bound
   * callbacks for all events.
   * @method off
   * @param {string} name The name of the event
   * @param {function} callback The callback to evoke
   * @param {object} context The context of the callback
   * @returns {object} Returns this context
   * @memberof Augmented.Object
   */
  off(name, callback, context) {
    if (this._events) {
      this._events = eventsApi(offApi, this._events, name, callback, {
        context: context,
        listeners: this._listeners
      });
    }
    return this;
  };

  /**
   * Tell this object to stop listening to either specific events ... or
   * to every object it's currently listening to.
   * @method stopListening
   * @param {object} obj The object to stop listening to
   * @param {string} name The name of the event
   * @param {function} callback The callback to evoke
   * @returns {object} Returns this context
   * @memberof Augmented.Object
   */
  stopListening(obj, name, callback) {
    const listeningTo = this._listeningTo;
    if (listeningTo) {
      const ids = obj ? [obj._listenId] : Object.keys(listeningTo);
      let i = 0;
      for (i = 0; i < ids.length; i++) {
        const listening = listeningTo[ids[i]];

        // If listening doesn't exist, this object is not currently
        // listening to obj. Break out early.
        if (!listening) {
          break;
        }
        listening.obj.off(name, callback, this);
      }
    }
    return this;
  };

  /**
   * Bind an event to a `callback` function. Passing `"all"` will bind
   * the callback to all events fired.
   * @method on
   * @param {string} name The name of the event
   * @param {function} callback The callback to evoke
   * @param {object} context The context of the callback
   * @returns {object} Returns this context
   * @memberof Augmented.Object
   */
  on(name, callback, context) {
    return internalOn(this, name, callback, context);
  };

  /**
   * Inversion-of-control versions of `on`. Tell *this* object to listen to
   * an event in another object... keeping track of what it's listening to
   * for easier unbinding later.
   * @method listenTo
   * @param {object} obj The object to stop listening to
   * @param {string} name The name of the event
   * @param {function} callback The callback to evoke
   * @returns {object} Returns this context
   * @memberof Augmented.Object
   */
  listenTo(obj, name, callback) {
    if (obj) {
      const id = obj._listenId || (obj._listenId = uniqueId("l"));
      const listeningTo = this._listeningTo || (this._listeningTo = {});
      let listening = listeningTo[id];

      // This object is not listening to any other events on `obj` yet.
      // Setup the necessary references to track the listening callbacks.
      if (!listening) {
        const thisId = this._listenId || (this._listenId = uniqueId("l"));
        listening = listeningTo[id] = {obj: obj, objId: id, id: thisId, listeningTo: listeningTo, count: 0};
      }

      // Bind callbacks on obj, and keep track of them on listening.
      internalOn(obj, name, callback, this, listening);
    }
    return this;
  };

  /**
   * Inversion-of-control versions of `once`.
   * @method listenToOnce
   * @param {object} obj The object to stop listening to
   * @param {string} name The name of the event
   * @param {function} callback The callback to evoke
   * @returns {object} Returns this context
   * @memberof Augmented.Object
   */
  listenToOnce(obj, name, callback) {
    // Map the event into a `{event: once}` object.
    const events = eventsApi(this._onceMap, {}, name, callback, _bind(this.stopListening, this, obj));
    return this.listenTo(obj, events);
  };

  // Reduces the event callbacks into a map of `{event: onceWrapper}`.
  // `offer` unbinds the `onceWrapper` after it has been called.
  _onceMap(map, name, callback, offer) {
    if (callback) {
      const __once = map[name] = once(() => {
        offer(name, __once);
        callback.apply(this, arguments);
      });
      __once._callback = callback;
    }
    return map;
  };
};

export default AugmentedObject;
