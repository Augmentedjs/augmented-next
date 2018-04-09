import * as Utility from "./utility/utility";
import { sortObjects, mergeSort, quickSort, insertionSort, bubbleSort } from "./utility/sort.js";

import AugmentedObject from "./object.js";
import AbstractModel from "./model/abstractModel.js";
import AbstractCollection from "./collection/collection.js";

import Stack from "./structures/stack.js";
import AugmentedMap from "./structures/map.js";
import Configuration from "./configuration.js";
import AsynchronousQueue from "./structures/queue.js";

import AbstractLogger from "./logger/abstractLogger.js";
import ConsoleLogger from "./logger/consoleLogger.js";
import ColorConsoleLogger from "./logger/colorConsoleLogger.js";
import LoggerFactory from "./logger/loggerFactory.js";
import Type from "./logger/type.js";
import Level from "./logger/level.js";

import Application from "./application/application.js";

import { BundleObject, ResourceBundle, MessageReader, MessageKeyFormatter } from "./resourceBundle.js";

import SchemaGenerator from "./validation/schemaGenerator.js";
import ValidationFramework from "./validation/validationFramework.js";

import AbstractSecurityClient from "./security/abstractSecurityClient.js";
import OAUTH2Client from "./security/oauthClient.js";
import ACLClient from "./security/aclClient.js";
import ClientType from "./security/clientType.js";
import AuthenticationFactory from "./security/authenticationFactory.js";
import Principal from "./security/principal.js";
import Entry from "./security/entry.js";
import Context from "./security/context.js";

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
import before from "./functions/before.js";
import once from "./functions/once.js";
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
Augmented.Utility.mergeSort = mergeSort;
Augmented.Utility.quickSort = quickSort;
Augmented.Utility.insertionSort = insertionSort;
Augmented.Utility.bubbleSort = bubbleSort;

/**
 * A Logger package
 * @namespace Logger
 */
Augmented.Logger = {};
Augmented.Logger.AbstractLogger = AbstractLogger;
Augmented.Logger.ConsoleLogger = ConsoleLogger;
Augmented.Logger.ColorConsoleLogger = ColorConsoleLogger;
Augmented.Logger.LoggerFactory = LoggerFactory;
Augmented.Logger.Type = Type;
Augmented.Logger.Level = Level;

Augmented.Object = AugmentedObject;
Augmented.AbstractModel = AbstractModel;
Augmented.AbstractCollection = AbstractCollection;

Augmented.ValidationFramework = ValidationFramework;

/**
* Security Package and API
* @namespace Security
*/
/**
 * Security client namespace
 * @namespace Client
 * @memberof Security
 */
Augmented.Security = {};
Augmented.Security.ClientType = ClientType;
Augmented.Security.AuthenticationFactory = AuthenticationFactory;
Augmented.Security.Context = Context;
Augmented.Security.Entry = Entry;
Augmented.Security.Principal = Principal;
Augmented.Security.Client = {};
Augmented.Security.Client.AbstractSecurityClient = AbstractSecurityClient;
Augmented.Security.Client.ACLClient = ACLClient;
Augmented.Security.Client.OAUTH2Client = OAUTH2Client;


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
Augmented.before = before;
Augmented.once = once;

/**
 * The standard version property
 * @constant VERSION
 * @memberof Augmented
 */
Augmented.VERSION = VERSION;
/**
 * A codename for internal use
 * @constant codename
 * @memberof Augmented
 */
Augmented.codename = "JC Denton";
/**
 * A release name to help with identification of minor releases
 * @constant releasename
 * @memberof Augmented
 */
Augmented.releasename = "UNATCO";

//export default Augmented;
// browser-compatible export from babel
module.exports = Augmented;
