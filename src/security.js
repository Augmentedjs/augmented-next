// Security

/**
* Security Package and API
* @namespace Augmented.Security
* @memberof Augmented
*/
Augmented.Security = {};

/**
* Security client namespace
* @namespace Augmented.Security.Client
* @memberof Augmented.Security
*/
Augmented.Security.Client = {};

/**
* Pricipal object for use in security as part of the abstract implimentation
* @namespace Augmented.Security.Principal
* @memberof Augmented.Security
* @property {string} fullName The full name of the principal
* @property {number} id The id of the principal
* @property {string} login The login of the principal
* @property {string} email The email of the principal
*/
Augmented.Security.Principal = {
  fullName: "",
  id: 0,
  login: "",
  email: ""
};

/**
* Augmented.Security.Context
* Used as a security data storage class
* @constructor Augmented.Security.Context
* @param {Augmented.Security.Principal} principal The principal for this context
* @param {array} permissions Permissions to add to the context
* @memberof Augmented.Security
*/
var securityContext = Augmented.Security.Context = function(principal, permissions) {
  this.principal = (principal) ? principal : (new principal().login = "guest");
  this.permissions = (permissions) ? permissions : [];

  /**
  * getPrincipal - get the principal of this context
  * @method getPrincipal
  * @memberof Augmented.Security.Context
  * @returns {Augmented.Security.Principal} principal The principal of this context
  */
  this.getPrincipal = function() {
    return this.principal;
  };

  /**
  * getPermissions - Get all the permissions for a principal
  * @method getPermissions
  * @memberof Augmented.Security.Context
  * @returns {array} permissions All permissions
  */
  this.getPermissions = function() {
    return this.permissions;
  };

  /**
  * setPermissions - Set all permissions for a principal
  * @method setPermissions
  * @param {array} permissions
  * @memberof Augmented.Security.Context
  */
  this.setPermissions = function(p) {
    this.permissions = p;
  };

  /**
  * addPermission - Add a new permission for a principal
  * @method addPermission
  * @param {string} permission
  * @memberof Augmented.Security.Context
  */
  this.addPermission = function(p) {
    this.permissions.push(p);
  };

  /**
  * removePermission - Remove a permission for a principal
  * @method removePermission
  * @param {string} permission
  * @memberof Augmented.Security.Context
  */
  this.removePermission = function(p) {
    var i = this.permissions.indexOf(p);
    this.permissions.splice(i, 1);
  };

  /**
  * hasPermission - checks for a permission for this principal
  * @method hasPermission
  * @param {string} permission
  * @memberof Augmented.Security.Context
  */
  this.hasPermission = function(p) {
    return (this.permissions.indexOf(p) != -1);
  };
};

/**
* Augmented.Security.ClientType - Security client type
* @enum {number}
* @memberof Augmented.Security
* @name Augmented.Security.ClientType
* @property {number} OAuth2 The OAuth2 type
* @property {number} ACL The ACL type
*/
Augmented.Security.ClientType = {
  OAUTH2 : 0,
  ACL: 1
};

/**
* The abstract Security Client - for use to extend your own
* @name AbstractSecurityClient
* @constructor AbstractSecurityClient
* @property {Augmented.Security.ClientType} type The client type
* @property {string} uri The base uri
*/
var AbstractSecurityClient = Augmented.Object.extend({
  type: null,
  uri: ""
});

/**
* The OAUTH2 Client
* @name Augmented.Security.Client.OAUTH2Client
* @constructor Augmented.Security.Client.OAUTH2Client
* @memberof Augmented.Security.Client
*/
Augmented.Security.Client.OAUTH2Client = AbstractSecurityClient.extend({
  type: Augmented.Security.ClientType.OAUTH2,
  /**
  * Access Token
  * @property accessToken
  * @memberof Augmented.Security.Client.OAUTH2Client
  */
  accessToken: "",
  /**
  * Authorization Token
  * @property authorizationToken
  * @memberof Augmented.Security.Client.OAUTH2Client
  */
  authorizationToken: "",
  /**
  * Authorize the application/service/module via OAUTH
  * @method authorize
  * @param {string} name The name of the application/service/module
  * @memberof Augmented.Security.Client.OAUTH2Client
  */
  authorize: function(name) {
    // TODO: Go authorize the app and get a token
    this.authorizationToken = "";
  },
  /**
  * access the application/service/module via OAUTH
  * @method access
  * @param {string} principal The principal
  * @memberof Augmented.Security.Client.OAUTH2Client
  * TODO: Refresh the token and store it
  */
  access: function(principal) {
    this.accessToken = "";
  }
});

/**
* Role/Privilege (ACL) Security
* @name Augmented.Security.Client.ACLClient
* @constructor Augmented.Security.Client.ACLClient
* @memberof Augmented.Security.Client
*/
Augmented.Security.Client.ACLClient = AbstractSecurityClient.extend({
  type: Augmented.Security.ClientType.ACL,
  /**
  * authenticate the user
  * @method authenticate
  * @param {string} username The name of the user (login)
  * @param {string} password The password for the user (not stored)
  * @returns {Augmented.Security.Context} Returns a security context or null is case of failure
  * @memberof Augmented.Security.Client.ACL
  * @throws Error Failed to authenticate
  */
  authenticate: function(username, password) {
    var c = null;
    Augmented.ajax({
      url: this.uri,
      method: "GET",
      user: username,
      password: password,
      success: function(data, status) {
        var p = new principal({
          fullName: data.fullName,
          id: data.id,
          login: data.login,
          email: data.email
        });
        c = new securityContext(p, data.permissions);
      },
      failure: function(data, status) {
        // TODO: Bundle this perhaps
        throw new Error("Failed to authenticate with response of - " + status);
      }
    });
    return c;
  }
});

/**
* AuthenticationFactory Class -
* Returns a client of given type for use with security
* @namespace Augmented.Security.AuthenticationFactory
* @memberof Augmented.Security
* @static
*/
var authenticationFactory = Augmented.Security.AuthenticationFactory = {
  /**
  * Get an instance of a security client
  * @method getSecurityClient
  * @param {Augmented.Security.ClientType} clientType The Client Type to return
  * @returns {Augmented.Security.Client} Returns a security client instance
  * @memberof Augmented.Security.AuthenticationFactory
  */
  getSecurityClient: function(clientType) {
    if (clientType === Augmented.Security.ClientType.OAUTH2) {
      return new Augmented.Security.Client.OAUTH2Client();
    } else if (clientType === Augmented.Security.ClientType.ACL) {
      return new Augmented.Security.Client.ACLClient();
    }
    return null;
  }
};

/**
* Augmented.Security.Entry -
* Used to secure a resource via permissions
* @class Augmented.Security.Entry
* @memberof Augmented.Security
* @param {array} permissions Permissions to add to the entry (optional)
* @param {boolean} negaive Sets negative permissions (optional)
*/
Augmented.Security.Entry = function(p, neg) {
  /**
  * Gets the permissions
  * @property {array} permissions
  * @memberof Augmented.Security.Entry
  * @private
  */
  this.permissions = (p) ? p : [];

  /**
  * Negative flag
  * @property {boolean} isNegative
  * @memberof Augmented.Security.Entry
  */
  this.isNegative = (neg) ? neg : false;

  /**
  * Gets the permissions
  * @method getPermissions
  * @memberof Augmented.Security.Entry
  * @returns {array} Permissions
  */
  this.getPermissions = function() {
    return this.permissions;
  };
  /**
  * Sets the permissions
  * @method setPermissions
  * @memberof Augmented.Security.Entry
  * @param {array} permissions Permissions Array to set
  */
  this.setPermissions = function(p) {
    this.permissions = p;
  };
  /**
  * Add a permission
  * @method addPermission
  * @memberof Augmented.Security.Entry
  * @param {string} permission Permission to add
  */
  this.addPermission = function(p) {
    this.permissions.push(p);
  };
  /**
  * Remove a permission
  * @method removePermission
  * @memberof Augmented.Security.Entry
  * @param {string} permission Permission to remove
  */
  this.removePermission = function(p) {
    var i = this.permissions.indexOf(p);
    this.permissions.splice(i, 1);
  };
  /**
  * Returns if this entry has a permission
  * @method hasPermission
  * @memberof Augmented.Security.Entry
  * @param {string} permission Permission to test for
  * @returns {boolean} Returns true if this entry has this permission
  */
  this.hasPermission = function(p) {
    return (this.permissions.indexOf(p) != -1);
  };
  /**
  * Sets this entry negaive or positive
  * @method setNegative
  * @memberof Augmented.Security.Entry
  * @param {boolean} negative flag True or False
  */
  this.setNegative = function(n) {
    this.isNegative = n;
  };
};
