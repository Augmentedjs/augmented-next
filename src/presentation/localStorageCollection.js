/**
* Augmented.LocalStorageCollection
* A local storage-based Collection
* @constructor Augmented.LocalStorageCollection
* @memberof Augmented
* @extends Augmented.Collection
*/
Augmented.LocalStorageCollection = Augmented.Collection.extend({
  /**
  * Base key name for the collection (simular to url for rest-based)
  * @property {string} key The key
  * @memberof Augmented.LocalStorageCollection
  */
  key: "augmented.localstorage.collection.key",
  /**
  * is Persistant or not
  * @property {boolean} isPersisted Persistant property
  * @memberof Augmented.LocalStorageCollection
  */
  persist: false,
  /**
  * Storage for the collection
  * @property {string} storage The storage used for the collection
  * @memberof Augmented.LocalStorageCollection
  * @private
  */
  storage: null,
  url: null,
  /**
  * @method initialize Initialize the model with needed wireing
  * @param {object} options Any options to pass
  * @memberof Augmented.LocalStorageCollection
  */
  initialize: function(options) {
    if (options && options.persist) {
      this.persist = options.persist;
    }
    if (options && options.key) {
      this.key = options.key;
    }
    this.storage = Augmented.LocalStorageFactory.getStorage(this.persist,"augmented.localstorage.collection");
    this.init(options);
  },
  /**
  * @method init Custom init method for the model (called at inititlize)
  * @param {object} options Any options to pass
  * @memberof Augmented.LocalStorageCollection
  */
  init: function(options) {},
  /**
  * @method fetch Fetch the collection
  * @param {object} options Any options to pass
  * @memberof Augmented.LocalStorageCollection
  */
  fetch: function(options) {
    this.sync('read', this, options);
  },
  /**
  * @method save Save the collection
  * @param {object} options Any options to pass
  * @memberof Augmented.LocalStorageCollection
  */
  save: function(options) {
    this.sync('create', this, options);
  },
  /**
  * @method update Update the collection
  * @param {object} options Any options to pass
  * @memberof LocalStorageCollection
  */
  update: function(options) {
    this.sync('update', this, options);
  },
  /**
  * @method destroy Destroy the collection
  * @param {object} options Any options to pass
  * @memberof Augmented.LocalStorageCollection
  */
  destroy: function(options) {
    this.sync('delete', this, options);
  },
  sync: function(method, model, options) {
    if (!options) {
      options = {};
    }
    var s = "", j = {};
    if (method === "create" || method === "update") {
      j = this.toJSON();
      this.storage.setItem(this.key, j);
    } else if (method === "delete") {
      this.storage.removeItem(this.key);
    } else {
      // read
      j = this.storage.getItem(this.key);
      //j = JSON.parse(s);
      this.reset(j);
    }

    return {};
  }
});
