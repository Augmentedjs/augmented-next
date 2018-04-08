/**
 * Augmented.Security.ClientType - Security client type
 * @enum {Symbol}
 * @memberof Security
 * @name ClientType
 * @property {Symbol} OAuth2 The OAuth2 type
 * @property {Symbol} ACL The ACL type
 */
const ClientType = {};

ClientType.OAUTH2 = Symbol("oauth2");
ClientType.ACL = Symbol("acl");

export default ClientType;
