/**
 * Augmented.isObject
 * @method isObject
 * @memberof Augmented
 * @param {object} obj The input object
 * @returns {boolean} Returns true of the param is an object
 */
const isObject = (obj) => {
  const type = typeof obj;
  return (type === "function" || type === "object" && !!obj);
};

export default isObject;
