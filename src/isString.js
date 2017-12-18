/**
 * Augmented.isString -
 * checks if a value is a String
 * @method isString
 * @memberof Augmented
 * @param {string} variable to check
 * @returns {boolean} true if value is a string
 */
const isString = (val) => {
  return (typeof val === "string") || ((!!val && typeof val === "object") && Object.prototype.toString.call(val) === "[object String]");
};

export default isString;
