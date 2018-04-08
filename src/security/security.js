import * as Client from "./client.js";
import ClientType from "./clientType.js";

/**
 * Security Package and API
 * @namespace Security
 */

/**
 * Pricipal object for use in security as part of the abstract implimentation
 * @memberof Security
 * @property {string} fullName The full name of the principal
 * @property {number} id The id of the principal
 * @property {string} login The login of the principal
 * @property {string} email The email of the principal
 */
export class Principal {
  constructor(options) {
    if (options && options.id) {
      this._id = options.id;
    } else {
      this._id = 0;
    }

    if (options && options.email) {
      this._email = options.email;
    } else {
      this._email = "";
    }

    if (options && options.login) {
      this._login = options.login;
    } else {
      this._login = "";
    }

    if (options && options.fullName) {
      this._fullName = options.fullName;
    } else {
      this._fullName = "";
    }
  };

  get fullName() {
    return this._fullName;
  };
  set fullName(name) {
    this._fullName = name;
  };

  get id() {
    return this._id;
  };

  set id(id) {
    this._id = id;
  };

  get login() {
    return this._login;
  };
  set login(login) {
    this._login = login;
  };

  get email() {
    return this._email;
  };
  set email(email) {
    this._email = email;
  };
};

/**
* Augmented.Security.Context
* Used as a security data storage class

* @param {Security.Principal} principal The principal for this context
* @param {array} permissions Permissions to add to the context
* @memberof Security
*/
export class Context {
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

/**
* AuthenticationFactory Class -
* Returns a client of given type for use with security
* @memberof Security
* @static
*/
export class AuthenticationFactory {
  constructor() {
  };

  /**
   * Get an instance of a security client
   * @param {Security.ClientType} clientType The Client Type to return
   * @returns {Security.Client} Returns a security client instance
   * @static
   */
  static getSecurityClient(clientType) {
    if (clientType === ClientType.OAUTH2) {
      return new Client.OAUTH2Client();
    } else if (clientType === ClientType.ACL) {
      return new Client.ACLClient();
    }
    return null;
  };
};

/**
* Used to secure a resource via permissions
* @memberof Security
* @param {array} permissions Permissions to add to the entry (optional)
* @param {boolean} negaive Sets negative permissions (optional)
*/
export class Entry {
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
