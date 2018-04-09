/**
* Used to secure a resource via permissions
* @memberof Security
* @param {array} permissions Permissions to add to the entry (optional)
* @param {boolean} negaive Sets negative permissions (optional)
*/
class Entry {
  constructor(p, neg) {
    this._permissions = (p) ? p : [];
    this._neg = (neg) ? neg : false;
  };
  /**
   * Gets the permissions
   * @property {array} permissions
   * @private
   */

  /**
  * Negative flag
  * @property {boolean} isNegative
  */
  isNegative() {
    return this._neg;
  };

  /**
  * Gets the permissions
  * @returns {array} Permissions
  */
  get permissions() {
    return this._permissions;
  };
  /**
  * Sets the permissions
  * @param {array} permissions Permissions Array to set
  */
  set permissions(p) {
    this._permissions = p;
  };
  /**
  * Add a permission
  * @param {string} permission Permission to add
  */
  addPermission(p) {
    this._permissions.push(p);
  };
  /**
  * Remove a permission
  * @param {string} permission Permission to remove
  */
  removePermission(p) {
    const i = this._permissions.indexOf(p);
    this._permissions.splice(i, 1);
  };
  /**
  * Returns if this entry has a permission
  * @param {string} permission Permission to test for
  * @returns {boolean} Returns true if this entry has this permission
  */
  hasPermission(p) {
    return (this._permissions.indexOf(p) != -1);
  };
  /**
  * Sets this entry negaive or positive
  * @param {boolean} negative flag True or False
  */
  setNegative(n) {
    this.neg = n;
  };
};

export default Entry;
