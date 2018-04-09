import ClientType from "./clientType.js";
import OAUTH2Client from "./oauthClient.js";
import ACLClient from "./aclClient.js";

/**
 * AuthenticationFactory Class -
 * Returns a client of given type for use with security
 * @memberof Security
 * @static
 */
class AuthenticationFactory {
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
      return new OAUTH2Client();
    } else if (clientType === ClientType.ACL) {
      return new ACLClient();
    }
    return null;
  };
};

export default AuthenticationFactory;
