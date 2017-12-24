/**
 * Sorts an array of objects by propery in object
 * @constructor Augmented.Utility.sortObjects
 * @memberof Augmented.Utility
 * @param {array} array The object array to sort
 * @param {object} key The property to sort by
 * @returns {array} The sorted array
 */
const sortObjects = (array, key) => {
  return array.sort( (a, b) => {
    const x = a[key], y = b[key];
    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
  });
};

export default sortObjects;
