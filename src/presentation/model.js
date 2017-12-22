import AbstractModel from "../model/abstractModel.js";

/**
 * Model <br/>
 * Supports: <ul>
 * <li>REST</li>
 * <li>Validation and Schemas</li>
 * <li>Security</li>
 * </ul>
 * @constructor Model
 * @memberof Augmented.Presentation
 * @extends AbstractModel
 */
export default class Model extends AbstractModel {
  constructor() {
    super();
  };

  /**
  * mock property
  * @property {boolean} mock Sets mock mode in the model
  * @memberof Model
  */
  mock = false;

  /**
  * Cross Origin property
  * @property {boolean} crossOrigin Cross Origin property
  * @memberof Model
  */
  crossOrigin = false;
  /**
  * Model.sync - Sync model data to bound REST call
  * @method sync
  * @memberof Model
  */
  sync(method, model, options) {
    if (!options) {
      options = {};
    }
    if (this.crossOrigin === true) {
      options.crossDomain = true;
    }
    if (!options.xhrFields) {
      options.xhrFields = {
        withCredentials: true
      };
    }

    if (this.mock) {
      options.mock = this.mock;
    }

    return sync(method, model, options);
  };
};
