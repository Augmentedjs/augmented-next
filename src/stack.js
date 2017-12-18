/**
* Augmented.Utility.Stack -
* Standard Stack data structure
* @constructor Augmented.Utility.Stack
* @memberof Augmented.Utility
*/
class Stack {
  constructor() {
  };

  _stack = [];

  /**
  * The empty method clears the stack
  * @method empty
  * @memberof Augmented.Utility.Stack
  */
  empty() {
    return (this._stack.length === 0);
  };
  /**
  * The peek method returns the first in the stack
  * @method peek
  * @memberof Augmented.Utility.Stack
  * @returns {object} Returns the first object in the stack
  */
  peek() {
    return this._stack[0];
  };
  /**
  * The pop method returns and removes the first in the stack
  * @method pop
  * @memberof Augmented.Utility.Stack
  * @returns {object} Returns the first object in the stack
  */
  pop() {
    return this._stack.pop();
  };
  /**
  * The push method adds to the stack
  * @method push
  * @memberof Augmented.Utility.Stack
  * @param {object} item The item to push to the stack
  */
  push(item) {
    this._stack.push(item);
  };
  /**
  * The search method returns where in the stack an item exists
  * @method search
  * @memberof Augmented.Utility.Stack
  * @returns {number} Returns the index of the item
  */
  search(item) {
    return this._stack.indexOf(item);
  };
  /**
  * The size method returns the size of the stack
  * @method size
  * @memberof Augmented.Utility.Stack
  * @returns {number} Returns the size of the stack
  */
  size() {
    return this._stack.length;
  };
  /**
  * The clear method clears the stack
  * @method clear
  * @memberof Augmented.Utility.Stack
  */
  clear() {
    this._stack.splice(0, this._stack.length);
  };
  /**
  * The toArray method returns the stack as an array
  * @method toArray
  * @memberof Augmented.Utility.Stack
  * @returns {array} Returns the stack as an array
  */
  toArray() {
    return this._stack;
  };
};

export default Stack;
