import SchemaGenerator from "./schemaGenerator.js";
import UriTemplate from "./uriTemplate.js";
import Validator from "./validator.js";

/**
 * @see https://github.com/geraintluff/uri-templates
 * but with all the de-substitution stuff removed
 */
const URI_TEMPLATE_GLOBAL_MODIFIERS = {
  "+": true,
  "#": true,
  ".": true,
  "/": true,
  ";": true,
  "?": true,
  "&": true
},
URI_TEMPLATE_SUFFICES = {
  "*": true
};

// parseURI() and resolveUrl() are from https://gist.github.com/1088850
// - released as public domain by author ("Yaffle") - see comments on
// gist
const parseURI(url) => {
  let m = String(url).replace(/^\s+|\s+$/g, '').match(/^([^:\/?#]+:)?(\/\/(?:[^:@]*(?::[^:@]*)?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/);
  // authority = '//' + user + ':' + pass '@' + hostname + ':' port
  return (m ? {
    href     : m[0] || '',
    protocol : m[1] || '',
    authority: m[2] || '',
    host     : m[3] || '',
    hostname : m[4] || '',
    port     : m[5] || '',
    pathname : m[6] || '',
    search   : m[7] || '',
    hash     : m[8] || ''
  } : null);
};

const resolveUrl(base, href) => {// RFC 3986
  const removeDotSegments(input) => {
    let output = [];
    input.replace(/^(\.\.?(\/|$))+/, '')
    .replace(/\/(\.(\/|$))+/g, '/')
    .replace(/\/\.\.$/, '/../')
    .replace(/\/?[^\/]*/g, function (p) {
      if (p === '/..') {
        output.pop();
      } else {
        output.push(p);
      }
    });
    return output.join('').replace(/^\//, input.charAt(0) === '/' ? '/' : '');
  };

  href = parseURI(href || '');
  base = parseURI(base || '');

  return !href || !base ? null : (href.protocol || base.protocol) +
  (href.protocol || href.authority ? href.authority : base.authority) +
  removeDotSegments(href.protocol || href.authority || href.pathname.charAt(0) === '/' ? href.pathname : (href.pathname ? ((base.authority && !base.pathname ? '/' : '') + base.pathname.slice(0, base.pathname.lastIndexOf('/') + 1) + href.pathname) : base.pathname)) +
  (href.protocol || href.authority || href.pathname ? href.search : (href.search || base.search)) +
  href.hash;
};

const getDocumentUri(uri) => {
  return uri.split('#')[0];
};

const normSchema(schema, baseUri) => {
  if (schema && typeof schema === "object") {
    if (baseUri === undefined) {
      baseUri = schema.id;
    } else if (typeof schema.id === "string") {
      baseUri = resolveUrl(baseUri, schema.id);
      schema.id = baseUri;
    }
    if (Array.isArray(schema)) {
      let i = 0, l = schema.length;
      for (i = 0; i < l; i++) {
        normSchema(schema[i], baseUri);
      }
    } else {
      if (typeof schema['$ref'] === "string") {
        schema['$ref'] = resolveUrl(baseUri, schema['$ref']);
      }
      for (let key in schema) {
        if (key !== "enum") {
          normSchema(schema[key], baseUri);
        }
      }
    }
  }
};

const isTrustedUrl(baseUrl, testUrl) => {
  if(testUrl.substring(0, baseUrl.length) === baseUrl){
    let remainder = testUrl.substring(baseUrl.length);
    if ((testUrl.length > 0 && testUrl.charAt(baseUrl.length - 1) === "/") || remainder.charAt(0) === "#" || remainder.charAt(0) === "?") {
      return true;
    }
  }
  return false;
};



// End of TV4 fork, will provide base JSON-Schema Draft 4 support and then some


const SCHEMA_HEADER = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "title": "model",
  "description": "Generated Schema",
  "type": "object",
  "properties": { }
};

/**
 * Augmented.ValidationFramework -
 * The Validation Framework Base Wrapper Class.
 * Provides abstraction for base validation build-in library
 * @constructor Augmented.ValidationFramework
 * @memberof Augmented
 */
class ValidationFramework {
  constructor() {
    _myValidator = new Validator();
  };
  _myValidator = null;

  /**
   * Returns if the framework supports validation
   * @method supportsValidation
   * @returns {boolean} Returns true if the framework supports validation
   * @memberof Augmented.ValidationFramework
   */
  supportsValidation() {
    return (_myValidator !== null);
  };

  /**
   * Registers a schema to the Framework
   * @method registerSchema
   * @param {string} identity The identity of the schema
   * @param {object} schema The JSON schema
   * @memberof Augmented.ValidationFramework
   */
  registerSchema(identity, schema) {
    _myValidator.addSchema(identity, schema);
  };

  /**
   * Gets a schema
   * @method getSchema
   * @param {string} identity The identity of the schema
   * @returns {object} The JSON schema
   * @memberof Augmented.ValidationFramework
   */
  getSchema(identity) {
    return _myValidator.getSchema(identity);
  };

  /**
   * Gets all schemas
   * @method getSchemas
   * @returns {array} all JSON schemas
   * @memberof Augmented.ValidationFramework
   */
  getSchemas() {
    return _myValidator.getSchemaMap();
  };

  /**
   * Clears all schemas
   * @method clearSchemas
   * @memberof Augmented.ValidationFramework
   */
  clearSchemas() {
    _myValidator.dropSchemas();
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
    return _myValidator.validateMultiple(data, schema);
  };

  /**
   * Validates data via a schema
   * @method getValidationMessages
   * @returns {array} Returns the validation messages
   * @memberof Augmented.ValidationFramework
   */
  getValidationMessages() {
    return _myValidator.error;
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
    if (model && model instanceof Augmented.Model) {
      data = model.toJSON();
    }
    return SchemaGenerator(data);
  };
};

export default ValidationFramework;
