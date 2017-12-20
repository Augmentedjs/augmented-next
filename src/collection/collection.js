/**
* Abstract Augmented Collection <br/>
* Supports: <ul>
* <li>REST</li>
* <li>Validation and Schemas</li>
* <li>CORS</li>
* <li>Security</li>
* </ul>
* @constructor Augmented.Collection
* @memberof Augmented
* @extends Augmented.Object
*/
const augmentedCollection = Backbone.Collection.extend({
  /**
  * Schema property
  * @property {object} schema The JSON schema from this collection
  * @memberof Augmented.Collection
  */
  schema: null,
  /**
  * mock property
  * @property {boolean} mock Sets mock mode in the model
  * @memberof Augmented.Collection
  */
  mock: false,
  /**
  * Validation Message property
  * @property {object} validationMessages The property holding validation message data
  * @memberof Augmented.Collection
  */
  validationMessages: {
    valid: true
  },
  /**
  * supportsValidation - Returns True if this collection supports validation
  * @method supportsValidation
  * @memberof Augmented.Collection
  * @returns {boolean} Returns True if this collection supports validation
  */
  supportsValidation: function() {
    return (this.schema && this.schema !== {});
  },
  /**
  * isValid - Returns True if this collection is valid
  * @method isValid
  * @memberof Augmented.Collection
  * @returns {boolean} Returns True if this collection is valid
  */
  isValid: function() {
    return (this.validationMessages) ? this.validationMessages.valid : true;
  },
  /**
  * getValidationMessages - Returns the validation messages
  * @method getValidationMessages
  * @memberof Augmented.Collection
  * @returns {array} Returns the message is an array of objects.
  */
  getValidationMessages: function() {
    return (this.validationMessages && this.validationMessages.messages) ? this.validationMessages.messages : [];
  },
  /**
  * Validates the collection
  * @method validate
  * @memberof Augmented.Collection
  * @returns {array} Returns array of message from validation
  */
  validate: function() {
    if (this.supportsValidation() && Augmented.ValidationFramework.supportsValidation()) {
      // validate from Validator
      var messages = [];
      this.validationMessages.messages = messages;
      this.validationMessages.valid = true;

      var a = this.toJSON(), i = 0, l = a.length;
      //logger.debug("AUGMENTED: Collection Validate: Beginning with " + l + " models.");
      for (i = 0; i < l; i++) {
        messages[i] = Augmented.ValidationFramework.validate(a[i], this.schema);
        if (!messages[i].valid) {
          this.validationMessages.valid = false;
        }
      }

      //logger.debug("AUGMENTED: Collection Validate: Completed isValid " + this.validationMessages.valid);
    } else {
      this.validationMessages.valid = true;
    }
    return this.validationMessages;
  },
  /**
  * Cross Origin property
  * @property {boolean} crossOrigin Cross Origin property
  * @memberof Augmented.Collection
  */
  crossOrigin: false,
  /**
  * Collecion.sync - rewritten sync method from Backbone.Collection.sync
  * @method sync
  * @memberof Augmented.Collection
  * @borrows Backbone.sync
  */
  sync: function(method, model, options) {
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

    return Augmented.sync(method, model, options);
  },
  /**
  * Collection.save - Saves the collection as a 'create'
  * @method save
  * @memberof Augmented.Collection
  */
  save: function (options) {
    this.sync("create", this, options);
  },
  /**
  * Collection.update - Updates the collection as an 'update'
  * @method update
  * @memberof Augmented.Collection
  */
  update: function(options) {
    this.sync("update", this, options);
  },
  /**
  * Collection.remove - Remove from the collection as a 'delete'
  * @method remove
  * @memberof Augmented.Collection
  */
  remove: function(options) {
    this.sync("delete", this, options);
  },
  /**
  * sortByKey - Sorts the collection by a property key
  * @method sortByKey
  * @param {object} key The key to sort by
  * @memberof Augmented.Collection
  */
  sortByKey: function(key) {
    if (key) {
      var data = this.toJSON();
      if (data) {
        var sorted = Augmented.Utility.Sort(data, key);
        this.reset(sorted);
      }
    }
  },
  /**
  * Collection.isEmpty - returns true is the collection is empty
  * @method isEmpty
  * @memberof Augmented.Collection
  * @returns {boolean} returns true is the collection is empty
  */
  isEmpty: function() {
    return (this.length === 0);
  },
  /**
  * Collection.size - returns the size of the collection
  * @method size
  * @memberof Augmented.Collection
  * @returns {number} returns the size of the collection
  */
  size: function() {
    return this.length;
  },
  /**
  * toString - returns the collection data as a string
  * @method toString
  * @memberof Augmented.Collection
  * @returns {string}returns the collection data as a string
  */
  toString: function() {
    return JSON.stringify(this.toJSON());
  }
});

// Extend Collection with Object base functions
Augmented.Utility.extend(augmentedCollection, Augmented.Object);
