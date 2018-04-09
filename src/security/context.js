import Pricipal from "./principal.js";


/**
* Augmented.Security.Context
* Used as a security data storage class
* @param {Security.Principal} principal The principal for this context
* @param {array} permissions Permissions to add to the context
* @memberof Security
*/
class Context {
  constructor(principal, permissions) {
    this._principal = (principal) ? principal : (new Principal().login = "guest");
    this._permissions = (permissions) ? permissions : [];
  };

  /**
   * getPrincipal - get the principal of this context
   * @memberof Security.Context
   * @returns {Security.Principal} principal The principal of this context
   */
  get principal() {
    return this._principal;
  };

  /**
   * getPermissions - Get all the permissions for a principal
   * @memberof Security.Context
   * @returns {array} permissions All permissions
   */
  get permissions() {
    return this._permissions;
  };

  /**
   * setPermissions - Set all permissions for a principal
   * @param {array} permissions
   * @memberof Security.Context
   */
  set permissions(p) {
    this._permissions = p;
  };

  /**
   * addPermission - Add a new permission for a principal
   * @param {string} permission
   * @memberof Security.Context
   */
  addPermission(p) {
    this._permissions.push(p);
  };

  /**
   * removePermission - Remove a permission for a principal
   * @param {string} permission
   * @memberof Security.Context
   */
  removePermission(p) {
    const i = this._permissions.indexOf(p);
    this._permissions.splice(i, 1);
  };

  /**
   * hasPermission - checks for a permission for this principal
   * @param {string} permission
   * @memberof Security.Context
   */
  hasPermission(p) {
    return (this._permissions.indexOf(p) !== -1);
  };
};

export default Context;
