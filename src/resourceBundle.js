//var resourceBundle = (!resourceBundle) ? new i18nBase() : resourceBundle;

/**
* ResourceBundle Object used for configuration of a bundle
* @namespace Augmented.Utility.BundleObject
* @memberof Augmented.Utility
* @name Augmented.Utility.BundleObject
* @property {string} name Name/uri/file of the bundle
* @property {string} mode Bundlefile type (default: both)
* @property {boolean} cache Cache reading from bundle (default: true)
*/
Augmented.Utility.BundleObject = {
  name: '',
  mode: 'both',
  cache: true
};

/**
* Augmented.Utility.ResourceBundle
* @namespace Augmented.Utility.ResourceBundle
* @memberof Augmented.Utility
* @name Augmented.Utility.ResourceBundle
*/
Augmented.Utility.ResourceBundle = {
  /**
  * Gets the bundle(s) and registers to Augmented.Utility.ResourceBundle
  * @method getBundle
  * @param {Augmented.Utility.BundleObject} Bundle to get
  * @memberof Augmented.Utility.ResourceBundle
  * @returns {object} returns a bundle
  */
  getBundle: function() {
    return {};//resourceBundle.properties.apply(this, arguments);
  },

  /**
  * Gets a string from the registered bundle
  * @method getString
  * @memberof Augmented.Utility.ResourceBundle
  */
  getString: function() {
    return "";//resourceBundle.prop.apply(this, arguments);
  }
};

/**
* Reads a message out of the bundle
* @namespace Augmented.Utility.MessageReader
* @memberof Augmented.Utility
* @name Augmented.Utility.MessageReader
*/
Augmented.Utility.MessageReader = {
  /**
  * getMessage - get the message out of the bundle.<br/>
  * If message is not found, then ResourceBundle returns the key
  * wrapped in square brackets
  * loop through the fallback path of the key by removing the
  * last attribute and searching the bundle again
  * stop when you get back a real message (not just the [key])
  * @method getMessage
  * @memberof Augmented.Utility.MessageReader
  * @param {string} key The key to return from the bundle
  */
  getMessage: function(key) {
    // try getting the message out of the bundle
    var msg = Augmented.Utility.ResourceBundle.getString.apply(this,arguments),
    delimiter = ".",
    last = key.length,
    originalKey = key;
    // if message is not found, then ResourceBundle returns the key
    // wrapped in square brackets
    // loop through the fallback path of the key by removing the
    // last attribute and searching the bundle again
    // stop when you get back a real message (not just the [key])
    while ( last > 0 && msg == '[' + key + ']') {
      last = key.lastIndexOf(delimiter);
      key = key.substring(0,last);
      msg = Augmented.Utility.ResourceBundle.getString.apply(this,arguments);
    }
    // if the original key or a fallback was found, return the
    // message
    // otherwise return the original key with square brackets
    // (default jquery.i18n.properties plugin result)
    return key ? msg : "[" + originalKey + "]";
  }
};

/**
* <p>Augmented.Utility.MessageKeyFormatter<br/>
*
* Concatenate the pieces of the message together if a portion of the key is
* missing, the rest of the key is ignored. <em>ex. if the "rule" attribute is
* missing, then the key will return with the message.level + message.kind only</em></p>
* @namespace Augmented.Utility.MessageKeyFormatter
* @memberof Augmented.Utility
* @name Augmented.Utility.MessageKeyFormatter
*/
Augmented.Utility.MessageKeyFormatter = {
  /**
  * Key Delimiter
  * @property {srting} delimiter The delimter used to seperate each key
  * @memberof Augmented.Utility.MessageKeyFormatter
  */
  delimiter: ".",
  /**
  * Format a key for a message
  * @function format
  * @param {message} message The message to format
  * @memberof Augmented.Utility.MessageKeyFormatter
  * @returns The key to lookup in a bundle
  */
  format: function(message) {
    var key = "";
    if (message) {
      var x = message.level &&
      (key += message.level, message.kind &&
        (key += this.delimiter + message.kind, message.rule &&
          (key += this.delimiter + message.rule, message.values.title &&
            (key += this.delimiter + message.values.title))));
    }
    return (key) ? key : "";
  }
};
