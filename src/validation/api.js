import ValidatorContext from "./validatorContext.js";
import {ErrorCodeLookup, ErrorCodes, ErrorMessagesDefault} from "./validationError.js";

let languages = {};

const createApi = (language) => {
  const _myContext = new ValidatorContext();
  let currentLanguage = language || 'en';
  const api = {
    addFormat: () => {
      _myContext.addFormat.apply(_myContext, arguments);
    },
    language: (code) => {
      if (!code) {
        return currentLanguage;
      }
      if (!languages[code]) {
        code = code.split('-')[0]; // fall back to base
        // language
      }
      if (languages[code]) {
        currentLanguage = code;
        return code; // so you can tell if fall-back has happened
      }
      return false;
    },
    addLanguage: (code, messageMap) => {
      let key;
      for (key in ErrorCodes) {
        if (messageMap[key] && !messageMap[ErrorCodes[key]]) {
          messageMap[ErrorCodes[key]] = messageMap[key];
        }
      }
      let rootCode = code.split('-')[0];
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
    freshApi: (language) => {
      const result = createApi();
      if (language) {
        result.language(language);
      }
      return result;
    },
    validate: (data, schema, checkRecursive, banUnknownProperties) => {
      const context = new ValidatorContext(_myContext, false, languages[currentLanguage], checkRecursive, banUnknownProperties);
      if (typeof schema === "string") {
        schema = {"$ref": schema};
      }
      context.addSchema("", schema);
      let error = context.validateAll(data, schema, null, null, "");
      if (!error && banUnknownProperties) {
        error = context.banUnknownProperties();
      }
      this.error = error;
      this.missing = context.missing;
      this.valid = (error === null);
      return this.valid;
    },
    validateResult: () => {
      let result = {};
      this.validate.apply(result, arguments);
      return result;
    },
    validateMultiple: (data, schema, checkRecursive, banUnknownProperties) => {
      const context = new ValidatorContext(_myContext, true, languages[currentLanguage], checkRecursive, banUnknownProperties);
      if (typeof schema === "string") {
        schema = {"$ref": schema};
      }
      context.addSchema("", schema);
      context.validateAll(data, schema, null, null, "");
      if (banUnknownProperties) {
        context.banUnknownProperties();
      }
      let result = {};
      result.errors = context.errors;
      result.missing = context.missing;
      result.valid = (result.errors.length === 0);
      return result;
    },
    addSchema: () => {
      return _myContext.addSchema.apply(_myContext, arguments);
    },
    getSchema: () => {
      return _myContext.getSchema.apply(_myContext, arguments);
    },
    getSchemaMap: () => {
      return _myContext.getSchemaMap.apply(_myContext, arguments);
    },
    getSchemaUris: () => {
      return _myContext.getSchemaUris.apply(_myContext, arguments);
    },
    getMissingUris: () => {
      return _myContext.getMissingUris.apply(_myContext, arguments);
    },
    dropSchemas: () => {
      _myContext.dropSchemas.apply(_myContext, arguments);
    },
    defineKeyword: () => {
      _myContext.defineKeyword.apply(_myContext, arguments);
    },
    defineError: (codeName, codeNumber, defaultMessage) => {
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
      for (let langCode in languages) {
        let language = languages[langCode];
        if (language[codeName]) {
          language[codeNumber] = language[codeNumber] || language[codeName];
        }
      }
    },
    reset: () => {
      _myContext.reset();
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
};

export default createApi;
