import AugmentedObject from "../object.js";
import ClientType from "./clientType.js";


/**
 * Security client namespace
 * @namespace Security.Client
 * @memberof Security
 */


/**
 * The abstract Security Client - for use to extend your own
 * @property {Security.ClientType} type The client type
 * @property {string} uri The base uri
 */
export class AbstractSecurityClient extends AugmentedObject {
  constructor(type) {
    super();
    this._type = type;
    this.  uri = "";
  };

  /**
   * @property {Security.ClientType} type The client type
   */
  get type() {
    return this._type;
  };
};

/**
 * The OAUTH2 Client
 * @memberof Security.Client
 */
export class OAUTH2Client extends AbstractSecurityClient {
  constructor() {
    super(ClientType.OAUTH2);
    this.accessToken = "";
    this.authorizationToken = "";
  };

  /**
   * Access Token
   * @property accessToken
   */

  /**
   * Authorization Token
   * @property authorizationToken
   */

  /**
   * Authorize the application/service/module via OAUTH
   * @param {string} name The name of the application/service/module
   */
  authorize(name) {
    // TODO: Go authorize the app and get a token
    this.authorizationToken = "";
  };
  /**
   * access the application/service/module via OAUTH
   * @param {string} principal The principal
   * TODO: Refresh the token and store it
   */
  access(principal) {
    this.accessToken = "";
  };
};

/**
 * Role/Privilege (ACL) Security
 * @memberof Security.Client
 */
export class ACLClient extends AbstractSecurityClient {
  constructor() {
    super(ClientType.ACL);
  };

  /**
   * authenticate the user
   * @param {string} username The name of the user (login)
   * @param {string} password The password for the user (not stored)
   * @returns {Security.Context} Returns a security context or null is case of failure
   * @throws Error Failed to authenticate
   */
  authenticate(username, password) {
    let c = null;
    /*request({
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
    });*/
    return c;
  };
};
