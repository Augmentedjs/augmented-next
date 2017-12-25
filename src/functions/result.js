import isFunction from "./isFunction.js";

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
  return isFunction(value) ? value.call(object) : value;
};

export default result;
