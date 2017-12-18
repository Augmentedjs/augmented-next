// createApi
import createAPI from "./api.js";

/**
 * Validation framework - forked from TV4 and extended
 * @constructor Validator
 * @private
 */
class Validator {
  constructor() {
    this._myApi = createApi();
    _myApi.addLanguage('en-us', ErrorMessagesDefault);  // changed to US

    // legacy property
    _myApi.tv4 = _myApi;
  };
  _myApi = null;

  notReallyPercentEncode(string) {
    return encodeURI(string).replace(/%25[0-9][0-9]/g, (doubleEncoded) => {
      return "%" + doubleEncoded.substring(3);
    });
  };

  uriTemplateSubstitution(spec) {
    let modifier = "";
    if (URI_TEMPLATE_GLOBAL_MODIFIERS[spec.charAt(0)]) {
      modifier = spec.charAt(0);
      spec = spec.substring(1);
    }
    let separator = "";
    let prefix = "";
    let shouldEscape = true;
    let showVariables = false;
    let trimEmptyString = false;
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

    let varNames = [];
    let varList = spec.split(",");
    let varSpecs = [];
    let varSpecMap = {};
    let i = 0, l = varList.length;
    for (i = 0; i < l; i++) {
      let varName = varList[i];
      let truncate = null;
      if (varName.indexOf(":") !== -1) {
        let parts = varName.split(":");
        varName = parts[0];
        truncate = parseInt(parts[1], 10);
      }
      let suffices = {};
      while (URI_TEMPLATE_SUFFICES[varName.charAt(varName.length - 1)]) {
        suffices[varName.charAt(varName.length - 1)] = true;
        varName = varName.substring(0, varName.length - 1);
      }
      let varSpec = {
        truncate: truncate,
        name: varName,
        suffices: suffices
      };
      varSpecs.push(varSpec);
      varSpecMap[varName] = varSpec;
      varNames.push(varName);
    }

    const subFunction(valueFunction) => {
      let result = "";
      let startIndex = 0;
      let i = 0, l = varSpecs.length;
      for (i = 0; i < l; i++) {
        let varSpec = varSpecs[i];
        let value = valueFunction(varSpec.name);
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
          let j = 0;
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
          let first = true;
          for (let key in value) {
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
  };

  recursiveCompare(A, B) {
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
        let i = 0, l = A.length;
        for (i = 0; i < l; i++) {
          if (!this.recursiveCompare(A[i], B[i])) {
            return false;
          }
        }
      } else {
        let key;
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
          if (!this.recursiveCompare(A[key], B[key])) {
            return false;
          }
        }
      }
      return true;
    }
    return false;
  };
};

export default Validator;
