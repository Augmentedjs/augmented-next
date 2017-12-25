/**
 * exec method - Execute a function by name
 * @method exec
 * @memberof Augmented
 * @param {string} functionName The name of the function
 * @param {object} context The context to call from
 * @param {object} args Arguments
 */
const exec = (functionName, context, ...args) => {
  const //args = Array.prototype.slice.call(arguments, 2),
        namespaces = functionName.split("."),
        func = namespaces.pop(),
        l = namespaces.length;
  let i = 0;
  for (i = 0; i < l; i++) {
    context = context[namespaces[i]];
  }
  return context[func].apply(context, args);
};

export default exec;
