import SchemaGenerator from "./schemaGenerator.js";
import createApi from "./api.js";
import { ERROR_MESSAGES_DEFAULT } from "./validationError.js";

/**
 * Augmented.ValidationFramework -
 * The Validation Framework Base Wrapper Class.
 * Provides abstraction for base validation build-in library
 * @constructor Augmented.ValidationFramework
 * @memberof Augmented
 */
class ValidationFramework {
  constructor() {
    this._myValidator = createApi();
    if (this._myValidator) {
      this._myValidator.addLanguage("en-us", ERROR_MESSAGES_DEFAULT);  // changed to US
    }
  };

  _myValidator = null;

  /**
   * Returns if the framework supports validation
   * @method supportsValidation
   * @returns {boolean} Returns true if the framework supports validation
   * @memberof Augmented.ValidationFramework
   */
  supportsValidation() {
    return (this._myValidator !== null);
  };

  /**
   * Registers a schema to the Framework
   * @method registerSchema
   * @param {string} identity The identity of the schema
   * @param {object} schema The JSON schema
   * @returns {boolean} Returns true on success
   * @memberof Augmented.ValidationFramework
   */
  registerSchema(identity, schema) {
    return this._myValidator.addSchema(identity, schema);
  };

  /**
   * Gets a schema
   * @method getSchema
   * @param {string} identity The identity of the schema
   * @returns {object} The JSON schema
   * @memberof Augmented.ValidationFramework
   */
  getSchema(identity) {
    return this._myValidator.getSchema(identity);
  };

  /**
   * Gets all schemas
   * @method getSchemas
   * @returns {array} all JSON schemas
   * @memberof Augmented.ValidationFramework
   */
  getSchemas() {
    return this._myValidator.getSchemaMap();
  };

  /**
   * Clears all schemas
   * @method clearSchemas
   * @memberof Augmented.ValidationFramework
   */
  clearSchemas() {
    this._myValidator.dropSchemas();
  };

  /**
   * Validates data via a schema
   * @method validate
   * @param {object} data The data to validate
   * @param {object} schema The JSON schema
   * @returns {object} Returns the validation object
   * @memberof Augmented.ValidationFramework
   */
  validate(data, schema) {
    return this._myValidator.validateMultiple(data, schema);
  };

  /**
   * Validates data via a schema
   * @method getValidationMessages
   * @returns {array} Returns the validation messages
   * @memberof Augmented.ValidationFramework
   */
  getValidationMessages() {
    return this._myValidator.error;
  };

  /**
   * Validates data via a schema
   * @method generateSchema
   * @param {Augmented.Model|object} model The model generate from
   * @returns {object} Returns the schema
   * @memberof Augmented.ValidationFramework
   */
  generateSchema(model) {
    let data = model;
    /*TODO support model
    if (model && model instanceof Model) {
      data = model.toJSON();
    }*/
    return SchemaGenerator(data);
  };
};

export default ValidationFramework;
