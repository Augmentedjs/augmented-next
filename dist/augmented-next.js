(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Augmented", [], factory);
	else if(typeof exports === 'object')
		exports["Augmented"] = factory();
	else
		root["Augmented"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/augmented.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/lodash.bind/index.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash.bind/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as the internal argument placeholder. */
var PLACEHOLDER = '__lodash_placeholder__';

/** Used to compose bitmasks for function metadata. */
var BIND_FLAG = 1,
    BIND_KEY_FLAG = 2,
    CURRY_BOUND_FLAG = 4,
    CURRY_FLAG = 8,
    CURRY_RIGHT_FLAG = 16,
    PARTIAL_FLAG = 32,
    PARTIAL_RIGHT_FLAG = 64,
    ARY_FLAG = 128,
    REARG_FLAG = 256,
    FLIP_FLAG = 512;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_SAFE_INTEGER = 9007199254740991,
    MAX_INTEGER = 1.7976931348623157e+308,
    NAN = 0 / 0;

/** Used to associate wrap methods with their bit flags. */
var wrapFlags = [['ary', ARY_FLAG], ['bind', BIND_FLAG], ['bindKey', BIND_KEY_FLAG], ['curry', CURRY_FLAG], ['curryRight', CURRY_RIGHT_FLAG], ['flip', FLIP_FLAG], ['partial', PARTIAL_FLAG], ['partialRight', PARTIAL_RIGHT_FLAG], ['rearg', REARG_FLAG]];

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to match wrap detail comments. */
var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
    reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/,
    reSplitDetails = /,? & /;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array ? array.length : 0;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while (fromRight ? index-- : ++index < length) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  if (value !== value) {
    return baseFindIndex(array, baseIsNaN, fromIndex);
  }
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

/**
 * Gets the number of `placeholder` occurrences in `array`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} placeholder The placeholder to search for.
 * @returns {number} Returns the placeholder count.
 */
function countHolders(array, placeholder) {
  var length = array.length,
      result = 0;

  while (length--) {
    if (array[length] === placeholder) {
      result++;
    }
  }
  return result;
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Replaces all `placeholder` elements in `array` with an internal placeholder
 * and returns an array of their indexes.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {*} placeholder The placeholder to replace.
 * @returns {Array} Returns the new array of placeholder indexes.
 */
function replaceHolders(array, placeholder) {
  var index = -1,
      length = array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (value === placeholder || value === PLACEHOLDER) {
      array[index] = PLACEHOLDER;
      result[resIndex++] = index;
    }
  }
  return result;
}

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

/** Built-in value references. */
var objectCreate = Object.create;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/* Used to set `toString` methods. */
var defineProperty = function () {
  var func = getNative(Object, 'defineProperty'),
      name = getNative.name;

  return name && name.length > 2 ? func : undefined;
}();

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} prototype The object to inherit from.
 * @returns {Object} Returns the new object.
 */
function baseCreate(proto) {
  return isObject(proto) ? objectCreate(proto) : {};
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  start = nativeMax(start === undefined ? func.length - 1 : start, 0);
  return function () {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = array;
    return apply(func, this, otherArgs);
  };
}

/**
 * Creates an array that is the composition of partially applied arguments,
 * placeholders, and provided arguments into a single array of arguments.
 *
 * @private
 * @param {Array} args The provided arguments.
 * @param {Array} partials The arguments to prepend to those provided.
 * @param {Array} holders The `partials` placeholder indexes.
 * @params {boolean} [isCurried] Specify composing for a curried function.
 * @returns {Array} Returns the new array of composed arguments.
 */
function composeArgs(args, partials, holders, isCurried) {
  var argsIndex = -1,
      argsLength = args.length,
      holdersLength = holders.length,
      leftIndex = -1,
      leftLength = partials.length,
      rangeLength = nativeMax(argsLength - holdersLength, 0),
      result = Array(leftLength + rangeLength),
      isUncurried = !isCurried;

  while (++leftIndex < leftLength) {
    result[leftIndex] = partials[leftIndex];
  }
  while (++argsIndex < holdersLength) {
    if (isUncurried || argsIndex < argsLength) {
      result[holders[argsIndex]] = args[argsIndex];
    }
  }
  while (rangeLength--) {
    result[leftIndex++] = args[argsIndex++];
  }
  return result;
}

/**
 * This function is like `composeArgs` except that the arguments composition
 * is tailored for `_.partialRight`.
 *
 * @private
 * @param {Array} args The provided arguments.
 * @param {Array} partials The arguments to append to those provided.
 * @param {Array} holders The `partials` placeholder indexes.
 * @params {boolean} [isCurried] Specify composing for a curried function.
 * @returns {Array} Returns the new array of composed arguments.
 */
function composeArgsRight(args, partials, holders, isCurried) {
  var argsIndex = -1,
      argsLength = args.length,
      holdersIndex = -1,
      holdersLength = holders.length,
      rightIndex = -1,
      rightLength = partials.length,
      rangeLength = nativeMax(argsLength - holdersLength, 0),
      result = Array(rangeLength + rightLength),
      isUncurried = !isCurried;

  while (++argsIndex < rangeLength) {
    result[argsIndex] = args[argsIndex];
  }
  var offset = argsIndex;
  while (++rightIndex < rightLength) {
    result[offset + rightIndex] = partials[rightIndex];
  }
  while (++holdersIndex < holdersLength) {
    if (isUncurried || argsIndex < argsLength) {
      result[offset + holders[holdersIndex]] = args[argsIndex++];
    }
  }
  return result;
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Creates a function that wraps `func` to invoke it with the optional `this`
 * binding of `thisArg`.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createBind(func, bitmask, thisArg) {
  var isBind = bitmask & BIND_FLAG,
      Ctor = createCtor(func);

  function wrapper() {
    var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
    return fn.apply(isBind ? thisArg : this, arguments);
  }
  return wrapper;
}

/**
 * Creates a function that produces an instance of `Ctor` regardless of
 * whether it was invoked as part of a `new` expression or by `call` or `apply`.
 *
 * @private
 * @param {Function} Ctor The constructor to wrap.
 * @returns {Function} Returns the new wrapped function.
 */
function createCtor(Ctor) {
  return function () {
    // Use a `switch` statement to work with class constructors. See
    // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
    // for more details.
    var args = arguments;
    switch (args.length) {
      case 0:
        return new Ctor();
      case 1:
        return new Ctor(args[0]);
      case 2:
        return new Ctor(args[0], args[1]);
      case 3:
        return new Ctor(args[0], args[1], args[2]);
      case 4:
        return new Ctor(args[0], args[1], args[2], args[3]);
      case 5:
        return new Ctor(args[0], args[1], args[2], args[3], args[4]);
      case 6:
        return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
      case 7:
        return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
    }
    var thisBinding = baseCreate(Ctor.prototype),
        result = Ctor.apply(thisBinding, args);

    // Mimic the constructor's `return` behavior.
    // See https://es5.github.io/#x13.2.2 for more details.
    return isObject(result) ? result : thisBinding;
  };
}

/**
 * Creates a function that wraps `func` to enable currying.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {number} arity The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createCurry(func, bitmask, arity) {
  var Ctor = createCtor(func);

  function wrapper() {
    var length = arguments.length,
        args = Array(length),
        index = length,
        placeholder = getHolder(wrapper);

    while (index--) {
      args[index] = arguments[index];
    }
    var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);

    length -= holders.length;
    if (length < arity) {
      return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, undefined, args, holders, undefined, undefined, arity - length);
    }
    var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
    return apply(fn, this, args);
  }
  return wrapper;
}

/**
 * Creates a function that wraps `func` to invoke it with optional `this`
 * binding of `thisArg`, partial application, and currying.
 *
 * @private
 * @param {Function|string} func The function or method name to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to prepend to those provided to
 *  the new function.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [partialsRight] The arguments to append to those provided
 *  to the new function.
 * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
  var isAry = bitmask & ARY_FLAG,
      isBind = bitmask & BIND_FLAG,
      isBindKey = bitmask & BIND_KEY_FLAG,
      isCurried = bitmask & (CURRY_FLAG | CURRY_RIGHT_FLAG),
      isFlip = bitmask & FLIP_FLAG,
      Ctor = isBindKey ? undefined : createCtor(func);

  function wrapper() {
    var length = arguments.length,
        args = Array(length),
        index = length;

    while (index--) {
      args[index] = arguments[index];
    }
    if (isCurried) {
      var placeholder = getHolder(wrapper),
          holdersCount = countHolders(args, placeholder);
    }
    if (partials) {
      args = composeArgs(args, partials, holders, isCurried);
    }
    if (partialsRight) {
      args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
    }
    length -= holdersCount;
    if (isCurried && length < arity) {
      var newHolders = replaceHolders(args, placeholder);
      return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, thisArg, args, newHolders, argPos, ary, arity - length);
    }
    var thisBinding = isBind ? thisArg : this,
        fn = isBindKey ? thisBinding[func] : func;

    length = args.length;
    if (argPos) {
      args = reorder(args, argPos);
    } else if (isFlip && length > 1) {
      args.reverse();
    }
    if (isAry && ary < length) {
      args.length = ary;
    }
    if (this && this !== root && this instanceof wrapper) {
      fn = Ctor || createCtor(fn);
    }
    return fn.apply(thisBinding, args);
  }
  return wrapper;
}

/**
 * Creates a function that wraps `func` to invoke it with the `this` binding
 * of `thisArg` and `partials` prepended to the arguments it receives.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} partials The arguments to prepend to those provided to
 *  the new function.
 * @returns {Function} Returns the new wrapped function.
 */
function createPartial(func, bitmask, thisArg, partials) {
  var isBind = bitmask & BIND_FLAG,
      Ctor = createCtor(func);

  function wrapper() {
    var argsIndex = -1,
        argsLength = arguments.length,
        leftIndex = -1,
        leftLength = partials.length,
        args = Array(leftLength + argsLength),
        fn = this && this !== root && this instanceof wrapper ? Ctor : func;

    while (++leftIndex < leftLength) {
      args[leftIndex] = partials[leftIndex];
    }
    while (argsLength--) {
      args[leftIndex++] = arguments[++argsIndex];
    }
    return apply(fn, isBind ? thisArg : this, args);
  }
  return wrapper;
}

/**
 * Creates a function that wraps `func` to continue currying.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {Function} wrapFunc The function to create the `func` wrapper.
 * @param {*} placeholder The placeholder value.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to prepend to those provided to
 *  the new function.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
  var isCurry = bitmask & CURRY_FLAG,
      newHolders = isCurry ? holders : undefined,
      newHoldersRight = isCurry ? undefined : holders,
      newPartials = isCurry ? partials : undefined,
      newPartialsRight = isCurry ? undefined : partials;

  bitmask |= isCurry ? PARTIAL_FLAG : PARTIAL_RIGHT_FLAG;
  bitmask &= ~(isCurry ? PARTIAL_RIGHT_FLAG : PARTIAL_FLAG);

  if (!(bitmask & CURRY_BOUND_FLAG)) {
    bitmask &= ~(BIND_FLAG | BIND_KEY_FLAG);
  }

  var result = wrapFunc(func, bitmask, thisArg, newPartials, newHolders, newPartialsRight, newHoldersRight, argPos, ary, arity);
  result.placeholder = placeholder;
  return setWrapToString(result, func, bitmask);
}

/**
 * Creates a function that either curries or invokes `func` with optional
 * `this` binding and partially applied arguments.
 *
 * @private
 * @param {Function|string} func The function or method name to wrap.
 * @param {number} bitmask The bitmask flags.
 *  The bitmask may be composed of the following flags:
 *     1 - `_.bind`
 *     2 - `_.bindKey`
 *     4 - `_.curry` or `_.curryRight` of a bound function
 *     8 - `_.curry`
 *    16 - `_.curryRight`
 *    32 - `_.partial`
 *    64 - `_.partialRight`
 *   128 - `_.rearg`
 *   256 - `_.ary`
 *   512 - `_.flip`
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to be partially applied.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
  var isBindKey = bitmask & BIND_KEY_FLAG;
  if (!isBindKey && typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var length = partials ? partials.length : 0;
  if (!length) {
    bitmask &= ~(PARTIAL_FLAG | PARTIAL_RIGHT_FLAG);
    partials = holders = undefined;
  }
  ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
  arity = arity === undefined ? arity : toInteger(arity);
  length -= holders ? holders.length : 0;

  if (bitmask & PARTIAL_RIGHT_FLAG) {
    var partialsRight = partials,
        holdersRight = holders;

    partials = holders = undefined;
  }

  var newData = [func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity];

  func = newData[0];
  bitmask = newData[1];
  thisArg = newData[2];
  partials = newData[3];
  holders = newData[4];
  arity = newData[9] = newData[9] == null ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length, 0);

  if (!arity && bitmask & (CURRY_FLAG | CURRY_RIGHT_FLAG)) {
    bitmask &= ~(CURRY_FLAG | CURRY_RIGHT_FLAG);
  }
  if (!bitmask || bitmask == BIND_FLAG) {
    var result = createBind(func, bitmask, thisArg);
  } else if (bitmask == CURRY_FLAG || bitmask == CURRY_RIGHT_FLAG) {
    result = createCurry(func, bitmask, arity);
  } else if ((bitmask == PARTIAL_FLAG || bitmask == (BIND_FLAG | PARTIAL_FLAG)) && !holders.length) {
    result = createPartial(func, bitmask, thisArg, partials);
  } else {
    result = createHybrid.apply(undefined, newData);
  }
  return setWrapToString(result, func, bitmask);
}

/**
 * Gets the argument placeholder value for `func`.
 *
 * @private
 * @param {Function} func The function to inspect.
 * @returns {*} Returns the placeholder value.
 */
function getHolder(func) {
  var object = func;
  return object.placeholder;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Extracts wrapper details from the `source` body comment.
 *
 * @private
 * @param {string} source The source to inspect.
 * @returns {Array} Returns the wrapper details.
 */
function getWrapDetails(source) {
  var match = source.match(reWrapDetails);
  return match ? match[1].split(reSplitDetails) : [];
}

/**
 * Inserts wrapper `details` in a comment at the top of the `source` body.
 *
 * @private
 * @param {string} source The source to modify.
 * @returns {Array} details The details to insert.
 * @returns {string} Returns the modified source.
 */
function insertWrapDetails(source, details) {
  var length = details.length,
      lastIndex = length - 1;

  details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
  details = details.join(length > 2 ? ', ' : ' ');
  return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (typeof value == 'number' || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}

/**
 * Reorder `array` according to the specified indexes where the element at
 * the first index is assigned as the first element, the element at
 * the second index is assigned as the second element, and so on.
 *
 * @private
 * @param {Array} array The array to reorder.
 * @param {Array} indexes The arranged array indexes.
 * @returns {Array} Returns `array`.
 */
function reorder(array, indexes) {
  var arrLength = array.length,
      length = nativeMin(indexes.length, arrLength),
      oldArray = copyArray(array);

  while (length--) {
    var index = indexes[length];
    array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
  }
  return array;
}

/**
 * Sets the `toString` method of `wrapper` to mimic the source of `reference`
 * with wrapper details in a comment at the top of the source body.
 *
 * @private
 * @param {Function} wrapper The function to modify.
 * @param {Function} reference The reference function.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @returns {Function} Returns `wrapper`.
 */
var setWrapToString = !defineProperty ? identity : function (wrapper, reference, bitmask) {
  var source = reference + '';
  return defineProperty(wrapper, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)))
  });
};

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return func + '';
    } catch (e) {}
  }
  return '';
}

/**
 * Updates wrapper `details` based on `bitmask` flags.
 *
 * @private
 * @returns {Array} details The details to modify.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @returns {Array} Returns `details`.
 */
function updateWrapDetails(details, bitmask) {
  arrayEach(wrapFlags, function (pair) {
    var value = '_.' + pair[0];
    if (bitmask & pair[1] && !arrayIncludes(details, value)) {
      details.push(value);
    }
  });
  return details.sort();
}

/**
 * Creates a function that invokes `func` with the `this` binding of `thisArg`
 * and `partials` prepended to the arguments it receives.
 *
 * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
 * may be used as a placeholder for partially applied arguments.
 *
 * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
 * property of bound functions.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to bind.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {...*} [partials] The arguments to be partially applied.
 * @returns {Function} Returns the new bound function.
 * @example
 *
 * function greet(greeting, punctuation) {
 *   return greeting + ' ' + this.user + punctuation;
 * }
 *
 * var object = { 'user': 'fred' };
 *
 * var bound = _.bind(greet, object, 'hi');
 * bound('!');
 * // => 'hi fred!'
 *
 * // Bound with placeholders.
 * var bound = _.bind(greet, object, _, '!');
 * bound('hi');
 * // => 'hi fred!'
 */
var bind = baseRest(function (func, thisArg, partials) {
  var bitmask = BIND_FLAG;
  if (partials.length) {
    var holders = replaceHolders(partials, getHolder(bind));
    bitmask |= PARTIAL_FLAG;
  }
  return createWrap(func, bitmask, thisArg, partials, holders);
});

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = value < 0 ? -1 : 1;
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? remainder ? result - remainder : result : 0;
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? other + '' : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function () {
    return value;
  };
}

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

// Assign default placeholders.
bind.placeholder = {};

module.exports = bind;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash.clone/index.js":
/*!********************************************!*\
  !*** ./node_modules/lodash.clone/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */
function addMapEntry(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  map.set(pair[0], pair[1]);
  return map;
}

/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */
function addSetEntry(set, value) {
  // Don't return `set.add` because it's not chainable in IE 11.
  set.add(value);
  return set;
}

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array ? array.length : 0;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function (value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function (value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    getPrototype = overArg(Object.getPrototypeOf, Object),
    objectCreate = Object.create,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash(),
    'map': new (Map || ListCache)(),
    'string': new Hash()
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  this.__data__ = new ListCache(entries);
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache();
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  return this.__data__['delete'](key);
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var cache = this.__data__;
  if (cache instanceof ListCache) {
    var pairs = cache.__data__;
    if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      return this;
    }
    cache = this.__data__ = new MapCache(pairs);
  }
  cache.set(key, value);
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = isArray(value) || isArguments(value) ? baseTimes(value.length, String) : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
    object[key] = value;
  }
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @param {boolean} [isFull] Specify a clone including symbols.
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
  var result;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || isFunc && !object) {
      if (isHostObject(value)) {
        return object ? value : {};
      }
      result = initCloneObject(isFunc ? {} : value);
      if (!isDeep) {
        return copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, baseClone, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack());
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (!isArr) {
    var props = isFull ? getAllKeys(value) : keys(value);
  }
  arrayEach(props || value, function (subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
  });
  return result;
}

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} prototype The object to inherit from.
 * @returns {Object} Returns the new object.
 */
function baseCreate(proto) {
  return isObject(proto) ? objectCreate(proto) : {};
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var result = new buffer.constructor(buffer.length);
  buffer.copy(result);
  return result;
}

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */
function cloneMap(map, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
  return arrayReduce(array, addMapEntry, new map.constructor());
}

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */
function cloneSet(set, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
  return arrayReduce(array, addSetEntry, new set.constructor());
}

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;

    assignValue(object, key, newValue === undefined ? source[key] : newValue);
  }
  return object;
}

/**
 * Copies own symbol properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Creates an array of the own enumerable symbol properties of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
  getTag = function (value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag;
        case mapCtorString:
          return mapTag;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag;
        case weakMapCtorString:
          return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return typeof object.constructor == 'function' && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
}

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, cloneFunc, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag:case float64Tag:
    case int8Tag:case int16Tag:case int32Tag:
    case uint8Tag:case uint8ClampedTag:case uint16Tag:case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return cloneMap(object, isDeep, cloneFunc);

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return cloneSet(object, isDeep, cloneFunc);

    case symbolTag:
      return cloneSymbol(object);
  }
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (typeof value == 'number' || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;

  return value === proto;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return func + '';
    } catch (e) {}
  }
  return '';
}

/**
 * Creates a shallow clone of `value`.
 *
 * **Note:** This method is loosely based on the
 * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
 * and supports cloning arrays, array buffers, booleans, date objects, maps,
 * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
 * arrays. The own enumerable properties of `arguments` objects are cloned
 * as plain objects. An empty object is returned for uncloneable values such
 * as error objects, functions, DOM nodes, and WeakMaps.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to clone.
 * @returns {*} Returns the cloned value.
 * @see _.cloneDeep
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var shallow = _.clone(objects);
 * console.log(shallow[0] === objects[0]);
 * // => true
 */
function clone(value) {
  return baseClone(value, false, true);
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || value !== value && other !== other;
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') && (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = clone;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash.defaults/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.defaults/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = isArray(value) || isArguments(value) ? baseTimes(value.length, String) : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Used by `_.defaults` to customize its `_.assignIn` use.
 *
 * @private
 * @param {*} objValue The destination value.
 * @param {*} srcValue The source value.
 * @param {string} key The key of the property to assign.
 * @param {Object} object The parent object of `objValue`.
 * @returns {*} Returns the value to assign.
 */
function assignInDefaults(objValue, srcValue, key, object) {
  if (objValue === undefined || eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key)) {
    return srcValue;
  }
  return objValue;
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
    object[key] = value;
  }
}

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  start = nativeMax(start === undefined ? func.length - 1 : start, 0);
  return function () {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = array;
    return apply(func, this, otherArgs);
  };
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;

    assignValue(object, key, newValue === undefined ? source[key] : newValue);
  }
  return object;
}

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function (object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = assigner.length > 3 && typeof customizer == 'function' ? (length--, customizer) : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (typeof value == 'number' || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number' ? isArrayLike(object) && isIndex(index, object.length) : type == 'string' && index in object) {
    return eq(object[index], value);
  }
  return false;
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;

  return value === proto;
}

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || value !== value && other !== other;
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') && (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * This method is like `_.assignIn` except that it accepts `customizer`
 * which is invoked to produce the assigned values. If `customizer` returns
 * `undefined`, assignment is handled by the method instead. The `customizer`
 * is invoked with five arguments: (objValue, srcValue, key, object, source).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @alias extendWith
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} sources The source objects.
 * @param {Function} [customizer] The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @see _.assignWith
 * @example
 *
 * function customizer(objValue, srcValue) {
 *   return _.isUndefined(objValue) ? srcValue : objValue;
 * }
 *
 * var defaults = _.partialRight(_.assignInWith, customizer);
 *
 * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
var assignInWith = createAssigner(function (object, source, srcIndex, customizer) {
  copyObject(source, keysIn(source), object, customizer);
});

/**
 * Assigns own and inherited enumerable string keyed properties of source
 * objects to the destination object for all destination properties that
 * resolve to `undefined`. Source objects are applied from left to right.
 * Once a property is set, additional values of the same property are ignored.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.defaultsDeep
 * @example
 *
 * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
var defaults = baseRest(function (args) {
  args.push(undefined, assignInDefaults);
  return apply(assignInWith, undefined, args);
});

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = defaults;

/***/ }),

/***/ "./node_modules/lodash.defer/index.js":
/*!********************************************!*\
  !*** ./node_modules/lodash.defer/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * The base implementation of `_.delay` and `_.defer` which accepts `args`
 * to provide to `func`.
 *
 * @private
 * @param {Function} func The function to delay.
 * @param {number} wait The number of milliseconds to delay invocation.
 * @param {Array} args The arguments to provide to `func`.
 * @returns {number} Returns the timer id.
 */
function baseDelay(func, wait, args) {
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  return setTimeout(function () {
    func.apply(undefined, args);
  }, wait);
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  start = nativeMax(start === undefined ? func.length - 1 : start, 0);
  return function () {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = array;
    return apply(func, this, otherArgs);
  };
}

/**
 * Defers invoking the `func` until the current call stack has cleared. Any
 * additional arguments are provided to `func` when it's invoked.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to defer.
 * @param {...*} [args] The arguments to invoke `func` with.
 * @returns {number} Returns the timer id.
 * @example
 *
 * _.defer(function(text) {
 *   console.log(text);
 * }, 'deferred');
 * // => Logs 'deferred' after one or more milliseconds.
 */
var defer = baseRest(function (func, args) {
  return baseDelay(func, 1, args);
});

module.exports = defer;

/***/ }),

/***/ "./node_modules/lodash.escape/index.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash.escape/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match HTML entities and HTML characters. */
var reUnescapedHtml = /[&<>"'`]/g,
    reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

/** Used to map characters to HTML entities. */
var htmlEscapes = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '`': '&#96;'
};

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf(object) {
  return function (key) {
    return object == null ? undefined : object[key];
  };
}

/**
 * Used by `_.escape` to convert characters to HTML entities.
 *
 * @private
 * @param {string} chr The matched character to escape.
 * @returns {string} Returns the escaped character.
 */
var escapeHtmlChar = basePropertyOf(htmlEscapes);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var Symbol = root.Symbol;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Converts the characters "&", "<", ">", '"', "'", and "\`" in `string` to
 * their corresponding HTML entities.
 *
 * **Note:** No other characters are escaped. To escape additional
 * characters use a third-party library like [_he_](https://mths.be/he).
 *
 * Though the ">" character is escaped for symmetry, characters like
 * ">" and "/" don't need escaping in HTML and have no special meaning
 * unless they're part of a tag or unquoted attribute value. See
 * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
 * (under "semi-related fun fact") for more details.
 *
 * Backticks are escaped because in IE < 9, they can break out of
 * attribute values or HTML comments. See [#59](https://html5sec.org/#59),
 * [#102](https://html5sec.org/#102), [#108](https://html5sec.org/#108), and
 * [#133](https://html5sec.org/#133) of the
 * [HTML5 Security Cheatsheet](https://html5sec.org/) for more details.
 *
 * When working with HTML you should always
 * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
 * XSS vectors.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category String
 * @param {string} [string=''] The string to escape.
 * @returns {string} Returns the escaped string.
 * @example
 *
 * _.escape('fred, barney, & pebbles');
 * // => 'fred, barney, &amp; pebbles'
 */
function escape(string) {
  string = toString(string);
  return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
}

module.exports = escape;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash.has/index.js":
/*!******************************************!*\
  !*** ./node_modules/lodash.has/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/,
    reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

/** Built-in value references. */
var Symbol = root.Symbol,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash(),
    'map': new (Map || ListCache)(),
    'string': new Hash()
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.has` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHas(object, key) {
  return object != null && hasOwnProperty.call(object, key);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = isKey(path, object) ? [path] : castPath(path);

  var result,
      index = -1,
      length = path.length;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result) {
    return result;
  }
  var length = object ? object.length : 0;
  return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (typeof value == 'number' || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoize(function (string) {
  string = toString(string);

  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function (match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : number || match);
  });
  return result;
});

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return func + '';
    } catch (e) {}
  }
  return '';
}

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || resolver && typeof resolver != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function () {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || value !== value && other !== other;
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') && (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Checks if `path` is a direct property of `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = { 'a': { 'b': 2 } };
 * var other = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.has(object, 'a');
 * // => true
 *
 * _.has(object, 'a.b');
 * // => true
 *
 * _.has(object, ['a', 'b']);
 * // => true
 *
 * _.has(other, 'a');
 * // => false
 */
function has(object, path) {
  return object != null && hasPath(object, path, baseHas);
}

module.exports = has;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash.isempty/index.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash.isempty/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap');

/** Detect if properties shadowing those on `Object.prototype` are non-enumerable. */
var nonEnumShadows = !propertyIsEnumerable.call({ 'valueOf': 1 }, 'valueOf');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
  getTag = function (value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag;
        case mapCtorString:
          return mapTag;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag;
        case weakMapCtorString:
          return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;

  return value === proto;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return func + '';
    } catch (e) {}
  }
  return '';
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') && (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */
function isEmpty(value) {
  if (isArrayLike(value) && (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' || isBuffer(value) || isArguments(value))) {
    return !value.length;
  }
  var tag = getTag(value);
  if (tag == mapTag || tag == setTag) {
    return !value.size;
  }
  if (nonEnumShadows || isPrototype(value)) {
    return !nativeKeys(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return true;
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = isEmpty;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash.isequal/index.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash.isequal/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {

/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    asyncTag = '[object AsyncFunction]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    nullTag = '[object Null]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    proxyTag = '[object Proxy]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    undefinedTag = '[object Undefined]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = function () {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}();

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function (value) {
    return func(value);
  };
}

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function (value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function (value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect methods masquerading as native. */
var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice,
    symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash(),
    'map': new (Map || ListCache)(),
    'string': new Hash()
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache();
  while (++index < length) {
    this.add(values[index]);
  }
}

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache();
  this.size = 0;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (
    // Safari 9 has enumerable `arguments.length` in strict mode.
    key == 'length' ||
    // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == 'offset' || key == 'parent') ||
    // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') ||
    // Skip index properties.
    isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack());
    return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack());
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function (othValue, othIndex) {
        if (!cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == other + '';

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function (object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function (symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
  getTag = function (value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag;
        case mapCtorString:
          return mapTag;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag;
        case weakMapCtorString:
          return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (typeof value == 'number' || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;

  return value === proto;
}

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return func + '';
    } catch (e) {}
  }
  return '';
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || value !== value && other !== other;
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function () {
  return arguments;
}()) ? baseIsArguments : function (value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
};

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = isEqual;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash.iteratee/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.iteratee/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used to compose bitmasks for comparison styles. */
var UNORDERED_COMPARE_FLAG = 1,
    PARTIAL_COMPARE_FLAG = 2;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/,
    reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = function () {
  try {
    return freeProcess && freeProcess.binding('util');
  } catch (e) {}
}();

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */
function addMapEntry(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  map.set(pair[0], pair[1]);
  return map;
}

/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */
function addSetEntry(set, value) {
  // Don't return `set.add` because it's not chainable in IE 11.
  set.add(value);
  return set;
}

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array ? array.length : 0;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function (object) {
    return object == null ? undefined : object[key];
  };
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function (value) {
    return func(value);
  };
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function (value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function (value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    getPrototype = overArg(Object.getPrototypeOf, Object),
    objectCreate = Object.create,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash(),
    'map': new (Map || ListCache)(),
    'string': new Hash()
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values ? values.length : 0;

  this.__data__ = new MapCache();
  while (++index < length) {
    this.add(values[index]);
  }
}

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  this.__data__ = new ListCache(entries);
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache();
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  return this.__data__['delete'](key);
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var cache = this.__data__;
  if (cache instanceof ListCache) {
    var pairs = cache.__data__;
    if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      return this;
    }
    cache = this.__data__ = new MapCache(pairs);
  }
  cache.set(key, value);
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = isArray(value) || isArguments(value) ? baseTimes(value.length, String) : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
    object[key] = value;
  }
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @param {boolean} [isFull] Specify a clone including symbols.
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
  var result;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || isFunc && !object) {
      if (isHostObject(value)) {
        return object ? value : {};
      }
      result = initCloneObject(isFunc ? {} : value);
      if (!isDeep) {
        return copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, baseClone, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack());
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (!isArr) {
    var props = isFull ? getAllKeys(value) : keys(value);
  }
  arrayEach(props || value, function (subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
  });
  return result;
}

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} prototype The object to inherit from.
 * @returns {Object} Returns the new object.
 */
function baseCreate(proto) {
  return isObject(proto) ? objectCreate(proto) : {};
}

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = isKey(path, object) ? [path] : castPath(path);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return index && index == length ? object : undefined;
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {boolean} [bitmask] The bitmask of comparison flags.
 *  The bitmask may be composed of the following flags:
 *     1 - Unordered comparison
 *     2 - Partial comparison
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, customizer, bitmask, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObject(value) && !isObjectLike(other)) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
}

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = arrayTag,
      othTag = arrayTag;

  if (!objIsArr) {
    objTag = getTag(object);
    objTag = objTag == argsTag ? objectTag : objTag;
  }
  if (!othIsArr) {
    othTag = getTag(other);
    othTag = othTag == argsTag ? objectTag : othTag;
  }
  var objIsObj = objTag == objectTag && !isHostObject(object),
      othIsObj = othTag == objectTag && !isHostObject(other),
      isSameTag = objTag == othTag;

  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack());
    return objIsArr || isTypedArray(object) ? equalArrays(object, other, equalFunc, customizer, bitmask, stack) : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
  }
  if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack());
      return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack());
  return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
}

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack();
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack) : result)) {
        return false;
      }
    }
  }
  return true;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
}

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
  }
  return property(value);
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function (object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function (object) {
    var objValue = get(object, path);
    return objValue === undefined && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
  };
}

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function (object) {
    return baseGet(object, path);
  };
}

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var result = new buffer.constructor(buffer.length);
  buffer.copy(result);
  return result;
}

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */
function cloneMap(map, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
  return arrayReduce(array, addMapEntry, new map.constructor());
}

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */
function cloneSet(set, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
  return arrayReduce(array, addSetEntry, new set.constructor());
}

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;

    assignValue(object, key, newValue === undefined ? source[key] : newValue);
  }
  return object;
}

/**
 * Copies own symbol properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = bitmask & UNORDERED_COMPARE_FLAG ? new SetCache() : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function (othValue, othIndex) {
        if (!seen.has(othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
          return seen.add(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
  switch (tag) {
    case dataViewTag:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == other + '';

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= UNORDERED_COMPARE_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), equalFunc, customizer, bitmask, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
      objProps = keys(object),
      objLength = objProps.length,
      othProps = keys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Creates an array of the own enumerable symbol properties of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
  getTag = function (value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag;
        case mapCtorString:
          return mapTag;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag;
        case weakMapCtorString:
          return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = isKey(path, object) ? [path] : castPath(path);

  var result,
      index = -1,
      length = path.length;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result) {
    return result;
  }
  var length = object ? object.length : 0;
  return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
}

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return typeof object.constructor == 'function' && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
}

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, cloneFunc, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag:case float64Tag:
    case int8Tag:case int16Tag:case int32Tag:
    case uint8Tag:case uint8ClampedTag:case uint16Tag:case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return cloneMap(object, isDeep, cloneFunc);

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return cloneSet(object, isDeep, cloneFunc);

    case symbolTag:
      return cloneSymbol(object);
  }
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (typeof value == 'number' || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;

  return value === proto;
}

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function (object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue && (srcValue !== undefined || key in Object(object));
  };
}

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoize(function (string) {
  string = toString(string);

  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function (match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : number || match);
  });
  return result;
});

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return func + '';
    } catch (e) {}
  }
  return '';
}

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || resolver && typeof resolver != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function () {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || value !== value && other !== other;
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') && (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

/**
 * Creates a function that invokes `func` with the arguments of the created
 * function. If `func` is a property name, the created function returns the
 * property value for a given element. If `func` is an array or object, the
 * created function returns `true` for elements that contain the equivalent
 * source properties, otherwise it returns `false`.
 *
 * @static
 * @since 4.0.0
 * @memberOf _
 * @category Util
 * @param {*} [func=_.identity] The value to convert to a callback.
 * @returns {Function} Returns the callback.
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': true },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * // The `_.matches` iteratee shorthand.
 * _.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));
 * // => [{ 'user': 'barney', 'age': 36, 'active': true }]
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.filter(users, _.iteratee(['user', 'fred']));
 * // => [{ 'user': 'fred', 'age': 40 }]
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, _.iteratee('user'));
 * // => ['barney', 'fred']
 *
 * // Create custom iteratee shorthands.
 * _.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
 *   return !_.isRegExp(func) ? iteratee(func) : function(string) {
 *     return func.test(string);
 *   };
 * });
 *
 * _.filter(['abc', 'def'], /ef/);
 * // => ['def']
 */
function iteratee(func) {
  return baseIteratee(typeof func == 'function' ? func : baseClone(func, true));
}

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = iteratee;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash.result/index.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash.result/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/,
    reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

/** Built-in value references. */
var Symbol = root.Symbol,
    splice = arrayProto.splice;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash(),
    'map': new (Map || ListCache)(),
    'string': new Hash()
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoize(function (string) {
  string = toString(string);

  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function (match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : number || match);
  });
  return result;
});

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return func + '';
    } catch (e) {}
  }
  return '';
}

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || resolver && typeof resolver != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function () {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || value !== value && other !== other;
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * This method is like `_.get` except that if the resolved value is a
 * function it's invoked with the `this` binding of its parent object and
 * its result is returned.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to resolve.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
 *
 * _.result(object, 'a[0].b.c1');
 * // => 3
 *
 * _.result(object, 'a[0].b.c2');
 * // => 4
 *
 * _.result(object, 'a[0].b.c3', 'default');
 * // => 'default'
 *
 * _.result(object, 'a[0].b.c3', _.constant('default'));
 * // => 'default'
 */
function result(object, path, defaultValue) {
  path = isKey(path, object) ? [path] : castPath(path);

  var index = -1,
      length = path.length;

  // Ensure the loop is entered when path is empty.
  if (!length) {
    object = undefined;
    length = 1;
  }
  while (++index < length) {
    var value = object == null ? undefined : object[toKey(path[index])];
    if (value === undefined) {
      index = length;
      value = defaultValue;
    }
    object = isFunction(value) ? value.call(object) : value;
  }
  return object;
}

module.exports = result;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function () {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function () {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),

/***/ "./src/application/application.js":
/*!****************************************!*\
  !*** ./src/application/application.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
const before = app => {
  return new Promise((resolve, reject) => {
    const t = app.beforeInitialize();
    if (t) {
      resolve(app);
    } else {
      reject(new Error("failed before initialize!"));
    }
  });
},
      init = app => {
  return new Promise((resolve, reject) => {
    const t = app.initialize();
    if (t) {
      resolve(app);
    } else {
      reject(new Error("failed initialize!"));
    }
  });
},
      after = app => {
  return new Promise((resolve, reject) => {
    const t = app.afterInitialize();
    if (t) {
      resolve(app);
    } else {
      reject(new Error("failed after initialize!"));
    }
  });
},
      setStarted = app => {
  return new Promise((resolve, reject) => {
    app._started = true;
    if (app.started) {
      resolve(app);
    } else {
      reject(new Error("failed setting started!"));
    }
  });
},
      check = app => {
  return new Promise((resolve, reject) => {
    const t = app.started;
    if (t) {
      resolve(app);
    } else {
      reject(new Error("failed starting!"));
    }
  });
},
      DEFAULT_NAME = "untitled",
      METADATA_KEY = {};
METADATA_KEY.NAME = Symbol("name");
METADATA_KEY.DATASTORE = Symbol("datastore");

/**
 * <p>Application Class for use to define an application.<br/>
 * An application contains metadata and initializers for the application.<br/>
 * <em>Applications track history, and normally would contain the entire single page App startup.</em></p>
 * @param {string} name Name of the application
 * @example const app = new Application("Awesome");
 * app.start();
 * @example const app = new Application();
 * app.name = "My Super Application!";
 * app.setMetadataItem("description", "something very awesome");
 * app.initialize = () => { do some stuff... };
 * app.start();
 */
class Application {
  constructor(options) {
    if (!options) {
      options = {};
    }

    if (options.metadata) {
      this._metadata = options.metadata;
    } else {
      this._metadata = {};
    }

    // preassign a name
    if (options.name) {
      this._name = options.name;
    } else {
      this._name = DEFAULT_NAME;
    }

    // preset a datastore object
    if (options.datastore) {
      this._datastore = options.datastore;
    } else {
      this._datastore = {};
    }

    this._router = null;
    this._started = false;
  }

  /**
   * The router property of the application
   * @property router
   */

  get router() {
    return this._router;
  }

  set router(router) {
    this._router = router;
  }

  /**
   * The started property of the application
   * @property started
   * @returns {boolean} Returns the property of the started Event
   */
  get started() {
    return this._started;
  }

  /**
   * Event for after during startup of the application
   */
  initialize() {
    return true;
  }

  /** Event for before the startup of the application
   */
  beforeInitialize() {
    return true;
  }

  /** Event for after the startup of the application
   */
  afterInitialize() {
    return true;
  }

  /** The application name
   * @property name
   */
  get name() {
    return this.getMetadataItem(METADATA_KEY.NAME);
  }

  set name(n) {
    return this.setMetadataItem(METADATA_KEY.NAME, n);
  }

  /** The metadata map
  * @property metadata
  * @returns Map of metadata in an Augmented.Utility.Map
  */
  get metadata() {
    return this._metadata;
  }

  /** Set a specific item in metadata
   * @param {string} key Key to set
   * @param {object} value Value of the key
   */
  setMetadataItem(key, value) {
    this._metadata[key] = value;
  }

  /** Get a specific item in metadata
   * @param {string} key Key
   * @returns {object} value of the key
   */
  getMetadataItem(key) {
    return this._metadata[key];
  }

  /** Register a Router - adds routes to the application
   * @param {Router} router Router to register
   */
  registerRouter(router) {
    if (router) {
      this._router = router;
    }
  }

  /** Event to start the application and history
   * @returns {Promise} Promise.Resolve or Promise.Reject based on success
   */
  start() {
    const app = this;
    return new Promise((resolve, reject) => {
      before(app).then(init).then(after).then(setStarted).then(check).then(app => {
        resolve(app);
      }).catch(e => {
        app.stop();
        reject(e);
      });
    });
  }

  /** Event to stop the application and history
   */
  stop() {
    this._started = false;
  }

  /** Gets the datastore for the application
   * @property {Augmented.Model|object} datastore
   */
  get datastore() {
    return this.getMetadataItem(METADATA_KEY.DATASTORE);
  }

  set datastore(ds) {
    if (ds) {
      this.setMetadataItem(METADATA_KEY.DATASTORE, ds);
    }
  }
};

exports.default = Application;

/***/ }),

/***/ "./src/augmented.js":
/*!**************************!*\
  !*** ./src/augmented.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utility = __webpack_require__(/*! ./utility/utility */ "./src/utility/utility.js");

var Utility = _interopRequireWildcard(_utility);

var _sort = __webpack_require__(/*! ./utility/sort.js */ "./src/utility/sort.js");

var _object = __webpack_require__(/*! ./object.js */ "./src/object.js");

var _object2 = _interopRequireDefault(_object);

var _abstractModel = __webpack_require__(/*! ./model/abstractModel.js */ "./src/model/abstractModel.js");

var _abstractModel2 = _interopRequireDefault(_abstractModel);

var _collection = __webpack_require__(/*! ./collection/collection.js */ "./src/collection/collection.js");

var _collection2 = _interopRequireDefault(_collection);

var _stack = __webpack_require__(/*! ./structures/stack.js */ "./src/structures/stack.js");

var _stack2 = _interopRequireDefault(_stack);

var _map = __webpack_require__(/*! ./structures/map.js */ "./src/structures/map.js");

var _map2 = _interopRequireDefault(_map);

var _configuration = __webpack_require__(/*! ./configuration.js */ "./src/configuration.js");

var _configuration2 = _interopRequireDefault(_configuration);

var _queue = __webpack_require__(/*! ./structures/queue.js */ "./src/structures/queue.js");

var _queue2 = _interopRequireDefault(_queue);

var _abstractLogger = __webpack_require__(/*! ./logger/abstractLogger.js */ "./src/logger/abstractLogger.js");

var _abstractLogger2 = _interopRequireDefault(_abstractLogger);

var _consoleLogger = __webpack_require__(/*! ./logger/consoleLogger.js */ "./src/logger/consoleLogger.js");

var _consoleLogger2 = _interopRequireDefault(_consoleLogger);

var _colorConsoleLogger = __webpack_require__(/*! ./logger/colorConsoleLogger.js */ "./src/logger/colorConsoleLogger.js");

var _colorConsoleLogger2 = _interopRequireDefault(_colorConsoleLogger);

var _loggerFactory = __webpack_require__(/*! ./logger/loggerFactory.js */ "./src/logger/loggerFactory.js");

var _loggerFactory2 = _interopRequireDefault(_loggerFactory);

var _type = __webpack_require__(/*! ./logger/type.js */ "./src/logger/type.js");

var _type2 = _interopRequireDefault(_type);

var _level = __webpack_require__(/*! ./logger/level.js */ "./src/logger/level.js");

var _level2 = _interopRequireDefault(_level);

var _application = __webpack_require__(/*! ./application/application.js */ "./src/application/application.js");

var _application2 = _interopRequireDefault(_application);

var _resourceBundle = __webpack_require__(/*! ./resourceBundle.js */ "./src/resourceBundle.js");

var _schemaGenerator = __webpack_require__(/*! ./validation/schemaGenerator.js */ "./src/validation/schemaGenerator.js");

var _schemaGenerator2 = _interopRequireDefault(_schemaGenerator);

var _validationFramework = __webpack_require__(/*! ./validation/validationFramework.js */ "./src/validation/validationFramework.js");

var _validationFramework2 = _interopRequireDefault(_validationFramework);

var _abstractSecurityClient = __webpack_require__(/*! ./security/abstractSecurityClient.js */ "./src/security/abstractSecurityClient.js");

var _abstractSecurityClient2 = _interopRequireDefault(_abstractSecurityClient);

var _oauthClient = __webpack_require__(/*! ./security/oauthClient.js */ "./src/security/oauthClient.js");

var _oauthClient2 = _interopRequireDefault(_oauthClient);

var _aclClient = __webpack_require__(/*! ./security/aclClient.js */ "./src/security/aclClient.js");

var _aclClient2 = _interopRequireDefault(_aclClient);

var _clientType = __webpack_require__(/*! ./security/clientType.js */ "./src/security/clientType.js");

var _clientType2 = _interopRequireDefault(_clientType);

var _authenticationFactory = __webpack_require__(/*! ./security/authenticationFactory.js */ "./src/security/authenticationFactory.js");

var _authenticationFactory2 = _interopRequireDefault(_authenticationFactory);

var _principal = __webpack_require__(/*! ./security/principal.js */ "./src/security/principal.js");

var _principal2 = _interopRequireDefault(_principal);

var _entry = __webpack_require__(/*! ./security/entry.js */ "./src/security/entry.js");

var _entry2 = _interopRequireDefault(_entry);

var _context = __webpack_require__(/*! ./security/context.js */ "./src/security/context.js");

var _context2 = _interopRequireDefault(_context);

var _isString = __webpack_require__(/*! ./functions/isString.js */ "./src/functions/isString.js");

var _isString2 = _interopRequireDefault(_isString);

var _isFunction = __webpack_require__(/*! ./functions/isFunction.js */ "./src/functions/isFunction.js");

var _isFunction2 = _interopRequireDefault(_isFunction);

var _extend = __webpack_require__(/*! ./functions/extend.js */ "./src/functions/extend.js");

var _extend2 = _interopRequireDefault(_extend);

var _pad = __webpack_require__(/*! ./functions/pad.js */ "./src/functions/pad.js");

var _pad2 = _interopRequireDefault(_pad);

var _uniqueId = __webpack_require__(/*! ./functions/uniqueId.js */ "./src/functions/uniqueId.js");

var _uniqueId2 = _interopRequireDefault(_uniqueId);

var _has = __webpack_require__(/*! ./functions/has.js */ "./src/functions/has.js");

var _has2 = _interopRequireDefault(_has);

var _isObject = __webpack_require__(/*! ./functions/isObject.js */ "./src/functions/isObject.js");

var _isObject2 = _interopRequireDefault(_isObject);

var _allKeys = __webpack_require__(/*! ./functions/allKeys.js */ "./src/functions/allKeys.js");

var _allKeys2 = _interopRequireDefault(_allKeys);

var _create = __webpack_require__(/*! ./functions/create.js */ "./src/functions/create.js");

var _create2 = _interopRequireDefault(_create);

var _result = __webpack_require__(/*! ./functions/result.js */ "./src/functions/result.js");

var _result2 = _interopRequireDefault(_result);

var _arrayHas = __webpack_require__(/*! ./functions/arrayHas.js */ "./src/functions/arrayHas.js");

var _arrayHas2 = _interopRequireDefault(_arrayHas);

var _exec = __webpack_require__(/*! ./functions/exec.js */ "./src/functions/exec.js");

var _exec2 = _interopRequireDefault(_exec);

var _isDefined = __webpack_require__(/*! ./functions/isDefined.js */ "./src/functions/isDefined.js");

var _isDefined2 = _interopRequireDefault(_isDefined);

var _some = __webpack_require__(/*! ./functions/some.js */ "./src/functions/some.js");

var _some2 = _interopRequireDefault(_some);

var _splice = __webpack_require__(/*! ./functions/splice.js */ "./src/functions/splice.js");

var _splice2 = _interopRequireDefault(_splice);

var _before = __webpack_require__(/*! ./functions/before.js */ "./src/functions/before.js");

var _before2 = _interopRequireDefault(_before);

var _once = __webpack_require__(/*! ./functions/once.js */ "./src/functions/once.js");

var _once2 = _interopRequireDefault(_once);

var _fibonacci = __webpack_require__(/*! ./functions/fibonacci.js */ "./src/functions/fibonacci.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }newObj.default = obj;return newObj;
  }
}

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
Augmented.Utility.Map = _map2.default;
Augmented.Utility.Stack = _stack2.default;
Augmented.Utility.SchemaGenerator = _schemaGenerator2.default;
Augmented.Utility.extend = _extend2.default;
Augmented.Utility.AsynchronousQueue = _queue2.default;
Augmented.Utility.pad = _pad2.default;
Augmented.Utility.BundleObject = _resourceBundle.BundleObject;
Augmented.Utility.ResourceBundle = _resourceBundle.ResourceBundle;
Augmented.Utility.MessageReader = _resourceBundle.MessageReader;
Augmented.Utility.MessageKeyFormatter = _resourceBundle.MessageKeyFormatter;
Augmented.Utility.uniqueId = _uniqueId2.default;
Augmented.Utility.sortObjects = _sort.sortObjects;
Augmented.Utility.mergeSort = _sort.mergeSort;
Augmented.Utility.quickSort = _sort.quickSort;
Augmented.Utility.insertionSort = _sort.insertionSort;
Augmented.Utility.bubbleSort = _sort.bubbleSort;

/**
 * A Logger package
 * @namespace Logger
 */
Augmented.Logger = {};
Augmented.Logger.AbstractLogger = _abstractLogger2.default;
Augmented.Logger.ConsoleLogger = _consoleLogger2.default;
Augmented.Logger.ColorConsoleLogger = _colorConsoleLogger2.default;
Augmented.Logger.LoggerFactory = _loggerFactory2.default;
Augmented.Logger.Type = _type2.default;
Augmented.Logger.Level = _level2.default;

Augmented.Object = _object2.default;
Augmented.AbstractModel = _abstractModel2.default;
Augmented.AbstractCollection = _collection2.default;

Augmented.ValidationFramework = _validationFramework2.default;

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
Augmented.Security.ClientType = _clientType2.default;
Augmented.Security.AuthenticationFactory = _authenticationFactory2.default;
Augmented.Security.Context = _context2.default;
Augmented.Security.Entry = _entry2.default;
Augmented.Security.Principal = _principal2.default;
Augmented.Security.Client = {};
Augmented.Security.Client.AbstractSecurityClient = _abstractSecurityClient2.default;
Augmented.Security.Client.ACLClient = _aclClient2.default;
Augmented.Security.Client.OAUTH2Client = _oauthClient2.default;

Augmented.Configuration = _configuration2.default;

Augmented.Application = _application2.default;

Augmented.isString = _isString2.default;
Augmented.isFunction = _isFunction2.default;
Augmented.has = _has2.default;
Augmented.isObject = _isObject2.default;
Augmented.allKeys = _allKeys2.default;
Augmented.create = _create2.default;
Augmented.result = _result2.default;
Augmented.arrayHas = _arrayHas2.default;
Augmented.exec = _exec2.default;
Augmented.isDefined = _isDefined2.default;
Augmented.some = _some2.default;
Augmented.fibonacci = _fibonacci.fibonacci;
Augmented.fibonacciSequence = _fibonacci.fibonacciSequence;
Augmented.splice = _splice2.default;
Augmented.before = _before2.default;
Augmented.once = _once2.default;

/**
 * The standard version property
 * @constant VERSION
 * @memberof Augmented
 */
Augmented.VERSION = "2.1.0";
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

/***/ }),

/***/ "./src/collection/collection.js":
/*!**************************************!*\
  !*** ./src/collection/collection.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _object = __webpack_require__(/*! ../object.js */ "./src/object.js");

var _object2 = _interopRequireDefault(_object);

var _extend = __webpack_require__(/*! ../functions/extend.js */ "./src/functions/extend.js");

var _extend2 = _interopRequireDefault(_extend);

var _uniqueId = __webpack_require__(/*! ../functions/uniqueId.js */ "./src/functions/uniqueId.js");

var _uniqueId2 = _interopRequireDefault(_uniqueId);

var _isString = __webpack_require__(/*! ../functions/isString.js */ "./src/functions/isString.js");

var _isString2 = _interopRequireDefault(_isString);

var _isFunction = __webpack_require__(/*! ../functions/isFunction.js */ "./src/functions/isFunction.js");

var _isFunction2 = _interopRequireDefault(_isFunction);

var _some = __webpack_require__(/*! ../functions/some.js */ "./src/functions/some.js");

var _some2 = _interopRequireDefault(_some);

var _splice = __webpack_require__(/*! ../functions/splice.js */ "./src/functions/splice.js");

var _splice2 = _interopRequireDefault(_splice);

var _sort = __webpack_require__(/*! ../utility/sort.js */ "./src/utility/sort.js");

var _abstractModel = __webpack_require__(/*! ../model/abstractModel.js */ "./src/model/abstractModel.js");

var _abstractModel2 = _interopRequireDefault(_abstractModel);

var _validationFramework = __webpack_require__(/*! ../validation/validationFramework.js */ "./src/validation/validationFramework.js");

var _validationFramework2 = _interopRequireDefault(_validationFramework);

var _iterator = __webpack_require__(/*! ./iterator.js */ "./src/collection/iterator.js");

var _iterator2 = _interopRequireDefault(_iterator);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const findModelByMatchingProperties = (set, properties) => {
  return set.filter(entry => {
    return Object.keys(properties).every(key => {
      return entry._attributes[key] === properties[key];
    });
  });
};

const _clone = __webpack_require__(/*! lodash.clone */ "./node_modules/lodash.clone/index.js");

// Default options for `Collection#set`.
const setOptions = {
  add: true,
  remove: true,
  merge: true
};

const addOptions = {
  add: true,
  remove: false
};

/**
 * Abstract Augmented Collection <br/>
 * Supports: <ul>
 * <li>Validation and Schemas</li>
 * <li>Security</li>
 * </ul>
 * @extends Object
 */
class AbstractCollection extends _object2.default {
  constructor(models, options) {
    super(options);

    this.length = 0;
    this.models = [];
    this._byId = {};
    this.schema = null;
    this.validationMessages = {
      valid: true
    };

    if (!options) {
      options = {};
    }
    this.preinitialize(models, options);
    if (options.model) {
      this.model = options.model;
    }
    if (options.comparator !== void 0) {
      this.comparator = options.comparator;
    }
    this._reset();
    this.initialize(models, options);
    if (models) {
      this.reset(models, (0, _extend2.default)({ silent: true }, options));
    }
    if (!this.model) {
      this.model = new _abstractModel2.default();
    }
  }

  /**
   * Schema property
   * @property {object} schema The JSON schema from this collection
   */

  /**
   * Validation Message property
   * @property {object} validationMessages The property holding validation message data
   */

  preinitialize(models, options) {}

  initialize(models, options) {}

  /** The JSON representation of a Collection is an array of the
   * models" attributes.
   */
  toJSON() {
    //return this.map( (model) => { return model.toJSON(options); });
    let i = 0;
    const out = [],
          l = this.models.length;
    for (i = 0; i < l; i++) {
      out[i] = this.models[i].toJSON();
    }
    return out;
  }

  /*map(collection, interatee) {
    return _map(collection, interatee);
  };*/

  /**
   * Add a model, or list of models to the set. `models` may be
   * Models or raw JavaScript objects to be converted to Models, or any
   * combination of the two.
   */
  add(models, options) {
    return this.set(models, (0, _extend2.default)({ merge: false }, options, addOptions));
  }

  /** Remove a model, or a list of models from the set.
  */
  remove(models, options) {
    options = (0, _extend2.default)({}, options);
    const singular = Array.isArray(models);
    models = singular ? [models] : models.slice();
    let removed = this._removeModels(models, options);
    if (!options.silent && removed.length) {
      options.changes = { added: [], merged: [], removed: removed };
      this.trigger("update", this, options);
    }
    return singular ? removed[0] : removed;
  }

  /** Update a collection by `set`-ing a new list of models, adding new ones,
   * removing models that are no longer present, and merging models that
   * already exist in the collection, as necessary. Similar to **Model#set**,
   * the core operation for updating the data contained by the collection.
   */
  set(models, options) {
    if (models === null) {
      return;
    }

    options = (0, _extend2.default)({}, setOptions, options);
    if (options.parse && !this._isModel(models)) {
      models = this.parse(models, options) || [];
    }

    //console.log("models", models);

    let singular = !Array.isArray(models);
    models = singular ? [models] : models.slice();

    let at = options.at;
    if (at != null) at = +at;
    if (at > this.length) at = this.length;
    if (at < 0) at += this.length + 1;

    let set = [];
    let toAdd = [];
    let toMerge = [];
    let toRemove = [];
    let modelMap = {};

    let add = options.add;
    let merge = options.merge;
    let remove = options.remove;

    let sort = false;
    let sortable = this.comparator && at == null && options.sort !== false;
    let sortAttr = (0, _isString2.default)(this.comparator) ? this.comparator : null;

    // Turn bare objects into model references, and prevent invalid models
    // from being added.
    let model, i;
    const l = models.length;

    for (i = 0; i < l; i++) {
      model = models[i];

      // If a duplicate is found, prevent it from being added and
      // optionally merge it into the existing model.
      let existing = this.get(model);
      if (existing) {
        if (merge && model !== existing) {
          let attrs = this._isModel(model) ? model.attributes : model;
          if (options.parse) attrs = existing.parse(attrs, options);
          existing.set(attrs, options);
          toMerge.push(existing);
          if (sortable && !sort) sort = existing.hasChanged(sortAttr);
        }
        if (!modelMap[existing.cid]) {
          modelMap[existing.cid] = true;
          set.push(existing);
        }
        models[i] = existing;

        // If this is a new, valid model, push it to the `toAdd` list.
      } else if (add) {
        model = models[i] = this._prepareModel(model, options);
        if (model) {
          toAdd.push(model);
          this._addReference(model, options);
          modelMap[model.cid] = true;
          set.push(model);
        }
      }
    }

    // Remove stale models.
    if (remove) {
      for (i = 0; i < this.length; i++) {
        model = this.models[i];
        if (!modelMap[model.cid]) toRemove.push(model);
      }
      if (toRemove.length) this._removeModels(toRemove, options);
    }

    // See if sorting is needed, update `length` and splice in new models.
    let orderChanged = false;
    let replace = !sortable && add && remove;
    if (set.length && replace) {
      orderChanged = this.length !== set.length || (0, _some2.default)(this.models, (m, index) => {
        return m !== set[index];
      });
      this.models.length = 0;
      (0, _splice2.default)(this.models, set, 0);
      this.length = this.models.length;
    } else if (toAdd.length) {
      if (sortable) {
        sort = true;
      }
      (0, _splice2.default)(this.models, toAdd, at == null ? this.length : at);
      this.length = this.models.length;
    }

    // Silently sort the collection if appropriate.
    if (sort) this.sort({ silent: true });

    // Unless silenced, it"s time to fire all appropriate add/sort/update events.
    if (!options.silent) {
      for (i = 0; i < toAdd.length; i++) {
        if (at != null) options.index = at + i;
        model = toAdd[i];
        model.trigger("add", model, this, options);
      }
      if (sort || orderChanged) this.trigger("sort", this, options);
      if (toAdd.length || toRemove.length || toMerge.length) {
        options.changes = {
          added: toAdd,
          removed: toRemove,
          merged: toMerge
        };
        this.trigger("update", this, options);
      }
    }

    // Return the added (or merged) model (or models).
    return singular ? models[0] : models;
  }

  /** When you have more items than you want to add or remove individually,
   * you can reset the entire set with a new list of models, without firing
   * any granular `add` or `remove` events. Fires `reset` when finished.
   * Useful for bulk operations and optimizations.
   */
  reset(models, options) {
    options = options ? _clone(options) : {};
    for (let i = 0; i < this.models.length; i++) {
      this._removeReference(this.models[i], options);
    }
    options.previousModels = this.models;
    this._reset();
    models = this.add(models, (0, _extend2.default)({ silent: true }, options));
    if (!options.silent) this.trigger("reset", this, options);
    return models;
  }

  /** Add a model to the end of the collection.
  */
  push(model, options) {
    return this.add(model, (0, _extend2.default)({ at: this.length }, options));
  }

  /** Remove a model from the end of the collection.
   */
  pop(options) {
    const model = this.at(this.length - 1);
    return this.remove(model, options);
  }

  /** Add a model to the beginning of the collection.
   */
  unshift(model, options) {
    return this.add(model, (0, _extend2.default)({ at: 0 }, options));
  }

  /** Remove a model from the beginning of the collection.
   */
  shift(options) {
    const model = this.at(0);
    return this.remove(model, options);
  }

  /** Slice out a sub-array of models from the collection.
   */
  slice(...args) {
    return this.models.slice(args);
  }

  /** Get a model from the set by id, cid, model object with id or cid
   * properties, or an attributes object that is transformed through modelId.
   */
  get(obj) {
    if (obj == null) {
      return void 0;
    }
    return this._byId[obj] || this._byId[this.modelId(this._isModel(obj) ? obj.attributes : obj)] || obj.cid && this._byId[obj.cid];
  }

  /** Returns `true` if the model is in the collection.
   */
  has(obj) {
    return this.get(obj) !== null;
  }

  /** Get the model at the given index.
   */
  at(index) {
    if (index < 0) {
      index += this.length;
    }
    return this.models[index];
  }

  /** find the model that matches these properties
   * @param {object} attrs properties to match
   * @returns {Augmented.AbstractModel} model that matched
   */
  find(attrs) {
    const results = findModelByMatchingProperties(this.models, attrs);
    if (results && results.length > 0) {
      return results[0];
    }
    return null;
  }

  /** filter the models that match these properties
   * @param {object} attrs properties to match
   * @returns {array} models that matched
   */
  filter(attrs) {
    return findModelByMatchingProperties(this.models, attrs);
  }

  /** Return models with matching attributes. Useful for simple cases of `filter`.
    * @param {object} attrs properties to match
    * @returns {Augmented.AbstractModel|array} models that matched
   */
  where(attrs, first) {
    if (first) {
      return this.find(attrs);
    }
    return this.filter(attrs);
  }

  /** Return the first model with matching attributes. Useful for simple cases
   * of `find`.
   */
  findWhere(attrs) {
    return this.where(attrs, true);
  }

  /** Force the collection to re-sort itself. You don"t need to call this under
   * normal circumstances, as the set will maintain sort order as each item
   * is added.
   */
  sort(options) {
    let comparator = this.comparator;
    if (!comparator) throw new Error("Cannot sort a set without a comparator");
    options || (options = {});

    let length = comparator.length;
    if ((0, _isFunction2.default)(comparator)) comparator = comparator.bind(this);

    // Run sort based on type of `comparator`.
    if (length === 1 || (0, _isString2.default)(comparator)) {
      this.models = this.sortBy(comparator);
    } else {
      this.models.sort(comparator);
    }
    if (!options.silent) this.trigger("sort", this, options);
    return this;
  }

  /** Pluck an attribute from each model in the collection.
   */
  pluck(attr) {
    let i = 0;
    const out = [],
          l = this.models.length;
    for (i = 0; i < l; i++) {
      out[i] = this.models[i].toJSON()[attr];
    }
    return out;
    //return this.map(attr + "");
  }

  /**
   * Fetch the collection
   */
  fetch(options) {}

  /** Create a new instance of a model in this collection. Add the model to the
   * collection immediately, unless `wait: true` is passed, in which case we
   * wait for the server to agree.
   */
  create(model, options) {
    options = options ? _clone(options) : {};
    let wait = options.wait;
    model = this._prepareModel(model, options);
    if (!model) return false;
    if (!wait) this.add(model, options);
    let collection = this;
    let success = options.success;
    options.success = (m, resp, callbackOpts) => {
      if (wait) collection.add(m, callbackOpts);
      if (success) success.call(callbackOpts.context, m, resp, callbackOpts);
    };
    model.save(null, options);
    return model;
  }

  /** **parse** converts a response into a list of models to be added to the
   * collection. The default implementation is just to pass it through.
   */
  parse(resp, options) {
    return resp;
  }

  /** Create a new collection with an identical list of models as this one.
   */
  clone() {
    return new this.constructor(this.models, {
      model: this.model,
      comparator: this.comparator
    });
  }

  /** Define how to uniquely identify models in the collection.
   */
  modelId(attrs) {
    if (attrs && this.model && this.model.idAttribute) {
      return attrs[this.model.idAttribute || "id"];
    } else {
      return "id";
    }
  }

  /** Get an iterator of all models in this collection.
   */
  values() {
    return new _iterator2.default(this, ITERATOR_VALUES);
  }

  /** Get an iterator of all model IDs in this collection.
   */
  keys() {
    return new _iterator2.default(this, ITERATOR_KEYS);
  }

  /** Get an iterator of all [ID, model] tuples in this collection.
   */
  entries() {
    return new _iterator2.default(this, ITERATOR_KEYSVALUES);
  }

  /**
   * supportsValidation - Returns True if this collection supports validation
   * @returns {boolean} Returns True if this collection supports validation
   */
  supportsValidation() {
    const ret = this.schema && this.schema !== null && this.schema !== {};
    return ret ? true : false;
  }

  /**
   * isValid - Returns True if this collection is valid
   * @returns {boolean} Returns True if this collection is valid
   */
  isValid() {
    return this.validationMessages ? this.validationMessages.valid : true;
  }

  /**
   * getValidationMessages - Returns the validation messages
   * @returns {array} Returns the message is an array of objects.
   */
  getValidationMessages() {
    return this.validationMessages && this.validationMessages.messages ? this.validationMessages.messages : [];
  }

  /**
   * Validates the collection
   * @returns {array} Returns array of message from validation
   */
  validate() {
    if (this.supportsValidation()) {
      // validate from Validator
      let messages = [];
      this.validationMessages.messages = messages;
      this.validationMessages.valid = true;
      const a = this.toJSON(),
            l = a && Array.isArray(a) ? a.length : 0;
      let i = 0;
      if (!this._validationFramework) {
        this._validationFramework = new _validationFramework2.default();
      }
      const v = this._validationFramework;

      //console.debug("AUGMENTED: Collection Validate: Beginning with " + l + " models.");
      for (i = 0; i < l; i++) {
        messages[i] = v.validate(a[i], this.schema);
        if (!messages[i].valid) {
          this.validationMessages.valid = false;
        }
      }

      //logger.debug("AUGMENTED: Collection Validate: Completed isValid " + this.validationMessages.valid);
    } else {
      this.validationMessages.valid = true;
    }
    return this.validationMessages;
  }

  /**
   * Collecion.sync
   */
  sync(method, model, options) {}

  /**
   * Collection.save - Saves the collection as a "create"
   */
  save(options) {
    this.sync("create", this, options);
  }

  /**
   * Collection.update - Updates the collection as an "update"
   */
  update(options) {
    this.sync("update", this, options);
  }

  /**
   * Collection.remove - Remove from the collection as a "delete"
   */
  remove(options) {
    this.sync("delete", this, options);
  }

  /**
   * sortByKey - Sorts the collection by a property key
   * @param {object} key The key to sort by
   */
  sortByKey(key) {
    if (key) {
      const data = this.toJSON();
      if (data) {
        const sorted = (0, _sort.sortObjects)(data, key);
        this.reset(sorted);
      }
    }
  }

  /**
   * isEmpty - returns true is the collection is empty
   * @returns {boolean} returns true is the collection is empty
   */
  isEmpty() {
    return this.length === 0;
  }
  /**
   * Collection.size - returns the size of the collection
   * @returns {number} returns the size of the collection
   */
  size() {
    return this.length;
  }

  /**
   * toString - returns the collection data as a string
   * @returns {string} returns the collection data as a string
   */
  toString() {
    let ret = {};
    try {
      ret = JSON.stringify(this.toJSON());
    } catch (e) {
      console.error(e);
    }
    return ret;
  }

  /** Private method to reset all internal state. Called when the collection
   * is first initialized or reset.
   * @private
   */
  _reset() {
    this.length = 0;
    this.models = [];
    this._byId = {};
  }

  // Prepare a hash of attributes (or other model) to be added to this
  // collection.
  _prepareModel(attrs, options) {
    if (this._isModel(attrs)) {
      if (!attrs.collection) attrs.collection = this;
      return attrs;
    }
    options = options ? _clone(options) : {};
    options.collection = this;
    const model = new _abstractModel2.default(attrs, options); // used to be this.model, may be a problem if a custom model is passed.
    if (!model.validationError) {
      return model;
    }
    this.trigger("invalid", this, model.validationError, options);
    return false;
  }

  // Internal method called by both remove and set.
  _removeModels(models, options) {
    let removed = [];
    for (let i = 0; i < models.length; i++) {
      let model = this.get(models[i]);
      if (!model) continue;

      let index = this.indexOf(model);doctor;
      this.models.splice(index, 1);
      this.length--;

      // Remove references before triggering "remove" event to prevent an
      // infinite loop. #3693
      delete this._byId[model.cid];
      let id = this.modelId(model.attributes);
      if (id != null) delete this._byId[id];

      if (!options.silent) {
        options.index = index;
        model.trigger("remove", model, this, options);
      }

      removed.push(model);
      this._removeReference(model, options);
    }
    return removed;
  }

  // Method for checking whether an object should be considered a model for
  // the purposes of adding to the collection.
  _isModel(model) {
    return model instanceof _abstractModel2.default;
  }

  // Internal method to create a model's ties to a collection.
  _addReference(model, options) {
    this._byId[model.cid] = model;
    let id = this.modelId(model.attributes);
    if (id != null) this._byId[id] = model;
    model.on("all", this._onModelEvent, this);
  }

  // Internal method to sever a model's ties to a collection.
  _removeReference(model, options) {
    delete this._byId[model.cid];
    let id = this.modelId(model.attributes);
    if (id != null) delete this._byId[id];
    if (this === model.collection) delete model.collection;
    model.off("all", this._onModelEvent, this);
  }

  // Internal method called every time a model in the set fires an event.
  // Sets need to update their indexes when models change ids. All other
  // events simply proxy through. "add" and "remove" events that originate
  // in other collections are ignored.
  _onModelEvent(event, model, collection, options) {
    if (model) {
      if ((event === "add" || event === "remove") && collection !== this) return;
      if (event === "destroy") this.remove(model, options);
      if (event === "change") {
        let prevId = this.modelId(model.previousAttributes());
        let id = this.modelId(model.attributes);
        if (prevId !== id) {
          if (prevId != null) delete this._byId[prevId];
          if (id != null) this._byId[id] = model;
        }
      }
    }
    this.trigger.apply(this, arguments);
  }
};

exports.default = AbstractCollection;

/***/ }),

/***/ "./src/collection/iterator.js":
/*!************************************!*\
  !*** ./src/collection/iterator.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// CollectionIterator
// ------------------

// This "enum" defines the three possible kinds of values which can be emitted
// by a CollectionIterator that correspond to the values(), keys() and entries()
// methods on Collection, respectively.
const ITERATOR_VALUES = 1;
const ITERATOR_KEYS = 2;
const ITERATOR_KEYSVALUES = 3;

/** A CollectionIterator implements JavaScript's Iterator protocol, allowing the
 * use of `for of` loops in modern browsers and interoperation between
 * Collection and other JavaScript functions and third-party libraries
 * which can operate on Iterables.
 */
class CollectionIterator {
  constructor(collection, kind) {
    this._collection = collection;
    this._kind = kind;
    this._index = 0;
  }

  // All Iterators should themselves be Iterable.
  /* ???
  if ($$iterator) {
    CollectionIterator.prototype[$$iterator] = function() {
      return this;
    };
  }*/

  /**
   * Next model in collection<br/>
   * Once exhausted, remove the reference to the collection so future
   * calls to the next method always return done.
   */
  next() {
    if (this._collection) {
      // Only continue iterating if the iterated collection is long enough.
      if (this._index < this._collection.length) {
        const model = this._collection.at(this._index);
        this._index++;

        // Construct a value depending on what kind of values should be iterated.
        let value;
        if (this._kind === ITERATOR_VALUES) {
          value = model;
        } else {
          const id = this._collection.modelId(model.attributes);
          if (this._kind === ITERATOR_KEYS) {
            value = id;
          } else {
            // ITERATOR_KEYSVALUES
            value = [id, model];
          }
        }
        return { value: value, done: false };
      }

      // Once exhausted, remove the reference to the collection so future
      // calls to the next method always return done.
      this._collection = void 0;
    }
    return { value: void 0, done: true };
  }
};

exports.default = CollectionIterator;

/***/ }),

/***/ "./src/configuration.js":
/*!******************************!*\
  !*** ./src/configuration.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * A set of configuration properties for the framework
 * @enum Configuration
 * @property {string} LoggerLevel The level of the framework internal logger
 * @property {string} MessageBundle - the base name for messages in the framework (default: Messages)
 * @property {number} AsynchronousQueueTimeout the default milisecond timeout (default: 2000)
 * @property {number} ApplicationInitProcessTimeout the application init even timeout (default: 1000)
 */
const Configuration = {
  LoggerLevel: "error",
  MessageBundle: "Messages",
  AsynchronousQueueTimeout: 2000,
  ApplicationInitProcessTimeout: 1000
};

exports.default = Configuration;

/***/ }),

/***/ "./src/events.js":
/*!***********************!*\
  !*** ./src/events.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// Events

// Regular expression used to split event strings.
const EVENT_SPLITTER = exports.EVENT_SPLITTER = /\s+/;

// Iterates over the standard `event, callback` (as well as the fancy multiple
// space-separated events `"change blur", callback` and jQuery-style event
// maps `{event: callback}`).
const eventsApi = exports.eventsApi = (iteratee, events, name, callback, opts) => {
  let i = 0,
      names;
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
const internalOn = exports.internalOn = (obj, name, callback, context, listening) => {
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
const onApi = exports.onApi = (events, name, callback, options) => {
  if (callback) {
    const handlers = events[name] || (events[name] = []);
    const context = options.context,
          ctx = options.ctx,
          listening = options.listening;
    if (listening) {
      listening.count++;
    }
    handlers.push({ callback: callback, context: context, ctx: context || ctx, listening: listening });
  }
  return events;
};

// The reducing API that removes a callback from the `events` object.
const offApi = exports.offApi = (events, name, callback, options) => {
  if (!events) {
    return;
  }
  let i = 0,
      listening;
  const context = options.context,
        listeners = options.listeners;

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
      if (callback && callback !== handler.callback && callback !== handler.callback._callback || context && context !== handler.context) {
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
const triggerApi = exports.triggerApi = (objEvents, name, callback, args) => {
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
const triggerEvents = exports.triggerEvents = (events, args) => {
  let ev,
      i = -1;
  const l = events.length,
        a1 = args[0],
        a2 = args[1],
        a3 = args[2];
  switch (args.length) {
    case 0:
      while (++i < l) (ev = events[i]).callback.call(ev.ctx);return;
    case 1:
      while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1);return;
    case 2:
      while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2);return;
    case 3:
      while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2, a3);return;
    default:
      while (++i < l) (ev = events[i]).callback.apply(ev.ctx, args);return;
  }
};

/***/ }),

/***/ "./src/functions/allKeys.js":
/*!**********************************!*\
  !*** ./src/functions/allKeys.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isObject = __webpack_require__(/*! ./isObject.js */ "./src/functions/isObject.js");

var _isObject2 = _interopRequireDefault(_isObject);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * Augmented.allKeys
 * @method allKeys
 * @memberof Augmented
 * @param {object} obj The input object
 * @returns {array} Returns the array of ALL keys including prototyped
 */
const allKeys = obj => {
  if (!(0, _isObject2.default)(obj)) {
    return [];
  }
  return Object.getOwnPropertyNames(obj);
};

exports.default = allKeys;

/***/ }),

/***/ "./src/functions/arrayHas.js":
/*!***********************************!*\
  !*** ./src/functions/arrayHas.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Array.has - returns is a property is in the array (very fast return)
 * @function arrayhas
 * @memberof Augmented
 * @param {array} arr Source array
 * @param {object} key Key to test for
 * @returns true if property is included in an array
 */
const arrayHas = (arr, key) => {
  return arr.indexOf(key) !== -1;
};

exports.default = arrayHas;

/***/ }),

/***/ "./src/functions/before.js":
/*!*********************************!*\
  !*** ./src/functions/before.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _arguments = arguments;
const before = (nn, func) => {
  let result, n;
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  n = Number.parseInt(nn);
  return () => {
    if (--n > 0) {
      result = func.apply(undefined, _arguments);
    }
    if (n <= 1) {
      func = undefined;
    }
    return result;
  };
};

exports.default = before;

/***/ }),

/***/ "./src/functions/create.js":
/*!*********************************!*\
  !*** ./src/functions/create.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isObject = __webpack_require__(/*! ./isObject.js */ "./src/functions/isObject.js");

var _isObject2 = _interopRequireDefault(_isObject);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const result = prototype => {
  if (!(0, _isObject2.default)(prototype)) {
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
const create = (prototype, props) => {
  const o = result(prototype);
  if (props) {
    Object.assign(o, props);
  }
  return o;
};

exports.default = create;

/***/ }),

/***/ "./src/functions/exec.js":
/*!*******************************!*\
  !*** ./src/functions/exec.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * exec method - Execute a function by name
 * @method exec
 * @memberof Augmented
 * @param {string} functionName The name of the function
 * @param {object} context The context to call from
 * @param {object} args Arguments
 */
const exec = (functionName, context, ...args) => {
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

exports.default = exec;

/***/ }),

/***/ "./src/functions/extend.js":
/*!*********************************!*\
  !*** ./src/functions/extend.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
const extend = (...args) => {
  let i = 0;
  const l = args.length;
  for (i = 1; i < l; i++) {
    let key;
    for (key in args[i]) {
      if (args[i].hasOwnProperty(key)) {
        args[0][key] = args[i][key];
      }
    }
  }
  return args[0];
};

exports.default = extend;

/***/ }),

/***/ "./src/functions/fibonacci.js":
/*!************************************!*\
  !*** ./src/functions/fibonacci.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
const fibonacci = exports.fibonacci = n => {
  const phi = (1 + Math.sqrt(5)) / 2;
  const asymp = Math.pow(phi, n) / Math.sqrt(5);
  return Math.round(asymp);
};

const fibonacciSequence = exports.fibonacciSequence = l => {
  const fib = [];
  let i = 0;
  for (i = 0; i < l; i++) {
    fib.push(fibonacci(i));
  }
  return fib;
};

/***/ }),

/***/ "./src/functions/has.js":
/*!******************************!*\
  !*** ./src/functions/has.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Augmented.has
 * @method has
 * @memberof Augmented
 * @param {object} obj The input object
 * @param {object} key The test key
 * @returns {boolean} Returns true of the key exists
 */
const has = (obj, key) => {
  return obj !== null && hasOwnProperty.call(obj, key);
};

exports.default = has;

/***/ }),

/***/ "./src/functions/isDefined.js":
/*!************************************!*\
  !*** ./src/functions/isDefined.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Augmented.isDefined - Checks and returns if a passed variable is defined
 * @method isDefined
 * @memberof Augmented
 * @param {string} variable to check
 * @returns {boolean} true if value is defined
 */
const isDefined = val => {
  return typeof val != "undefined";
};

exports.default = isDefined;

/***/ }),

/***/ "./src/functions/isFunction.js":
/*!*************************************!*\
  !*** ./src/functions/isFunction.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Augmented.isFunction -
 * returns true if called name is a function
 * simular to jQuery .isFunction method
 * @method Augmented.isFunction
 * @param {function} name The name of the function to test
 * @memberof Augmented
 * @returns true if called name is a function
 */
const isFunction = name => {
  return Object.prototype.toString.call(name) == "[object Function]";
};

exports.default = isFunction;

/***/ }),

/***/ "./src/functions/isObject.js":
/*!***********************************!*\
  !*** ./src/functions/isObject.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Augmented.isObject
 * @method isObject
 * @memberof Augmented
 * @param {object} obj The input object
 * @returns {boolean} Returns true of the param is an object
 */
const isObject = obj => {
  const type = typeof obj;
  return type === "function" || type === "object" && !!obj;
};

exports.default = isObject;

/***/ }),

/***/ "./src/functions/isString.js":
/*!***********************************!*\
  !*** ./src/functions/isString.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Augmented.isString -
 * checks if a value is a String
 * @method isString
 * @memberof Augmented
 * @param {string} variable to check
 * @returns {boolean} true if value is a string
 */
const isString = val => {
  return typeof val === "string" || !!val && typeof val === "object" && Object.prototype.toString.call(val) === "[object String]";
};

exports.default = isString;

/***/ }),

/***/ "./src/functions/once.js":
/*!*******************************!*\
  !*** ./src/functions/once.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _before = __webpack_require__(/*! ./before.js */ "./src/functions/before.js");

var _before2 = _interopRequireDefault(_before);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const once = func => {
  return (0, _before2.default)(2, func);
};

exports.default = once;

/***/ }),

/***/ "./src/functions/pad.js":
/*!******************************!*\
  !*** ./src/functions/pad.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
const pad = (p, str, padLeft) => {
  if (typeof str === "undefined") {
    return p;
  }
  if (padLeft) {
    return `${p}${str}`;
  } else {
    return `${str}${p}`;
  }
};

exports.default = pad;

/***/ }),

/***/ "./src/functions/result.js":
/*!*********************************!*\
  !*** ./src/functions/result.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isFunction = __webpack_require__(/*! ./isFunction.js */ "./src/functions/isFunction.js");

var _isFunction2 = _interopRequireDefault(_isFunction);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * Augmented.result - returns named property in an object
 * simular to underscore .result method
 * @function result
 * @memberof Augmented
 * @returns named property in an object
 */
const result = (object, property) => {
  if (object === null) {
    return;
  }
  const value = object[property];
  return (0, _isFunction2.default)(value) ? value.call(object) : value;
};

exports.default = result;

/***/ }),

/***/ "./src/functions/some.js":
/*!*******************************!*\
  !*** ./src/functions/some.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
const some = (arr, func) => {
  if (Array.isArray(arr)) {
    return arr.some(func);
  }
  return false;
};

exports.default = some;

/***/ }),

/***/ "./src/functions/splice.js":
/*!*********************************!*\
  !*** ./src/functions/splice.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// Splices `insert` into `array` at index `at`.
const splice = (array, insert, at) => {
  at = Math.min(Math.max(at, 0), array.length);
  let tail = Array(array.length - at);
  const length = insert.length;
  let i;
  for (i = 0; i < tail.length; i++) {
    tail[i] = array[i + at];
  }
  for (i = 0; i < length; i++) {
    array[i + at] = insert[i];
  }
  for (i = 0; i < tail.length; i++) {
    array[i + length + at] = tail[i];
  }
};

exports.default = splice;

/***/ }),

/***/ "./src/functions/uniqueId.js":
/*!***********************************!*\
  !*** ./src/functions/uniqueId.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
let idCounter = 0;

const uniqueId = prefix => {
  const id = ++idCounter;
  return `${prefix}${id}`;
};

exports.default = uniqueId;

/***/ }),

/***/ "./src/logger/abstractLogger.js":
/*!**************************************!*\
  !*** ./src/logger/abstractLogger.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pad = __webpack_require__(/*! ../functions/pad.js */ "./src/functions/pad.js");

var _pad2 = _interopRequireDefault(_pad);

var _level = __webpack_require__(/*! ./level.js */ "./src/logger/level.js");

var _level2 = _interopRequireDefault(_level);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * Augmented Abstract Logger
 * @param {Logger.Level} l The level to initialize the logger with
 * @memberof Logger
 * @abstract
 */
class AbstractLogger {
  constructor(l) {
    this.loggerLevel = l ? l : _level2.default.INFO;
    this.label = _level2.default;
    this.TIME_SEPERATOR = ":";
    this.DATE_SEPERATOR = "-";
    this.OPEN_GROUP = " [ ";
    this.CLOSE_GROUP = " ] ";
  }

  _getLogTime() {
    const now = new Date();
    const s = `${now.getFullYear()}${this.DATE_SEPERATOR}${now.getMonth() + 1}${this.DATE_SEPERATOR}${now.getDate()} ${now.getHours()}${this.TIME_SEPERATOR}${now.getMinutes()}${this.TIME_SEPERATOR}${now.getSeconds()}${this.TIME_SEPERATOR}${now.getMilliseconds()}`;
    return (0, _pad2.default)("                        ", s, false);
  }

  /**
   * log a message
   * @param {string} message The message to log
   * @param {Logger.Level} level The level of the log message
   * @returns {string} The message
   */
  log(message, level) {
    let m = "";
    if (message) {
      if (!level) {
        level = _level2.default.INFO;
      }
      if (this.loggerLevel === _level2.default.DEBUG && level === _level2.default.DEBUG) {
        m = this._logMe(`${this._getLogTime()}${this.OPEN_GROUP}DEBUG${this.CLOSE_GROUP}${message}`, level);
      } else if (level === _level2.default.ERROR) {
        m = this._logMe(`${this._getLogTime()}${this.OPEN_GROUP}ERROR${this.CLOSE_GROUP}${message}`, level);
      } else if (level === _level2.default.WARN) {
        m = this._logMe(`${this._getLogTime()}${this.OPEN_GROUP}WARN ${this.CLOSE_GROUP}${message}`, level);
      } else if (this.loggerLevel === _level2.default.DEBUG || this.loggerLevel === _level2.default.INFO) {
        m = this._logMe(`${this._getLogTime()}${this.OPEN_GROUP}INFO ${this.CLOSE_GROUP}${message}`, level);
      }
    }
    return m;
  }

  /**
   * Logs a message in info level
   * @param {string} message
   */
  info(message) {
    this.log(message, _level2.default.INFO);
  }

  /**
   * Log a message in error level
   * @param {string} message
   */
  error(message) {
    this.log(message, _level2.default.ERROR);
  }

  /**
   * Log a message in debug level
   * @param {string} message
   */
  debug(message) {
    this.log(message, _level2.default.DEBUG);
  }

  /**
   * Log a message in warn level
   * @param {string} message
   */
  warn(message) {
    this.log(message, _level2.default.WARN);
  }

  /**
   * logMe method - the actual logger method that logs.  Each instance will have it's own<br/>
   * override this in an instance
   * @example _logMe(message, level) { ... };
   * @method _logMe
   * @param {string} message The message to log
   * @param {string} level The level to log to
   * @returns {string} The message
   */
  _logMe(message, level) {}
};

exports.default = AbstractLogger;

/***/ }),

/***/ "./src/logger/colorConsoleLogger.js":
/*!******************************************!*\
  !*** ./src/logger/colorConsoleLogger.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _abstractLogger = __webpack_require__(/*! ./abstractLogger.js */ "./src/logger/abstractLogger.js");

var _abstractLogger2 = _interopRequireDefault(_abstractLogger);

var _level = __webpack_require__(/*! ./level.js */ "./src/logger/level.js");

var _level2 = _interopRequireDefault(_level);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * Color Console Logger
 * @param {Logger.Level} l The level to initialize the logger with
 * @memberof Logger
 * @extends AbstractLogger
 */
class ColorConsoleLogger extends _abstractLogger2.default {
  constructor(l) {
    super(l);
  }
  _logMe(message, level) {
    if (level === _level2.default.INFO) {
      console.info("\x1b[36m" + message + "\x1b[0m");
    } else if (level === _level2.default.ERROR) {
      console.error("\x1b[31m" + message + "\x1b[0m");
    } else if (level === _level2.default.DEBUG) {
      console.log("\x1b[34m" + message + "\x1b[0m");
    } else if (level === _level2.default.WARN) {
      console.warn("\x1b[33m" + message + "\x1b[0m");
    } else {
      console.log("\x1b[37m" + message + "\x1b[0m");
    }
  }
};

exports.default = ColorConsoleLogger;

/***/ }),

/***/ "./src/logger/consoleLogger.js":
/*!*************************************!*\
  !*** ./src/logger/consoleLogger.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _abstractLogger = __webpack_require__(/*! ./abstractLogger.js */ "./src/logger/abstractLogger.js");

var _abstractLogger2 = _interopRequireDefault(_abstractLogger);

var _level = __webpack_require__(/*! ./level.js */ "./src/logger/level.js");

var _level2 = _interopRequireDefault(_level);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * Console Logger
 * @param {Logger.Level} l The level to initialize the logger with
 * @memberof Logger
 * @extends AbstractLogger
 */
class ConsoleLogger extends _abstractLogger2.default {
  constructor(l) {
    super(l);
  }
  _logMe(message, level) {
    if (level === _level2.default.INFO) {
      console.info(message);
    } else if (level === _level2.default.ERROR) {
      console.error(message);
    } else if (level === _level2.default.DEBUG) {
      console.log(message);
    } else if (level === _level2.default.WARN) {
      console.warn(message);
    } else {
      console.log(message);
    }
    return message;
  }
};

exports.default = ConsoleLogger;

/***/ }),

/***/ "./src/logger/level.js":
/*!*****************************!*\
  !*** ./src/logger/level.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Logger Level
 * @name Level
 * @enum {Symbol}
 * @property {Symbol} INFO The Info level
 * @property {Symbol} DEBUG The debug level
 * @property {Symbol} ERROR The error level
 * @property {Symbol} WARN The warning level
 * @memberof Logger
 */
const Level = {};
Level.INFO = Symbol("info");
Level.DEBUG = Symbol("debug");
Level.ERROR = Symbol("error");
Level.WARN = Symbol("warn");

exports.default = Level;

/***/ }),

/***/ "./src/logger/loggerFactory.js":
/*!*************************************!*\
  !*** ./src/logger/loggerFactory.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _consoleLogger = __webpack_require__(/*! ./consoleLogger.js */ "./src/logger/consoleLogger.js");

var _consoleLogger2 = _interopRequireDefault(_consoleLogger);

var _colorConsoleLogger = __webpack_require__(/*! ./colorConsoleLogger.js */ "./src/logger/colorConsoleLogger.js");

var _colorConsoleLogger2 = _interopRequireDefault(_colorConsoleLogger);

var _type = __webpack_require__(/*! ./type.js */ "./src/logger/type.js");

var _type2 = _interopRequireDefault(_type);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * A logger factory for creating a logger instance
 * @memberof Logger
 */
class LoggerFactory {
  constructor() {}
  /**
   * getLogger - get an instance of a logger
   * @param {Logger.Type} type Type of logger instance
   * @param {Logger.Level} level Level to set the logger to
   * @returns {Logger.AbstractLogger} logger Instance of a logger by istance type
   * @example Logger.LoggerFactory.getLogger(Logger.Type.CONSOLE, Logger.Level.DEBUG);
   */
  static getLogger(type, level) {
    if (type === _type2.default.CONSOLE) {
      return new _consoleLogger2.default(level);
    } else if (type === _type2.default.COLOR_CONSOLE) {
      return new _colorConsoleLogger2.default(level);
    } /*else if (type === Type.REST) {
      return new RestLogger(level);
      }*/
  }
};

exports.default = LoggerFactory;

/***/ }),

/***/ "./src/logger/type.js":
/*!****************************!*\
  !*** ./src/logger/type.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Logger Type
 * @name Type
 * @enum {Symbol}
 * @property {Symbol} CONSOLE The console logger (HTML5 console)
 * @property {Symbol} COLOR_CONSOLE The color console logger (HTML5 console)
 * @memberof Logger
 */
const Type = {};
Type.CONSOLE = Symbol("console");
Type.COLOR_CONSOLE = Symbol("colorConsole");
//Type.REST = Symbol("rest");

exports.default = Type;

/***/ }),

/***/ "./src/model/abstractModel.js":
/*!************************************!*\
  !*** ./src/model/abstractModel.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _object = __webpack_require__(/*! ../object.js */ "./src/object.js");

var _object2 = _interopRequireDefault(_object);

var _extend = __webpack_require__(/*! ../functions/extend.js */ "./src/functions/extend.js");

var _extend2 = _interopRequireDefault(_extend);

var _uniqueId = __webpack_require__(/*! ../functions/uniqueId.js */ "./src/functions/uniqueId.js");

var _uniqueId2 = _interopRequireDefault(_uniqueId);

var _allKeys = __webpack_require__(/*! ../functions/allKeys.js */ "./src/functions/allKeys.js");

var _allKeys2 = _interopRequireDefault(_allKeys);

var _validationFramework = __webpack_require__(/*! ../validation/validationFramework.js */ "./src/validation/validationFramework.js");

var _validationFramework2 = _interopRequireDefault(_validationFramework);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// for now
const _clone = __webpack_require__(/*! lodash.clone */ "./node_modules/lodash.clone/index.js");
const _result = __webpack_require__(/*! lodash.result */ "./node_modules/lodash.result/index.js");
const _isEmpty = __webpack_require__(/*! lodash.isempty */ "./node_modules/lodash.isempty/index.js");
const _has = __webpack_require__(/*! lodash.has */ "./node_modules/lodash.has/index.js");
const _isEqual = __webpack_require__(/*! lodash.isequal */ "./node_modules/lodash.isequal/index.js");
const _defaults = __webpack_require__(/*! lodash.defaults */ "./node_modules/lodash.defaults/index.js");
const _iteratee = __webpack_require__(/*! lodash.iteratee */ "./node_modules/lodash.iteratee/index.js");
const _defer = __webpack_require__(/*! lodash.defer */ "./node_modules/lodash.defer/index.js");
const _escape = __webpack_require__(/*! lodash.escape */ "./node_modules/lodash.escape/index.js");

const wrapError = (model, options) => {
  if (model) {
    const error = options.error;
    options.error = resp => {
      if (error) {
        error.call(options.context, model, resp, options);
      }
      model.trigger("error", model, resp, options);
    };
  }
};

/**
 * AbstractModel <br/>
 * Supports: <ul>
 * <li>Validation and Schemas</li>
 * <li>Security</li>
 * </ul>
 * @extends Object
 */
class AbstractModel extends _object2.default {
  constructor(attributes, options, ...args) {
    super(options);
    this.id = 0;
    this.idAttribute = "id"; // ????
    this.cidPrefix = "c";
    this.defaults = {};
    this.validationError = null;
    this.urlRoot = "";
    this._pending = false;
    this._changing = false;
    this._previousAttributes = null;
    this._attributes = attributes ? attributes : {};
    if (!options) {
      options = {};
    }

    this.schema = null;
    this.validationMessages = {
      valid: true
    };

    if (options && options.schema) {
      this.schema = options.schema;
    }

    this.preinitialize(args);
    this.cid = (0, _uniqueId2.default)(this.cidPrefix);
    if (options && options.collection) {
      this.collection = options.collection;
    }
    let attrs;
    if (options && options.parse) {
      attrs = this.parse(attrs, options) || {};
    }

    this.defaults = _result(this, "defaults");
    attrs = _defaults((0, _extend2.default)({}, this.defaults, attrs), this.defaults);
    this.set(attrs, options);
    this.changed = {};
    this.initialize(args);
  }

  /**
   * Schema property
   * @property {object} schema The JSON schema from this model
   */

  /**
   * Validation Message property
   * @property {object} validationMessages The property holding validation message data
   */

  preinitialize(...args) {}

  initialize(...args) {}

  /** Get the attribute form the Model
   * @returns {any} The model attribute
   */
  get(attribute) {
    return this._attributes[attribute];
  }

  /** Set a hash of model attributes on the object, firing `"change"`. This is
   * the core primitive operation of a model, updating the data and notifying
   * anyone who needs to know about the change in state.
   */
  set(key, val, options) {
    if (key === null) {
      return this;
    }
    // Handle both `"key", value` and `{key: value}` -style arguments.
    let attrs;
    if (typeof key === "object") {
      attrs = key;
      options = val;
    } else {
      (attrs = {})[key] = val;
    }

    if (!options) {
      options = {};
    }

    // Run validation.
    if (!this._validate(attrs, options)) {
      return false;
    }

    // Extract attributes and options.
    let unset = options.unset;
    let silent = options.silent;
    let changes = [];
    let changing = this._changing;
    this._changing = true;

    if (!changing) {
      this._previousAttributes = _clone(this._attributes);
      this.changed = {};
    }

    let current = this._attributes;
    let changed = this.changed;
    let prev = this._previousAttributes;

    let attr;
    // For each `set` attribute, update or delete the current value.
    for (attr in attrs) {
      val = attrs[attr];
      if (!_isEqual(current[attr], val)) {
        changes.push(attr);
      }
      if (!_isEqual(prev[attr], val)) {
        changed[attr] = val;
      } else {
        delete changed[attr];
      }
      unset ? delete current[attr] : current[attr] = val;
    }

    // Update the `id`.
    if (this.idAttribute in attrs) {
      this.id = this.get(this.idAttribute);
    }

    // Trigger all relevant attribute changes.
    if (!silent) {
      if (changes.length) {
        this._pending = options;
      }
      let i = 0;
      for (i = 0; i < changes.length; i++) {
        this.trigger("change:" + changes[i], this, current[changes[i]], options);
      }
    }

    // You might be wondering why there's a `while` loop here. Changes can
    // be recursively nested within `"change"` events.
    if (changing) {
      return this;
    }
    if (!silent) {
      while (this._pending) {
        options = this._pending;
        this._pending = false;
        this.trigger("change", this, options);
      }
    }
    this._pending = false;
    this._changing = false;
    return this;
  }

  /** Escape the attribute data
   */
  escape(attribute) {
    return _escape(this.get(attr));
  }

  /** Has an attribute in the Model
   * @returns {bolean} Returns true if exists
   */
  has(attribute) {
    return this.get(attr) !== null;
  }

  /** Special-cased proxy to underscore's `matches` method.
   */
  matches(attrs) {
    return !!_iteratee(attrs, this)(this._attributes);
  }

  /** Remove an attribute from the model, firing `"change"`. `unset` is a noop
   * if the attribute doesn't exist.
   */
  unset(attr, options) {
    return this.set(attr, void 0, (0, _extend2.default)({}, options, { unset: true }));
  }

  /** Clear all attributes on the model, firing `"change"`.
   */
  clear(options) {
    let attrs = {};
    for (let key in this._attributes) attrs[key] = void 0;
    return this.set(attrs, (0, _extend2.default)({}, options, { unset: true }));
  }

  /**
   * Transforms model to pure toJSON
   */
  toJSON() {
    return _clone(this._attributes);
  }

  //– sync x

  /** Fetch the model from the server, merging the response with the model's
   * local attributes. Any changed attributes will trigger a "change" event.
   */
  fetch(options) {
    options = (0, _extend2.default)({ parse: true }, options);
    let model = this;
    let success = options.success;
    options.success = resp => {
      let serverAttrs = options.parse ? model.parse(resp, options) : resp;
      if (!model.set(serverAttrs, options)) {
        return false;
      }
      if (success) {
        success.call(options.context, model, resp, options);
      }
      model.trigger("sync", model, resp, options);
    };
    wrapError(this, options);
    return this.sync("read", this, options);
  }

  /** Set a hash of model attributes, and sync the model to the server.
   * If the server returns an attributes hash that differs, the model's
   * state will be `set` again.
   */
  save(key, val, options) {
    // Handle both `"key", value` and `{key: value}` -style arguments.
    let attrs;
    if (key == null || typeof key === "object") {
      attrs = key;
      options = val;
    } else {
      (attrs = {})[key] = val;
    }

    options = (0, _extend2.default)({ validate: true, parse: true }, options);
    let wait = options.wait;

    // If we're not waiting and attributes exist, save acts as
    // `set(attr).save(null, opts)` with validation. Otherwise, check if
    // the model will be valid when the attributes, if any, are set.
    if (attrs && !wait) {
      if (!this.set(attrs, options)) {
        return false;
      }
    } else if (!this._validate(attrs, options)) {
      return false;
    }

    // After a successful server-side save, the client is (optionally)
    // updated with the server-side state.
    let model = this;
    let success = options.success;
    let attributes = this._attributes;
    options.success = resp => {
      // Ensure attributes are restored during synchronous saves.
      model.attributes = attributes;
      let serverAttrs = options.parse ? model.parse(resp, options) : resp;
      if (wait) {
        serverAttrs = (0, _extend2.default)({}, attrs, serverAttrs);
      }
      if (serverAttrs && !model.set(serverAttrs, options)) {
        return false;
      }
      if (success) {
        success.call(options.context, model, resp, options);
      }
      model.trigger("sync", model, resp, options);
    };
    wrapError(this, options);

    // Set temporary attributes if `{wait: true}` to properly find new ids.
    if (attrs && wait) {
      this._attributes = (0, _extend2.default)({}, attributes, attrs);
    }

    let method = this.isNew() ? "create" : options.patch ? "patch" : "update";
    if (method === "patch" && !options.attrs) {
      options.attrs = attrs;
    }
    let request = this.sync(method, this, options);

    // Restore attributes.
    this._attributes = attributes;

    return request;
  }

  /** Destroy this model on the server if it was already persisted.
   * Optimistically removes the model from its collection, if it has one.
   * If `wait: true` is passed, waits for the server to respond before removal.
   */
  destroy(options) {
    options = options ? _clone(options) : {};
    let model = this;
    let success = options.success;
    let wait = options.wait;

    let destroy = () => {
      model.stopListening();
      model.trigger("destroy", model, model.collection, options);
    };

    options.success = resp => {
      if (wait) {
        destroy();
      }
      if (success) {
        success.call(options.context, model, resp, options);
      }
      if (!model.isNew()) {
        model.trigger("sync", model, resp, options);
      }
    };

    let request = false;
    if (this.isNew()) {
      _defer(options.success);
    } else {
      wrapError(this, options);
      request = this.sync("delete", this, options);
    }
    if (!wait) destroy();
    return request;
  }

  /** Default URL for the model's representation on the server -- if you're
   * using restful methods, override this to change the endpoint
   * that will be called.
   */
  url() {
    let base = _result(this, "urlRoot") || _result(this.collection, "url") || urlError();
    if (this.isNew()) {
      return base;
    }
    let id = this.get(this.idAttribute);
    return base.replace(/[^\/]$/, "$&/") + encodeURIComponent(id);
  }

  keys() {
    return Object.keys(this._attributes);
  }

  values() {
    return Object.values(this._attributes);
  }

  /* if needed these can be used from lodash or underscore against the model's attributes
    pairs() { // ??
  
    };
  
    invert() { // ??
  
    };
  
    pick() { // ??
  
    };
  
    omit() { // ??
  
    };
  
    chain() { // ??
  
    };
  */

  /** **parse** converts a response into the hash of attributes to be `set` on
   * the model. The default implementation is just to pass the response along.
   */
  parse(resp, options) {
    return resp;
  }

  /** Create a new model with identical attributes to this one.
   */
  clone() {
    return new this.constructor(this._attributes);
  }

  /** A model is new if it has never been saved to the server, and lacks an id.
   */
  isNew() {
    return !this.has(this.idAttribute);
  }

  /** Determine if the model has changed since the last `"change"` event.
   * If you specify an attribute name, determine if that attribute has changed.
   */
  hasChanged(attr) {
    if (attr == null) {
      return !_isEmpty(this.changed);
    }
    return _has(this.changed, attr);
  }

  /** Return an object containing all the attributes that have changed, or
   * false if there are no changed attributes. Useful for determining what
   * parts of a view need to be updated and/or what attributes need to be
   * persisted to the server. Unset attributes will be set to undefined.
   * You can also pass an attributes object to diff against the model,
   * determining if there *would be* a change.
   */
  changedAttributes(diff) {
    if (!diff) {
      return this.hasChanged() ? _clone(this.changed) : false;
    }
    let old = this._changing ? this._previousAttributes : this._attributes;
    let changed = {};
    let hasChanged;
    for (let attr in diff) {
      let val = diff[attr];
      if (_isEqual(old[attr], val)) {
        continue;
      }
      changed[attr] = val;
      hasChanged = true;
    }
    return hasChanged ? changed : false;
  }

  /** Get the previous value of an attribute, recorded at the time the last
   * `"change"` event was fired.
   */
  previous(attr) {
    if (attr == null || !this._previousAttributes) {
      return null;
    }
    return this._previousAttributes[attr];
  }

  /** Get all of the attributes of the model at the time of the previous
   * `"change"` event.
   */
  previousAttributes() {
    return _clone(this._previousAttributes);
  }

  /**
   * supportsValidation - Returns True if this model supports validation
   * @returns {boolean} Returns True if this model supports validation
   */
  supportsValidation() {
    if (this.schema !== null) {
      return true;
    }
    return false;
  }

  /**
   * isValid - Returns True if this model is valid
   * Runs two level validation, attribute-level then JSON Schema
   * @returns {boolean} Returns True if this model is valid
   */
  isValid(options) {
    const valid = this._validate({}, (0, _extend2.default)({}, options, { validate: true }));
    if (valid) {
      const messages = this.validate();
      return this.validationMessages.valid;
    }
    return valid;
  }
  /**
   * Validates the model
   * @returns {array} Returns array of messages from validation
   */
  validate() {
    if (!this._validationFramework) {
      this._validationFramework = new _validationFramework2.default();
    }
    const v = this._validationFramework;

    if (this.supportsValidation() && v.supportsValidation()) {
      // validate from Validator
      this.validationMessages = v.validate(this.toJSON(), this.schema);
    } else {
      this.validationMessages.valid = true;
    }
    return this.validationMessages;
  }
  /**
   * Gets the validation messages only in an array
   * @returns {array} Returns array of messages from validation
   */
  getValidationMessages() {
    const messages = [];
    if (this.validationMessages && this.validationMessages.errors) {
      const l = this.validationMessages.errors.length;
      var i = 0;
      for (i = 0; i < l; i++) {
        messages.push(this.validationMessages.errors[i].message + " from " + this.validationMessages.errors[i].dataPath);
      }
    }
    return messages;
  }
  /**
   * Sync model data to bound REST call
   */
  sync(method, model, options) {}
  /**
   * reset - clear and rewrite the model with passed data
   * @param {object} data The data to replace the model with (optional)
   */
  reset(data) {
    this.clear();
    if (data) {
      this.set(data);
    }
  }

  /**
   * isEmpty - returns true is the model is empty
   * @returns {boolean} returns true is the model is empty
   */
  isEmpty() {
    return this._attributes ? Object.keys(this._attributes).length === 0 : true;
  }

  /**
   * toString - returns the model data as a string
   * @returns {string} returns the model data as a string
   */
  toString() {
    return JSON.stringify(this.toJSON());
  }

  /**
   * fetch - Fetches the model as a 'get'
   */
  fetch(options) {
    this.sync("read", this, options);
  }
  /**
   * save - Saves the model as a 'create'
   */
  save(options) {
    this.sync("create", this, options);
  }
  /**
   * update - Updates the model as a 'update'
   */
  update(options) {
    this.sync("update", this, options);
  }
  /**
   * destroy - Deletes the model as a 'delete'
   */
  destroy(options) {
    this.sync("delete", this, options);
  }

  /** Run validation against the next complete set of model attributes,
   * returning `true` if all is well. Otherwise, fire an `"invalid"` event.
   * @private
   */
  _validate(attrs, options) {
    if (!options.validate || !this.validate) {
      return true;
    }
    const messages = this.validate();
    //attrs = extend({}, this._attributes, attrs);
    //const error = this.validationError = this.validate(attrs, options);
    //console.log(`Validate error ${JSON.stringify(error)}`);
    //if (!error.valid) {
    //  return true;
    //}
    if (messages.valid) {
      return true;
    }
    this.trigger("invalid", this, messages, (0, _extend2.default)(options, { validationError: messages }));
    return false;
  }
};

exports.default = AbstractModel;

/***/ }),

/***/ "./src/object.js":
/*!***********************!*\
  !*** ./src/object.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _uniqueId = __webpack_require__(/*! ./functions/uniqueId.js */ "./src/functions/uniqueId.js");

var _uniqueId2 = _interopRequireDefault(_uniqueId);

var _once = __webpack_require__(/*! ./functions/once.js */ "./src/functions/once.js");

var _once2 = _interopRequireDefault(_once);

var _events = __webpack_require__(/*! ./events.js */ "./src/events.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _bind = __webpack_require__(/*! lodash.bind */ "./node_modules/lodash.bind/index.js");

/**
 * Augmented Object
 * Base class for other classes to extend from
 * @name Object
 * @class
 * @param {object} options Object options
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
  }

  /**
   * Initialize the object
   * @method initialize
   * @returns {object} Returns this context
   * @memberof Augmented.Object
   */
  initialize(...args) {
    return this;
  }

  /**
   * The passed options
   * @property options
   * @memberof Augmented.Object
   */
  get options() {
    return this._options;
  }

  set options(options) {
    this._options = options;
  }

  /**
   * The Events
   * @property events
   */
  get events() {
    return this._events;
  }

  set events(events) {
    this._events = events;
  }

  /**
   * Trigger one or many events, firing all bound callbacks. Callbacks are
   * passed the same arguments as `trigger` is, apart from the event name
   * (unless you're listening on `"all"`, which will cause your callback to
   * receive the true name of the event as the first argument).
   * @param {string} name The name of the event
   * @param {any} args any number of additional arguments
   * @returns {object} Returns this context
   */
  trigger(name, ...args) {
    //console.log("events", this._events);
    //console.log("trigger: name", name);
    //console.log("trigger: args", args);
    if (this._events) {
      //const length = Math.max(0, args.length - 1);
      const argsA = Array.isArray(args) ? args : Array.from(args); //(length);
      //let i = 0;
      //for (i = 0; i < length; i++) {
      //  argsA[i] = args[i + 1];
      //}
      //console.log(`calling eventsApi(${triggerApi}, ${this._events}, ${name}, ${void 0}, ${argsA});`);
      (0, _events.eventsApi)(_events.triggerApi, this._events, name, void 0, argsA);
    }
    return this;
  }

  /**
   * Bind an event to only be triggered a single time. After the first time
   * the callback is invoked, its listener will be removed. If multiple events
   * are passed in using the space-separated syntax, the handler will fire
   * once for each event, not once for a combination of all events.
   * @param {string} name The name of the event
   * @param {function} callback The callback to evoke
   * @param {object} context The context of the callback
   * @returns {object} Returns this context
   */
  once(name, callback, context) {
    // Map the event into a `{event: once}` object.
    const events = (0, _events.eventsApi)(this._onceMap, {}, name, callback, _bind(this.off, this));
    if (typeof name === "string" && context == null) {
      callback = void 0;
    }
    return this.on(events, callback, context);
  }

  /**
   * Remove one or many callbacks. If `context` is null, removes all
   * callbacks with that function. If `callback` is null, removes all
   * callbacks for the event. If `name` is null, removes all bound
   * callbacks for all events.
   * @param {string} name The name of the event
   * @param {function} callback The callback to evoke
   * @param {object} context The context of the callback
   * @returns {object} Returns this context
   */
  off(name, callback, context) {
    if (this._events) {
      this._events = (0, _events.eventsApi)(_events.offApi, this._events, name, callback, {
        context: context,
        listeners: this._listeners
      });
    }
    return this;
  }

  /**
   * Tell this object to stop listening to either specific events ... or
   * to every object it's currently listening to.
   * @param {object} obj The object to stop listening to
   * @param {string} name The name of the event
   * @param {function} callback The callback to evoke
   * @returns {object} Returns this context
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
  }

  /**
   * Bind an event to a `callback` function. Passing `"all"` will bind
   * the callback to all events fired.
   * @param {string} name The name of the event
   * @param {function} callback The callback to evoke
   * @param {object} context The context of the callback
   * @returns {object} Returns this context
   */
  on(name, callback, context) {
    return (0, _events.internalOn)(this, name, callback, context);
  }

  /**
   * Inversion-of-control versions of `on`. Tell *this* object to listen to
   * an event in another object... keeping track of what it's listening to
   * for easier unbinding later.
   * @param {object} obj The object to stop listening to
   * @param {string} name The name of the event
   * @param {function} callback The callback to evoke
   * @returns {object} Returns this context
   */
  listenTo(obj, name, callback) {
    if (obj) {
      const id = obj._listenId || (obj._listenId = (0, _uniqueId2.default)("l"));
      const listeningTo = this._listeningTo || (this._listeningTo = {});
      let listening = listeningTo[id];

      // This object is not listening to any other events on `obj` yet.
      // Setup the necessary references to track the listening callbacks.
      if (!listening) {
        const thisId = this._listenId || (this._listenId = (0, _uniqueId2.default)("l"));
        listening = listeningTo[id] = { obj: obj, objId: id, id: thisId, listeningTo: listeningTo, count: 0 };
      }

      // Bind callbacks on obj, and keep track of them on listening.
      (0, _events.internalOn)(obj, name, callback, this, listening);
    }
    return this;
  }

  /**
   * Inversion-of-control versions of `once`.
   * @param {object} obj The object to stop listening to
   * @param {string} name The name of the event
   * @param {function} callback The callback to evoke
   * @returns {object} Returns this context
   */
  listenToOnce(obj, name, callback) {
    // Map the event into a `{event: once}` object.
    const events = (0, _events.eventsApi)(this._onceMap, {}, name, callback, _bind(this.stopListening, this, obj));
    return this.listenTo(obj, events);
  }

  // Reduces the event callbacks into a map of `{event: onceWrapper}`.
  // `offer` unbinds the `onceWrapper` after it has been called.
  _onceMap(map, name, callback, offer) {
    if (callback) {
      const __once = map[name] = (0, _once2.default)(() => {
        offer(name, __once);
        callback.apply(this, arguments);
      });
      __once._callback = callback;
    }
    return map;
  }
};

exports.default = AugmentedObject;

/***/ }),

/***/ "./src/resourceBundle.js":
/*!*******************************!*\
  !*** ./src/resourceBundle.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//TODO: add a library or make your own.
//var resourceBundle = (!resourceBundle) ? new i18nBase() : resourceBundle;

/**
 * ResourceBundle Object used for configuration of a bundle
 * @namespace Augmented.Utility.BundleObject
 * @memberof Augmented.Utility
 * @name Augmented.Utility.BundleObject
 * @property {string} name Name/uri/file of the bundle
 * @property {string} mode Bundlefile type (default: both)
 * @property {boolean} cache Cache reading from bundle (default: true)
 */
const BundleObject = exports.BundleObject = {
  name: '',
  mode: 'both',
  cache: true
};

/**
 * Augmented.Utility.ResourceBundle
 * @namespace Augmented.Utility.ResourceBundle
 * @memberof Augmented.Utility
 * @name Augmented.Utility.ResourceBundle
 */
class ResourceBundle {
  constructor() {}
  // setup a library


  /**
  * Gets the bundle(s) and registers to Augmented.Utility.ResourceBundle
  * @method getBundle
  * @param {Augmented.Utility.BundleObject} bundle Bundle to get
  * @memberof Augmented.Utility.ResourceBundle
  * @returns {object} returns a bundle
  */
  static getBundle() {
    return {}; //resourceBundle.properties.apply(this, arguments);
  }

  /**
   * Gets a string from the registered bundle
   * @method getString
   * @memberof Augmented.Utility.ResourceBundle
   */
  static getString() {
    return ""; //resourceBundle.prop.apply(this, arguments);
  }
}exports.ResourceBundle = ResourceBundle;
;

/**
 * Reads a message out of the bundle
 * @namespace Augmented.Utility.MessageReader
 * @memberof Augmented.Utility
 * @name Augmented.Utility.MessageReader
 */
class MessageReader {
  constructor() {}

  /**
   * getMessage - get the message out of the bundle.<br/>
   * If message is not found, then ResourceBundle returns the key
   * wrapped in square brackets
   * loop through the fallback path of the key by removing the
   * last attribute and searching the bundle again
   * stop when you get back a real message (not just the [key])
   * @method getMessage
   * @memberof Augmented.Utility.MessageReader
   * @param {string} key The key to return from the bundle
   */
  static getMessage(key) {
    const delimiter = ".";
    // try getting the message out of the bundle
    let msg = ResourceBundle.getString(key),
        last = key.length,
        originalKey = key;
    // if message is not found, then ResourceBundle returns the key
    // wrapped in square brackets
    // loop through the fallback path of the key by removing the
    // last attribute and searching the bundle again
    // stop when you get back a real message (not just the [key])
    while (last > 0 && msg == '[' + key + ']') {
      last = key.lastIndexOf(delimiter);
      key = key.substring(0, last);
      msg = ResourceBundle.getString(key);
    }
    // if the original key or a fallback was found, return the
    // message
    // otherwise return the original key with square brackets
    // (default jquery.i18n.properties plugin result)
    return key ? msg : "[" + originalKey + "]";
  }
}exports.MessageReader = MessageReader;
;

/**
 * <p>Augmented.Utility.MessageKeyFormatter<br/>
 *
 * Concatenate the pieces of the message together if a portion of the key is
 * missing, the rest of the key is ignored. <em>ex. if the "rule" attribute is
 * missing, then the key will return with the message.level + message.kind only</em></p>
 * @namespace Augmented.Utility.MessageKeyFormatter
 * @memberof Augmented.Utility
 * @name Augmented.Utility.MessageKeyFormatter
 */
class MessageKeyFormatter {
  constructor() {
    this.delimiter = ".";
  }

  /**
  * Key Delimiter
  * @property {string} delimiter The delimter used to seperate each key
  * @memberof Augmented.Utility.MessageKeyFormatter
  */

  /**
   * Format a key for a message
   * @function format
   * @param {message} message The message to format
   * @memberof Augmented.Utility.MessageKeyFormatter
   * @returns The key to lookup in a bundle
   */
  static format(message) {
    let key = "";
    if (message) {
      let x = message.level && (key += message.level, message.kind && (key += this.delimiter + message.kind, message.rule && (key += this.delimiter + message.rule, message.values.title && (key += this.delimiter + message.values.title))));
    }
    return key ? key : "";
  }
}exports.MessageKeyFormatter = MessageKeyFormatter;
;

/***/ }),

/***/ "./src/security/abstractSecurityClient.js":
/*!************************************************!*\
  !*** ./src/security/abstractSecurityClient.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _object = __webpack_require__(/*! ../object.js */ "./src/object.js");

var _object2 = _interopRequireDefault(_object);

var _clientType = __webpack_require__(/*! ./clientType.js */ "./src/security/clientType.js");

var _clientType2 = _interopRequireDefault(_clientType);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * The abstract Security Client - for use to extend your own
 * @property {Security.ClientType} type The client type
 * @property {string} uri The base uri
 * @extends Object
 */
class AbstractSecurityClient extends _object2.default {
  constructor(type) {
    super();
    this._type = type;
    this._uri = "";
  }

  /**
   * @property {string} uri The uri
   */
  get uri() {
    return this._uri;
  }

  set uri(uri) {
    this._uri = uri;
  }

  /**
   * @property {Security.ClientType} type The client type
   */
  get type() {
    return this._type;
  }
};

exports.default = AbstractSecurityClient;

/***/ }),

/***/ "./src/security/aclClient.js":
/*!***********************************!*\
  !*** ./src/security/aclClient.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _abstractSecurityClient = __webpack_require__(/*! ./abstractSecurityClient.js */ "./src/security/abstractSecurityClient.js");

var _abstractSecurityClient2 = _interopRequireDefault(_abstractSecurityClient);

var _clientType = __webpack_require__(/*! ./clientType.js */ "./src/security/clientType.js");

var _clientType2 = _interopRequireDefault(_clientType);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * Role/Privilege (ACL) Security
 * @memberof Security.Client
 */
class ACLClient extends _abstractSecurityClient2.default {
  constructor() {
    super(_clientType2.default.ACL);
  }

  /**
   * authenticate the user
   * @param {string} username The name of the user (login)
   * @param {string} password The password for the user (not stored)
   * @returns {Security.Context} Returns a security context or null is case of failure
   * @throws Error Failed to authenticate
   */
  authenticate(username, password) {
    let c = null;
    /*request({
      url: this.uri,
      method: "GET",
      user: username,
      password: password,
      success: function(data, status) {
        const p = new Principal({
          fullName: data.fullName,
          id: data.id,
          login: data.login,
          email: data.email
        });
        c = new securityContext(p, data.permissions);
      },
      failure: function(data, status) {
        // TODO: Bundle this perhaps
        throw new Error("Failed to authenticate with response of - " + status);
      }
    });*/
    return c;
  }
};

exports.default = ACLClient;

/***/ }),

/***/ "./src/security/authenticationFactory.js":
/*!***********************************************!*\
  !*** ./src/security/authenticationFactory.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _clientType = __webpack_require__(/*! ./clientType.js */ "./src/security/clientType.js");

var _clientType2 = _interopRequireDefault(_clientType);

var _oauthClient = __webpack_require__(/*! ./oauthClient.js */ "./src/security/oauthClient.js");

var _oauthClient2 = _interopRequireDefault(_oauthClient);

var _aclClient = __webpack_require__(/*! ./aclClient.js */ "./src/security/aclClient.js");

var _aclClient2 = _interopRequireDefault(_aclClient);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * AuthenticationFactory Class -
 * Returns a client of given type for use with security
 * @memberof Security
 * @static
 */
class AuthenticationFactory {
  constructor() {}

  /**
   * Get an instance of a security client
   * @param {Security.ClientType} clientType The Client Type to return
   * @returns {Security.Client} Returns a security client instance
   * @static
   */
  static getSecurityClient(clientType) {
    if (clientType === _clientType2.default.OAUTH2) {
      return new _oauthClient2.default();
    } else if (clientType === _clientType2.default.ACL) {
      return new _aclClient2.default();
    }
    return null;
  }
};

exports.default = AuthenticationFactory;

/***/ }),

/***/ "./src/security/clientType.js":
/*!************************************!*\
  !*** ./src/security/clientType.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Augmented.Security.ClientType - Security client type
 * @enum {Symbol}
 * @memberof Security
 * @name ClientType
 * @property {Symbol} OAuth2 The OAuth2 type
 * @property {Symbol} ACL The ACL type
 */
const ClientType = {};

ClientType.OAUTH2 = Symbol("oauth2");
ClientType.ACL = Symbol("acl");

exports.default = ClientType;

/***/ }),

/***/ "./src/security/context.js":
/*!*********************************!*\
  !*** ./src/security/context.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _principal = __webpack_require__(/*! ./principal.js */ "./src/security/principal.js");

var _principal2 = _interopRequireDefault(_principal);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
* Augmented.Security.Context
* Used as a security data storage class
* @param {Security.Principal} principal The principal for this context
* @param {array} permissions Permissions to add to the context
* @memberof Security
*/
class Context {
  constructor(principal, permissions) {
    this._principal = principal ? principal : new Principal().login = "guest";
    this._permissions = permissions ? permissions : [];
  }

  /**
   * getPrincipal - get the principal of this context
   * @memberof Security.Context
   * @returns {Security.Principal} principal The principal of this context
   */
  get principal() {
    return this._principal;
  }

  /**
   * getPermissions - Get all the permissions for a principal
   * @memberof Security.Context
   * @returns {array} permissions All permissions
   */
  get permissions() {
    return this._permissions;
  }

  /**
   * setPermissions - Set all permissions for a principal
   * @param {array} permissions
   * @memberof Security.Context
   */
  set permissions(p) {
    this._permissions = p;
  }

  /**
   * addPermission - Add a new permission for a principal
   * @param {string} permission
   * @memberof Security.Context
   */
  addPermission(p) {
    this._permissions.push(p);
  }

  /**
   * removePermission - Remove a permission for a principal
   * @param {string} permission
   * @memberof Security.Context
   */
  removePermission(p) {
    const i = this._permissions.indexOf(p);
    this._permissions.splice(i, 1);
  }

  /**
   * hasPermission - checks for a permission for this principal
   * @param {string} permission
   * @memberof Security.Context
   */
  hasPermission(p) {
    return this._permissions.indexOf(p) !== -1;
  }
};

exports.default = Context;

/***/ }),

/***/ "./src/security/entry.js":
/*!*******************************!*\
  !*** ./src/security/entry.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
* Used to secure a resource via permissions
* @memberof Security
* @param {array} permissions Permissions to add to the entry (optional)
* @param {boolean} negaive Sets negative permissions (optional)
*/
class Entry {
  constructor(p, neg) {
    this._permissions = p ? p : [];
    this._neg = neg ? neg : false;
  }
  /**
   * Gets the permissions
   * @property {array} permissions
   * @private
   */

  /**
  * Negative flag
  * @property {boolean} isNegative
  */
  isNegative() {
    return this._neg;
  }

  /**
  * Gets the permissions
  * @returns {array} Permissions
  */
  get permissions() {
    return this._permissions;
  }
  /**
  * Sets the permissions
  * @param {array} permissions Permissions Array to set
  */
  set permissions(p) {
    this._permissions = p;
  }
  /**
  * Add a permission
  * @param {string} permission Permission to add
  */
  addPermission(p) {
    this._permissions.push(p);
  }
  /**
  * Remove a permission
  * @param {string} permission Permission to remove
  */
  removePermission(p) {
    const i = this._permissions.indexOf(p);
    this._permissions.splice(i, 1);
  }
  /**
  * Returns if this entry has a permission
  * @param {string} permission Permission to test for
  * @returns {boolean} Returns true if this entry has this permission
  */
  hasPermission(p) {
    return this._permissions.indexOf(p) != -1;
  }
  /**
  * Sets this entry negaive or positive
  * @param {boolean} negative flag True or False
  */
  setNegative(n) {
    this.neg = n;
  }
};

exports.default = Entry;

/***/ }),

/***/ "./src/security/oauthClient.js":
/*!*************************************!*\
  !*** ./src/security/oauthClient.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _abstractSecurityClient = __webpack_require__(/*! ./abstractSecurityClient.js */ "./src/security/abstractSecurityClient.js");

var _abstractSecurityClient2 = _interopRequireDefault(_abstractSecurityClient);

var _clientType = __webpack_require__(/*! ./clientType.js */ "./src/security/clientType.js");

var _clientType2 = _interopRequireDefault(_clientType);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * The OAUTH2 Client
 * @memberof Security.Client
 */
class OAUTH2Client extends _abstractSecurityClient2.default {
  constructor() {
    super(_clientType2.default.OAUTH2);
    this.accessToken = "";
    this.authorizationToken = "";
  }

  /**
   * Access Token
   * @property accessToken
   */

  /**
   * Authorization Token
   * @property authorizationToken
   */

  /**
   * Authorize the application/service/module via OAUTH
   * @param {string} name The name of the application/service/module
   */
  authorize(name) {
    // TODO: Go authorize the app and get a token
    this.authorizationToken = "";
  }
  /**
   * access the application/service/module via OAUTH
   * @param {string} principal The principal
   * TODO: Refresh the token and store it
   */
  access(principal) {
    this.accessToken = "";
  }
};

exports.default = OAUTH2Client;

/***/ }),

/***/ "./src/security/principal.js":
/*!***********************************!*\
  !*** ./src/security/principal.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Pricipal object for use in security as part of the abstract implimentation
 * @memberof Security
 * @property {string} fullName The full name of the principal
 * @property {number} id The id of the principal
 * @property {string} login The login of the principal
 * @property {string} email The email of the principal
 */
class Principal {
  constructor(options) {
    if (options && options.id) {
      this._id = options.id;
    } else {
      this._id = 0;
    }

    if (options && options.email) {
      this._email = options.email;
    } else {
      this._email = "";
    }

    if (options && options.login) {
      this._login = options.login;
    } else {
      this._login = "";
    }

    if (options && options.fullName) {
      this._fullName = options.fullName;
    } else {
      this._fullName = "";
    }
  }

  get fullName() {
    return this._fullName;
  }
  set fullName(name) {
    this._fullName = name;
  }

  get id() {
    return this._id;
  }

  set id(id) {
    this._id = id;
  }

  get login() {
    return this._login;
  }
  set login(login) {
    this._login = login;
  }

  get email() {
    return this._email;
  }
  set email(email) {
    this._email = email;
  }
};

exports.default = Principal;

/***/ }),

/***/ "./src/structures/map.js":
/*!*******************************!*\
  !*** ./src/structures/map.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isString = __webpack_require__(/*! ../functions/isString.js */ "./src/functions/isString.js");

var _isString2 = _interopRequireDefault(_isString);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * ES6-like Map - than can marshall
 * @param myData {object} Map data to fill map
 * @memberof Utility
 */
class AugmentedMap {
  constructor(myData) {
    this._keys = [];
    this._data = {};
    if (myData) {
      this.marshall(myData);
    }
  }

  /**
   * Set the value by key in the map
   * @param {string} key name of the key
   * @param {any} value value for the key
   */
  set(key, value) {
    if (key !== null && value !== null) {
      if (!this._data[key]) {
        this._keys.push(key);
      }
      this._data[key] = value;
    }
  }

  /**
   * Get the value by key in the map
   * @param {string} key name of the key
   * @returns {any} The value for the key
   */
  get(key) {
    return this._data[key];
  }

  /**
   * Index of the key in the map
   * @param {string} key name of the key
   * @returns {number} index of the key
   */
  indexOf(key) {
    return this._keys.indexOf(key);
  }

  /**
   * Remove the value by key in the map
   * @param {string} key name of the key
   */
  remove(key) {
    const i = this.indexOf(key);
    this._keys.splice(i, 1);
    delete this._data[key];
  }

  /**
   * Has returns whether a key exists in the map
   * @param {string} key name of the key
   * @returns {boolean} true if the key exists in the map
   */
  has(key) {
    return this.indexOf(key) !== -1;
  }

  /**
   * Iterator forEach key to value in the map
   * @param {function} fn callback for the iterator
   */
  forEach(fn) {
    if (typeof fn !== "function") {
      return null;
    }
    const len = this._keys.length;
    let i = 0,
        k;
    for (i = 0; i < len; i++) {
      k = this._keys[i];
      fn(k, this._data[k], i);
    }
  }

  /**
   * Get the key for the index in the map
   * @param {number} i index of the key
   * @returns {object} the key at index
   */
  key(i) {
    return this._keys[i];
  }

  /**
   * The entries value object in the map
   * @returns {array} Array of entries value objects
   */
  entries() {
    let i = 0;
    const len = this._keys.length,
          entries = new Array(len);
    for (i = 0; i < len; i++) {
      entries[i] = {
        key: this._keys[i],
        value: this._data[i]
      };
    }
    return entries;
  }

  /**
   * The values in the map as an Array
   * @returns {array} values as an Array
   */
  values() {
    const len = this._keys.length,
          values = new Array(len);
    let i = 0,
        key;

    for (i = 0; i < len; i++) {
      key = this._keys[i];
      values[i] = this._data[key];
    }
    return values;
  }

  /**
   * Clear the map
   */
  clear() {
    this._keys = [];
    this._data = {};
  }

  /**
   * The size of the map in keys
   * @returns {number} size of map by keys
   */
  size() {
    return this._keys.length;
  }

  /**
   * Represent the map in JSON
   * @returns {object} JSON of the map
   */
  toJSON() {
    return this._data;
  }

  /**
   * Represent the map in a String of JSON
   * @returns {string} Stringified JSON of the map
   */
  toString() {
    return JSON.stringify(this._data);
  }

  // non-es6 API

  /**
   * Checks of the map is empty (not ES6)
   * @returns {boolean} true if the map is empty
   */
  isEmpty() {
    return this._keys.length === 0;
  }

  /**
   * Marshalls a map<br/>
   * dataToMarshall must be the following type of data to parse:
   * JSON object with properties (key/value)
   *
   * @param {Augmented.Utility.Map} dataToMarshall Data to marshall as a map
   * @returns {boolean} Returns true on success
   */
  marshall(dataToMarshall) {
    let dataToParse;
    if (dataToMarshall && dataToMarshall instanceof AugmentedMap) {
      dataToParse = dataToMarshall.toJSON();
    } else if (dataToMarshall && dataToMarshall instanceof Object && Object.keys(dataToMarshall).length > 0) {
      dataToParse = dataToMarshall;
    } else if (dataToMarshall && (0, _isString2.default)(dataToMarshall)) {
      try {
        dataToParse = JSON.parse(dataToMarshall);
      } catch (e) {
        //_logger.warn("AUGMENTED: Map: Could not marshall data: " + JSON.stringify(dataToMarshall));
        return false;
      }
    } else {
      //_logger.warn("AUGMENTED: Map: Could not marshall data: " + JSON.stringify(dataToMarshall));
      return false;
    }

    const props = Object.keys(dataToParse),
          l = props.length;
    this._keys = props;
    this._data = dataToParse;
    /*let i = 0;
    for (i = 0; i < l; i++) {
      const p = props[i],
            v = dataToParse[p];
      this.set(p, v);
    }*/
    return true;
  }
};

exports.default = AugmentedMap;

/***/ }),

/***/ "./src/structures/queue.js":
/*!*********************************!*\
  !*** ./src/structures/queue.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extend = __webpack_require__(/*! ../functions/extend.js */ "./src/functions/extend.js");

var _extend2 = _interopRequireDefault(_extend);

var _configuration = __webpack_require__(/*! ../configuration.js */ "./src/configuration.js");

var _configuration2 = _interopRequireDefault(_configuration);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * Augmented.Utility.AsynchronousQueue -
 * An Async queue for handling async chained functions
 * @param {number} timeout The timout period for each process in the queue (optional)
 * @memberof Utility
 */
class AsynchronousQueue {
  constructor(timeout) {
    this._timeout = timeout ? timeout : _configuration2.default.AsynchronousQueueTimeout;
    this._queue = {};
  }

  /**
   * Add method for adding processes to the queue
   */
  add(...args) {
    if (args && args.length > 0) {
      (0, _extend2.default)(this._queue, args);
      return true;
    }
    return false;
  }

  /**
   * Clear all processes in the queue
   */
  clear() {
    if (this._queue.length > 0) {
      this._queue.splice(0, this._queue.length);
    }
  }

  /**
   * Process the queue
   */
  process(...args) {
    if (args) {
      (0, _extend2.default)(this._queue, args);
    }
    const q = this._queue;
    const l = Object.keys(q).length; //args.length;
    let to = this._timeout;

    if (l <= 0) {
      return false;
    }
    const chain = i => {
      if (i >= l || typeof q[i] !== 'function') {
        return false;
      }
      setTimeout(() => {
        q[i]();
        chain(i + 1);
      }, to);
    };
    chain(0);
    return true;
  }

  /**
   * Get the timeout for the queue
   */
  get timeout() {
    return this._timeout;
  }

  /**
   * Get the full queue
   */
  get queue() {
    return this._queue;
  }
};

exports.default = AsynchronousQueue;

/***/ }),

/***/ "./src/structures/stack.js":
/*!*********************************!*\
  !*** ./src/structures/stack.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Augmented.Utility.Stack -
 * Standard Stack data structure
 * @memberof Utility
 */
class Stack {
  constructor() {
    this._stack = [];
  }

  /**
   * The empty method clears the stack
   */
  empty() {
    return this._stack.length === 0;
  }
  /**
   * The peek method returns the first in the stack
   * @returns {object} Returns the first object in the stack
   */
  peek() {
    return this._stack[0];
  }
  /**
   * The pop method returns and removes the first in the stack
   * @returns {object} Returns the first object in the stack
   */
  pop() {
    return this._stack.pop();
  }
  /**
   * The push method adds to the stack
   * @param {object} item The item to push to the stack
   */
  push(item) {
    this._stack.push(item);
  }
  /**
   * The search method returns where in the stack an item exists
   * @returns {number} Returns the index of the item
   */
  search(item) {
    return this._stack.indexOf(item);
  }
  /**
   * The size method returns the size of the stack
   * @returns {number} Returns the size of the stack
   */
  size() {
    return this._stack.length;
  }
  /**
   * The clear method clears the stack
   */
  clear() {
    this._stack.splice(0, this._stack.length);
  }
  /**
   * The toArray method returns the stack as an array
   * @returns {array} Returns the stack as an array
   */
  toArray() {
    return this._stack;
  }

  /**
   * The toString method returns the stack as an string
   * @returns {string} Returns the stack as an string
   */
  toString() {
    return this._stack.toString();
  }
};

exports.default = Stack;

/***/ }),

/***/ "./src/utility/sort.js":
/*!*****************************!*\
  !*** ./src/utility/sort.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Sorts an array of objects by propery in object
 * @function sortObjects
 * @memberof Utility
 * @param {array} array The object array to sort
 * @param {object} key The property to sort by
 * @returns {array} The sorted array
 */
const sortObjects = exports.sortObjects = (array, key) => {
  return array.sort((a, b) => {
    const x = a[key],
          y = b[key];
    return x < y ? -1 : x > y ? 1 : 0;
  });
};

/**
 * Split the array into halves and merge them recursively
 * @function mergeSort
 * @memberof Utility
 * @param {array} array The array to sort
 * @returns {array} The sorted array
 */
const mergeSort = exports.mergeSort = arr => {
  if (arr.length === 1) {
    // return once we hit an array with a single item
    return arr;
  }

  const middle = Math.floor(arr.length / 2); // get the middle item of the array rounded down
  const left = arr.slice(0, middle); // items on the left side
  const right = arr.slice(middle); // items on the right side

  return merge(mergeSort(left), mergeSort(right));
};

/*
 * compare the arrays item by item and return the concatenated result
 */
const merge = (left, right) => {
  let result = [];
  let indexLeft = 0;
  let indexRight = 0;

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft]);
      indexLeft++;
    } else {
      result.push(right[indexRight]);
      indexRight++;
    }
  }
  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
};

/**
 * Quick Sort implimentation for Arrays -
 * @function QuickSort
 * @memberof Utility
 * @param {Array} arr Array to Sort
 * @returns {Array} Returns a sorted array
 */
const quickSort = exports.quickSort = arr => {
  //if array is empty
  if (arr.length === 0) {
    return [];
  }

  let i = 1;
  const l = arr.length,
        left = [],
        right = [],
        pivot = arr[0];
  //go through each element in array
  for (i = 1; i < l; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
};

/**
 * Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time.
 * It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.
 * @function mergeSort
 * @memberof Utility
 * @param {array} array The array to sort
 * @returns {array} The sorted array
 */
const insertionSort = exports.insertionSort = unsortedList => {
  let sortedList = [];
  if (unsortedList) {
    sortedList = unsortedList.slice();
    const len = sortedList.length;
    let i, j, tmp;
    for (i = 1; i < len; i++) {
      tmp = sortedList[i]; //Copy of the current element.
      /*Check through the sorted part and compare with the number in tmp. If large, shift the number*/
      for (j = i - 1; j >= 0 && sortedList[j] > tmp; j--) {
        //Shift the number
        sortedList[j + 1] = sortedList[j];
      }
      //Insert the copied number at the correct position
      //in sorted part.
      sortedList[j + 1] = tmp;
    }
  }
  return sortedList;
};

/**
 * Simple sorting algorithm that repeatedly steps through the list to be sorted, compares each pair of adjacent items and swaps them if they are in the wrong order.
 * @function mergeSort
 * @memberof Utility
 * @param {array} array The array to sort
 * @returns {array} The sorted array
 */
const bubbleSort = exports.bubbleSort = a => {
  let sorted = [];
  if (a) {
    sorted = a.slice();
    let swapped, i, tmp;
    const l = sorted.length - 1;
    do {
      swapped = false;
      for (i = 0; i < l; i++) {
        if (sorted[i] > sorted[i + 1]) {
          tmp = sorted[i];
          sorted[i] = sorted[i + 1];
          sorted[i + 1] = tmp;
          swapped = true;
        }
      }
    } while (swapped);
  }
  return sorted;
};

/***/ }),

/***/ "./src/utility/utility.js":
/*!********************************!*\
  !*** ./src/utility/utility.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _arguments = arguments;
/**
 * Utility Package -
 * Small Utilities
 * @namespace Utility
 */

/**
 * Shuffles an Array with Fisher-Yates Shuffle algorithm
 * @memberof Utility
 * @param {array} array The array to shuffle
 * @returns {array} A new shuffled array
 */
const shuffle = exports.shuffle = array => {
  const nArray = array.slice(0),
        l = array.length;
  let i = 0,
      temp,
      j;
  for (i = l - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = nArray[i];
    nArray[i] = nArray[j];
    nArray[j] = temp;
  }
  return nArray;
};

/**
 * Prints an object nicely
 * @memberof Utility
 * @param {object} obj The object to print
 * @param {boolean} spaces Use spaces instead of tabs
 * @returns {number} number The number of spaces to pad
 */
const prettyPrint = exports.prettyPrint = (obj, spaces, number) => {
  let x = "\t";
  if (spaces) {
    x = " ".repeat(number);
  }
  return JSON.stringify(obj, null, x);
};

/**
 * Performs a binary search on the host array. vs indexOf<br/>
 * Binary Search is a complexity of <em>O(n log n)</em> vs <em>O(n)</em> with indexOf
 * @memberof Utility
 * @param {Array} arr The array.
 * @param {Any} find The item to search for within the array.
 * @param {function} comparator The comparator to use
 * @returns {Number} The index of the element which defaults to -1 when not found.
 */
const binarySearch = exports.binarySearch = (arr, find, comparator) => {
  let low = 0,
      high = arr.length - 1,
      i,
      comparison;

  while (low <= high) {
    i = Math.floor((low + high) / 2);
    comparison = comparator(arr[i], find);
    if (comparison < 0) {
      low = i + 1;continue;
    }
    if (comparison > 0) {
      high = i - 1;continue;
    }
    return i;
  }
  return null;
};

/**
 * Augmented.Utility.TransformerType <br/>
 * Transformer type for use in the transformer
 * @enum {Symbol} Augmented.Utility.TransformerType
 * @name TransformerType
 * @memberof Utility
 * @property {Symbol} String Standard String
 * @property {Symbol} Integer Integer
 * @property {Symbol} Number Any number
 * @property {Symbol} Boolean True/False
 * @property {Symbol} Array Stanrdard Array
 * @property {Symbol} Object Any Object
 * @property {Symbol} Null Null
 */
const TransformerType = exports.TransformerType = {};
TransformerType.STRING = Symbol("String");
TransformerType.INTEGER = Symbol("Integer");
TransformerType.NUMBER = Symbol("Number");
TransformerType.BOOLEAN = Symbol("Boolean");
TransformerType.ARRAY = Symbol("Array");
TransformerType.OBJECT = Symbol("Object");
TransformerType.NULL = Symbol("Null");

/**
 * Augmented.Utility.Transformer <br/>
 * Transform an object, type, or array to another type, object, or array
 * @memberof Utility
 */
class Transformer {
  constructor() {
    this.type = TransformerType;
  }

  /**
   * The transformer type enum
   * @propery type The transformer type enum
   * @type {Augmented.Utility.TransformerType}
   */

  /**
   * Transform an object, primitive, or array to another object, primitive, or array
   * @param {object} source Source primitive to transform
   * @param {Augmented.Utility.TransformerType} type Type to transform to
   * @returns {object} returns a transformed object or primitive
   */
  static transform(source, type) {
    let out = null;
    switch (type) {
      case TransformerType.STRING:
        if (typeof source === "object") {
          out = JSON.stringify(source);
        } else {
          out = String(source);
        }
        break;
      case TransformerType.INTEGER:
        out = parseInt(source);
        break;
      case TransformerType.NUMBER:
        out = Number(source);
        break;
      case TransformerType.BOOLEAN:
        out = Boolean(source);
        break;
      case TransformerType.ARRAY:
        if (!Array.isArray(source)) {
          out = [];
          out[0] = source;
        } else {
          out = source;
        }
        break;
      case TransformerType.OBJECT:
        if (typeof source !== "object") {
          out = {};
          out[source] = source;
        } else {
          out = source;
        }
        break;
    }
    return out;
  }

  /**
   * Returns a Augmented.Utility.TransformerType of a passed object
   * @param {object} source The source primitive
   * @returns {Augmented.Utility.TransformerType} type of source as Augmented.Utility.TransformerType
   */
  static isType(source) {
    if (source === null) {
      return TransformerType.NULL;
    } else if (typeof source === "string") {
      return TransformerType.STRING;
    } else if (typeof source === "number") {
      return TransformerType.NUMBER;
    } else if (typeof source === "boolean") {
      return TransformerType.BOOLEAN;
    } else if (Array.isArray(source)) {
      return TransformerType.ARRAY;
    } else if (typeof source === "object") {
      return TransformerType.OBJECT;
    }
  }
}exports.Transformer = Transformer;
;

/**
 * Wrap method to handle wrapping functions (simular to _.wrap)
 * @memberof Utility
 */
const wrap = exports.wrap = (fn, wrap) => {
  return () => {
    return wrap.apply(undefined, [fn].concat(Array.prototype.slice.call(_arguments)));
  };
};

/**
 * filter an object from array of values
 *
 * @param {object} object Object to filter
 * @param {array} keys keys to filter from the object
 * @returns {object} returns a new object with only these keys
 * @memberof Utility
 */
const filterObject = exports.filterObject = (object, keys) => {
  const newObject = {};
  if (object && keys) {
    const l = keys.length;
    let i = 0;
    for (i = 0; i < l; i++) {
      newObject[keys[i]] = object[keys[i]];
    }
  }
  return newObject;
};

/**
 * find an oject from matching properties
 *
 * @param {Array} set array/set of objects
 * @param {object} properties properties to find by
 * @returns {array} returns a the objects that matched
 * @memberof Utility
 */
const findByMatchingProperties = exports.findByMatchingProperties = (set, properties) => {
  return set.filter(entry => {
    return Object.keys(properties).every(key => {
      return entry[key] === properties[key];
    });
  });
};

/***/ }),

/***/ "./src/validation/api.js":
/*!*******************************!*\
  !*** ./src/validation/api.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _arguments = arguments;

var _validatorContext = __webpack_require__(/*! ./validatorContext.js */ "./src/validation/validatorContext.js");

var _validatorContext2 = _interopRequireDefault(_validatorContext);

var _validationError = __webpack_require__(/*! ./validationError.js */ "./src/validation/validationError.js");

var _functions = __webpack_require__(/*! ./functions.js */ "./src/validation/functions.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

let languages = {};

const createApi = language => {
  const _myContext = new _validatorContext2.default();
  let currentLanguage = language || 'en';

  const api = {
    addFormat: (format, validator) => {
      _myContext.addFormat(format, validator);
    },
    language: code => {
      if (!code) {
        return currentLanguage;
      }
      if (!languages[code]) {
        code = code.split('-')[0]; // fall back to base
        // language
      }
      if (languages[code]) {
        currentLanguage = code;
        return code; // so you can tell if fall-back has happened
      }
      return false;
    },
    addLanguage: (code, messageMap) => {
      let key;
      for (key in _validationError.ERROR_CODES) {
        if (messageMap[key] && !messageMap[_validationError.ERROR_CODES[key]]) {
          messageMap[_validationError.ERROR_CODES[key]] = messageMap[key];
        }
      }
      let rootCode = code.split('-')[0];
      if (!languages[rootCode]) {
        // use for base language if
        // not yet defined
        languages[code] = messageMap;
        languages[rootCode] = messageMap;
      } else {
        languages[code] = Object.create(languages[rootCode]);
        for (key in messageMap) {
          if (typeof languages[rootCode][key] === 'undefined') {
            languages[rootCode][key] = messageMap[key];
          }
          languages[code][key] = messageMap[key];
        }
      }
      return undefined;
    },
    freshApi: language => {
      const result = createApi();
      if (language) {
        result.language(language);
      }
      return result;
    },
    validate: (data, schema, checkRecursive, banUnknownProperties) => {
      const context = new _validatorContext2.default(_myContext, false, languages[currentLanguage], checkRecursive, banUnknownProperties);
      if (typeof schema === "string") {
        schema = { "$ref": schema };
      }
      context.addSchema("", schema);
      let error = context.validateAll(data, schema, null, null, "");
      if (!error && banUnknownProperties) {
        error = context.banUnknownProperties();
      }
      undefined.error = error;
      undefined.missing = context.missing;
      undefined.valid = error === null;
      return undefined.valid;
    },
    validateResult: () => {
      let result = {};
      undefined.validate.apply(result, _arguments);
      return result;
    },
    validateMultiple: (data, schema, checkRecursive, banUnknownProperties) => {
      const context = new _validatorContext2.default(_myContext, true, languages[currentLanguage], checkRecursive, banUnknownProperties);
      if (typeof schema === "string") {
        schema = { "$ref": schema };
      }
      context.addSchema("", schema);
      context.validateAll(data, schema, null, null, "");
      if (banUnknownProperties) {
        context.banUnknownProperties();
      }
      let result = {};
      result.errors = context.errors;
      result.missing = context.missing;
      result.valid = result.errors.length === 0;
      return result;
    },
    addSchema: (url, schema) => {
      return _myContext.addSchema(url, schema);
    },
    getSchema: (url, urlHistory) => {
      return _myContext.getSchema(url, urlHistory);
    },
    getSchemaMap: () => {
      return _myContext.getSchemaMap.apply(_myContext, _arguments);
    },
    getSchemaUris: () => {
      return _myContext.getSchemaUris.apply(_myContext, _arguments);
    },
    getMissingUris: () => {
      return _myContext.getMissingUris.apply(_myContext, _arguments);
    },
    dropSchemas: () => {
      _myContext.dropSchemas.apply(_myContext, _arguments);
    },
    defineKeyword: () => {
      _myContext.defineKeyword.apply(_myContext, _arguments);
    },
    defineError: (codeName, codeNumber, defaultMessage) => {
      if (typeof codeName !== 'string' || !/^[A-Z]+(_[A-Z]+)*$/.test(codeName)) {
        // TODO message bundle this
        throw new Error('Code name must be a string in UPPER_CASE_WITH_UNDERSCORES');
      }
      if (typeof codeNumber !== 'number' || codeNumber % 1 !== 0 || codeNumber < 10000) {
        // TODO message bundle this
        throw new Error('Code number must be an integer > 10000');
      }
      if (typeof _validationError.ERROR_CODES[codeName] !== 'undefined') {
        // TODO message bundle this
        throw new Error('Error already defined: ' + codeName + ' as ' + _validationError.ERROR_CODES[codeName]);
      }
      if (typeof _validationError.ErrorCodeLookup[codeNumber] !== 'undefined') {
        // TODO message bundle this
        throw new Error('Error code already used: ' + _validationError.ErrorCodeLookup[codeNumber] + ' as ' + codeNumber);
      }
      _validationError.ERROR_CODES[codeName] = codeNumber;
      _validationError.ErrorCodeLookup[codeNumber] = codeName;
      _validationError.ERROR_MESSAGES_DEFAULT[codeName] = _validationError.ERROR_MESSAGES_DEFAULT[codeNumber] = defaultMessage;
      for (let langCode in languages) {
        let language = languages[langCode];
        if (language[codeName]) {
          language[codeNumber] = language[codeNumber] || language[codeName];
        }
      }
    },
    reset: () => {
      _myContext.reset();
      undefined.error = null;
      undefined.missing = [];
      undefined.valid = true;
    },
    missing: [],
    error: null,
    valid: true,
    normSchema: _functions.normSchema,
    resolveUrl: _functions.resolveUrl,
    getDocumentUri: _functions.getDocumentUri,
    errorCodes: _validationError.ERROR_CODES
  };
  return api;
};

exports.default = createApi;

/***/ }),

/***/ "./src/validation/functions.js":
/*!*************************************!*\
  !*** ./src/validation/functions.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @see https://github.com/geraintluff/uri-templates
 * but with all the de-substitution stuff removed
 */
const URI_TEMPLATE_GLOBAL_MODIFIERS = exports.URI_TEMPLATE_GLOBAL_MODIFIERS = {
  "+": true,
  "#": true,
  ".": true,
  "/": true,
  ";": true,
  "?": true,
  "&": true
};

const URI_TEMPLATE_SUFFICES = exports.URI_TEMPLATE_SUFFICES = {
  "*": true
};

// parseURI() and resolveUrl() are from https://gist.github.com/1088850
// - released as public domain by author ("Yaffle") - see comments on
// gist
const parseURI = exports.parseURI = url => {
  const m = String(url).replace(/^\s+|\s+$/g, '').match(/^([^:\/?#]+:)?(\/\/(?:[^:@]*(?::[^:@]*)?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/);
  // authority = '//' + user + ':' + pass '@' + hostname + ':' port
  return m ? {
    href: m[0] || '',
    protocol: m[1] || '',
    authority: m[2] || '',
    host: m[3] || '',
    hostname: m[4] || '',
    port: m[5] || '',
    pathname: m[6] || '',
    search: m[7] || '',
    hash: m[8] || ''
  } : null;
};

const removeDotSegments = exports.removeDotSegments = input => {
  let output = [];
  input.replace(/^(\.\.?(\/|$))+/, '').replace(/\/(\.(\/|$))+/g, '/').replace(/\/\.\.$/, '/../').replace(/\/?[^\/]*/g, function (p) {
    if (p === '/..') {
      output.pop();
    } else {
      output.push(p);
    }
  });
  return output.join('').replace(/^\//, input.charAt(0) === '/' ? '/' : '');
};

const resolveUrl = exports.resolveUrl = (base, href) => {
  // RFC 3986
  href = parseURI(href || '');
  base = parseURI(base || '');

  return !href || !base ? null : (href.protocol || base.protocol) + (href.protocol || href.authority ? href.authority : base.authority) + removeDotSegments(href.protocol || href.authority || href.pathname.charAt(0) === '/' ? href.pathname : href.pathname ? (base.authority && !base.pathname ? '/' : '') + base.pathname.slice(0, base.pathname.lastIndexOf('/') + 1) + href.pathname : base.pathname) + (href.protocol || href.authority || href.pathname ? href.search : href.search || base.search) + href.hash;
};

const getDocumentUri = exports.getDocumentUri = uri => {
  return uri.split('#')[0];
};

const isTrustedUrl = exports.isTrustedUrl = (baseUrl, testUrl) => {
  if (testUrl.substring(0, baseUrl.length) === baseUrl) {
    let remainder = testUrl.substring(baseUrl.length);
    if (testUrl.length > 0 && testUrl.charAt(baseUrl.length - 1) === "/" || remainder.charAt(0) === "#" || remainder.charAt(0) === "?") {
      return true;
    }
  }
  return false;
};

const normSchema = exports.normSchema = (schema, baseUri) => {
  if (schema && typeof schema === "object") {
    if (baseUri === undefined) {
      baseUri = schema.id;
    } else if (typeof schema.id === "string") {
      baseUri = resolveUrl(baseUri, schema.id);
      schema.id = baseUri;
    }
    if (Array.isArray(schema)) {
      let i = 0,
          l = schema.length;
      for (i = 0; i < l; i++) {
        normSchema(schema[i], baseUri);
      }
    } else {
      if (typeof schema['$ref'] === "string") {
        schema['$ref'] = resolveUrl(baseUri, schema['$ref']);
      }
      for (let key in schema) {
        if (key !== "enum") {
          normSchema(schema[key], baseUri);
        }
      }
    }
  }
};

/***/ }),

/***/ "./src/validation/schemaGenerator.js":
/*!*******************************************!*\
  !*** ./src/validation/schemaGenerator.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
const SCHEMA_HEADER = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "title": "model",
  "description": "Generated Schema",
  "type": "object",
  "properties": {}
};

/**
 * <p>Augmented.Utility.SchemaGenerator<br/>
 *
 * Genrate a schema from a set of data</p>
 * @param {object} data a dataset to produce a schema from
 * @memberof Utility
 */
const SchemaGenerator = data => {
  let obj = SCHEMA_HEADER;
  let i,
      d,
      dkey,
      p,
      keys = Object.keys(data),
      l = keys.length;
  for (i = 0; i < l; i++) {
    d = keys[i];
    for (dkey in d) {
      if (d.hasOwnProperty(dkey)) {
        p = obj.properties[d] = {};

        let t = typeof data[d];
        if (t === "object") {
          t = Array.isArray(data[d]) ? "array" : "object";
        } else if (t === "number") {
          t = Number.isInteger(data[d]) ? "integer" : "number";
        }
        p.type = t;
        p.description = String(d);
      }
    }
  }
  return obj;
};

exports.default = SchemaGenerator;

/***/ }),

/***/ "./src/validation/validationError.js":
/*!*******************************************!*\
  !*** ./src/validation/validationError.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
const ERROR_CODES = {
  INVALID_TYPE: 0,
  ENUM_MISMATCH: 1,
  ANY_OF_MISSING: 10,
  ONE_OF_MISSING: 11,
  ONE_OF_MULTIPLE: 12,
  NOT_PASSED: 13,
  // Numeric errors
  NUMBER_MULTIPLE_OF: 100,
  NUMBER_MINIMUM: 101,
  NUMBER_MINIMUM_EXCLUSIVE: 102,
  NUMBER_MAXIMUM: 103,
  NUMBER_MAXIMUM_EXCLUSIVE: 104,
  NUMBER_NOT_A_NUMBER: 105,
  // String errors
  STRING_LENGTH_SHORT: 200,
  STRING_LENGTH_LONG: 201,
  STRING_PATTERN: 202,
  // Object errors
  OBJECT_PROPERTIES_MINIMUM: 300,
  OBJECT_PROPERTIES_MAXIMUM: 301,
  OBJECT_REQUIRED: 302,
  OBJECT_ADDITIONAL_PROPERTIES: 303,
  OBJECT_DEPENDENCY_KEY: 304,
  // Array errors
  ARRAY_LENGTH_SHORT: 400,
  ARRAY_LENGTH_LONG: 401,
  ARRAY_UNIQUE: 402,
  ARRAY_ADDITIONAL_ITEMS: 403,
  // Custom/user-defined errors
  FORMAT_CUSTOM: 500,
  KEYWORD_CUSTOM: 501,
  // Schema structure
  CIRCULAR_REFERENCE: 600,
  // Non-standard validation options
  UNKNOWN_PROPERTY: 1000
};

// TODO: bundle this
const ERROR_MESSAGES_DEFAULT = {
  INVALID_TYPE: "Invalid type: {type} (expected {expected})",
  ENUM_MISMATCH: "No enum match for: {value}",
  ANY_OF_MISSING: "Data does not match any schemas from \"anyOf\"",
  ONE_OF_MISSING: "Data does not match any schemas from \"oneOf\"",
  ONE_OF_MULTIPLE: "Data is valid against more than one schema from \"oneOf\": indices {index1} and {index2}",
  NOT_PASSED: "Data matches schema from \"not\"",
  // Numeric errors
  NUMBER_MULTIPLE_OF: "Value {value} is not a multiple of {multipleOf}",
  NUMBER_MINIMUM: "Value {value} is less than minimum {minimum}",
  NUMBER_MINIMUM_EXCLUSIVE: "Value {value} is equal to exclusive minimum {minimum}",
  NUMBER_MAXIMUM: "Value {value} is greater than maximum {maximum}",
  NUMBER_MAXIMUM_EXCLUSIVE: "Value {value} is equal to exclusive maximum {maximum}",
  NUMBER_NOT_A_NUMBER: "Value {value} is not a valid number",
  // String errors
  STRING_LENGTH_SHORT: "String is too short ({length} chars), minimum {minimum}",
  STRING_LENGTH_LONG: "String is too long ({length} chars), maximum {maximum}",
  STRING_PATTERN: "String does not match pattern: {pattern}",
  // Object errors
  OBJECT_PROPERTIES_MINIMUM: "Too few properties defined ({propertyCount}), minimum {minimum}",
  OBJECT_PROPERTIES_MAXIMUM: "Too many properties defined ({propertyCount}), maximum {maximum}",
  OBJECT_REQUIRED: "Missing required property: {key}",
  OBJECT_ADDITIONAL_PROPERTIES: "Additional properties not allowed",
  OBJECT_DEPENDENCY_KEY: "Dependency failed - key must exist: {missing} (due to key: {key})",
  // Array errors
  ARRAY_LENGTH_SHORT: "Array is too short ({length}), minimum {minimum}",
  ARRAY_LENGTH_LONG: "Array is too long ({length}), maximum {maximum}",
  ARRAY_UNIQUE: "Array items are not unique (indices {match1} and {match2})",
  ARRAY_ADDITIONAL_ITEMS: "Additional items not allowed",
  // Format errors
  FORMAT_CUSTOM: "Format validation failed ({message})",
  KEYWORD_CUSTOM: "Keyword failed: {key} ({message})",
  // Schema structure
  CIRCULAR_REFERENCE: "Circular $refs: {urls}",
  // Non-standard validation options
  UNKNOWN_PROPERTY: "Unknown property (not in schema)"
};

class ValidationError {
  //extends Error {
  constructor(code, message, params, dataPath, schemaPath, subErrors) {
    // Pass remaining arguments (including vendor specific ones) to parent constructor
    //super(code, message, params);
    //Error.call(this);
    if (code === undefined) {
      throw new Error("No code supplied for error: " + message);
    }
    this.message = message;
    this.params = params;
    this.code = code;
    this.dataPath = dataPath || "";
    this.schemaPath = schemaPath || "";
    this.subErrors = subErrors || null;

    const err = new Error(this.message);
    this.stack = err.stack || err.stacktrace;
    if (!this.stack) {
      try {
        throw err;
      } catch (err2) {
        this.stack = err2.stack || err2.stacktrace;
      }
    }
    this.name = "ValidationError";
  }

  prefixWith(dataPrefix, schemaPrefix) {
    if (dataPrefix !== null) {
      dataPrefix = dataPrefix.replace(/~/g, "~0").replace(/\//g, "~1");
      this.dataPath = "/" + dataPrefix + this.dataPath;
    }
    if (schemaPrefix !== null) {
      schemaPrefix = schemaPrefix.replace(/~/g, "~0").replace(/\//g, "~1");
      this.schemaPath = "/" + schemaPrefix + this.schemaPath;
    }
    if (this.subErrors !== null) {
      let i = 0,
          l = this.subErrors.length;
      for (i = 0; i < l; i++) {
        this.subErrors[i].prefixWith(dataPrefix, schemaPrefix);
      }
    }
    return this;
  }
};

let ErrorCodeLookup = {},
    key;
for (key in ERROR_CODES) {
  ErrorCodeLookup[ERROR_CODES[key]] = key;
}

exports.ERROR_CODES = ERROR_CODES;
exports.ERROR_MESSAGES_DEFAULT = ERROR_MESSAGES_DEFAULT;
exports.ValidationError = ValidationError;
exports.ErrorCodeLookup = ErrorCodeLookup;

/***/ }),

/***/ "./src/validation/validationFramework.js":
/*!***********************************************!*\
  !*** ./src/validation/validationFramework.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _schemaGenerator = __webpack_require__(/*! ./schemaGenerator.js */ "./src/validation/schemaGenerator.js");

var _schemaGenerator2 = _interopRequireDefault(_schemaGenerator);

var _api = __webpack_require__(/*! ./api.js */ "./src/validation/api.js");

var _api2 = _interopRequireDefault(_api);

var _validationError = __webpack_require__(/*! ./validationError.js */ "./src/validation/validationError.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * Augmented.ValidationFramework -
 * The Validation Framework Base Wrapper Class.
 * Provides abstraction for base validation build-in library
 */
class ValidationFramework {
  constructor() {
    this._myValidator = (0, _api2.default)();
    if (this._myValidator) {
      this._myValidator.addLanguage("en-us", _validationError.ERROR_MESSAGES_DEFAULT); // changed to US
    }
  }

  /**
   * Returns if the framework supports validation
   * @returns {boolean} Returns true if the framework supports validation
   */
  supportsValidation() {
    return this._myValidator !== null;
  }

  /**
   * Registers a schema to the Framework
   * @param {string} identity The identity of the schema
   * @param {object} schema The JSON schema
   * @returns {boolean} Returns true on success
   */
  registerSchema(identity, schema) {
    return this._myValidator.addSchema(identity, schema);
  }

  /**
   * Gets a schema
   * @param {string} identity The identity of the schema
   * @returns {object} The JSON schema
   */
  getSchema(identity) {
    return this._myValidator.getSchema(identity);
  }

  /**
   * Gets all schemas
   * @returns {array} all JSON schemas
   */
  getSchemas() {
    return this._myValidator.getSchemaMap();
  }

  /**
   * Clears all schemas
   */
  clearSchemas() {
    this._myValidator.dropSchemas();
  }

  /**
   * Validates data via a schema
   * @param {object} data The data to validate
   * @param {object} schema The JSON schema
   * @returns {object} Returns the validation object
   */
  validate(data, schema) {
    return this._myValidator.validateMultiple(data, schema);
  }

  /**
   * Validates data via a schema
   * @returns {array} Returns the validation messages
   */
  getValidationMessages() {
    return this._myValidator.error;
  }

  /**
   * Validates data via a schema
   * @param {Augmented.Model|object} model The model generate from
   * @returns {object} Returns the schema
   */
  generateSchema(model) {
    let data = model;
    /*TODO support model
    if (model && model instanceof Model) {
      data = model.toJSON();
    }*/
    return (0, _schemaGenerator2.default)(data);
  }
};

exports.default = ValidationFramework;

/***/ }),

/***/ "./src/validation/validatorContext.js":
/*!********************************************!*\
  !*** ./src/validation/validatorContext.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _validationError = __webpack_require__(/*! ./validationError.js */ "./src/validation/validationError.js");

var _functions = __webpack_require__(/*! ./functions.js */ "./src/validation/functions.js");

let CLOSE_ENOUGH_LOW = Math.pow(2, -51);
let CLOSE_ENOUGH_HIGH = 1 - CLOSE_ENOUGH_LOW;

class ValidatorContext {
  constructor(parent, collectMultiple, errorMessages, checkRecursive, trackUnknownProperties) {
    this.missing = [];
    this.missingMap = {};
    this.formatValidators = parent ? Object.create(parent.formatValidators) : {};
    this.schemas = parent ? Object.create(parent.schemas) : {};
    this.collectMultiple = collectMultiple;
    this.errors = [];
    this.handleError = collectMultiple ? this.collectError : this.returnError;
    if (checkRecursive) {
      this.checkRecursive = true;
      this.scanned = [];
      this.scannedFrozen = [];
      this.scannedFrozenSchemas = [];
      this.scannedFrozenValidationErrors = [];
      this.validatedSchemasKey = 'tv4_validation_id';
      this.validationErrorsKey = 'tv4_validation_errors_id';
    }
    if (trackUnknownProperties) {
      this.trackUnknownProperties = true;
      this.knownPropertyPaths = {};
      this.unknownPropertyPaths = {};
    }
    this.errorMessages = errorMessages;
    this.definedKeywords = {};
    if (parent) {
      for (let key in parent.definedKeywords) {
        this.definedKeywords[key] = parent.definedKeywords[key].slice(0);
      }
    }
  }

  notReallyPercentEncode(string) {
    return encodeURI(string).replace(/%25[0-9][0-9]/g, doubleEncoded => {
      return "%" + doubleEncoded.substring(3);
    });
  }

  uriTemplateSubstitution(spec) {
    let modifier = "";
    if (URI_TEMPLATE_GLOBAL_MODIFIERS[spec.charAt(0)]) {
      modifier = spec.charAt(0);
      spec = spec.substring(1);
    }
    let separator = "";
    let prefix = "";
    let shouldEscape = true;
    let showVariables = false;
    let trimEmptyString = false;
    if (modifier === '+') {
      shouldEscape = false;
    } else if (modifier === ".") {
      prefix = ".";
      separator = ".";
    } else if (modifier === "/") {
      prefix = "/";
      separator = "/";
    } else if (modifier === '#') {
      prefix = "#";
      shouldEscape = false;
    } else if (modifier === ';') {
      prefix = ";";
      separator = ";";
      showVariables = true;
      trimEmptyString = true;
    } else if (modifier === '?') {
      prefix = "?";
      separator = "&";
      showVariables = true;
    } else if (modifier === '&') {
      prefix = "&";
      separator = "&";
      showVariables = true;
    }

    let varNames = [];
    let varList = spec.split(",");
    let varSpecs = [];
    let varSpecMap = {};
    let i = 0,
        l = varList.length;
    for (i = 0; i < l; i++) {
      let varName = varList[i];
      let truncate = null;
      if (varName.indexOf(":") !== -1) {
        let parts = varName.split(":");
        varName = parts[0];
        truncate = parseInt(parts[1], 10);
      }
      let suffices = {};
      while (URI_TEMPLATE_SUFFICES[varName.charAt(varName.length - 1)]) {
        suffices[varName.charAt(varName.length - 1)] = true;
        varName = varName.substring(0, varName.length - 1);
      }
      let varSpec = {
        truncate: truncate,
        name: varName,
        suffices: suffices
      };
      varSpecs.push(varSpec);
      varSpecMap[varName] = varSpec;
      varNames.push(varName);
    }

    const subFunction = valueFunction => {
      let result = "";
      let startIndex = 0;
      let i = 0,
          l = varSpecs.length;
      for (i = 0; i < l; i++) {
        let varSpec = varSpecs[i];

        if (!valueFunction && !isFunction(valueFunction)) {
          throw new Error("Problem qith value function.");
        }

        let value = valueFunction(varSpec.name);
        if (value === null || value === undefined || Array.isArray(value) && value.length === 0 || typeof value === 'object' && Object.keys(value).length === 0) {
          startIndex++;
          continue;
        }
        if (i === startIndex) {
          result += prefix;
        } else {
          result += separator || ",";
        }
        if (Array.isArray(value)) {
          if (showVariables) {
            result += varSpec.name + "=";
          }
          let j = 0;
          l = value.length;
          for (j = 0; j < l; j++) {
            if (j > 0) {
              result += varSpec.suffices['*'] ? separator || "," : ",";
              if (varSpec.suffices['*'] && showVariables) {
                result += varSpec.name + "=";
              }
            }
            result += shouldEscape ? encodeURIComponent(value[j]).replace(/!/g, "%21") : this.notReallyPercentEncode(value[j]);
          }
        } else if (typeof value === "object") {
          if (showVariables && !varSpec.suffices['*']) {
            result += varSpec.name + "=";
          }
          let first = true;
          for (let key in value) {
            if (!first) {
              result += varSpec.suffices['*'] ? separator || "," : ",";
            }
            first = false;
            result += shouldEscape ? encodeURIComponent(key).replace(/!/g, "%21") : this.notReallyPercentEncode(key);
            result += varSpec.suffices['*'] ? '=' : ",";
            result += shouldEscape ? encodeURIComponent(value[key]).replace(/!/g, "%21") : this.notReallyPercentEncode(value[key]);
          }
        } else {
          if (showVariables) {
            result += varSpec.name;
            if (!trimEmptyString || value !== "") {
              result += "=";
            }
          }
          if (varSpec.truncate !== null) {
            value = value.substring(0, varSpec.truncate);
          }
          result += shouldEscape ? encodeURIComponent(value).replace(/!/g, "%21") : this.notReallyPercentEncode(value);
        }
      }
      return result;
    };
    subFunction.varNames = varNames;
    return {
      prefix: prefix,
      substitution: subFunction
    };
  }

  recursiveCompare(A, B) {
    if (A === B) {
      return true;
    }
    if (typeof A === "object" && typeof B === "object") {
      if (Array.isArray(A) !== Array.isArray(B)) {
        return false;
      } else if (Array.isArray(A)) {
        if (A.length !== B.length) {
          return false;
        }
        let i = 0,
            l = A.length;
        for (i = 0; i < l; i++) {
          if (!this.recursiveCompare(A[i], B[i])) {
            return false;
          }
        }
      } else {
        let key;
        for (key in A) {
          if (B[key] === undefined && A[key] !== undefined) {
            return false;
          }
        }
        for (key in B) {
          if (A[key] === undefined && B[key] !== undefined) {
            return false;
          }
        }
        for (key in A) {
          if (!this.recursiveCompare(A[key], B[key])) {
            return false;
          }
        }
      }
      return true;
    }
    return false;
  }

  defineKeyword(keyword, keywordFunction) {
    this.definedKeywords[keyword] = this.definedKeywords[keyword] || [];
    this.definedKeywords[keyword].push(keywordFunction);
  }

  createError(code, messageParams, dataPath, schemaPath, subErrors) {
    let messageTemplate = this.errorMessages[code] || _validationError.ERROR_MESSAGES_DEFAULT[code];
    if (typeof messageTemplate !== 'string') {
      return new _validationError.ValidationError(code, "Unknown error code " + code + ": " + JSON.stringify(messageParams), messageParams, dataPath, schemaPath, subErrors);
    }
    // Adapted from Crockford's supplant()
    let message = messageTemplate.replace(/\{([^{}]*)\}/g, function (whole, varName) {
      let subValue = messageParams[varName];
      return typeof subValue === 'string' || typeof subValue === 'number' ? subValue : whole;
    });
    return new _validationError.ValidationError(code, message, messageParams, dataPath, schemaPath, subErrors);
  }
  returnError(error) {
    return error;
  }

  collectError(error) {
    if (error) {
      this.errors.push(error);
    }
    return null;
  }

  prefixErrors(startIndex, dataPath, schemaPath) {
    let i = 0,
        l = this.errors.length;
    for (i = startIndex; i < l; i++) {
      this.errors[i] = this.errors[i].prefixWith(dataPath, schemaPath);
    }
    return this;
  }

  banUnknownProperties() {
    for (let unknownPath in this.unknownPropertyPaths) {
      let error = this.createError(_validationError.ERROR_CODES.UNKNOWN_PROPERTY, { path: unknownPath }, unknownPath, "");
      let result = this.handleError(error);
      if (result) {
        return result;
      }
    }
    return null;
  }
  addFormat(format, validator) {
    if (typeof format === 'object') {
      for (let key in format) {
        this.addFormat(key, format[key]);
      }
      return this;
    }
    this.formatValidators[format] = validator;
  }
  resolveRefs(schema, urlHistory) {
    if (schema['$ref'] !== undefined) {
      urlHistory = urlHistory || {};
      if (urlHistory[schema['$ref']]) {
        return this.createError(_validationError.ERROR_CODES.CIRCULAR_REFERENCE, { urls: Object.keys(urlHistory).join(', ') }, '', '');
      }
      urlHistory[schema['$ref']] = true;
      schema = this.getSchema(schema['$ref'], urlHistory);
    }
    return schema;
  }
  getSchema(url, urlHistory) {
    let schema;
    if (this.schemas[url] !== undefined) {
      schema = this.schemas[url];
      return this.resolveRefs(schema, urlHistory);
    }
    let baseUrl = url;
    let fragment = "";
    if (url.indexOf('#') !== -1) {
      fragment = url.substring(url.indexOf("#") + 1);
      baseUrl = url.substring(0, url.indexOf("#"));
    }
    if (typeof this.schemas[baseUrl] === 'object') {
      schema = this.schemas[baseUrl];
      let pointerPath = decodeURIComponent(fragment);
      if (pointerPath === "") {
        return this.resolveRefs(schema, urlHistory);
      } else if (pointerPath.charAt(0) !== "/") {
        return undefined;
      }
      let parts = pointerPath.split("/").slice(1);
      let i = 0,
          l = parts.length;
      for (i = 0; i < l; i++) {
        let component = parts[i].replace(/~1/g, "/").replace(/~0/g, "~");
        if (schema[component] === undefined) {
          schema = undefined;
          break;
        }
        schema = schema[component];
      }
      if (schema !== undefined) {
        return this.resolveRefs(schema, urlHistory);
      }
    }
    if (this.missing[baseUrl] === undefined) {
      this.missing.push(baseUrl);
      this.missing[baseUrl] = baseUrl;
      this.missingMap[baseUrl] = baseUrl;
    }
  }
  searchSchemas(schema, url) {
    if (Array.isArray(schema)) {
      let i = 0,
          l = schema.length;
      for (i = 0; i < l; i++) {
        this.searchSchemas(schema[i], url);
      }
    } else if (schema && typeof schema === "object") {
      if (typeof schema.id === "string") {
        if (isTrustedUrl(url, schema.id)) {
          if (this.schemas[schema.id] === undefined) {
            this.schemas[schema.id] = schema;
          }
        }
      }
      for (let key in schema) {
        if (key !== "enum") {
          if (typeof schema[key] === "object") {
            this.searchSchemas(schema[key], url);
          } else if (key === "$ref") {
            let uri = (0, _functions.getDocumentUri)(schema[key]);
            if (uri && this.schemas[uri] === undefined && this.missingMap[uri] === undefined) {
              this.missingMap[uri] = uri;
            }
          }
        }
      }
    }
  }
  addSchema(url, schema) {
    // overload
    if (typeof url !== 'string' || typeof schema === 'undefined') {
      if (typeof url === 'object' && typeof url.id === 'string') {
        schema = url;
        url = schema.id;
      } else {
        return;
      }
    }
    if (url === (0, _functions.getDocumentUri)(url) + "#") {
      // Remove empty fragment
      url = (0, _functions.getDocumentUri)(url);
    }
    this.schemas[url] = schema;
    delete this.missingMap[url];
    (0, _functions.normSchema)(schema, url);
    this.searchSchemas(schema, url);
  }

  getSchemaMap() {
    let map = {};
    for (let key in this.schemas) {
      map[key] = this.schemas[key];
    }
    return map;
  }

  getSchemaUris(filterRegExp) {
    let list = [];
    for (let key in this.schemas) {
      if (!filterRegExp || filterRegExp.test(key)) {
        list.push(key);
      }
    }
    return list;
  }

  getMissingUris(filterRegExp) {
    let list = [];
    for (let key in this.missingMap) {
      if (!filterRegExp || filterRegExp.test(key)) {
        list.push(key);
      }
    }
    return list;
  }

  dropSchemas() {
    this.schemas = {};
    this.reset();
  }

  reset() {
    this.missing = [];
    this.missingMap = {};
    this.errors = [];
  }

  validateAll(data, schema, dataPathParts, schemaPathParts, dataPointerPath) {
    let topLevel;
    schema = this.resolveRefs(schema);

    if (!schema) {
      return null;
    } else if (schema instanceof _validationError.ValidationError) {
      this.errors.push(schema);
      return schema;
    }

    let startErrorCount = this.errors.length;
    let frozenIndex,
        scannedFrozenSchemaIndex = null,
        scannedSchemasIndex = null;
    if (this.checkRecursive && data && typeof data === 'object') {
      topLevel = !this.scanned.length;
      if (data[this.validatedSchemasKey]) {
        let schemaIndex = data[this.validatedSchemasKey].indexOf(schema);
        if (schemaIndex !== -1) {
          this.errors = this.errors.concat(data[this.validationErrorsKey][schemaIndex]);
          return null;
        }
      }
      if (Object.isFrozen(data)) {
        frozenIndex = this.scannedFrozen.indexOf(data);
        if (frozenIndex !== -1) {
          let frozenSchemaIndex = this.scannedFrozenSchemas[frozenIndex].indexOf(schema);
          if (frozenSchemaIndex !== -1) {
            this.errors = this.errors.concat(this.scannedFrozenValidationErrors[frozenIndex][frozenSchemaIndex]);
            return null;
          }
        }
      }
      this.scanned.push(data);
      if (Object.isFrozen(data)) {
        if (frozenIndex === -1) {
          frozenIndex = this.scannedFrozen.length;
          this.scannedFrozen.push(data);
          this.scannedFrozenSchemas.push([]);
        }
        scannedFrozenSchemaIndex = this.scannedFrozenSchemas[frozenIndex].length;
        this.scannedFrozenSchemas[frozenIndex][scannedFrozenSchemaIndex] = schema;
        this.scannedFrozenValidationErrors[frozenIndex][scannedFrozenSchemaIndex] = [];
      } else {
        if (!data[this.validatedSchemasKey]) {
          try {
            Object.defineProperty(data, this.validatedSchemasKey, {
              value: [],
              configurable: true
            });
            Object.defineProperty(data, this.validationErrorsKey, {
              value: [],
              configurable: true
            });
          } catch (e) {
            // IE 7/8 workaround
            data[this.validatedSchemasKey] = [];
            data[this.validationErrorsKey] = [];
          }
        }
        scannedSchemasIndex = data[this.validatedSchemasKey].length;
        data[this.validatedSchemasKey][scannedSchemasIndex] = schema;
        data[this.validationErrorsKey][scannedSchemasIndex] = [];
      }
    }

    let errorCount = this.errors.length;
    let error = this.validateBasic(data, schema, dataPointerPath) || this.validateNumeric(data, schema, dataPointerPath) || this.validateString(data, schema, dataPointerPath) || this.validateArray(data, schema, dataPointerPath) || this.validateObject(data, schema, dataPointerPath) || this.validateCombinations(data, schema, dataPointerPath) || this.validateHypermedia(data, schema, dataPointerPath) || this.validateFormat(data, schema, dataPointerPath) || this.validateDefinedKeywords(data, schema, dataPointerPath) || null;

    if (topLevel) {
      while (this.scanned.length) {
        let item = this.scanned.pop();
        delete item[this.validatedSchemasKey];
      }
      this.scannedFrozen = [];
      this.scannedFrozenSchemas = [];
    }

    if (error || errorCount !== this.errors.length) {
      while (dataPathParts && dataPathParts.length || schemaPathParts && schemaPathParts.length) {
        let dataPart = dataPathParts && dataPathParts.length ? "" + dataPathParts.pop() : null;
        let schemaPart = schemaPathParts && schemaPathParts.length ? "" + schemaPathParts.pop() : null;
        if (error) {
          error = error.prefixWith(dataPart, schemaPart);
        }
        this.prefixErrors(errorCount, dataPart, schemaPart);
      }
    }

    if (scannedFrozenSchemaIndex !== null) {
      this.scannedFrozenValidationErrors[frozenIndex][scannedFrozenSchemaIndex] = this.errors.slice(startErrorCount);
    } else if (scannedSchemasIndex !== null) {
      data[this.validationErrorsKey][scannedSchemasIndex] = this.errors.slice(startErrorCount);
    }

    return this.handleError(error);
  }

  validateFormat(data, schema) {
    if (typeof schema.format !== 'string' || !this.formatValidators[schema.format]) {
      return null;
    }
    let errorMessage = this.formatValidators[schema.format].call(null, data, schema);
    if (typeof errorMessage === 'string' || typeof errorMessage === 'number') {
      return this.createError(_validationError.ERROR_CODES.FORMAT_CUSTOM, { message: errorMessage }).prefixWith(null, "format");
    } else if (errorMessage && typeof errorMessage === 'object') {
      return this.createError(_validationError.ERROR_CODES.FORMAT_CUSTOM, { message: errorMessage.message || "?" }, errorMessage.dataPath || null, errorMessage.schemaPath || "/format");
    }
    return null;
  }

  validateDefinedKeywords(data, schema, dataPointerPath) {
    for (let key in this.definedKeywords) {
      if (typeof schema[key] === 'undefined') {
        continue;
      }
      let validationFunctions = this.definedKeywords[key];
      let i = 0,
          l = validationFunctions.length;
      for (i = 0; i < l; i++) {
        let func = validationFunctions[i];
        let result = func(data, schema[key], schema, dataPointerPath);
        if (typeof result === 'string' || typeof result === 'number') {
          return this.createError(_validationError.ERROR_CODES.KEYWORD_CUSTOM, { key: key, message: result }).prefixWith(null, "format");
        } else if (result && typeof result === 'object') {
          let code = result.code;
          if (typeof code === 'string') {
            if (!_validationError.ERROR_CODES[code]) {
              throw new Error('Undefined error code (use defineError): ' + code);
            }
            code = _validationError.ERROR_CODES[code];
          } else if (typeof code !== 'number') {
            code = _validationError.ERROR_CODES.KEYWORD_CUSTOM;
          }
          let messageParams = typeof result.message === 'object' ? result.message : { key: key, message: result.message || "?" };
          let schemaPath = result.schemaPath || "/" + key.replace(/~/g, '~0').replace(/\//g, '~1');
          return this.createError(code, messageParams, result.dataPath || null, schemaPath);
        }
      }
    }
    return null;
  }

  validateBasic(data, schema, dataPointerPath) {
    let error = this.validateType(data, schema, dataPointerPath);
    if (error) {
      return error.prefixWith(null, "type");
    }
    /*if (error = this.validateEnum(data, schema, dataPointerPath)) {
    return error.prefixWith(null, "type");
    }*/
    return null;
  }

  validateType(data, schema) {
    if (schema.type === undefined) {
      return null;
    }
    let dataType = typeof data;
    if (data === null) {
      dataType = "null";
    } else if (Array.isArray(data)) {
      dataType = "array";
    }
    let allowedTypes = schema.type;
    if (typeof allowedTypes !== "object") {
      allowedTypes = [allowedTypes];
    }

    let i = 0,
        l = allowedTypes.length;
    for (i = 0; i < l; i++) {
      let type = allowedTypes[i];
      if (type === dataType || type === "integer" && dataType === "number" && data % 1 === 0) {
        return null;
      }
    }
    return this.createError(_validationError.ERROR_CODES.INVALID_TYPE, { type: dataType, expected: allowedTypes.join("/") });
  }

  validateEnum(data, schema) {
    if (schema["enum"] === undefined) {
      return null;
    }
    let i = 0,
        l = schema["enum"].length;
    for (i = 0; i < l; i++) {
      let enumVal = schema["enum"][i];
      if (this.recursiveCompare(data, enumVal)) {
        return null;
      }
    }
    return this.createError(_validationError.ERROR_CODES.ENUM_MISMATCH, { value: typeof JSON !== 'undefined' ? JSON.stringify(data) : data });
  }

  validateNumeric(data, schema, dataPointerPath) {
    return this.validateMultipleOf(data, schema, dataPointerPath) || this.validateMinMax(data, schema, dataPointerPath) || this.validateNaN(data, schema, dataPointerPath) || null;
  }

  validateMultipleOf(data, schema) {
    let multipleOf = schema.multipleOf || schema.divisibleBy;
    if (multipleOf === undefined) {
      return null;
    }
    if (typeof data === "number") {
      let remainder = data / multipleOf % 1;
      if (remainder >= CLOSE_ENOUGH_LOW && remainder < CLOSE_ENOUGH_HIGH) {
        return this.createError(_validationError.ERROR_CODES.NUMBER_MULTIPLE_OF, { value: data, multipleOf: multipleOf });
      }
    }
    return null;
  }

  validateMinMax(data, schema) {
    if (typeof data !== "number") {
      return null;
    }
    if (schema.minimum !== undefined) {
      if (data < schema.minimum) {
        return this.createError(_validationError.ERROR_CODES.NUMBER_MINIMUM, { value: data, minimum: schema.minimum }).prefixWith(null, "minimum");
      }
      if (schema.exclusiveMinimum && data === schema.minimum) {
        return this.createError(_validationError.ERROR_CODES.NUMBER_MINIMUM_EXCLUSIVE, { value: data, minimum: schema.minimum }).prefixWith(null, "exclusiveMinimum");
      }
    }
    if (schema.maximum !== undefined) {
      if (data > schema.maximum) {
        return this.createError(_validationError.ERROR_CODES.NUMBER_MAXIMUM, { value: data, maximum: schema.maximum }).prefixWith(null, "maximum");
      }
      if (schema.exclusiveMaximum && data === schema.maximum) {
        return this.createError(_validationError.ERROR_CODES.NUMBER_MAXIMUM_EXCLUSIVE, { value: data, maximum: schema.maximum }).prefixWith(null, "exclusiveMaximum");
      }
    }
    return null;
  }

  validateNaN(data) {
    if (typeof data !== "number") {
      return null;
    }
    if (isNaN(data) === true || data === Infinity || data === -Infinity) {
      return this.createError(_validationError.ERROR_CODES.NUMBER_NOT_A_NUMBER, { value: data }).prefixWith(null, "type");
    }
    return null;
  }

  validateString(data, schema, dataPointerPath) {
    return this.validateStringLength(data, schema, dataPointerPath) || this.validateStringPattern(data, schema, dataPointerPath) || null;
  }

  validateStringLength(data, schema) {
    if (typeof data !== "string") {
      return null;
    }
    if (schema.minLength !== undefined) {
      if (data.length < schema.minLength) {
        return this.createError(_validationError.ERROR_CODES.STRING_LENGTH_SHORT, { length: data.length, minimum: schema.minLength }).prefixWith(null, "minLength");
      }
    }
    if (schema.maxLength !== undefined) {
      if (data.length > schema.maxLength) {
        return this.createError(_validationError.ERROR_CODES.STRING_LENGTH_LONG, { length: data.length, maximum: schema.maxLength }).prefixWith(null, "maxLength");
      }
    }
    return null;
  }

  validateStringPattern(data, schema) {
    if (typeof data !== "string" || schema.pattern === undefined) {
      return null;
    }
    let regexp = new RegExp(schema.pattern);
    if (!regexp.test(data)) {
      return this.createError(_validationError.ERROR_CODES.STRING_PATTERN, { pattern: schema.pattern }).prefixWith(null, "pattern");
    }
    return null;
  }
  validateArray(data, schema, dataPointerPath) {
    if (!Array.isArray(data)) {
      return null;
    }
    return this.validateArrayLength(data, schema, dataPointerPath) || this.validateArrayUniqueItems(data, schema, dataPointerPath) || this.validateArrayItems(data, schema, dataPointerPath) || null;
  }

  validateArrayLength(data, schema) {
    let error;
    if (schema.minItems !== undefined) {
      if (data.length < schema.minItems) {
        error = this.createError(_validationError.ERROR_CODES.ARRAY_LENGTH_SHORT, { length: data.length, minimum: schema.minItems }).prefixWith(null, "minItems");
        if (this.handleError(error)) {
          return error;
        }
      }
    }
    if (schema.maxItems !== undefined) {
      if (data.length > schema.maxItems) {
        error = this.createError(_validationError.ERROR_CODES.ARRAY_LENGTH_LONG, { length: data.length, maximum: schema.maxItems }).prefixWith(null, "maxItems");
        if (this.handleError(error)) {
          return error;
        }
      }
    }
    return null;
  }

  validateArrayUniqueItems(data, schema) {
    if (schema.uniqueItems) {
      let i = 0,
          l = data.length;
      for (i = 0; i < l; i++) {
        let j = 0;
        for (j = i + 1; j < l; j++) {
          if (recursiveCompare(data[i], data[j])) {
            let error = this.createError(_validationError.ERROR_CODES.ARRAY_UNIQUE, { match1: i, match2: j }).prefixWith(null, "uniqueItems");
            if (this.handleError(error)) {
              return error;
            }
          }
        }
      }
    }
    return null;
  }

  validateArrayItems(data, schema, dataPointerPath) {
    if (schema.items === undefined) {
      return null;
    }
    let error, i;
    if (Array.isArray(schema.items)) {
      let l = data.length;
      for (i = 0; i < l; i++) {
        if (i < schema.items.length) {
          if (error = this.validateAll(data[i], schema.items[i], [i], ["items", i], dataPointerPath + "/" + i)) {
            return error;
          }
        } else if (schema.additionalItems !== undefined) {
          if (typeof schema.additionalItems === "boolean") {
            if (!schema.additionalItems) {
              error = this.createError(_validationError.ERROR_CODES.ARRAY_ADDITIONAL_ITEMS, {}).prefixWith("" + i, "additionalItems");
              if (this.handleError(error)) {
                return error;
              }
            }
          } else if (error = this.validateAll(data[i], schema.additionalItems, [i], ["additionalItems"], dataPointerPath + "/" + i)) {
            return error;
          }
        }
      }
    } else {
      let l = data.length;
      for (i = 0; i < l; i++) {
        if (error = this.validateAll(data[i], schema.items, [i], ["items"], dataPointerPath + "/" + i)) {
          return error;
        }
      }
    }
    return null;
  }

  validateObject(data, schema, dataPointerPath) {
    if (typeof data !== "object" || data === null || Array.isArray(data)) {
      return null;
    }
    return this.validateObjectMinMaxProperties(data, schema, dataPointerPath) || this.validateObjectRequiredProperties(data, schema, dataPointerPath) || this.validateObjectProperties(data, schema, dataPointerPath) || this.validateObjectDependencies(data, schema, dataPointerPath) || null;
  }

  validateObjectMinMaxProperties(data, schema) {
    let keys = Object.keys(data);
    let error;
    if (schema.minProperties !== undefined) {
      if (keys.length < schema.minProperties) {
        error = this.createError(_validationError.ERROR_CODES.OBJECT_PROPERTIES_MINIMUM, { propertyCount: keys.length, minimum: schema.minProperties }).prefixWith(null, "minProperties");
        if (this.handleError(error)) {
          return error;
        }
      }
    }
    if (schema.maxProperties !== undefined) {
      if (keys.length > schema.maxProperties) {
        error = this.createError(_validationError.ERROR_CODES.OBJECT_PROPERTIES_MAXIMUM, { propertyCount: keys.length, maximum: schema.maxProperties }).prefixWith(null, "maxProperties");
        if (this.handleError(error)) {
          return error;
        }
      }
    }
    return null;
  }

  validateObjectRequiredProperties(data, schema) {
    if (schema.required !== undefined) {
      let i = 0,
          l = schema.required.length;
      for (i = 0; i < l; i++) {
        let key = schema.required[i];
        if (data[key] === undefined) {
          let error = this.createError(_validationError.ERROR_CODES.OBJECT_REQUIRED, { key: key }).prefixWith(null, "" + i).prefixWith(null, "required");
          if (this.handleError(error)) {
            return error;
          }
        }
      }
    }
    return null;
  }

  validateObjectProperties(data, schema, dataPointerPath) {
    let error;
    for (let key in data) {
      let keyPointerPath = dataPointerPath + "/" + key.replace(/~/g, '~0').replace(/\//g, '~1');
      let foundMatch = false;
      if (schema.properties !== undefined && schema.properties[key] !== undefined) {
        foundMatch = true;
        if (error = this.validateAll(data[key], schema.properties[key], [key], ["properties", key], keyPointerPath)) {
          return error;
        }
      }
      if (schema.patternProperties !== undefined) {
        for (let patternKey in schema.patternProperties) {
          let regexp = new RegExp(patternKey);
          if (regexp.test(key)) {
            foundMatch = true;
            if (error = this.validateAll(data[key], schema.patternProperties[patternKey], [key], ["patternProperties", patternKey], keyPointerPath)) {
              return error;
            }
          }
        }
      }
      if (!foundMatch) {
        if (schema.additionalProperties !== undefined) {
          if (this.trackUnknownProperties) {
            this.knownPropertyPaths[keyPointerPath] = true;
            delete this.unknownPropertyPaths[keyPointerPath];
          }
          if (typeof schema.additionalProperties === "boolean") {
            if (!schema.additionalProperties) {
              error = this.createError(_validationError.ERROR_CODES.OBJECT_ADDITIONAL_PROPERTIES, {}).prefixWith(key, "additionalProperties");
              if (this.handleError(error)) {
                return error;
              }
            }
          } else {
            if (error = this.validateAll(data[key], schema.additionalProperties, [key], ["additionalProperties"], keyPointerPath)) {
              return error;
            }
          }
        } else if (this.trackUnknownProperties && !this.knownPropertyPaths[keyPointerPath]) {
          this.unknownPropertyPaths[keyPointerPath] = true;
        }
      } else if (this.trackUnknownProperties) {
        this.knownPropertyPaths[keyPointerPath] = true;
        delete this.unknownPropertyPaths[keyPointerPath];
      }
    }
    return null;
  }

  validateObjectDependencies(data, schema, dataPointerPath) {
    let error;
    if (schema.dependencies !== undefined) {
      for (let depKey in schema.dependencies) {
        if (data[depKey] !== undefined) {
          let dep = schema.dependencies[depKey];
          if (typeof dep === "string") {
            if (data[dep] === undefined) {
              error = this.createError(_validationError.ERROR_CODES.OBJECT_DEPENDENCY_KEY, { key: depKey, missing: dep }).prefixWith(null, depKey).prefixWith(null, "dependencies");
              if (this.handleError(error)) {
                return error;
              }
            }
          } else if (Array.isArray(dep)) {
            let i = 0,
                l = dep.lenth;
            for (i = 0; i < l; i++) {
              let requiredKey = dep[i];
              if (data[requiredKey] === undefined) {
                error = this.createError(_validationError.ERROR_CODES.OBJECT_DEPENDENCY_KEY, { key: depKey, missing: requiredKey }).prefixWith(null, "" + i).prefixWith(null, depKey).prefixWith(null, "dependencies");
                if (this.handleError(error)) {
                  return error;
                }
              }
            }
          } else {
            if (error = this.validateAll(data, dep, [], ["dependencies", depKey], dataPointerPath)) {
              return error;
            }
          }
        }
      }
    }
    return null;
  }

  validateCombinations(data, schema, dataPointerPath) {
    return this.validateAllOf(data, schema, dataPointerPath) || this.validateAnyOf(data, schema, dataPointerPath) || this.validateOneOf(data, schema, dataPointerPath) || this.validateNot(data, schema, dataPointerPath) || null;
  }

  validateAllOf(data, schema, dataPointerPath) {
    if (schema.allOf === undefined) {
      return null;
    }
    let error;
    let i = 0,
        l = schema.allOf.length;
    for (i = 0; i < l; i++) {
      let subSchema = schema.allOf[i];
      if (error = this.validateAll(data, subSchema, [], ["allOf", i], dataPointerPath)) {
        return error;
      }
    }
    return null;
  }

  validateAnyOf(data, schema, dataPointerPath) {
    if (schema.anyOf === undefined) {
      return null;
    }
    let errors = [];
    let startErrorCount = this.errors.length;
    let oldUnknownPropertyPaths, oldKnownPropertyPaths;
    if (this.trackUnknownProperties) {
      oldUnknownPropertyPaths = this.unknownPropertyPaths;
      oldKnownPropertyPaths = this.knownPropertyPaths;
    }
    let errorAtEnd = true;
    let i = 0,
        l = schema.anyOf.length;
    for (i = 0; i < l; i++) {
      if (this.trackUnknownProperties) {
        this.unknownPropertyPaths = {};
        this.knownPropertyPaths = {};
      }
      let subSchema = schema.anyOf[i];

      let errorCount = this.errors.length;
      let error = this.validateAll(data, subSchema, [], ["anyOf", i], dataPointerPath);

      if (error === null && errorCount === this.errors.length) {
        this.errors = this.errors.slice(0, startErrorCount);

        if (this.trackUnknownProperties) {
          for (let knownKey in this.knownPropertyPaths) {
            oldKnownPropertyPaths[knownKey] = true;
            delete oldUnknownPropertyPaths[knownKey];
          }
          for (let unknownKey in this.unknownPropertyPaths) {
            if (!oldKnownPropertyPaths[unknownKey]) {
              oldUnknownPropertyPaths[unknownKey] = true;
            }
          }
          // We need to continue looping so we catch all the
          // property definitions, but we don't want to return an
          // error
          errorAtEnd = false;
          continue;
        }

        return null;
      }
      if (error) {
        errors.push(error.prefixWith(null, "" + i).prefixWith(null, "anyOf"));
      }
    }
    if (this.trackUnknownProperties) {
      this.unknownPropertyPaths = oldUnknownPropertyPaths;
      this.knownPropertyPaths = oldKnownPropertyPaths;
    }
    if (errorAtEnd) {
      errors = errors.concat(this.errors.slice(startErrorCount));
      this.errors = this.errors.slice(0, startErrorCount);
      return this.createError(_validationError.ERROR_CODES.ANY_OF_MISSING, {}, "", "/anyOf", errors);
    }
  }

  validateOneOf(data, schema, dataPointerPath) {
    if (schema.oneOf === undefined) {
      return null;
    }
    let validIndex = null;
    let errors = [];
    let startErrorCount = this.errors.length;
    let oldUnknownPropertyPaths, oldKnownPropertyPaths;
    if (this.trackUnknownProperties) {
      oldUnknownPropertyPaths = this.unknownPropertyPaths;
      oldKnownPropertyPaths = this.knownPropertyPaths;
    }
    let i = 0,
        l = schema.oneOf.length;
    for (i = 0; i < l; i++) {
      if (this.trackUnknownProperties) {
        this.unknownPropertyPaths = {};
        this.knownPropertyPaths = {};
      }
      let subSchema = schema.oneOf[i];

      let errorCount = this.errors.length;
      let error = this.validateAll(data, subSchema, [], ["oneOf", i], dataPointerPath);

      if (error === null && errorCount === this.errors.length) {
        if (validIndex === null) {
          validIndex = i;
        } else {
          this.errors = this.errors.slice(0, startErrorCount);
          return this.createError(_validationError.ERROR_CODES.ONE_OF_MULTIPLE, { index1: validIndex, index2: i }, "", "/oneOf");
        }
        if (this.trackUnknownProperties) {
          for (let knownKey in this.knownPropertyPaths) {
            oldKnownPropertyPaths[knownKey] = true;
            delete oldUnknownPropertyPaths[knownKey];
          }
          for (let unknownKey in this.unknownPropertyPaths) {
            if (!oldKnownPropertyPaths[unknownKey]) {
              oldUnknownPropertyPaths[unknownKey] = true;
            }
          }
        }
      } else if (error) {
        errors.push(error);
      }
    }
    if (this.trackUnknownProperties) {
      this.unknownPropertyPaths = oldUnknownPropertyPaths;
      this.knownPropertyPaths = oldKnownPropertyPaths;
    }
    if (validIndex === null) {
      errors = errors.concat(this.errors.slice(startErrorCount));
      this.errors = this.errors.slice(0, startErrorCount);
      return this.createError(_validationError.ERROR_CODES.ONE_OF_MISSING, {}, "", "/oneOf", errors);
    } else {
      this.errors = this.errors.slice(0, startErrorCount);
    }
    return null;
  }

  validateNot(data, schema, dataPointerPath) {
    if (schema.not === undefined) {
      return null;
    }
    let oldErrorCount = this.errors.length;
    let oldUnknownPropertyPaths, oldKnownPropertyPaths;
    if (this.trackUnknownProperties) {
      oldUnknownPropertyPaths = this.unknownPropertyPaths;
      oldKnownPropertyPaths = this.knownPropertyPaths;
      this.unknownPropertyPaths = {};
      this.knownPropertyPaths = {};
    }
    let error = this.validateAll(data, schema.not, null, null, dataPointerPath);
    let notErrors = this.errors.slice(oldErrorCount);
    this.errors = this.errors.slice(0, oldErrorCount);
    if (this.trackUnknownProperties) {
      this.unknownPropertyPaths = oldUnknownPropertyPaths;
      this.knownPropertyPaths = oldKnownPropertyPaths;
    }
    if (error === null && notErrors.length === 0) {
      return this.createError(_validationError.ERROR_CODES.NOT_PASSED, {}, "", "/not");
    }
    return null;
  }

  validateHypermedia(data, schema, dataPointerPath) {
    if (!schema.links) {
      return null;
    }
    let error;
    let i = 0,
        l = schema.links.length;
    for (i = 0; i < l; i++) {
      let ldo = schema.links[i];
      if (ldo.rel === "describedby") {
        let template = new UriTemplate(ldo.href);
        let allPresent = true;
        let j = 0,
            ll = template.varNames.length;
        for (j = 0; j < ll; j++) {
          if (!(template.varNames[j] in data)) {
            allPresent = false;
            break;
          }
        }
        if (allPresent) {
          let schemaUrl = template.fillFromObject(data);
          let subSchema = { "$ref": schemaUrl };
          if (error = this.validateAll(data, subSchema, [], ["links", i], dataPointerPath)) {
            return error;
          }
        }
      }
    }
  }
};

exports.default = ValidatorContext = ValidatorContext;

/***/ })

/******/ });
});
//# sourceMappingURL=augmented-next.js.map