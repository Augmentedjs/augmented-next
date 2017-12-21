import AugmentedObject from "./object.js";

/**
 * Augmented Model <br/>
 * Supports: <ul>
 * <li>REST</li>
 * <li>Validation and Schemas</li>
 * <li>CORS</li>
 * <li>Security</li>
 * </ul>
 * @constructor Augmented.Model
 * @memberof Augmented
 * @extends Augmented.Object
 */
export default class AugmentedModel extends AugmentedObject {
  /**
  * Schema property
  * @property {object} schema The JSON schema from this model
  * @memberof Augmented.Model
  */
  schema = null;
  /**
  * mock property
  * @property {boolean} mock Sets mock mode in the model
  * @memberof Augmented.Model
  */
  mock = false;
  /**
  * Validation Message property
  * @property {object} validationMessages The property holding validation message data
  * @memberof Augmented.Model
  */
  validationMessages = {
    valid: true
  };
  /**
  * supportsValidation - Returns True if this model supports validation
  * @method supportsValidation
  * @memberof Augmented.Model
  * @returns {boolean} Returns True if this model supports validation
  */
  supportsValidation() {
    if (this.schema !== null) {
      return true;
    }
    return false;
  };
  /**
  * isValid - Returns True if this model is valid
  * @method isValid
  * @memberof Augmented.Model
  * @returns {boolean} Returns True if this model is valid
  */
  isValid() {
    this.validate();
    return this.validationMessages.valid;
  };
  /**
  * Validates the model
  * @method validate
  * @memberof Augmented.Model
  * @returns {array} Returns array of messages from validation
  */
  validate() {
    if (this.supportsValidation() && Augmented.ValidationFramework.supportsValidation()) {
      // validate from Validator
      this.validationMessages = Augmented.ValidationFramework.validate(this.toJSON(), this.schema);
    } else {
      this.validationMessages.valid = true;
    }
    return this.validationMessages;
  };
  /**
  * Gets the validation messages only in an array
  * @method getValidationMessages
  * @memberof Augmented.Model
  * @returns {array} Returns array of messages from validation
  */
  getValidationMessages() {
    const messages = [];
    if (this.validationMessages && this.validationMessages.errors) {
      const l = this.validationMessages.errors.length;
      var i = 0;
      for (i = 0; i < l; i++) {
        messages.push(this.validationMessages.errors[i].message + " from " + this.validationMessages.errors[i].dataPath);
      }
    }
    return messages;
  };
  /**
  * Cross Origin property
  * @property {boolean} crossOrigin Cross Origin property
  * @memberof Augmented.Model
  */
  crossOrigin = false;
  /**
  * Model.sync - Sync model data to bound REST call
  * @method sync
  * @memberof Augmented.Model
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
  /**
  * Model.reset - clear and rewrite the model with passed data
  * @method reset
  * @memberof Augmented.Model
  * @param {object} data The data to replace the model with (optional)
  */
  reset(data) {
    this.clear();
    if (data) {
      this.set(data);
    }
  };
  /**
  * Model.isEmpty - returns true is the model is empty
  * @method isEmpty
  * @memberof Augmented.Model
  * @returns {boolean} returns true is the model is empty
  */
  isEmpty() {
    return ( (this.attributes) ? (Object.keys(this.attributes).length === 0) : true );
  };
  /**
  * toString - returns the model data as a string
  * @method toString
  * @memberof Augmented.Model
  * @returns {string}returns the model data as a string
  */
  toString() {
    return JSON.stringify(this.toJSON());
  };
  /**
  * fetch - Fetches the model as a 'get'
  * @method fetch
  * @memberof Augmented.Model
  */
  fetch(options) {
    this.sync("read", this, options);
  };
  /**
  * save - Saves the model as a 'create'
  * @method save
  * @memberof Augmented.Model
  */
  save(options) {
    this.sync("create", this, options);
  };
  /**
  * update - Updates the model as a 'update'
  * @method update
  * @memberof Augmented.Model
  */
  update(options) {
    this.sync("update", this, options);
  };
  /**
  * destroy - Deletes the model as a 'delete'
  * @method destroy
  * @memberof Augmented.Model
  */
  destroy(options) {
    this.sync("delete", this, options);
  };
};
