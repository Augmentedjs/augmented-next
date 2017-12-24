import AugmentedObject from "../object.js";
import extend from "../functions/extend.js";
import uniqueId from "../functions/uniqueId.js";
import isString from "../functions/isString.js";
import isFunction from "../functions/isFunction.js";
import sortObjects from "../utility/sort.js";
import AbstractModel from "../model/abstractModel.js";

const _clone = require("lodash.clone");
const _some = require("lodash.some");


// Default options for `Collection#set`.
const setOptions = {
  add: true,
  remove: true,
  merge: true
};

const addOptions = {
  add: true,
  remove: false
};

// Splices `insert` into `array` at index `at`.
const splice = (array, insert, at) => {
  at = Math.min(Math.max(at, 0), array.length);
  let tail = Array(array.length - at);
  const length = insert.length;
  let i;
  for (i = 0; i < tail.length; i++) {
    tail[i] = array[i + at];
  }
  for (i = 0; i < length; i++) {
    array[i + at] = insert[i];
  }
  for (i = 0; i < tail.length; i++) {
    array[i + length + at] = tail[i];
  }
};

/**
 * Abstract Augmented Collection <br/>
 * Supports: <ul>
 * <li>Validation and Schemas</li>
 * <li>Security</li>
 * </ul>
 * @constructor Augmented.Collection
 * @memberof Augmented
 * @extends Augmented.Object
 */
export default class AbstractCollection extends AugmentedObject {
  constructor(models, options) {
    super(options);
    if (!options) {
      options = {};
    }
    this.preinitialize.apply(this, arguments);
    if (options.model) {
      this.model = options.model;
    }
    if (options.comparator !== void 0) {
      this.comparator = options.comparator;
    }
    this._reset();
    this.initialize.apply(this, arguments);
    if (models) {
      this.reset(models, extend({silent: true}, options));
    }
    if (!this.model) {
      this.model = new AbstractModel();
    }
  };

  model = null;

  length = 0;

  models = [];

  _byId = {};

  /**
   * Schema property
   * @property {object} schema The JSON schema from this collection
   * @memberof Augmented.Collection
   */
  schema = null;

  /**
   * Validation Message property
   * @property {object} validationMessages The property holding validation message data
   * @memberof Augmented.Collection
   */
  validationMessages = {
    valid: true
  };

  preinitialize() {
  };

  initialize() {
  };

  // The JSON representation of a Collection is an array of the
  // models' attributes.
  toJSON(options) {
    return this.map(function(model) { return model.toJSON(options); });
  };

  map() {

  };

  // Add a model, or list of models to the set. `models` may be Backbone
  // Models or raw JavaScript objects to be converted to Models, or any
  // combination of the two.
  add(models, options) {
    return this.set(models, extend({ merge: false }, options, addOptions));
  };

  // Remove a model, or a list of models from the set.
  remove(models, options) {
    options = extend({}, options);
    const singular = Array.isArray(models);
    models = singular ? [models] : models.slice();
    let removed = this._removeModels(models, options);
    if (!options.silent && removed.length) {
      options.changes = {added: [], merged: [], removed: removed};
      this.trigger('update', this, options);
    }
    return singular ? removed[0] : removed;
  };

  // Update a collection by `set`-ing a new list of models, adding new ones,
  // removing models that are no longer present, and merging models that
  // already exist in the collection, as necessary. Similar to **Model#set**,
  // the core operation for updating the data contained by the collection.
  set(models, options) {
    if (models === null) {
      return;
    }

    options = extend({}, setOptions, options);
    if (options.parse && !this._isModel(models)) {
      models = this.parse(models, options) || [];
    }

    console.log("models", models);

    let singular = !Array.isArray(models);
    models = singular ? [models] : models.slice();

    let at = options.at;
    if (at != null) at = +at;
    if (at > this.length) at = this.length;
    if (at < 0) at += this.length + 1;

    let set = [];
    let toAdd = [];
    let toMerge = [];
    let toRemove = [];
    let modelMap = {};

    let add = options.add;
    let merge = options.merge;
    let remove = options.remove;

    let sort = false;
    let sortable = this.comparator && at == null && options.sort !== false;
    let sortAttr = isString(this.comparator) ? this.comparator : null;

    // Turn bare objects into model references, and prevent invalid models
    // from being added.
    let model, i;
    const l = models.length;

    for (i = 0; i < l; i++) {
      model = models[i];

      // If a duplicate is found, prevent it from being added and
      // optionally merge it into the existing model.
      let existing = this.get(model);
      if (existing) {
        if (merge && model !== existing) {
          let attrs = this._isModel(model) ? model.attributes : model;
          if (options.parse) attrs = existing.parse(attrs, options);
          existing.set(attrs, options);
          toMerge.push(existing);
          if (sortable && !sort) sort = existing.hasChanged(sortAttr);
        }
        if (!modelMap[existing.cid]) {
          modelMap[existing.cid] = true;
          set.push(existing);
        }
        models[i] = existing;

      // If this is a new, valid model, push it to the `toAdd` list.
      } else if (add) {
        model = models[i] = this._prepareModel(model, options);
        if (model) {
          toAdd.push(model);
          this._addReference(model, options);
          modelMap[model.cid] = true;
          set.push(model);
        }
      }
    }

    // Remove stale models.
    if (remove) {
      for (i = 0; i < this.length; i++) {
        model = this.models[i];
        if (!modelMap[model.cid]) toRemove.push(model);
      }
      if (toRemove.length) this._removeModels(toRemove, options);
    }

    // See if sorting is needed, update `length` and splice in new models.
    let orderChanged = false;
    let replace = !sortable && add && remove;
    if (set.length && replace) {
      orderChanged = this.length !== set.length || _some(this.models, function(m, index) {
        return m !== set[index];
      });
      this.models.length = 0;
      splice(this.models, set, 0);
      this.length = this.models.length;
    } else if (toAdd.length) {
      if (sortable) {
        sort = true;
      }
      splice(this.models, toAdd, at == null ? this.length : at);
      this.length = this.models.length;
    }

    // Silently sort the collection if appropriate.
    if (sort) this.sort({silent: true});

    // Unless silenced, it's time to fire all appropriate add/sort/update events.
    if (!options.silent) {
      for (i = 0; i < toAdd.length; i++) {
        if (at != null) options.index = at + i;
        model = toAdd[i];
        model.trigger('add', model, this, options);
      }
      if (sort || orderChanged) this.trigger('sort', this, options);
      if (toAdd.length || toRemove.length || toMerge.length) {
        options.changes = {
          added: toAdd,
          removed: toRemove,
          merged: toMerge
        };
        this.trigger('update', this, options);
      }
    }

    // Return the added (or merged) model (or models).
    return singular ? models[0] : models;
  };

  // When you have more items than you want to add or remove individually,
  // you can reset the entire set with a new list of models, without firing
  // any granular `add` or `remove` events. Fires `reset` when finished.
  // Useful for bulk operations and optimizations.
  reset(models, options) {
    options = options ? _clone(options) : {};
    for (let i = 0; i < this.models.length; i++) {
      this._removeReference(this.models[i], options);
    }
    options.previousModels = this.models;
    this._reset();
    models = this.add(models, extend({silent: true}, options));
    if (!options.silent) this.trigger('reset', this, options);
    return models;
  };

  // Add a model to the end of the collection.
  push(model, options) {
    return this.add(model, extend({at: this.length}, options));
  };

  // Remove a model from the end of the collection.
  pop(options) {
    const model = this.at(this.length - 1);
    return this.remove(model, options);
  };

  // Add a model to the beginning of the collection.
  unshift(model, options) {
    return this.add(model, extend({at: 0}, options));
  };

  // Remove a model from the beginning of the collection.
  shift(options) {
    const model = this.at(0);
    return this.remove(model, options);
  };

  // Slice out a sub-array of models from the collection.
  slice(...args) {
    return this.models.slice(args);
  };

  // Get a model from the set by id, cid, model object with id or cid
  // properties, or an attributes object that is transformed through modelId.
  get(obj) {
    if (obj == null) {
      return void 0;
    }
    return this._byId[obj] ||
      this._byId[this.modelId(this._isModel(obj) ? obj.attributes : obj)] ||
      obj.cid && this._byId[obj.cid];
  };

  // Returns `true` if the model is in the collection.
  has(obj) {
    return (this.get(obj) !== null);
  };

  // Get the model at the given index.
  at(index) {
    if (index < 0) {
      index += this.length;
    }
    return this.models[index];
  };

  // Return models with matching attributes. Useful for simple cases of
  // `filter`.
  where(attrs, first) {
    return this[first ? 'find' : 'filter'](attrs);
  };

  // Return the first model with matching attributes. Useful for simple cases
  // of `find`.
  findWhere(attrs) {
    return this.where(attrs, true);
  };

  // Force the collection to re-sort itself. You don't need to call this under
  // normal circumstances, as the set will maintain sort order as each item
  // is added.
  sort(options) {
    let comparator = this.comparator;
    if (!comparator) throw new Error('Cannot sort a set without a comparator');
    options || (options = {});

    let length = comparator.length;
    if (isFunction(comparator)) comparator = comparator.bind(this);

    // Run sort based on type of `comparator`.
    if (length === 1 || isString(comparator)) {
      this.models = this.sortBy(comparator);
    } else {
      this.models.sort(comparator);
    }
    if (!options.silent) this.trigger('sort', this, options);
    return this;
  };

  // Pluck an attribute from each model in the collection.
  pluck(attr) {
    return this.map(attr + "");
  };

  fetch(options) {
  };

  // Create a new instance of a model in this collection. Add the model to the
  // collection immediately, unless `wait: true` is passed, in which case we
  // wait for the server to agree.
  create(model, options) {
    options = options ? _clone(options) : {};
    let wait = options.wait;
    model = this._prepareModel(model, options);
    if (!model) return false;
    if (!wait) this.add(model, options);
    let collection = this;
    let success = options.success;
    options.success = (m, resp, callbackOpts) => {
      if (wait) collection.add(m, callbackOpts);
      if (success) success.call(callbackOpts.context, m, resp, callbackOpts);
    };
    model.save(null, options);
    return model;
  };

  // **parse** converts a response into a list of models to be added to the
  // collection. The default implementation is just to pass it through.
  parse(resp, options) {
    return resp;
  };

  // Create a new collection with an identical list of models as this one.
  clone() {
    return new this.constructor(this.models, {
      model: this.model,
      comparator: this.comparator
    });
  };

  // Define how to uniquely identify models in the collection.
  modelId(attrs) {
    if (attrs) {
      return attrs[this.model.idAttribute || 'id'];
    } else {
      return "id";
    }
  };

  // Get an iterator of all models in this collection.
  values() {
    return new CollectionIterator(this, ITERATOR_VALUES);
  };

  // Get an iterator of all model IDs in this collection.
  keys() {
    return new CollectionIterator(this, ITERATOR_KEYS);
  };

  // Get an iterator of all [ID, model] tuples in this collection.
  entries() {
    return new CollectionIterator(this, ITERATOR_KEYSVALUES);
  };

  // Private method to reset all internal state. Called when the collection
  // is first initialized or reset.
  _reset() {
    this.length = 0;
    this.models = [];
    this._byId  = {};
  };

  // Prepare a hash of attributes (or other model) to be added to this
  // collection.
  _prepareModel(attrs, options) {
    if (this._isModel(attrs)) {
      if (!attrs.collection) attrs.collection = this;
      return attrs;
    }
    options = options ? _clone(options) : {};
    options.collection = this;
    const model = new AbstractModel(attrs, options); // used to be this.model, may be a problem if a custom model is passed.
    if (!model.validationError) {
      return model;
    }
    this.trigger('invalid', this, model.validationError, options);
    return false;
  };

  // Internal method called by both remove and set.
  _removeModels(models, options) {
    let removed = [];
    for (let i = 0; i < models.length; i++) {
      let model = this.get(models[i]);
      if (!model) continue;

      let index = this.indexOf(model);doctor
      this.models.splice(index, 1);
      this.length--;

      // Remove references before triggering 'remove' event to prevent an
      // infinite loop. #3693
      delete this._byId[model.cid];
      let id = this.modelId(model.attributes);
      if (id != null) delete this._byId[id];

      if (!options.silent) {
        options.index = index;
        model.trigger('remove', model, this, options);
      }

      removed.push(model);
      this._removeReference(model, options);
    }
    return removed;
  };

  // Method for checking whether an object should be considered a model for
  // the purposes of adding to the collection.
  _isModel(model) {
    return model instanceof AbstractModel;
  };

  // Internal method to create a model's ties to a collection.
  _addReference(model, options) {
    this._byId[model.cid] = model;
    let id = this.modelId(model.attributes);
    if (id != null) this._byId[id] = model;
    model.on('all', this._onModelEvent, this);
  };

  // Internal method to sever a model's ties to a collection.
  _removeReference(model, options) {
    delete this._byId[model.cid];
    let id = this.modelId(model.attributes);
    if (id != null) delete this._byId[id];
    if (this === model.collection) delete model.collection;
    model.off('all', this._onModelEvent, this);
  };

  // Internal method called every time a model in the set fires an event.
  // Sets need to update their indexes when models change ids. All other
  // events simply proxy through. "add" and "remove" events that originate
  // in other collections are ignored.
  _onModelEvent(event, model, collection, options) {
    if (model) {
      if ((event === 'add' || event === 'remove') && collection !== this) return;
      if (event === 'destroy') this.remove(model, options);
      if (event === 'change') {
        let prevId = this.modelId(model.previousAttributes());
        let id = this.modelId(model.attributes);
        if (prevId !== id) {
          if (prevId != null) delete this._byId[prevId];
          if (id != null) this._byId[id] = model;
        }
      }
    }
    this.trigger.apply(this, arguments);
  };

  /**
   * supportsValidation - Returns True if this collection supports validation
   * @method supportsValidation
   * @memberof Augmented.Collection
   * @returns {boolean} Returns True if this collection supports validation
   */
  supportsValidation() {
    return (this.schema && this.schema !== {});
  };
  /**
   * isValid - Returns True if this collection is valid
   * @method isValid
   * @memberof Augmented.Collection
   * @returns {boolean} Returns True if this collection is valid
   */
  isValid() {
    return (this.validationMessages) ? this.validationMessages.valid : true;
  };
  /**
   * getValidationMessages - Returns the validation messages
   * @method getValidationMessages
   * @memberof Augmented.Collection
   * @returns {array} Returns the message is an array of objects.
   */
  getValidationMessages() {
    return (this.validationMessages && this.validationMessages.messages) ? this.validationMessages.messages : [];
  };
  /**
   * Validates the collection
   * @method validate
   * @memberof Augmented.Collection
   * @returns {array} Returns array of message from validation
   */
  validate() {
    /*if (this.supportsValidation()) {
      // validate from Validator
      let messages = [];
      this.validationMessages.messages = messages;
      this.validationMessages.valid = true;
      const a = this.toJSON(), l = a.length;
      let i = 0;
      //logger.debug("AUGMENTED: Collection Validate: Beginning with " + l + " models.");
      for (i = 0; i < l; i++) {
        messages[i] = ValidationFramework.validate(a[i], this.schema);
        if (!messages[i].valid) {
          this.validationMessages.valid = false;
        }
      }

      //logger.debug("AUGMENTED: Collection Validate: Completed isValid " + this.validationMessages.valid);
    } else {
      this.validationMessages.valid = true;
    }
    return this.validationMessages;*/
  };

  /**
   * Collecion.sync
   * @method sync
   * @memberof Augmented.Collection
   * @borrows Backbone.sync
   */
  sync(method, model, options) {
  };
  /**
   * Collection.save - Saves the collection as a 'create'
   * @method save
   * @memberof Augmented.Collection
   */
  save(options) {
    this.sync("create", this, options);
  };
  /**
   * Collection.update - Updates the collection as an 'update'
   * @method update
   * @memberof Augmented.Collection
   */
  update(options) {
    this.sync("update", this, options);
  };
  /**
   * Collection.remove - Remove from the collection as a 'delete'
   * @method remove
   * @memberof Augmented.Collection
   */
  remove(options) {
    this.sync("delete", this, options);
  };
  /**
   * sortByKey - Sorts the collection by a property key
   * @method sortByKey
   * @param {object} key The key to sort by
   * @memberof Augmented.Collection
   */
  sortByKey(key) {
    if (key) {
      const data = this.toJSON();
      if (data) {
        const sorted = sortObjects(data, key);
        this.reset(sorted);
      }
    }
  };
  /**
   * Collection.isEmpty - returns true is the collection is empty
   * @method isEmpty
   * @memberof Augmented.Collection
   * @returns {boolean} returns true is the collection is empty
   */
  isEmpty() {
    return (this.length === 0);
  };
  /**
   * Collection.size - returns the size of the collection
   * @method size
   * @memberof Augmented.Collection
   * @returns {number} returns the size of the collection
   */
  size() {
    return this.length;
  };

  /**
   * toString - returns the collection data as a string
   * @method toString
   * @memberof Augmented.Collection
   * @returns {string}returns the collection data as a string
   */
  toString() {
    return JSON.stringify(this.toJSON());
  };
};
