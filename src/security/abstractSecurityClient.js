import AugmentedObject from "../object.js";
import ClientType from "./clientType.js";

/**
 * The abstract Security Client - for use to extend your own
 * @property {Security.ClientType} type The client type
 * @property {string} uri The base uri
 * @extends Object
 */
class AbstractSecurityClient extends AugmentedObject {
  constructor(type) {
    super();
    this._type = type;
    this._uri = "";
  };

  /**
   * @property {string} uri The uri
   */
  get uri() {
    return this._uri;
  };

  set uri(uri) {
    this._uri = uri;
  };

  /**
   * @property {Security.ClientType} type The client type
   */
  get type() {
    return this._type;
  };
};

export default AbstractSecurityClient;
