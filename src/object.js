const _bind = require("lodash.bind");
import uniqueId from "./functions/uniqueId.js";

// some lodash-like functions ported over

const _before = (nn, func) => {
  let result, n;
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  n = Number.parseInt(nn);
  return () => {
    if (--n > 0) {
      result = func.apply(this, arguments);
    }
    if (n <= 1) {
      func = undefined;
    }
    return result;
  };
};
const _once = (func) => {
  return _before(2, func);
};

// Events

// Regular expression used to split event strings.
const EVENT_SPLITTER = /\s+/;

// Iterates over the standard `event, callback` (as well as the fancy multiple
// space-separated events `"change blur", callback` and jQuery-style event
// maps `{event: callback}`).
const eventsApi = (iteratee, events, name, callback, opts) => {
  let i = 0, names;
  if (name && typeof name === "object") {
    // Handle event maps.
    if (callback !== void 0 && "context" in opts && opts.context === void 0) {
      opts.context = callback;
    }
    for (names = Object.keys(name); i < names.length; i++) {
      events = eventsApi(iteratee, events, names[i], name[names[i]], opts);
    }
  } else if (name && EVENT_SPLITTER.test(name)) {
    // Handle space-separated event names by delegating them individually.
    for (names = name.split(EVENT_SPLITTER); i < names.length; i++) {
      events = iteratee(events, names[i], callback, opts);
    }
  } else {
    // Finally, standard events.
    events = iteratee(events, name, callback, opts);
  }
  return events;
};

// Guard the `listening` argument from the public API.
const internalOn = (obj, name, callback, context, listening) => {
  obj._events = eventsApi(onApi, obj._events || {}, name, callback, {
    context: context,
    ctx: obj,
    listening: listening
  });

  if (listening) {
    const listeners = obj._listeners || (obj._listeners = {});
    listeners[listening.id] = listening;
  }
  return obj;
};

// The reducing API that adds a callback to the `events` object.
const onApi = (events, name, callback, options) => {
  if (callback) {
    const handlers = events[name] || (events[name] = []);
    const context = options.context, ctx = options.ctx, listening = options.listening;
    if (listening) {
      listening.count++;
    }
    handlers.push({ callback: callback, context: context, ctx: context || ctx, listening: listening });
  }
  return events;
};

// The reducing API that removes a callback from the `events` object.
const offApi = (events, name, callback, options) => {
  if (!events) {
    return;
  }
  let i = 0, listening;
  const context = options.context, listeners = options.listeners;

  // Delete all events listeners and "drop" events.
  if (!name && !callback && !context) {
    const ids = Object.keys(listeners);
    for (; i < ids.length; i++) {
      listening = listeners[ids[i]];
      delete listeners[listening.id];
      delete listening.listeningTo[listening.objId];
    }
    return;
  }

  let names = name ? [name] : Object.keys(events);
  for (; i < names.length; i++) {
    name = names[i];
    const handlers = events[name];

    // Bail out if there are no events stored.
    if (!handlers) break;

    // Replace events if there are any remaining.  Otherwise, clean up.
    const remaining = [];
    let j = 0;
    for (j = 0; j < handlers.length; j++) {
      const handler = handlers[j];
      if (
        callback && callback !== handler.callback &&
          callback !== handler.callback._callback ||
            context && context !== handler.context
      ) {
        remaining.push(handler);
      } else {
        listening = handler.listening;
        if (listening && --listening.count === 0) {
          delete listeners[listening.id];
          delete listening.listeningTo[listening.objId];
        }
      }
    }

    // Update tail event if the list has any events.  Otherwise, clean up.
    if (remaining.length) {
      events[name] = remaining;
    } else {
      delete events[name];
    }
  }
  return events;
};

// Handles triggering the appropriate event callbacks.
const triggerApi = (objEvents, name, callback, args) => {
  if (objEvents) {
    const events = objEvents[name];
    let allEvents = objEvents.all;
    if (events && allEvents) {
      allEvents = allEvents.slice();
    }
    if (events) {
      triggerEvents(events, args);
    }
    if (allEvents) {
      triggerEvents(allEvents, [name].concat(args));
    }
  }
  return objEvents;
};

// A difficult-to-believe, but optimized internal dispatch function for
// triggering events. Tries to keep the usual cases speedy
const triggerEvents = (events, args) => {
  let ev, i = -1;
  const l = events.length, a1 = args[0], a2 = args[1], a3 = args[2];
  switch (args.length) {
    case 0: while (++i < l) (ev = events[i]).callback.call(ev.ctx); return;
    case 1: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1); return;
    case 2: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2); return;
    case 3: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2, a3); return;
    default: while (++i < l) (ev = events[i]).callback.apply(ev.ctx, args); return;
  }
};

/**
 * Augmented Object
 * Base class for other classes to extend from
 * @constructor Augmented.Object
 * @param {object} options Object options
 * @memberof Augmented
 */
class AugmentedObject {
  constructor(options) {
    if (!this.options) {
      this._options = {};
    }
    if (options) {
      Object.assign(this._options, options);
    }

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

  get options() {
    return this._options;
  };

  set options(options) {
    this._options = options;
  };

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
      const __once = map[name] = _once(() => {
        offer(name, __once);
        callback.apply(this, arguments);
      });
      __once._callback = callback;
    }
    return map;
  };
};

export default AugmentedObject;
