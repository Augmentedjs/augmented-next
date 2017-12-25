import isObject from "./isObject.js";

/**
 * Augmented.allKeys
 * @method allKeys
 * @memberof Augmented
 * @param {object} obj The input object
 * @returns {array} Returns the array of ALL keys including prototyped
 */
const allKeys = (obj) => {
  if (!isObject(obj)) {
    return [];
  }
  return Object.getOwnPropertyNames(obj);
};

export default allKeys;
