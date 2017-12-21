import * as Utility from "./utility";
import * as Logger from "./logger";
import AugmentedObject from "./object.js";
import AugmentedModel from "./model.js";
import AugmentedMap from "./map.js";
import isString from "./isString.js";
import isFunction from "./isFunction.js";
import Stack from "./stack.js";
import SchemaGenerator from "./validation/schemaGenerator.js";
import ValidationFramework from "./validation/validationFramework.js";
import * as Security from "./security/security.js";
import ClientType from "./security/clientType.js";
import extend from "./extend.js";
import Configuration from "./configuration.js";
import AsynchronousQueue from "./queue.js";
import Application from "./application.js";
import pad from "./pad.js";
import { BundleObject, ResourceBundle, MessageReader, MessageKeyFormatter } from "./resourceBundle.js";
import sync from "./sync.js";
import request from "./request/request.js";

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
Augmented.Utility.SchemaGenerator = SchemaGenerator;
Augmented.Utility.extend = extend;
Augmented.Utility.AsynchronousQueue = AsynchronousQueue;
Augmented.Utility.pad = pad;
Augmented.Utility.BundleObject = BundleObject;
Augmented.Utility.ResourceBundle = ResourceBundle;
Augmented.Utility.MessageReader = MessageReader;
Augmented.Utility.MessageKeyFormatter = MessageKeyFormatter;
Augmented.Logger = Logger;
Augmented.Object = AugmentedObject;
Augmented.Model = AugmentedModel;
Augmented.ValidationFramework = ValidationFramework;
Augmented.Security = Security;
Augmented.Security.ClientType = ClientType;
Augmented.Configuration = Configuration;
Augmented.Application = Application;
Augmented.isString = isString;
Augmented.isFunction = isFunction;
Augmented.sync = sync;

/**
* Ajax namespace for use with Ajax related configuration and methods
* @namespace Augmented.Request
* @memberof Augmented
*/
Augmented.Request = {};

Augmented.Request.request = request;

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
 * @param {object} args Arguments
 */
Augmented.exec = (functionName, context, ...args) => {
  const //args = Array.prototype.slice.call(arguments, 2),
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
