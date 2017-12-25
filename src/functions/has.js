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

export default has;
