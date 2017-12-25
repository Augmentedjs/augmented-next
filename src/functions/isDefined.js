/**
 * Augmented.isDefined - Checks and returns if a passed variable is defined
 * @method isDefined
 * @memberof Augmented
 * @param {string} variable to check
 * @returns {boolean} true if value is defined
 */
const isDefined = (val) => {
  return typeof val != "undefined";
};

export default isDefined;
