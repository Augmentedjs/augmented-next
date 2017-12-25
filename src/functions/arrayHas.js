/**
 * Array.has - returns is a property is in the array (very fast return)
 * @function arrayhas
 * @memberof Augmented
 * @param {array} arr Source array
 * @param {object} key Key to test for
 * @returns true if property is included in an array
 */
const arrayHas = (arr, key) => {
  return (arr.indexOf(key) !== -1);
};

export default arrayHas;
