/** Validation framework - forked from TV4 and extended
*
* @constructor Validator
* @private
*/
var Validator = function() {

  /**@see https://github.com/geraintluff/uri-templates
  * but with all the de-substitution stuff removed
  */
  var uriTemplateGlobalModifiers = {
    "+": true,
    "#": true,
    ".": true,
    "/": true,
    ";": true,
    "?": true,
    "&": true
  },
  uriTemplateSuffices = {
    "*": true
  };

  function notReallyPercentEncode(string) {
    return encodeURI(string).replace(/%25[0-9][0-9]/g, function (doubleEncoded) {
      return "%" + doubleEncoded.substring(3);
    });
  }

  function uriTemplateSubstitution(spec) {
    var modifier = "";
    if (uriTemplateGlobalModifiers[spec.charAt(0)]) {
      modifier = spec.charAt(0);
      spec = spec.substring(1);
    }
    var separator = "";
    var prefix = "";
    var shouldEscape = true;
    var showVariables = false;
    var trimEmptyString = false;
    if (modifier === '+') {
      shouldEscape = false;
    } else if (modifier === ".") {
      prefix = ".";
      separator = ".";
    } else if (modifier === "/") {
      prefix = "/";
      separator = "/";
    } else if (modifier === '#') {
      prefix = "#";
      shouldEscape = false;
    } else if (modifier === ';') {
      prefix = ";";
      separator = ";";
      showVariables = true;
      trimEmptyString = true;
    } else if (modifier === '?') {
      prefix = "?";
      separator = "&";
      showVariables = true;
    } else if (modifier === '&') {
      prefix = "&";
      separator = "&";
      showVariables = true;
    }

    var varNames = [];
    var varList = spec.split(",");
    var varSpecs = [];
    var varSpecMap = {};
    var i = 0, l = varList.length;
    for (i = 0; i < l; i++) {
      var varName = varList[i];
      var truncate = null;
      if (varName.indexOf(":") !== -1) {
        var parts = varName.split(":");
        varName = parts[0];
        truncate = parseInt(parts[1], 10);
      }
      var suffices = {};
      while (uriTemplateSuffices[varName.charAt(varName.length - 1)]) {
        suffices[varName.charAt(varName.length - 1)] = true;
        varName = varName.substring(0, varName.length - 1);
      }
      var varSpec = {
        truncate: truncate,
        name: varName,
        suffices: suffices
      };
      varSpecs.push(varSpec);
      varSpecMap[varName] = varSpec;
      varNames.push(varName);
    }
    var subFunction = function (valueFunction) {
      var result = "";
      var startIndex = 0;
      var i = 0, l = varSpecs.length;
      for (i = 0; i < l; i++) {
        var varSpec = varSpecs[i];
        var value = valueFunction(varSpec.name);
        if (value === null || value === undefined || (Array.isArray(value) && value.length === 0) || (typeof value === 'object' && Object.keys(value).length === 0)) {
          startIndex++;
          continue;
        }
        if (i === startIndex) {
          result += prefix;
        } else {
          result += (separator || ",");
        }
        if (Array.isArray(value)) {
          if (showVariables) {
            result += varSpec.name + "=";
          }
          var j = 0;
          l = value.length;
          for (j = 0; j < l; j++) {
            if (j > 0) {
              result += varSpec.suffices['*'] ? (separator || ",") : ",";
              if (varSpec.suffices['*'] && showVariables) {
                result += varSpec.name + "=";
              }
            }
            result += shouldEscape ? encodeURIComponent(value[j]).replace(/!/g, "%21") : notReallyPercentEncode(value[j]);
          }
        } else if (typeof value === "object") {
          if (showVariables && !varSpec.suffices['*']) {
            result += varSpec.name + "=";
          }
          var first = true;
          for (var key in value) {
            if (!first) {
              result += varSpec.suffices['*'] ? (separator || ",") : ",";
            }
            first = false;
            result += shouldEscape ? encodeURIComponent(key).replace(/!/g, "%21") : notReallyPercentEncode(key);
            result += varSpec.suffices['*'] ? '=' : ",";
            result += shouldEscape ? encodeURIComponent(value[key]).replace(/!/g, "%21") : notReallyPercentEncode(value[key]);
          }
        } else {
          if (showVariables) {
            result += varSpec.name;
            if (!trimEmptyString || value !== "") {
              result += "=";
            }
          }
          if (varSpec.truncate !== null) {
            value = value.substring(0, varSpec.truncate);
          }
          result += shouldEscape ? encodeURIComponent(value).replace(/!/g, "%21"): notReallyPercentEncode(value);
        }
      }
      return result;
    };
    subFunction.varNames = varNames;
    return {
      prefix: prefix,
      substitution: subFunction
    };
  }

  function UriTemplate(template) {
    if (!(this instanceof UriTemplate)) {
      return new UriTemplate(template);
    }
    var parts = template.split("{");
    var textParts = [parts.shift()];
    var prefixes = [];
    var substitutions = [];
    var varNames = [];
    while (parts.length > 0) {
      var part = parts.shift();
      var spec = part.split("}")[0];
      var remainder = part.substring(spec.length + 1);
      var funcs = uriTemplateSubstitution(spec);
      substitutions.push(funcs.substitution);
      prefixes.push(funcs.prefix);
      textParts.push(remainder);
      varNames = varNames.concat(funcs.substitution.varNames);
    }
    this.fill = function (valueFunction) {
      var result = textParts[0];
      var i=0, l = substitutions.length;
      for (i = 0; i < l; i++) {
        var substitution = substitutions[i];
        result += substitution(valueFunction);
        result += textParts[i + 1];
      }
      return result;
    };
    this.varNames = varNames;
    this.template = template;
  }
  UriTemplate.prototype = {
    toString: function () {
      return this.template;
    },
    fillFromObject: function (obj) {
      return this.fill(function (varName) {
        return obj[varName];
      });
    }
  };
  var ValidatorContext = function ValidatorContext(parent, collectMultiple, errorMessages, checkRecursive, trackUnknownProperties) {
    this.missing = [];
    this.missingMap = {};
    this.formatValidators = parent ? Object.create(parent.formatValidators) : {};
    this.schemas = parent ? Object.create(parent.schemas) : {};
    this.collectMultiple = collectMultiple;
    this.errors = [];
    this.handleError = collectMultiple ? this.collectError : this.returnError;
    if (checkRecursive) {
      this.checkRecursive = true;
      this.scanned = [];
      this.scannedFrozen = [];
      this.scannedFrozenSchemas = [];
      this.scannedFrozenValidationErrors = [];
      this.validatedSchemasKey = 'tv4_validation_id';
      this.validationErrorsKey = 'tv4_validation_errors_id';
    }
    if (trackUnknownProperties) {
      this.trackUnknownProperties = true;
      this.knownPropertyPaths = {};
      this.unknownPropertyPaths = {};
    }
    this.errorMessages = errorMessages;
    this.definedKeywords = {};
    if (parent) {
      for (var key in parent.definedKeywords) {
        this.definedKeywords[key] = parent.definedKeywords[key].slice(0);
      }
    }
  };
  ValidatorContext.prototype.defineKeyword = function (keyword, keywordFunction) {
    this.definedKeywords[keyword] = this.definedKeywords[keyword] || [];
    this.definedKeywords[keyword].push(keywordFunction);
  };
  ValidatorContext.prototype.createError = function (code, messageParams, dataPath, schemaPath, subErrors) {
    var messageTemplate = this.errorMessages[code] || ErrorMessagesDefault[code];
    if (typeof messageTemplate !== 'string') {
      return new ValidationError(code, "Unknown error code " + code + ": " + JSON.stringify(messageParams), messageParams, dataPath, schemaPath, subErrors);
    }
    // Adapted from Crockford's supplant()
    var message = messageTemplate.replace(/\{([^{}]*)\}/g, function (whole, varName) {
      var subValue = messageParams[varName];
      return typeof subValue === 'string' || typeof subValue === 'number' ? subValue : whole;
    });
    return new ValidationError(code, message, messageParams, dataPath, schemaPath, subErrors);
  };
  ValidatorContext.prototype.returnError = function (error) {
    return error;
  };
  ValidatorContext.prototype.collectError = function (error) {
    if (error) {
      this.errors.push(error);
    }
    return null;
  };
  ValidatorContext.prototype.prefixErrors = function (startIndex, dataPath, schemaPath) {
    var i = 0, l = this.errors.length;
    for (i = startIndex; i < l; i++) {
      this.errors[i] = this.errors[i].prefixWith(dataPath, schemaPath);
    }
    return this;
  };
  ValidatorContext.prototype.banUnknownProperties = function () {
    for (var unknownPath in this.unknownPropertyPaths) {
      var error = this.createError(ErrorCodes.UNKNOWN_PROPERTY, {path: unknownPath}, unknownPath, "");
      var result = this.handleError(error);
      if (result) {
        return result;
      }
    }
    return null;
  };

  ValidatorContext.prototype.addFormat = function (format, validator) {
    if (typeof format === 'object') {
      for (var key in format) {
        this.addFormat(key, format[key]);
      }
      return this;
    }
    this.formatValidators[format] = validator;
  };
  ValidatorContext.prototype.resolveRefs = function (schema, urlHistory) {
    if (schema['$ref'] !== undefined) {
      urlHistory = urlHistory || {};
      if (urlHistory[schema['$ref']]) {
        return this.createError(ErrorCodes.CIRCULAR_REFERENCE, {urls: Object.keys(urlHistory).join(', ')}, '', '');
      }
      urlHistory[schema['$ref']] = true;
      schema = this.getSchema(schema['$ref'], urlHistory);
    }
    return schema;
  };
  ValidatorContext.prototype.getSchema = function (url, urlHistory) {
    var schema;
    if (this.schemas[url] !== undefined) {
      schema = this.schemas[url];
      return this.resolveRefs(schema, urlHistory);
    }
    var baseUrl = url;
    var fragment = "";
    if (url.indexOf('#') !== -1) {
      fragment = url.substring(url.indexOf("#") + 1);
      baseUrl = url.substring(0, url.indexOf("#"));
    }
    if (typeof this.schemas[baseUrl] === 'object') {
      schema = this.schemas[baseUrl];
      var pointerPath = decodeURIComponent(fragment);
      if (pointerPath === "") {
        return this.resolveRefs(schema, urlHistory);
      } else if (pointerPath.charAt(0) !== "/") {
        return undefined;
      }
      var parts = pointerPath.split("/").slice(1);
      var i = 0, l = parts.length;
      for (i = 0; i < l; i++) {
        var component = parts[i].replace(/~1/g, "/").replace(/~0/g, "~");
        if (schema[component] === undefined) {
          schema = undefined;
          break;
        }
        schema = schema[component];
      }
      if (schema !== undefined) {
        return this.resolveRefs(schema, urlHistory);
      }
    }
    if (this.missing[baseUrl] === undefined) {
      this.missing.push(baseUrl);
      this.missing[baseUrl] = baseUrl;
      this.missingMap[baseUrl] = baseUrl;
    }
  };
  ValidatorContext.prototype.searchSchemas = function (schema, url) {
    if (Array.isArray(schema)) {
      var i = 0, l = schema.length;
      for (i = 0; i < l; i++) {
        this.searchSchemas(schema[i], url);
      }
    } else if (schema && typeof schema === "object") {
      if (typeof schema.id === "string") {
        if (isTrustedUrl(url, schema.id)) {
          if (this.schemas[schema.id] === undefined) {
            this.schemas[schema.id] = schema;
          }
        }
      }
      for (var key in schema) {
        if (key !== "enum") {
          if (typeof schema[key] === "object") {
            this.searchSchemas(schema[key], url);
          } else if (key === "$ref") {
            var uri = getDocumentUri(schema[key]);
            if (uri && this.schemas[uri] === undefined && this.missingMap[uri] === undefined) {
              this.missingMap[uri] = uri;
            }
          }
        }
      }
    }
  };
  ValidatorContext.prototype.addSchema = function (url, schema) {
    // overload
    if (typeof url !== 'string' || typeof schema === 'undefined') {
      if (typeof url === 'object' && typeof url.id === 'string') {
        schema = url;
        url = schema.id;
      }
      else {
        return;
      }
    }
    if (url === getDocumentUri(url) + "#") {
      // Remove empty fragment
      url = getDocumentUri(url);
    }
    this.schemas[url] = schema;
    delete this.missingMap[url];
    normSchema(schema, url);
    this.searchSchemas(schema, url);
  };

  ValidatorContext.prototype.getSchemaMap = function () {
    var map = {};
    for (var key in this.schemas) {
      map[key] = this.schemas[key];
    }
    return map;
  };

  ValidatorContext.prototype.getSchemaUris = function (filterRegExp) {
    var list = [];
    for (var key in this.schemas) {
      if (!filterRegExp || filterRegExp.test(key)) {
        list.push(key);
      }
    }
    return list;
  };

  ValidatorContext.prototype.getMissingUris = function (filterRegExp) {
    var list = [];
    for (var key in this.missingMap) {
      if (!filterRegExp || filterRegExp.test(key)) {
        list.push(key);
      }
    }
    return list;
  };

  ValidatorContext.prototype.dropSchemas = function () {
    this.schemas = {};
    this.reset();
  };
  ValidatorContext.prototype.reset = function () {
    this.missing = [];
    this.missingMap = {};
    this.errors = [];
  };

  ValidatorContext.prototype.validateAll = function (data, schema, dataPathParts, schemaPathParts, dataPointerPath) {
    var topLevel;
    schema = this.resolveRefs(schema);
    if (!schema) {
      return null;
    } else if (schema instanceof ValidationError) {
      this.errors.push(schema);
      return schema;
    }

    var startErrorCount = this.errors.length;
    var frozenIndex, scannedFrozenSchemaIndex = null, scannedSchemasIndex = null;
    if (this.checkRecursive && data && typeof data === 'object') {
      topLevel = !this.scanned.length;
      if (data[this.validatedSchemasKey]) {
        var schemaIndex = data[this.validatedSchemasKey].indexOf(schema);
        if (schemaIndex !== -1) {
          this.errors = this.errors.concat(data[this.validationErrorsKey][schemaIndex]);
          return null;
        }
      }
      if (Object.isFrozen(data)) {
        frozenIndex = this.scannedFrozen.indexOf(data);
        if (frozenIndex !== -1) {
          var frozenSchemaIndex = this.scannedFrozenSchemas[frozenIndex].indexOf(schema);
          if (frozenSchemaIndex !== -1) {
            this.errors = this.errors.concat(this.scannedFrozenValidationErrors[frozenIndex][frozenSchemaIndex]);
            return null;
          }
        }
      }
      this.scanned.push(data);
      if (Object.isFrozen(data)) {
        if (frozenIndex === -1) {
          frozenIndex = this.scannedFrozen.length;
          this.scannedFrozen.push(data);
          this.scannedFrozenSchemas.push([]);
        }
        scannedFrozenSchemaIndex = this.scannedFrozenSchemas[frozenIndex].length;
        this.scannedFrozenSchemas[frozenIndex][scannedFrozenSchemaIndex] = schema;
        this.scannedFrozenValidationErrors[frozenIndex][scannedFrozenSchemaIndex] = [];
      } else {
        if (!data[this.validatedSchemasKey]) {
          try {
            Object.defineProperty(data, this.validatedSchemasKey, {
              value: [],
              configurable: true
            });
            Object.defineProperty(data, this.validationErrorsKey, {
              value: [],
              configurable: true
            });
          } catch (e) {
            // IE 7/8 workaround
            data[this.validatedSchemasKey] = [];
            data[this.validationErrorsKey] = [];
          }
        }
        scannedSchemasIndex = data[this.validatedSchemasKey].length;
        data[this.validatedSchemasKey][scannedSchemasIndex] = schema;
        data[this.validationErrorsKey][scannedSchemasIndex] = [];
      }
    }

    var errorCount = this.errors.length;
    var error = this.validateBasic(data, schema, dataPointerPath) || this.validateNumeric(data, schema, dataPointerPath) || this.validateString(data, schema, dataPointerPath) || this.validateArray(data, schema, dataPointerPath) || this.validateObject(data, schema, dataPointerPath) || this.validateCombinations(data, schema, dataPointerPath) || this.validateHypermedia(data, schema, dataPointerPath) || this.validateFormat(data, schema, dataPointerPath) || this.validateDefinedKeywords(data, schema, dataPointerPath) || null;

    if (topLevel) {
      while (this.scanned.length) {
        var item = this.scanned.pop();
        delete item[this.validatedSchemasKey];
      }
      this.scannedFrozen = [];
      this.scannedFrozenSchemas = [];
    }

    if (error || errorCount !== this.errors.length) {
      while ((dataPathParts && dataPathParts.length) || (schemaPathParts && schemaPathParts.length)) {
        var dataPart = (dataPathParts && dataPathParts.length) ? "" + dataPathParts.pop() : null;
        var schemaPart = (schemaPathParts && schemaPathParts.length) ? "" + schemaPathParts.pop() : null;
        if (error) {
          error = error.prefixWith(dataPart, schemaPart);
        }
        this.prefixErrors(errorCount, dataPart, schemaPart);
      }
    }

    if (scannedFrozenSchemaIndex !== null) {
      this.scannedFrozenValidationErrors[frozenIndex][scannedFrozenSchemaIndex] = this.errors.slice(startErrorCount);
    } else if (scannedSchemasIndex !== null) {
      data[this.validationErrorsKey][scannedSchemasIndex] = this.errors.slice(startErrorCount);
    }

    return this.handleError(error);
  };
  ValidatorContext.prototype.validateFormat = function (data, schema) {
    if (typeof schema.format !== 'string' || !this.formatValidators[schema.format]) {
      return null;
    }
    var errorMessage = this.formatValidators[schema.format].call(null, data, schema);
    if (typeof errorMessage === 'string' || typeof errorMessage === 'number') {
      return this.createError(ErrorCodes.FORMAT_CUSTOM, {message: errorMessage}).prefixWith(null, "format");
    } else if (errorMessage && typeof errorMessage === 'object') {
      return this.createError(ErrorCodes.FORMAT_CUSTOM, {message: errorMessage.message || "?"}, errorMessage.dataPath || null, errorMessage.schemaPath || "/format");
    }
    return null;
  };
  ValidatorContext.prototype.validateDefinedKeywords = function (data, schema, dataPointerPath) {
    for (var key in this.definedKeywords) {
      if (typeof schema[key] === 'undefined') {
        continue;
      }
      var validationFunctions = this.definedKeywords[key];
      var i = 0, l = validationFunctions.length;
      for (i = 0; i < l; i++) {
        var func = validationFunctions[i];
        var result = func(data, schema[key], schema, dataPointerPath);
        if (typeof result === 'string' || typeof result === 'number') {
          return this.createError(ErrorCodes.KEYWORD_CUSTOM, {key: key, message: result}).prefixWith(null, "format");
        } else if (result && typeof result === 'object') {
          var code = result.code;
          if (typeof code === 'string') {
            if (!ErrorCodes[code]) {
              throw new Error('Undefined error code (use defineError): ' + code);
            }
            code = ErrorCodes[code];
          } else if (typeof code !== 'number') {
            code = ErrorCodes.KEYWORD_CUSTOM;
          }
          var messageParams = (typeof result.message === 'object') ? result.message : {key: key, message: result.message || "?"};
          var schemaPath = result.schemaPath ||( "/" + key.replace(/~/g, '~0').replace(/\//g, '~1'));
          return this.createError(code, messageParams, result.dataPath || null, schemaPath);
        }
      }
    }
    return null;
  };

  function recursiveCompare(A, B) {
    if (A === B) {
      return true;
    }
    if (typeof A === "object" && typeof B === "object") {
      if (Array.isArray(A) !== Array.isArray(B)) {
        return false;
      } else if (Array.isArray(A)) {
        if (A.length !== B.length) {
          return false;
        }
        var i = 0, l = A.length;
        for (i = 0; i < l; i++) {
          if (!recursiveCompare(A[i], B[i])) {
            return false;
          }
        }
      } else {
        var key;
        for (key in A) {
          if (B[key] === undefined && A[key] !== undefined) {
            return false;
          }
        }
        for (key in B) {
          if (A[key] === undefined && B[key] !== undefined) {
            return false;
          }
        }
        for (key in A) {
          if (!recursiveCompare(A[key], B[key])) {
            return false;
          }
        }
      }
      return true;
    }
    return false;
  }

  ValidatorContext.prototype.validateBasic = function validateBasic(data, schema, dataPointerPath) {
    var error = this.validateType(data, schema, dataPointerPath);
    if (error) {
      return error.prefixWith(null, "type");
    }
    /*if (error = this.validateEnum(data, schema, dataPointerPath)) {
    return error.prefixWith(null, "type");
  }*/
  return null;
};

ValidatorContext.prototype.validateType = function validateType(data, schema) {
  if (schema.type === undefined) {
    return null;
  }
  var dataType = typeof data;
  if (data === null) {
    dataType = "null";
  } else if (Array.isArray(data)) {
    dataType = "array";
  }
  var allowedTypes = schema.type;
  if (typeof allowedTypes !== "object") {
    allowedTypes = [allowedTypes];
  }

  var i = 0, l = allowedTypes.length;
  for (i = 0; i < l; i++) {
    var type = allowedTypes[i];
    if (type === dataType || (type === "integer" && dataType === "number" && (data % 1 === 0))) {
      return null;
    }
  }
  return this.createError(ErrorCodes.INVALID_TYPE, {type: dataType, expected: allowedTypes.join("/")});
};

ValidatorContext.prototype.validateEnum = function validateEnum(data, schema) {
  if (schema["enum"] === undefined) {
    return null;
  }
  var i = 0, l = schema["enum"].length;
  for (i = 0; i < l; i++) {
    var enumVal = schema["enum"][i];
    if (recursiveCompare(data, enumVal)) {
      return null;
    }
  }
  return this.createError(ErrorCodes.ENUM_MISMATCH, {value: (typeof JSON !== 'undefined') ? JSON.stringify(data) : data});
};

ValidatorContext.prototype.validateNumeric = function validateNumeric(data, schema, dataPointerPath) {
  return this.validateMultipleOf(data, schema, dataPointerPath) || this.validateMinMax(data, schema, dataPointerPath) || this.validateNaN(data, schema, dataPointerPath) || null;
};

var CLOSE_ENOUGH_LOW = Math.pow(2, -51);
var CLOSE_ENOUGH_HIGH = 1 - CLOSE_ENOUGH_LOW;
ValidatorContext.prototype.validateMultipleOf = function validateMultipleOf(data, schema) {
  var multipleOf = schema.multipleOf || schema.divisibleBy;
  if (multipleOf === undefined) {
    return null;
  }
  if (typeof data === "number") {
    var remainder = (data/multipleOf)%1;
    if (remainder >= CLOSE_ENOUGH_LOW && remainder < CLOSE_ENOUGH_HIGH) {
      return this.createError(ErrorCodes.NUMBER_MULTIPLE_OF, {value: data, multipleOf: multipleOf});
    }
  }
  return null;
};

ValidatorContext.prototype.validateMinMax = function validateMinMax(data, schema) {
  if (typeof data !== "number") {
    return null;
  }
  if (schema.minimum !== undefined) {
    if (data < schema.minimum) {
      return this.createError(ErrorCodes.NUMBER_MINIMUM, {value: data, minimum: schema.minimum}).prefixWith(null, "minimum");
    }
    if (schema.exclusiveMinimum && data === schema.minimum) {
      return this.createError(ErrorCodes.NUMBER_MINIMUM_EXCLUSIVE, {value: data, minimum: schema.minimum}).prefixWith(null, "exclusiveMinimum");
    }
  }
  if (schema.maximum !== undefined) {
    if (data > schema.maximum) {
      return this.createError(ErrorCodes.NUMBER_MAXIMUM, {value: data, maximum: schema.maximum}).prefixWith(null, "maximum");
    }
    if (schema.exclusiveMaximum && data === schema.maximum) {
      return this.createError(ErrorCodes.NUMBER_MAXIMUM_EXCLUSIVE, {value: data, maximum: schema.maximum}).prefixWith(null, "exclusiveMaximum");
    }
  }
  return null;
};

ValidatorContext.prototype.validateNaN = function validateNaN(data) {
  if (typeof data !== "number") {
    return null;
  }
  if (isNaN(data) === true || data === Infinity || data === -Infinity) {
    return this.createError(ErrorCodes.NUMBER_NOT_A_NUMBER, {value: data}).prefixWith(null, "type");
  }
  return null;
};

ValidatorContext.prototype.validateString = function validateString(data, schema, dataPointerPath) {
  return this.validateStringLength(data, schema, dataPointerPath) || this.validateStringPattern(data, schema, dataPointerPath) || null;
};

ValidatorContext.prototype.validateStringLength = function validateStringLength(data, schema) {
  if (typeof data !== "string") {
    return null;
  }
  if (schema.minLength !== undefined) {
    if (data.length < schema.minLength) {
      return this.createError(ErrorCodes.STRING_LENGTH_SHORT, {length: data.length, minimum: schema.minLength}).prefixWith(null, "minLength");
    }
  }
  if (schema.maxLength !== undefined) {
    if (data.length > schema.maxLength) {
      return this.createError(ErrorCodes.STRING_LENGTH_LONG, {length: data.length, maximum: schema.maxLength}).prefixWith(null, "maxLength");
    }
  }
  return null;
};

ValidatorContext.prototype.validateStringPattern = function validateStringPattern(data, schema) {
  if (typeof data !== "string" || schema.pattern === undefined) {
    return null;
  }
  var regexp = new RegExp(schema.pattern);
  if (!regexp.test(data)) {
    return this.createError(ErrorCodes.STRING_PATTERN, {pattern: schema.pattern}).prefixWith(null, "pattern");
  }
  return null;
};
ValidatorContext.prototype.validateArray = function validateArray(data, schema, dataPointerPath) {
  if (!Array.isArray(data)) {
    return null;
  }
  return this.validateArrayLength(data, schema, dataPointerPath) || this.validateArrayUniqueItems(data, schema, dataPointerPath) || this.validateArrayItems(data, schema, dataPointerPath) || null;
};

ValidatorContext.prototype.validateArrayLength = function validateArrayLength(data, schema) {
  var error;
  if (schema.minItems !== undefined) {
    if (data.length < schema.minItems) {
      error = (this.createError(ErrorCodes.ARRAY_LENGTH_SHORT, {length: data.length, minimum: schema.minItems})).prefixWith(null, "minItems");
      if (this.handleError(error)) {
        return error;
      }
    }
  }
  if (schema.maxItems !== undefined) {
    if (data.length > schema.maxItems) {
      error = (this.createError(ErrorCodes.ARRAY_LENGTH_LONG, {length: data.length, maximum: schema.maxItems})).prefixWith(null, "maxItems");
      if (this.handleError(error)) {
        return error;
      }
    }
  }
  return null;
};

ValidatorContext.prototype.validateArrayUniqueItems = function validateArrayUniqueItems(data, schema) {
  if (schema.uniqueItems) {
    var i = 0, l = data.length;
    for (i = 0; i < l; i++) {
      var j = 0;
      for (j = i + 1; j < l; j++) {
        if (recursiveCompare(data[i], data[j])) {
          var error = (this.createError(ErrorCodes.ARRAY_UNIQUE, {match1: i, match2: j})).prefixWith(null, "uniqueItems");
          if (this.handleError(error)) {
            return error;
          }
        }
      }
    }
  }
  return null;
};

ValidatorContext.prototype.validateArrayItems = function validateArrayItems(data, schema, dataPointerPath) {
  if (schema.items === undefined) {
    return null;
  }
  var error, i;
  if (Array.isArray(schema.items)) {
    var l = data.length;
    for (i = 0; i < l; i++) {
      if (i < schema.items.length) {
        if (error = this.validateAll(data[i], schema.items[i], [i], ["items", i], dataPointerPath + "/" + i)) {
          return error;
        }
      } else if (schema.additionalItems !== undefined) {
        if (typeof schema.additionalItems === "boolean") {
          if (!schema.additionalItems) {
            error = (this.createError(ErrorCodes.ARRAY_ADDITIONAL_ITEMS, {})).prefixWith("" + i, "additionalItems");
            if (this.handleError(error)) {
              return error;
            }
          }
        } else if (error = this.validateAll(data[i], schema.additionalItems, [i], ["additionalItems"], dataPointerPath + "/" + i)) {
          return error;
        }
      }
    }
  } else {
    var l = data.length;
    for (i = 0; i < l; i++) {
      if (error = this.validateAll(data[i], schema.items, [i], ["items"], dataPointerPath + "/" + i)) {
        return error;
      }
    }
  }
  return null;
};

ValidatorContext.prototype.validateObject = function validateObject(data, schema, dataPointerPath) {
  if (typeof data !== "object" || data === null || Array.isArray(data)) {
    return null;
  }
  return this.validateObjectMinMaxProperties(data, schema, dataPointerPath) || this.validateObjectRequiredProperties(data, schema, dataPointerPath) || this.validateObjectProperties(data, schema, dataPointerPath) || this.validateObjectDependencies(data, schema, dataPointerPath) || null;
};

ValidatorContext.prototype.validateObjectMinMaxProperties = function validateObjectMinMaxProperties(data, schema) {
  var keys = Object.keys(data);
  var error;
  if (schema.minProperties !== undefined) {
    if (keys.length < schema.minProperties) {
      error = this.createError(ErrorCodes.OBJECT_PROPERTIES_MINIMUM, {propertyCount: keys.length, minimum: schema.minProperties}).prefixWith(null, "minProperties");
      if (this.handleError(error)) {
        return error;
      }
    }
  }
  if (schema.maxProperties !== undefined) {
    if (keys.length > schema.maxProperties) {
      error = this.createError(ErrorCodes.OBJECT_PROPERTIES_MAXIMUM, {propertyCount: keys.length, maximum: schema.maxProperties}).prefixWith(null, "maxProperties");
      if (this.handleError(error)) {
        return error;
      }
    }
  }
  return null;
};

ValidatorContext.prototype.validateObjectRequiredProperties = function validateObjectRequiredProperties(data, schema) {
  if (schema.required !== undefined) {
    var i = 0, l = schema.required.length;
    for (i = 0; i < l; i++) {
      var key = schema.required[i];
      if (data[key] === undefined) {
        var error = this.createError(ErrorCodes.OBJECT_REQUIRED, {key: key}).prefixWith(null, "" + i).prefixWith(null, "required");
        if (this.handleError(error)) {
          return error;
        }
      }
    }
  }
  return null;
};

ValidatorContext.prototype.validateObjectProperties = function validateObjectProperties(data, schema, dataPointerPath) {
  var error;
  for (var key in data) {
    var keyPointerPath = dataPointerPath + "/" + key.replace(/~/g, '~0').replace(/\//g, '~1');
    var foundMatch = false;
    if (schema.properties !== undefined && schema.properties[key] !== undefined) {
      foundMatch = true;
      if (error = this.validateAll(data[key], schema.properties[key], [key], ["properties", key], keyPointerPath)) {
        return error;
      }
    }
    if (schema.patternProperties !== undefined) {
      for (var patternKey in schema.patternProperties) {
        var regexp = new RegExp(patternKey);
        if (regexp.test(key)) {
          foundMatch = true;
          if (error = this.validateAll(data[key], schema.patternProperties[patternKey], [key], ["patternProperties", patternKey], keyPointerPath)) {
            return error;
          }
        }
      }
    }
    if (!foundMatch) {
      if (schema.additionalProperties !== undefined) {
        if (this.trackUnknownProperties) {
          this.knownPropertyPaths[keyPointerPath] = true;
          delete this.unknownPropertyPaths[keyPointerPath];
        }
        if (typeof schema.additionalProperties === "boolean") {
          if (!schema.additionalProperties) {
            error = this.createError(ErrorCodes.OBJECT_ADDITIONAL_PROPERTIES, {}).prefixWith(key, "additionalProperties");
            if (this.handleError(error)) {
              return error;
            }
          }
        } else {
          if (error = this.validateAll(data[key], schema.additionalProperties, [key], ["additionalProperties"], keyPointerPath)) {
            return error;
          }
        }
      } else if (this.trackUnknownProperties && !this.knownPropertyPaths[keyPointerPath]) {
        this.unknownPropertyPaths[keyPointerPath] = true;
      }
    } else if (this.trackUnknownProperties) {
      this.knownPropertyPaths[keyPointerPath] = true;
      delete this.unknownPropertyPaths[keyPointerPath];
    }
  }
  return null;
};

ValidatorContext.prototype.validateObjectDependencies = function validateObjectDependencies(data, schema, dataPointerPath) {
  var error;
  if (schema.dependencies !== undefined) {
    for (var depKey in schema.dependencies) {
      if (data[depKey] !== undefined) {
        var dep = schema.dependencies[depKey];
        if (typeof dep === "string") {
          if (data[dep] === undefined) {
            error = this.createError(ErrorCodes.OBJECT_DEPENDENCY_KEY, {key: depKey, missing: dep}).prefixWith(null, depKey).prefixWith(null, "dependencies");
            if (this.handleError(error)) {
              return error;
            }
          }
        } else if (Array.isArray(dep)) {
          var i = 0, l = dep.lenth;
          for (i = 0; i < l; i++) {
            var requiredKey = dep[i];
            if (data[requiredKey] === undefined) {
              error = this.createError(ErrorCodes.OBJECT_DEPENDENCY_KEY, {key: depKey, missing: requiredKey}).prefixWith(null, "" + i).prefixWith(null, depKey).prefixWith(null, "dependencies");
              if (this.handleError(error)) {
                return error;
              }
            }
          }
        } else {
          if (error = this.validateAll(data, dep, [], ["dependencies", depKey], dataPointerPath)) {
            return error;
          }
        }
      }
    }
  }
  return null;
};

ValidatorContext.prototype.validateCombinations = function validateCombinations(data, schema, dataPointerPath) {
  return this.validateAllOf(data, schema, dataPointerPath) || this.validateAnyOf(data, schema, dataPointerPath) || this.validateOneOf(data, schema, dataPointerPath) || this.validateNot(data, schema, dataPointerPath) || null;
};

ValidatorContext.prototype.validateAllOf = function validateAllOf(data, schema, dataPointerPath) {
  if (schema.allOf === undefined) {
    return null;
  }
  var error;
  var i = 0, l = schema.allOf.length;
  for (i = 0; i < l; i++) {
    var subSchema = schema.allOf[i];
    if (error = this.validateAll(data, subSchema, [], ["allOf", i], dataPointerPath)) {
      return error;
    }
  }
  return null;
};

ValidatorContext.prototype.validateAnyOf = function validateAnyOf(data, schema, dataPointerPath) {
  if (schema.anyOf === undefined) {
    return null;
  }
  var errors = [];
  var startErrorCount = this.errors.length;
  var oldUnknownPropertyPaths, oldKnownPropertyPaths;
  if (this.trackUnknownProperties) {
    oldUnknownPropertyPaths = this.unknownPropertyPaths;
    oldKnownPropertyPaths = this.knownPropertyPaths;
  }
  var errorAtEnd = true;
  var i = 0, l = schema.anyOf.length;
  for (i = 0; i < l; i++) {
    if (this.trackUnknownProperties) {
      this.unknownPropertyPaths = {};
      this.knownPropertyPaths = {};
    }
    var subSchema = schema.anyOf[i];

    var errorCount = this.errors.length;
    var error = this.validateAll(data, subSchema, [], ["anyOf", i], dataPointerPath);

    if (error === null && errorCount === this.errors.length) {
      this.errors = this.errors.slice(0, startErrorCount);

      if (this.trackUnknownProperties) {
        for (var knownKey in this.knownPropertyPaths) {
          oldKnownPropertyPaths[knownKey] = true;
          delete oldUnknownPropertyPaths[knownKey];
        }
        for (var unknownKey in this.unknownPropertyPaths) {
          if (!oldKnownPropertyPaths[unknownKey]) {
            oldUnknownPropertyPaths[unknownKey] = true;
          }
        }
        // We need to continue looping so we catch all the
        // property definitions, but we don't want to return an
        // error
        errorAtEnd = false;
        continue;
      }

      return null;
    }
    if (error) {
      errors.push(error.prefixWith(null, "" + i).prefixWith(null, "anyOf"));
    }
  }
  if (this.trackUnknownProperties) {
    this.unknownPropertyPaths = oldUnknownPropertyPaths;
    this.knownPropertyPaths = oldKnownPropertyPaths;
  }
  if (errorAtEnd) {
    errors = errors.concat(this.errors.slice(startErrorCount));
    this.errors = this.errors.slice(0, startErrorCount);
    return this.createError(ErrorCodes.ANY_OF_MISSING, {}, "", "/anyOf", errors);
  }
};

ValidatorContext.prototype.validateOneOf = function validateOneOf(data, schema, dataPointerPath) {
  if (schema.oneOf === undefined) {
    return null;
  }
  var validIndex = null;
  var errors = [];
  var startErrorCount = this.errors.length;
  var oldUnknownPropertyPaths, oldKnownPropertyPaths;
  if (this.trackUnknownProperties) {
    oldUnknownPropertyPaths = this.unknownPropertyPaths;
    oldKnownPropertyPaths = this.knownPropertyPaths;
  }
  var i = 0, l = schema.oneOf.length;
  for (i = 0; i < l; i++) {
    if (this.trackUnknownProperties) {
      this.unknownPropertyPaths = {};
      this.knownPropertyPaths = {};
    }
    var subSchema = schema.oneOf[i];

    var errorCount = this.errors.length;
    var error = this.validateAll(data, subSchema, [], ["oneOf", i], dataPointerPath);

    if (error === null && errorCount === this.errors.length) {
      if (validIndex === null) {
        validIndex = i;
      } else {
        this.errors = this.errors.slice(0, startErrorCount);
        return this.createError(ErrorCodes.ONE_OF_MULTIPLE, {index1: validIndex, index2: i}, "", "/oneOf");
      }
      if (this.trackUnknownProperties) {
        for (var knownKey in this.knownPropertyPaths) {
          oldKnownPropertyPaths[knownKey] = true;
          delete oldUnknownPropertyPaths[knownKey];
        }
        for (var unknownKey in this.unknownPropertyPaths) {
          if (!oldKnownPropertyPaths[unknownKey]) {
            oldUnknownPropertyPaths[unknownKey] = true;
          }
        }
      }
    } else if (error) {
      errors.push(error);
    }
  }
  if (this.trackUnknownProperties) {
    this.unknownPropertyPaths = oldUnknownPropertyPaths;
    this.knownPropertyPaths = oldKnownPropertyPaths;
  }
  if (validIndex === null) {
    errors = errors.concat(this.errors.slice(startErrorCount));
    this.errors = this.errors.slice(0, startErrorCount);
    return this.createError(ErrorCodes.ONE_OF_MISSING, {}, "", "/oneOf", errors);
  } else {
    this.errors = this.errors.slice(0, startErrorCount);
  }
  return null;
};

ValidatorContext.prototype.validateNot = function validateNot(data, schema, dataPointerPath) {
  if (schema.not === undefined) {
    return null;
  }
  var oldErrorCount = this.errors.length;
  var oldUnknownPropertyPaths, oldKnownPropertyPaths;
  if (this.trackUnknownProperties) {
    oldUnknownPropertyPaths = this.unknownPropertyPaths;
    oldKnownPropertyPaths = this.knownPropertyPaths;
    this.unknownPropertyPaths = {};
    this.knownPropertyPaths = {};
  }
  var error = this.validateAll(data, schema.not, null, null, dataPointerPath);
  var notErrors = this.errors.slice(oldErrorCount);
  this.errors = this.errors.slice(0, oldErrorCount);
  if (this.trackUnknownProperties) {
    this.unknownPropertyPaths = oldUnknownPropertyPaths;
    this.knownPropertyPaths = oldKnownPropertyPaths;
  }
  if (error === null && notErrors.length === 0) {
    return this.createError(ErrorCodes.NOT_PASSED, {}, "", "/not");
  }
  return null;
};

ValidatorContext.prototype.validateHypermedia = function validateCombinations(data, schema, dataPointerPath) {
  if (!schema.links) {
    return null;
  }
  var error;
  var i = 0, l = schema.links.length;
  for (i = 0; i < l; i++) {
    var ldo = schema.links[i];
    if (ldo.rel === "describedby") {
      var template = new UriTemplate(ldo.href);
      var allPresent = true;
      var j = 0, ll = template.varNames.length;
      for (j = 0; j < ll; j++) {
        if (!(template.varNames[j] in data)) {
          allPresent = false;
          break;
        }
      }
      if (allPresent) {
        var schemaUrl = template.fillFromObject(data);
        var subSchema = {"$ref": schemaUrl};
        if (error = this.validateAll(data, subSchema, [], ["links", i], dataPointerPath)) {
          return error;
        }
      }
    }
  }
};

// parseURI() and resolveUrl() are from https://gist.github.com/1088850
// - released as public domain by author ("Yaffle") - see comments on
// gist

function parseURI(url) {
  var m = String(url).replace(/^\s+|\s+$/g, '').match(/^([^:\/?#]+:)?(\/\/(?:[^:@]*(?::[^:@]*)?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/);
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
}

function resolveUrl(base, href) {// RFC 3986

  function removeDotSegments(input) {
    var output = [];
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
  }

  href = parseURI(href || '');
  base = parseURI(base || '');

  return !href || !base ? null : (href.protocol || base.protocol) +
  (href.protocol || href.authority ? href.authority : base.authority) +
  removeDotSegments(href.protocol || href.authority || href.pathname.charAt(0) === '/' ? href.pathname : (href.pathname ? ((base.authority && !base.pathname ? '/' : '') + base.pathname.slice(0, base.pathname.lastIndexOf('/') + 1) + href.pathname) : base.pathname)) +
  (href.protocol || href.authority || href.pathname ? href.search : (href.search || base.search)) +
  href.hash;
}

function getDocumentUri(uri) {
  return uri.split('#')[0];
}
function normSchema(schema, baseUri) {
  if (schema && typeof schema === "object") {
    if (baseUri === undefined) {
      baseUri = schema.id;
    } else if (typeof schema.id === "string") {
      baseUri = resolveUrl(baseUri, schema.id);
      schema.id = baseUri;
    }
    if (Array.isArray(schema)) {
      var i = 0, l = schema.length;
      for (i = 0; i < l; i++) {
        normSchema(schema[i], baseUri);
      }
    } else {
      if (typeof schema['$ref'] === "string") {
        schema['$ref'] = resolveUrl(baseUri, schema['$ref']);
      }
      for (var key in schema) {
        if (key !== "enum") {
          normSchema(schema[key], baseUri);
        }
      }
    }
  }
}

var ErrorCodes = {
  INVALID_TYPE: 0,
  ENUM_MISMATCH: 1,
  ANY_OF_MISSING: 10,
  ONE_OF_MISSING: 11,
  ONE_OF_MULTIPLE: 12,
  NOT_PASSED: 13,
  // Numeric errors
  NUMBER_MULTIPLE_OF: 100,
  NUMBER_MINIMUM: 101,
  NUMBER_MINIMUM_EXCLUSIVE: 102,
  NUMBER_MAXIMUM: 103,
  NUMBER_MAXIMUM_EXCLUSIVE: 104,
  NUMBER_NOT_A_NUMBER: 105,
  // String errors
  STRING_LENGTH_SHORT: 200,
  STRING_LENGTH_LONG: 201,
  STRING_PATTERN: 202,
  // Object errors
  OBJECT_PROPERTIES_MINIMUM: 300,
  OBJECT_PROPERTIES_MAXIMUM: 301,
  OBJECT_REQUIRED: 302,
  OBJECT_ADDITIONAL_PROPERTIES: 303,
  OBJECT_DEPENDENCY_KEY: 304,
  // Array errors
  ARRAY_LENGTH_SHORT: 400,
  ARRAY_LENGTH_LONG: 401,
  ARRAY_UNIQUE: 402,
  ARRAY_ADDITIONAL_ITEMS: 403,
  // Custom/user-defined errors
  FORMAT_CUSTOM: 500,
  KEYWORD_CUSTOM: 501,
  // Schema structure
  CIRCULAR_REFERENCE: 600,
  // Non-standard validation options
  UNKNOWN_PROPERTY: 1000
};
var ErrorCodeLookup = {};
for (var key in ErrorCodes) {
  ErrorCodeLookup[ErrorCodes[key]] = key;
}
// TODO: bundle this
var ErrorMessagesDefault = {
  INVALID_TYPE: "Invalid type: {type} (expected {expected})",
  ENUM_MISMATCH: "No enum match for: {value}",
  ANY_OF_MISSING: "Data does not match any schemas from \"anyOf\"",
  ONE_OF_MISSING: "Data does not match any schemas from \"oneOf\"",
  ONE_OF_MULTIPLE: "Data is valid against more than one schema from \"oneOf\": indices {index1} and {index2}",
  NOT_PASSED: "Data matches schema from \"not\"",
  // Numeric errors
  NUMBER_MULTIPLE_OF: "Value {value} is not a multiple of {multipleOf}",
  NUMBER_MINIMUM: "Value {value} is less than minimum {minimum}",
  NUMBER_MINIMUM_EXCLUSIVE: "Value {value} is equal to exclusive minimum {minimum}",
  NUMBER_MAXIMUM: "Value {value} is greater than maximum {maximum}",
  NUMBER_MAXIMUM_EXCLUSIVE: "Value {value} is equal to exclusive maximum {maximum}",
  NUMBER_NOT_A_NUMBER: "Value {value} is not a valid number",
  // String errors
  STRING_LENGTH_SHORT: "String is too short ({length} chars), minimum {minimum}",
  STRING_LENGTH_LONG: "String is too long ({length} chars), maximum {maximum}",
  STRING_PATTERN: "String does not match pattern: {pattern}",
  // Object errors
  OBJECT_PROPERTIES_MINIMUM: "Too few properties defined ({propertyCount}), minimum {minimum}",
  OBJECT_PROPERTIES_MAXIMUM: "Too many properties defined ({propertyCount}), maximum {maximum}",
  OBJECT_REQUIRED: "Missing required property: {key}",
  OBJECT_ADDITIONAL_PROPERTIES: "Additional properties not allowed",
  OBJECT_DEPENDENCY_KEY: "Dependency failed - key must exist: {missing} (due to key: {key})",
  // Array errors
  ARRAY_LENGTH_SHORT: "Array is too short ({length}), minimum {minimum}",
  ARRAY_LENGTH_LONG: "Array is too long ({length}), maximum {maximum}",
  ARRAY_UNIQUE: "Array items are not unique (indices {match1} and {match2})",
  ARRAY_ADDITIONAL_ITEMS: "Additional items not allowed",
  // Format errors
  FORMAT_CUSTOM: "Format validation failed ({message})",
  KEYWORD_CUSTOM: "Keyword failed: {key} ({message})",
  // Schema structure
  CIRCULAR_REFERENCE: "Circular $refs: {urls}",
  // Non-standard validation options
  UNKNOWN_PROPERTY: "Unknown property (not in schema)"
};

function ValidationError(code, message, params, dataPath, schemaPath, subErrors) {
  Error.call(this);
  if (code === undefined) {
    throw new Error ("No code supplied for error: "+ message);
  }
  this.message = message;
  this.params = params;
  this.code = code;
  this.dataPath = dataPath || "";
  this.schemaPath = schemaPath || "";
  this.subErrors = subErrors || null;

  var err = new Error(this.message);
  this.stack = err.stack || err.stacktrace;
  if (!this.stack) {
    try {
      throw err;
    }
    catch(err2) {
      this.stack = err2.stack || err2.stacktrace;
    }
  }
}
ValidationError.prototype = Object.create(Error.prototype);
ValidationError.prototype.constructor = ValidationError;
ValidationError.prototype.name = 'ValidationError';

ValidationError.prototype.prefixWith = function (dataPrefix, schemaPrefix) {
  if (dataPrefix !== null) {
    dataPrefix = dataPrefix.replace(/~/g, "~0").replace(/\//g, "~1");
    this.dataPath = "/" + dataPrefix + this.dataPath;
  }
  if (schemaPrefix !== null) {
    schemaPrefix = schemaPrefix.replace(/~/g, "~0").replace(/\//g, "~1");
    this.schemaPath = "/" + schemaPrefix + this.schemaPath;
  }
  if (this.subErrors !== null) {
    var i = 0, l = this.subErrors.length;
    for (i = 0; i < l; i++) {
      this.subErrors[i].prefixWith(dataPrefix, schemaPrefix);
    }
  }
  return this;
};

function isTrustedUrl(baseUrl, testUrl) {
  if(testUrl.substring(0, baseUrl.length) === baseUrl){
    var remainder = testUrl.substring(baseUrl.length);
    if ((testUrl.length > 0 && testUrl.charAt(baseUrl.length - 1) === "/") || remainder.charAt(0) === "#" || remainder.charAt(0) === "?") {
      return true;
    }
  }
  return false;
}

var languages = {};
function createApi(language) {
  var globalContext = new ValidatorContext();
  var currentLanguage = language || 'en';
  var api = {
    addFormat: function () {
      globalContext.addFormat.apply(globalContext, arguments);
    },
    language: function (code) {
      if (!code) {
        return currentLanguage;
      }
      if (!languages[code]) {
        code = code.split('-')[0]; // fall back to base
        // language
      }
      if (languages[code]) {
        currentLanguage = code;
        return code; // so you can tell if fall-back has
        // happened
      }
      return false;
    },
    addLanguage: function (code, messageMap) {
      var key;
      for (key in ErrorCodes) {
        if (messageMap[key] && !messageMap[ErrorCodes[key]]) {
          messageMap[ErrorCodes[key]] = messageMap[key];
        }
      }
      var rootCode = code.split('-')[0];
      if (!languages[rootCode]) { // use for base language if
        // not yet defined
        languages[code] = messageMap;
        languages[rootCode] = messageMap;
      } else {
        languages[code] = Object.create(languages[rootCode]);
        for (key in messageMap) {
          if (typeof languages[rootCode][key] === 'undefined') {
            languages[rootCode][key] = messageMap[key];
          }
          languages[code][key] = messageMap[key];
        }
      }
      return this;
    },
    freshApi: function (language) {
      var result = createApi();
      if (language) {
        result.language(language);
      }
      return result;
    },
    validate: function (data, schema, checkRecursive, banUnknownProperties) {
      var context = new ValidatorContext(globalContext, false, languages[currentLanguage], checkRecursive, banUnknownProperties);
      if (typeof schema === "string") {
        schema = {"$ref": schema};
      }
      context.addSchema("", schema);
      var error = context.validateAll(data, schema, null, null, "");
      if (!error && banUnknownProperties) {
        error = context.banUnknownProperties();
      }
      this.error = error;
      this.missing = context.missing;
      this.valid = (error === null);
      return this.valid;
    },
    validateResult: function () {
      var result = {};
      this.validate.apply(result, arguments);
      return result;
    },
    validateMultiple: function (data, schema, checkRecursive, banUnknownProperties) {
      var context = new ValidatorContext(globalContext, true, languages[currentLanguage], checkRecursive, banUnknownProperties);
      if (typeof schema === "string") {
        schema = {"$ref": schema};
      }
      context.addSchema("", schema);
      context.validateAll(data, schema, null, null, "");
      if (banUnknownProperties) {
        context.banUnknownProperties();
      }
      var result = {};
      result.errors = context.errors;
      result.missing = context.missing;
      result.valid = (result.errors.length === 0);
      return result;
    },
    addSchema: function () {
      return globalContext.addSchema.apply(globalContext, arguments);
    },
    getSchema: function () {
      return globalContext.getSchema.apply(globalContext, arguments);
    },
    getSchemaMap: function () {
      return globalContext.getSchemaMap.apply(globalContext, arguments);
    },
    getSchemaUris: function () {
      return globalContext.getSchemaUris.apply(globalContext, arguments);
    },
    getMissingUris: function () {
      return globalContext.getMissingUris.apply(globalContext, arguments);
    },
    dropSchemas: function () {
      globalContext.dropSchemas.apply(globalContext, arguments);
    },
    defineKeyword: function () {
      globalContext.defineKeyword.apply(globalContext, arguments);
    },
    defineError: function (codeName, codeNumber, defaultMessage) {
      if (typeof codeName !== 'string' || !/^[A-Z]+(_[A-Z]+)*$/.test(codeName)) {
        // TODO message bundle this
        throw new Error('Code name must be a string in UPPER_CASE_WITH_UNDERSCORES');
      }
      if (typeof codeNumber !== 'number' || codeNumber%1 !== 0 || codeNumber < 10000) {
        // TODO message bundle this
        throw new Error('Code number must be an integer > 10000');
      }
      if (typeof ErrorCodes[codeName] !== 'undefined') {
        // TODO message bundle this
        throw new Error('Error already defined: ' + codeName + ' as ' + ErrorCodes[codeName]);
      }
      if (typeof ErrorCodeLookup[codeNumber] !== 'undefined') {
        // TODO message bundle this
        throw new Error('Error code already used: ' + ErrorCodeLookup[codeNumber] + ' as ' + codeNumber);
      }
      ErrorCodes[codeName] = codeNumber;
      ErrorCodeLookup[codeNumber] = codeName;
      ErrorMessagesDefault[codeName] = ErrorMessagesDefault[codeNumber] = defaultMessage;
      for (var langCode in languages) {
        var language = languages[langCode];
        if (language[codeName]) {
          language[codeNumber] = language[codeNumber] || language[codeName];
        }
      }
    },
    reset: function () {
      globalContext.reset();
      this.error = null;
      this.missing = [];
      this.valid = true;
    },
    missing: [],
    error: null,
    valid: true,
    normSchema: normSchema,
    resolveUrl: resolveUrl,
    getDocumentUri: getDocumentUri,
    errorCodes: ErrorCodes
  };
  return api;
}

var tv4 = createApi();
tv4.addLanguage('en-us', ErrorMessagesDefault);  // changed to US
// Engilsh

// legacy property
tv4.tv4 = tv4;

return tv4;
};
// End of TV4 fork, will provide base JSON-Schema Draft 4 support and then some


/**
* <p>Augmented.Utility.SchemaGenerator<br/>
*
* Genrate a schema from a set of data</p>
* @constructor Augmented.Utility.SchemaGenerator
* @param {object} data a dataset to produce a schema from
* @memberof Augmented.Utility
*/
Augmented.Utility.SchemaGenerator = function(data) {
  var obj = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "model",
    "description": "Generated Schema",
    "type": "object",
    "properties": { }
  };

  var i, d, dkey, p, keys = Object.keys(data), l = keys.length;
  for (i = 0; i < l; i++) {
    d = keys[i];
    for (dkey in d) {
      if (d.hasOwnProperty(dkey)) {
        p = obj.properties[d] = {};

        var t = (typeof data[d]);
        if (t === "object") {
          t = (Array.isArray(data[d])) ? "array" : "object";
        } else if (t === "number") {
          t = (Number.isInteger(data[d])) ? "integer" : "number";
        }
        p.type = t;
        p.description = String(d);
      }
    }
  }
  return obj;
};

/**
* Augmented.ValidationFramework -
* The Validation Framework Base Wrapper Class.
* Provides abstraction for base validation build-in library
* @constructor Augmented.ValidationFramework
* @memberof Augmented
*/
var validationFramework = function() {
  var myValidator;
  if (myValidator === undefined) {
    myValidator = new Validator();
  }
  /**
  * Returns if the framework supports validation
  * @method supportsValidation
  * @returns {boolean} Returns true if the framework supports validation
  * @memberof Augmented.ValidationFramework
  */
  this.supportsValidation = function() {
    return (myValidator !== null);
  };
  /**
  * Registers a schema to the Framework
  * @method registerSchema
  * @param {string} identity The identity of the schema
  * @param {object} schema The JSON schema
  * @memberof Augmented.ValidationFramework
  */
  this.registerSchema = function(identity, schema) {
    myValidator.addSchema(identity, schema);
  };
  /**
  * Gets a schema
  * @method getSchema
  * @param {string} identity The identity of the schema
  * @returns {object} The JSON schema
  * @memberof Augmented.ValidationFramework
  */
  this.getSchema = function(identity) {
    return myValidator.getSchema(identity);
  };
  /**
  * Gets all schemas
  * @method getSchemas
  * @returns {array} all JSON schemas
  * @memberof Augmented.ValidationFramework
  */
  this.getSchemas = function() {
    return myValidator.getSchemaMap();
  };
  /**
  * Clears all schemas
  * @method clearSchemas
  * @memberof Augmented.ValidationFramework
  */
  this.clearSchemas = function() {
    myValidator.dropSchemas();
  };
  /**
  * Validates data via a schema
  * @method validate
  * @param {object} data The data to validate
  * @param {object} The JSON schema
  * @returns {object} Returns the validation object
  * @memberof Augmented.ValidationFramework
  */
  this.validate = function(data, schema) {
    return myValidator.validateMultiple(data, schema);
  };
  /**
  * Validates data via a schema
  * @method getValidationMessages
  * @returns {array} Returns the validation messages
  * @memberof Augmented.ValidationFramework
  */
  this.getValidationMessages = function() {
    return myValidator.error;
  };

  this.generateSchema = function(model) {
    if (model && model instanceof Augmented.Model) {
      return Augmented.Utility.SchemaGenerator(model.toJSON());
    }

    return Augmented.Utility.SchemaGenerator(model);
  };
};

Augmented.ValidationFramework = (!Augmented.ValidationFramework) ? new validationFramework() : Augmented.ValidationFramework;