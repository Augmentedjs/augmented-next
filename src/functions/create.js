import isObject from "./isObject.js";

const result = (prototype) => {
  if (!isObject(prototype)) {
    return {};
  }
  return Object.create(prototype);
};

/**
 * Augmented.create
 * @method create
 * @memberof Augmented
 * @param {object} prototype The input prototype
 * @param {object} props The properties (optional)
 * @returns {object} Returns the created object
 */
const create = (prototype, props) => {
  const o = result(prototype);
  if (props) {
    Object.assign(o, props);
  }
  return o;
};

export default create;
