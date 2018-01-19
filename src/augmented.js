import * as Utility from "./utility/utility";
import sortObjects from "./utility/sort.js";

import AugmentedObject from "./object.js";
import AbstractModel from "./model/abstractModel.js";
import AbstractCollection from "./collection/collection.js";

import Stack from "./structures/stack.js";
import AugmentedMap from "./structures/map.js";
import Configuration from "./configuration.js";
import AsynchronousQueue from "./structures/queue.js";

import * as Logger from "./logger/logger";

import Application from "./application/application.js";

import { BundleObject, ResourceBundle, MessageReader, MessageKeyFormatter } from "./resourceBundle.js";

import SchemaGenerator from "./validation/schemaGenerator.js";
import ValidationFramework from "./validation/validationFramework.js";
import * as Security from "./security/security.js";
import ClientType from "./security/clientType.js";

import isString from "./functions/isString.js";
import isFunction from "./functions/isFunction.js";
import extend from "./functions/extend.js";
import pad from "./functions/pad.js";
import uniqueId from "./functions/uniqueId.js";
import has from "./functions/has.js";
import isObject from "./functions/isObject.js";
import allKeys from "./functions/allKeys.js";
import create from "./functions/create.js";
import result from "./functions/result.js";
import arrayHas from "./functions/arrayHas.js";
import exec from "./functions/exec.js";
import isDefined from "./functions/isDefined.js";
import some from "./functions/some.js";
import splice from "./functions/splice.js";
import { fibonacci, fibonacciSequence } from "./functions/fibonacci.js";

/*
 * Base functionality
 * Set of base capabilities used throughout the framework
 */

/**
 * Augmented.js Next - The Core Component
 *
 * @author Bob Warren
 *
 * @module Augmented
 * @version 2.0.0-alpha.19
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
Augmented.Utility.uniqueId = uniqueId;
Augmented.Utility.sortObjects = sortObjects;

Augmented.Logger = Logger;

Augmented.Object = AugmentedObject;
Augmented.AbstractModel = AbstractModel;
Augmented.AbstractCollection = AbstractCollection;

Augmented.ValidationFramework = ValidationFramework;
Augmented.Security = Security;
Augmented.Security.ClientType = ClientType;
Augmented.Configuration = Configuration;
Augmented.Application = Application;

Augmented.isString = isString;
Augmented.isFunction = isFunction;
Augmented.has = has;
Augmented.isObject = isObject;
Augmented.allKeys = allKeys;
Augmented.create = create;
Augmented.result = result;
Augmented.arrayHas = arrayHas;
Augmented.exec = exec;
Augmented.isDefined = isDefined;
Augmented.some = some;
Augmented.fibonacci = fibonacci;
Augmented.fibonacciSequence = fibonacciSequence;
Augmented.splice = splice;

/**
 * The standard version property
 * @constant VERSION
 */
Augmented.VERSION = "2.0.0-alpha.19";
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

//export default Augmented;
// browser-compatible export from babel
module.exports = Augmented;
