import before from "./before.js";

const once = (func) => {
  return before(2, func);
};

export default once;
