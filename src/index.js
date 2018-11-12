import { Application } from "next-core-application";
import { BundleObject, ResourceBundle, MessageReader, MessageKeyFormatter } from "next-core-bundle";
import { AbstractLogger, ConsoleLogger, ColorConsoleLogger, LoggerFactory, Type, Level } from "next-core-logger";
import { AbstractModel, AbstractCollection, CollectionIterator } from "next-core-model";
import { AugmentedObject, Configuration, eventsApi, internalOn, offApi, triggerApi } from "next-core-object";
import { AbstractSecurityClient, OAUTH2Client, ACLClient, ClientType, AuthenticationFactory, Principal, Entry, Context } from "next-core-security";
import { sortObjects, mergeSort, quickSort, insertionSort, bubbleSort } from "next-core-sort";
import { Stack, AugmentedMap, AsynchronousQueue } from "next-core-structures";
import { isString, isFunction, extend, pad, uniqueId, has, isObject, allKeys, create, result, arrayHas,
  exec, isDefined, some, splice, before, once, fibonacci, fibonacciSequence, shuffle, prettyPrint,
  binarySearch, TransformerType, Transformer, wrap, filterObject, findByMatchingProperties,
  formatDate, formatBinary, filter } from "next-core-utilities";
import { ValidationFramework, SchemaGenerator } from "next-core-validation";

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
Augmented.Utility = {};
Augmented.Utility.findByMatchingProperties = findByMatchingProperties;
Augmented.Utility.filterObject = filterObject;
Augmented.Utility.wrap = wrap;
Augmented.Utility.Transformer = Transformer;
Augmented.Utility.TransformerType = TransformerType;
Augmented.Utility.binarySearch = binarySearch;
Augmented.Utility.prettyPrint = prettyPrint;
Augmented.Utility.shuffle = shuffle;
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
Augmented.Utility.formatDate = formatDate;
Augmented.Utility.formatBinary = formatBinary;

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
