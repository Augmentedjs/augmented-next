(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
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

const createAssigner = (keysFunc, undefinedOnly) => {
  return (obj) => {
    const length = arguments.length;
    if (length < 2 || obj === null) return obj;
    let index = 1, i = 0;
    for (index = 1; index < length; index++) {
      const source = arguments[index],
            keys = keysFunc(source),
            l = keys.length;
      for (i = 0; i < l; i++) {
        const key = keys[i];
        if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
      }
    }
    return obj;
  };
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
  return (type === 'function' || type === 'object' && !!obj);
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

const classExtend = (protoProps, staticProps) => {
  const parent = this;
  let child;

  // The constructor function for the new subclass is either defined by you
  // (the "constructor" property in your `extend` definition), or defaulted
  // by us to simply call the parent constructor.
  if (protoProps && Augmented.has(protoProps, 'constructor')) {
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

module.exports = Augmented;

},{}]},{},[1]);
