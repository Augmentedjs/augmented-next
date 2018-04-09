import AbstractSecurityClient from "./abstractSecurityClient.js";
import ClientType from "./clientType.js";

/**
 * The OAUTH2 Client
 * @memberof Security.Client
 */
class OAUTH2Client extends AbstractSecurityClient {
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

export default OAUTH2Client;
