import AugmentedObject from "../object.js";
import ClientType from "./clientType.js";

/**
 * Security client namespace
 * @namespace Augmented.Security.Client
 * @memberof Augmented.Security
 */


/**
 * The abstract Security Client - for use to extend your own
 * @name AbstractSecurityClient
 * @constructor AbstractSecurityClient
 * @property {Augmented.Security.ClientType} type The client type
 * @property {string} uri The base uri
 */
export class AbstractSecurityClient extends AugmentedObject {
  constructor(type) {
    super();
    this._type = type;
  };

  _type = null;
  get type() {
    return this._type;
  };

  uri = "";
};

/**
 * The OAUTH2 Client
 * @name Augmented.Security.Client.OAUTH2Client
 * @constructor Augmented.Security.Client.OAUTH2Client
 * @memberof Augmented.Security.Client
 */
export class OAUTH2Client extends AbstractSecurityClient {
  constructor() {
    super(ClientType.OAUTH2)
  };

  /**
   * Access Token
   * @property accessToken
   * @memberof Augmented.Security.Client.OAUTH2Client
   */
  accessToken = "";
  /**
   * Authorization Token
   * @property authorizationToken
   * @memberof Augmented.Security.Client.OAUTH2Client
   */
  authorizationToken = "";
  /**
   * Authorize the application/service/module via OAUTH
   * @method authorize
   * @param {string} name The name of the application/service/module
   * @memberof Augmented.Security.Client.OAUTH2Client
   */
  authorize(name) {
    // TODO: Go authorize the app and get a token
    this.authorizationToken = "";
  };
  /**
   * access the application/service/module via OAUTH
   * @method access
   * @param {string} principal The principal
   * @memberof Augmented.Security.Client.OAUTH2Client
   * TODO: Refresh the token and store it
   */
  access(principal) {
    this.accessToken = "";
  };
};

/**
 * Role/Privilege (ACL) Security
 * @name Augmented.Security.Client.ACLClient
 * @constructor Augmented.Security.Client.ACLClient
 * @memberof Augmented.Security.Client
 */
export class ACLClient extends AbstractSecurityClient {
  constructor() {
    super(ClientType.ACL);
  };

  /**
   * authenticate the user
   * @method authenticate
   * @param {string} username The name of the user (login)
   * @param {string} password The password for the user (not stored)
   * @returns {Augmented.Security.Context} Returns a security context or null is case of failure
   * @memberof Augmented.Security.Client.ACL
   * @throws Error Failed to authenticate
   */
  authenticate(username, password) {
    let c = null;
    Ajax({
      url: this.uri,
      method: "GET",
      user: username,
      password: password,
      success: function(data, status) {
        const p = new Principal({
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
  };
};
