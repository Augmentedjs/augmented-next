/**
 * Utility Package -
 * Small Utilities
 * @namespace Augmented.Utility
 * @memberof Augmented
 */
const Utility = {};

/**
 * Shuffles an Array with Fisher-Yates Shuffle algorithm
 * @constructor Augmented.Utility.Shuffle
 * @memberof Augmented.Utility
 * @param {array} array The array to shuffle
 * @returns {array} A new shuffled array
 */
Utility.Shuffle = (array) => {
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
 * @constructor Augmented.Utility.PrettyPrint
 * @memberof Augmented.Utility
 * @param {object} obj The object to print
 * @param {boolean} spaces Use spaces instead of tabs
 * @returns {number} number The number of spaces to pad
 */
Utility.PrettyPrint = (obj, spaces, number) => {
  let x = "\t";
  if (spaces) {
    x = " ".repeat(number);
  }
  return JSON.stringify(obj, null, x);
};

/**
 * Sorts an array of objects by propery in object
 * @constructor Augmented.Utility.Sort
 * @memberof Augmented.Utility
 * @param {array} array The object array to sort
 * @param {object} key The property to sort by
 * @returns {array} The sorted array
 */
Utility.Sort = (array, key) => {
  return array.sort( (a, b) => {
    const x = a[key], y = b[key];
    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
  });
};

/**
 * Performs a binary search on the host array. vs indexOf<br/>
 * Binary Search is a complexity of <em>O(n log n)</em> vs <em>O(n)</em> with indexOf
 * @constructor Augmented.Utility.BinarySearch
 * @memberof Augmented.Utility
 * @param {Array} arr The array.
 * @param {Any} find The item to search for within the array.
 * @param {function} comparator The comparator to use
 * @returns {Number} The index of the element which defaults to -1 when not found.
 */
Utility.BinarySearch = (arr, find, comparator) => {
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
 * Quick Sort implimentation for Arrays -
 * @constructor Augmented.Utility.QuickSort
 * @memberof Augmented.Utility
 * @param {Array} arr Array to Sort
 * @returns {Array} Returns a sorted array
 */
const quickSort = Utility.QuickSort = (arr) => {
  //if array is empty
  if (arr.length === 0) {
    return [];
  }

  let i = 1;
  const l = arr.length, left = [], right = [], pivot = arr[0];
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
 * Augmented.Utility.TransformerType <br/>
 * Transformer type for use in the transformer
 * @enum {number} Augmented.Utility.TransformerType
 * @name Augmented.Utility.TransformerType
 * @memberof Augmented.Utility
 * @property {number} xString Standard String
 * @property {number} nInteger Integer
 * @property {number} xNumber Any number
 * @property {number} xBoolean True/False
 * @property {number} xArray Stanrdard Array
 * @property {number} xObject Any Object
 * @property {number} xNull Null
 */
Utility.TransformerType = {
  "xString": 0,
  "xInteger": 1,
  "xNumber": 2,
  "xBoolean": 3,
  "xArray": 4,
  "xObject": 5,
  "xNull": 6
};

/**
 * Augmented.Utility.Transformer <br/>
 * Transform an object, type, or array to another type, object, or array
 * @namespace Augmented.Utility.Transformer
 * @memberof Augmented.Utility
 */
class Transformer {
  constructor() {
  }

  /**
   * The transformer type enum
   * @propery type The transformer type enum
   * @type {Augmented.Utility.TransformerType}
   * @memberof Augmented.Utility.Transformer
   */
  static type = Utility.TransformerType;

  /**
   * Transform an object, primitive, or array to another object, primitive, or array
   * @method transform
   * @param {object} source Source primitive to transform
   * @param {Augmented.Utility.TransformerType} type Type to transform to
   * @memberof Augmented.Utility.Transformer
   * @returns {object} returns a transformed object or primitive
   */
  static transform(source, type) {
    let out = null;
    switch(type) {
      case Utility.TransformerType.xString:
      if (typeof source === 'object') {
        out = JSON.stringify(source);
      } else {
        out = String(source);
      }
      break;
      case Utility.TransformerType.xInteger:
      out = parseInt(source);
      break;
      case Utility.TransformerType.xNumber:
      out = Number(source);
      break;
      case Utility.TransformerType.xBoolean:
      out = Boolean(source);
      break;
      case Utility.TransformerType.xArray:
      if (!Array.isArray(source)) {
        out = [];
        out[0] = source;
      } else {
        out = source;
      }
      break;
      case Utility.TransformerType.xObject:
      if (typeof source !== 'object') {
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
   * @method isType
   * @memberof Augmented.Utility.Transformer
   * @param {object} source The source primitive
   * @returns {Augmented.Utility.TransformerType} type of source as Augmented.Utility.TransformerType
   */
  static isType(source) {
    if (source === null) {
      return Utility.TransformerType.xNull;
    } else if (typeof source === 'string') {
      return Utility.TransformerType.xString;
    } else if (typeof source === 'number') {
      return Utility.TransformerType.xNumber;
    } else if (typeof source === 'boolean') {
      return Utility.TransformerType.xBoolean;
    } else if (Array.isArray(source)) {
      return Utility.TransformerType.xArray;
    } else if (typeof source === 'object') {
      return Augmented.Utility.TransformerType.xObject;
    }
  }
};

Utility.Transformer = Transformer;

export default Utility;
