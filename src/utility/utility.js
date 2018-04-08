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
export const shuffle = (array) => {
  const nArray = array.slice(0), l = array.length;
  let i = 0, temp, j;
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
export const prettyPrint = (obj, spaces, number) => {
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
export const binarySearch = (arr, find, comparator) => {
  let low = 0, high = arr.length - 1, i, comparison;

  while (low <= high) {
    i = Math.floor((low + high) / 2);
    comparison = comparator(arr[i], find);
    if (comparison < 0) {
      low = i + 1; continue;
    }
    if (comparison > 0) {
      high = i - 1; continue;
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
export const TransformerType = {};
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
export class Transformer {
  constructor() {
    this.type = TransformerType;
  };

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
    switch(type) {
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
  };

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
};

/**
 * Wrap method to handle wrapping functions (simular to _.wrap)
 * @memberof Utility
 */
export const wrap = (fn, wrap) => {
  return () => {
    return wrap.apply(this, [fn].concat(Array.prototype.slice.call(arguments)));
  };
};

/**
 * filter an oject from array of values
 *
 * @param {object} object Object to filter
 * @param {array} keys keys to filter from the object
 * @returns {object} returns a new object with only these keys
 * @memberof Utility
 */
export const filterObject = (object, keys) => {
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
