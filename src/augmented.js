import * as Utility from "./utility";
import * as Logger from "./logger";
import AugmentedObject from "./object.js";
import AugmentedMap from "./map.js";
import isString from "./isString.js";
import Stack from "./stack.js";

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
Augmented.Utility.Map = AugmentedMap;
Augmented.Utility.Stack = Stack;
Augmented.Logger = Logger;
Augmented.Object = AugmentedObject;

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


const result = (prototype) => {
  if (!Augmented.isObject(prototype)) {
    return {};
  }
  return Object.create(prototype);
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
  const o = result(prototype);
  if (props) {
    Object.assign(o, props);
  }
  return o;
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

// imported
Augmented.isString = isString;

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

/**
 * Array.has - returns is a property is in the array (very fast return)
 * @function arrayhas
 * @memberof Augmented
 * @param {array} arr Source array
 * @param {object} key Key to test for
 * @returns true if property is included in an array
 */
Augmented.arrayHas = (arr, key) => {
  return (arr.indexOf(key) !== -1);
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

export default Augmented;

//module.exports = Augmented;
