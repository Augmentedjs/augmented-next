UriTemplate(template) {
  if (!(this instanceof UriTemplate)) {
    return new UriTemplate(template);
  }
  let parts = template.split("{");
  let textParts = [parts.shift()];
  let prefixes = [];
  let substitutions = [];
  let varNames = [];
  while (parts.length > 0) {
    let part = parts.shift();
    let spec = part.split("}")[0];
    let remainder = part.substring(spec.length + 1);
    let funcs = uriTemplateSubstitution(spec);
    substitutions.push(funcs.substitution);
    prefixes.push(funcs.prefix);
    textParts.push(remainder);
    varNames = varNames.concat(funcs.substitution.varNames);
  }
  this.fill = function (valueFunction) {
    let result = textParts[0];
    let i=0, l = substitutions.length;
    for (i = 0; i < l; i++) {
      let substitution = substitutions[i];
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
