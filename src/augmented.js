import Utility from "./utility";

/**
 * Augmented.js 2 - The Core UI Component and package
 *
 * @author Bob Warren
 *
 * @module Augmented
 * @version 2.0.0
 * @license Apache-2.0
 */
const Augmented = {};
Augmented.Utility = Utility;

/**
 * The standard version property
 * @constant VERSION
 */
Augmented.VERSION = "2.0.0";
/**
 * A codename for internal use
 * @constant codename
 */
Augmented.codename = "JC Denton";
/**
 * A release name to help with identification of minor releases
 * @constant releasename
 */
Augmented.releasename = "UNATCO";

/**
 * Augmented underscore (if it exists from Backbone.js)
 * @module _
 * @name _
 * @memberof Augmented
 */
Augmented._ = {};

/**
 * Augmented underscore (if it exists from Backbone.js)
 * @module $
 * @name $
 * @memberof Augmented
 */
Augmented.$ = {};

/**
 * Augmented.Configuration - a set of configuration properties for the framework
 * @enum Configuration
 * @memberof Augmented
 * @property {string} LoggerLevel The level of the framework internal logger
 * @property {string} MessageBundle - the base name for messages in the framework (default: Messages)
 * @property {number} AsynchronousQueueTimeout the default milisecond timeout (default: 2000)
 * @property {number} ApplicationInitProcessTimeout the application init even timeout (default: 1000)
 * @todo change logger level to error
 */
Augmented.Configuration = {
  LoggerLevel: "info",
  MessageBundle: "Messages",
  AsynchronousQueueTimeout: 2000,
  ApplicationInitProcessTimeout: 1000
};

/*
 * Base functionality
 * Set of base capabilities used throughout the framework
 */

/**
 * Augmented.has
 * @method has
 * @memberof Augmented
 * @param {object} obj The input object
 * @param {object} key The test key
 * @returns {boolean} Returns true of the key exists
 */
Augmented.has = (obj, key) => {
  return obj !== null && hasOwnProperty.call(obj, key);
};

/**
 * Augmented.isObject
 * @method isObject
 * @memberof Augmented
 * @param {object} obj The input object
 * @returns {boolean} Returns true of the param is an object
 */
Augmented.isObject = (obj) => {
  const type = typeof obj;
  return (type === "function" || type === "object" && !!obj);
};

/**
 * Augmented.allKeys
 * @method allKeys
 * @memberof Augmented
 * @param {object} obj The input object
 * @returns {array} Returns the array of ALL keys including prototyped
 */
Augmented.allKeys = (obj) => {
  if (!Augmented.isObject(obj)) return [];
  return Object.getOwnPropertyNames(obj);
};

/**
 * Augmented.create
 * @method create
 * @memberof Augmented
 * @param {object} prototype The input prototype
 * @param {object} props The properties (optional)
 * @returns {object} Returns the created object
 */
Augmented.create = (prototype, props) => {
  const result = (prototype) => {
    if (!Augmented.isObject(prototype)) return {};
    return Object.create(prototype);
  };
  if (props) Object.assign(result, props);
  return result;
};

// Map from CRUD to HTTP for our default sync implementation.
const methodMap = {
  "create": "POST",
  "update": "PUT",
  "patch": "PATCH",
  "delete": "DELETE",
  "read": "GET"
};

/**
 * Augmented.sync - Base sync method that can pass special augmented features
 * @method sync
 * @memberof Augmented
 */
Augmented.sync = (method, model, options) => {
  const type = methodMap[method];

  if (!options) {
    options = {};
  }

  // Default JSON-request options.
  const params = {type: type, dataType: "json"};

  // Ensure that we have a URL.
  if (!options.url) {
    if (model.url) {
      if (Augmented.isFunction(model.url)) {
        params.url = model.url();
      } else {
        params.url = model.url;
      }
    } else {
      throw new Error("A \"url\" property or function must be specified");
    }
  }

  // Ensure that we have the appropriate request data.
  if (options.data == null && model && (method === "create" || method === "update" || method === "patch")) {
    params.contentType = "application/json";
    params.data = JSON.stringify(options.attrs || model.toJSON(options));
  }

  // Don't process data on a non-GET request.
  if (params.type !== "GET") {
    params.processData = false;
  }

  // Pass along `textStatus` and `errorThrown` from jQuery.
  const error = options.error;
  options.error = (xhr, textStatus, errorThrown) => {
    options.textStatus = textStatus;
    options.errorThrown = errorThrown;
    if (error) {
      error.call(options.context, xhr, textStatus, errorThrown);
    }
  };

  // Make the request, allowing the user to override any Ajax options.
  const xhr = options.xhr = Augmented.ajax(Augmented.Utility.extend(params, options));
  model.trigger("request", model, xhr, options);
  return xhr;
};

/**
* Augmented.isFunction -
* returns true if called name is a function
* simular to jQuery .isFunction method
* @method Augmented.isFunction
* @param {function} name The name of the function to test
* @memberof Augmented
* @returns true if called name is a function
*/
Augmented.isFunction = (name) => {
  return Object.prototype.toString.call(name) == "[object Function]";
};

/**
 * Augmented.isString -
 * checks if a value is a String
 * @method isString
 * @memberof Augmented
 * @param {string} variable to check
 * @returns {boolean} true if value is a string
 */
Augmented.isString = (val) => {
  return (typeof val === "string") || ((!!val && typeof val === "object") && Object.prototype.toString.call(val) === "[object String]");
};

/**
* Augmented.result - returns named property in an object
* simular to underscore .result method
* @function result
* @memberof Augmented
* @returns named property in an object
*/
Augmented.result = (object, property) => {
  if (object === null) return;
  const value = object[property];
  return Augmented.isFunction(value) ? value.call(object) : value;
};

// Polyfills for ES6 functions
if (!Number.isInteger) {
  console.log("polyfill Number.isInteger");
}

if (!String.prototype.endsWith) {
  console.log("polyfill String.endsWith");
}

if (!Array.prototype.find) {
  console.log("polyfill Array.find");
}

if (!Array.prototype.includes) {
  console.log("polyfill Array.includes");
}

/**
 * Array.has - returns is a property is in the array (very fast return)
 * @function Array.has
 * @memberof Array
 * @param {object} key Key to test for
 * @returns true if property is included in an array
 */
Augmented.arrayHas = (key) => {
  return (this.indexOf(key) !== -1);
};

/**
 * exec method - Execute a function by name
 * @method exec
 * @memberof Augmented
 * @param {string} functionName The name of the function
 * @param {object} context The context to call from
 * @param (object) args Arguments
 */
Augmented.exec = (functionName, context /*, args */) => {
  const args = Array.prototype.slice.call(arguments, 2),
        namespaces = functionName.split("."),
        func = namespaces.pop(),
        l = namespaces.length;
  let i = 0;
  for (i = 0; i < l; i++) {
    context = context[namespaces[i]];
  }
  return context[func].apply(context, args);
};

/**
 * Augmented.isDefined - Checks and returns if a passed variable is defined
 * @method isDefined
 * @memberof Augmented
 * @param {string} variable to check
 * @returns {boolean} true if value is defined
 */
Augmented.isDefined = (val) => {
  return typeof val != "undefined";
};

const createAssigner = (keysFunc, undefinedOnly) => {
  return (obj) => {
    const length = arguments.length;
    if (length < 2 || obj === null) {
      return obj;
    }
    let index = 1, i = 0;
    for (index = 1; index < length; index++) {
      const source = arguments[index],
            keys = keysFunc(source),
            l = keys.length;
      for (i = 0; i < l; i++) {
        const key = keys[i];
        if (!undefinedOnly || obj[key] === void 0) {
          obj[key] = source[key];
        }
      }
    }
    return obj;
  };
};

/**
 * Class Extend -
 * Helper function to correctly set up the prototype chain for subclasses.<br/>
 * Similar to `goog.inherits`, but uses a hash of prototype properties and
 * class properties to be extended.
 * @constructor Augmented.Utility.ClassExtend
 * @param {any} protoProps Properties from prototype
 * @param {any} staticProps Static Properties to add if provided
 * @memberof Augmented.Utility
 */
Augmented.extend = (protoProps, staticProps) => {
  const parent = this;
  let child;

  // The constructor function for the new subclass is either defined by you
  // (the "constructor" property in your `extend` definition), or defaulted
  // by us to simply call the parent constructor.
  if (protoProps && Augmented.has(protoProps, "constructor")) {
    child = protoProps.constructor;
  } else {
    child = () => {
      return parent.apply(this, arguments);
    };
  }

  // Add static properties to the constructor function, if supplied.
  createAssigner(child, parent, staticProps);

  // Set the prototype chain to inherit from `parent`, without calling
  // `parent`'s constructor function and add the prototype properties.
  child.prototype = Augmented.create(parent.prototype, protoProps);
  child.prototype.constructor = child;

  // Set a convenience property in case the parent's prototype is needed
  // later.
  child.__super__ = parent.prototype;

  return child;
};



export default Augmented;

//module.exports = Augmented;
