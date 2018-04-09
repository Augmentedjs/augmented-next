import AbstractSecurityClient from "./abstractSecurityClient.js";
import ClientType from "./clientType.js";
/**
 * Role/Privilege (ACL) Security
 * @memberof Security.Client
 */
class ACLClient extends AbstractSecurityClient {
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

export default ACLClient;
