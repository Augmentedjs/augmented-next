/**
* ES6-like Map, same as Map
* @constructor Augmented.Utility.AugmentedMap
* @param myData {object} Map data to fill map
* @memberof Augmented.Utility
* @deprecated
*/
Augmented.Utility.AugmentedMap =

/**
* ES6-like Map
* @constructor Augmented.Utility.Map
* @param myData {object} Map data to fill map
* @memberof Augmented.Utility
*/
Augmented.Utility.Map = function(myData) {
  this.keys = [];
  this.data = {};

  /**
  * Set the value by key in the map
  * @method set
  * @memberof Augmented.Utility.Map
  * @param key {string} name of the key
  * @param value {any} value for the key
  */
  this.set = function(key, value) {
    if (key !== null && value !== null) {
      if (!this.data[key]) {
        this.keys.push(key);
      }
      this.data[key] = value;
    }
  };

  /**
  * Get the value by key in the map
  * @method get
  * @memberof Augmented.Utility.Map
  * @param key {string} name of the key
  * @returns The value for the key
  */
  this.get = function(key) {
    return this.data[key];
  };

  /**
  * Index of the key in the map
  * @method indexOf
  * @memberof Augmented.Utility.Map
  * @param key {string} name of the key
  * @returns index of the key
  */
  this.indexOf = function(key) {
    return this.keys.indexOf(key);
  };

  /**
  * Remove the value by key in the map
  * @method remove
  * @memberof Augmented.Utility.Map
  * @param key {string} name of the key
  */
  this.remove = function(key) {
    var i = this.indexOf(key);
    this.keys.splice(i, 1);
    delete this.data[key];
  };

  /**
  * Has returns whether a key exists in the map
  * @method has
  * @memberof Augmented.Utility.Map
  * @param key {string} name of the key
  * @returns true if the key exists in the map
  */
  this.has = function(key) {
    return (this.indexOf(key) !== -1);
  };

  /**
  * Iterator forEach key to value in the map
  * @method forEach
  * @memberof Augmented.Utility.Map
  * @param fn {function} callback for the iterator
  */
  this.forEach = function(fn) {
    if (typeof fn !== 'function') {
      return;
    }
    var len = this.keys.length;
    var i = 0;
    var k;
    for (i = 0; i < len; i++) {
      k = this.keys[i];
      fn(k, this.data[k], i);
    }
  };

  /**
  * Get the key for the index in the map
  * @method key
  * @memberof Augmented.Utility.Map
  * @param i {number} index of the key
  * @returns the key at index
  */
  this.key = function(i) {
    return this.keys[i];
  };

  /**
  * The entries value object in the map
  * @method entries
  * @memberof Augmented.Utility.Map
  * @returns Array of entries value objects
  */
  this.entries = function() {
    var i = 0, len = this.keys.length;
    var entries = new Array(len);
    for (i = 0; i < len; i++) {
      entries[i] = {
        key : this.keys[i],
        value : this.data[i]
      };
    }
    return entries;
  };

  /**
  * The values in the map as an Array
  * @method values
  * @memberof Augmented.Utility.Map
  * @returns values as an Array
  */
  this.values = function() {
    var i = 0, len = this.keys.length, key;
    var values = new Array(len);

    for (i = 0; i < len; i++) {
      key = this.keys[i];
      values[i] = this.data[key];
    }
    return values;
  };

  /**
  * Clear the map
  * @method clear
  * @memberof Augmented.Utility.Map
  */
  this.clear = function() {
    this.keys = [];
    this.data = {};
  };

  /**
  * The size of the map in keys
  * @method size
  * @memberof Augmented.Utility.Map
  * @returns size of map by keys
  */
  this.size = function() {
    return this.keys.length;
  };

  /**
  * Represent the map in JSON
  * @method toJSON
  * @memberof Augmented.Utility.Map
  * @returns JSON of the map
  */
  this.toJSON = function() {
    return this.data;
  };

  /**
  * Represent the map in a String of JSON
  * @method toString
  * @memberof Augmented.Utility.Map
  * @returns Stringified JSON of the map
  */
  this.toString = function() {
    return JSON.stringify(this.data);
  };

  // non-es6 API

  /**
  * Checks of the map is empty (not ES6)
  * @method isEmpty
  * @memberof Augmented.Utility.Map
  * @returns true if the map is empty
  */
  this.isEmpty = function() {
    return this.keys.length === 0;
  };

  /**
  * Marshalls a map
  * @method marshall
  * @param {Augmented.Utility.Map} data Data to marsh as a map
  * @memberof Augmented.Utility.Map
  */
  this.marshall = function(dataToMarshall) {
    /* dataToMarshall must be the following type of data to parse:
    * Map
    * JSON object with properties (key/value)
    */
    var dataToParse;
    if (dataToMarshall && dataToMarshall instanceof Augmented.Utility.Map) {
      dataToParse = dataToMarshall.toJSON();
    } else if(dataToMarshall && dataToMarshall instanceof Object && (Object.keys(dataToMarshall).length > 0)) {
      dataToParse = dataToMarshall;
    } else if(dataToMarshall && Augmented.isString(dataToMarshall)) {
      try {
        dataToParse = JSON.parse(dataToMarshall);
      } catch(e) {
        logger.warn("AUGMENTED: AugmentedMap: Could not marshall data: " + JSON.stringify(dataToMarshall));
        return false;
      }
    } else {
      logger.warn("AUGMENTED: AugmentedMap: Could not marshall data: " + JSON.stringify(dataToMarshall));
      return false;
    }

    var props = Object.keys(dataToParse);
    var l = props.length;
    var i = 0;
    for (i = 0; i < l; i++) {
      var p = props[i];
      var v = dataToParse[p];
      //logger.debug("setting " + p + ", " + v);
      this.set(p, v);
    }
    return true;
  };

  if (myData) {
    return this.marshall(myData);
  }
};

/* local Storage */

/**
* Local Storage API - returned from LocalStorageFactory
* @constructor AbstractLocalStorage
* @name AbstractLocalStorage
* @memberof Augmented
* @param {boolean} persist Persistant storage or not
*/
var augmentedLocalStorage = function(persist) {
  /**
  * is Persistant or not
  * @property {boolean} isPersisted Persistant property
  * @memberof AbstractLocalStorage
  */
  this.isPersisted = persist;

  this.myStore = null;
  /**
  * Is storage supported
  * @method isSupported
  * @memberof AbstractLocalStorage
  * @returns {boolean} Returns true if supported
  */
  this.isSupported = function() {
    return (typeof (Storage) !== "undefined");
  };

  // true = localStorage, false = sessionStorage
  if (this.isSupported()) {
    //logger.debug("AUGMENTED: localStorage exists");

    if (this.isPersisted) {
      this.myStore = localStorage;
    } else {
      this.myStore = sessionStorage;
    }
  } else {
    logger.warn("AUGMENTED: No localStorage.");
  }

  /**
  * Gets an item from storage
  * @method getItem
  * @memberof AbstractLocalStorage
  * @param {string} key The key in storage
  * @returns {object} Returns object from storage
  */
  this.getItem = function(itemKey) {
    var item = this.myStore.getItem(itemKey);
    if (item) {
      return JSON.parse(item);
    }
    return null;
  };

  /**
  * Sets an item to storage
  * @method setItem
  * @memberof AbstractLocalStorage
  * @param {string} key The key in storage
  * @param {object} object The data to set
  */
  this.setItem = function(itemKey, object) {
    this.myStore.setItem(itemKey, JSON.stringify(object));
  };

  /**
  * Removes an item from storage
  * @method removeItem
  * @memberof AbstractLocalStorage
  * @param {string} key The key in storage
  */
  this.removeItem = function(itemKey) {
    this.myStore.removeItem(itemKey);
  };

  /**
  * Clears storage - <b>Warning: Destructive in non-namespaced instances!</b>
  * @method clear
  * @memberof AbstractLocalStorage
  */
  this.clear = function() {
    this.myStore.clear();
  };

  /**
  * Gets the key from storage for index
  * @method key
  * @memberof AbstractLocalStorage
  * @param {number} i The index in storage
  * @returns {string} Returns the key from storage
  */
  this.key = function(i) {
    return this.myStore.key(i);
  };

  /**
  * The length of storage by keys
  * @method length
  * @memberof AbstractLocalStorage
  * @returns {number} Returns the length of storage by keys
  */
  this.length = function() {
    return this.myStore.length;
  };
};

var namespacedAugmentedLocalStorage = function(persist,namespace) {
  var ls = Augmented.LocalStorageFactory.getStorage(persist);
  this.myNameSpacedStore = new Augmented.Utility.Map();
  this.namespace = namespace;

  // public
  this.isSupported = function() {
    return (ls && ls.isSupported());
  };

  this.getItem = function(itemKey) {
    var map = {};
    try {
      map = JSON.parse(ls.getItem(this.namespace));
    } catch(e) {
      // TODO: bundle this
      logger.error("AUGMENTED: Augmented Local Strorage could not parse item map from storage!");
      return null;
    }
    this.myNameSpacedStore.clear();
    this.myNameSpacedStore.marshall(map);

    var item = this.myNameSpacedStore.get(itemKey);

    if (item) {
      // support regular string as well as object
      var ret;
      try {
        ret = JSON.parse(item);
      } catch(e){
        // not JSON
        ret = item;
      }
      return ret;
    }
    return null;
  };

  this.setItem = function(itemKey, object) {
    if (!this.myNameSpacedStore) {
      this.myNameSpacedStore = new Augmented.Utility.Map();
    }
    this.myNameSpacedStore.set(itemKey, object);
    ls.setItem(namespace, JSON.stringify(this.myNameSpacedStore.toJSON()));
  };

  this.removeItem = function(itemKey) {
    var item = this.getItem(itemKey);

    this.myNameSpacedStore.remove(itemKey);
    ls.setItem(namespace, JSON.stringify(this.myNameSpacedStore.toJSON()));
  };

  this.clear = function() {
    this.myNameSpacedStore.clear();
    ls.setItem(namespace, JSON.stringify(this.myNameSpacedStore.toJSON()));
  };

  this.key = function(i) {
    return this.myNameSpacedStore.key(i);
  };

  this.length = function() {
    return this.myNameSpacedStore.size();
  };

  // true = localStorage, false = sessionStorage
  if (this.isSupported() && this.namespace && !persist) {
    ls.setItem(this.namespace, JSON.stringify(this.myNameSpacedStore.toJSON()));
  } else if (this.isSupported() && this.namespace && persist) {
    this.getItem(this.namespace);
  }

  /**
  * Gets the namespaced items as a Map
  * @method getNamespacedItems
  * @memberof NamespacedAugmentedLocalStorage
  * @returns {Augmented.Utility.Map} Returns the namespaced storage as Map
  */
  this.getNamespacedItems = function() {
    return this.myNameSpacedStore;
  }
};

/**
* Augmented.LocalStorageFactory
* Retrieve a local storage Object
* @namespace Augmented.LocalStorageFactory
* @name Augmented.LocalStorageFactory
* @memberof Augmented
*/
Augmented.LocalStorageFactory = {
  /**
  * @method getStorage Get the storage instance
  * @param {boolean} persist Persistance or not
  * @param {string} namespace The namespace of the storage if needed (optional)
  * @returns {Augmented.AbstractLocalStorage} Returns an instance of local storage
  * @memberof Augmented.LocalStorageFactory
  */
  getStorage: function(persist, namespace) {
    var ls = null;
    if (namespace) {
      ls = new namespacedAugmentedLocalStorage(persist,namespace);
    } else {
      ls = new augmentedLocalStorage(persist);
    }
    if (ls && ls.isSupported()) {
      return ls;
    }
    return null;
  }
};

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


/**
* Augmented.Utility.Stack -
* Standard Stack data structure
* @constructor Augmented.Utility.Stack
* @memberof Augmented.Utility
*/
Augmented.Utility.Stack = function() {
  this.stack = [];
  /**
  * The empty method clears the stack
  * @method empty
  * @memberof Augmented.Utility.Stack
  */
  this.empty = function() {
    return (this.stack.length === 0);
  };
  /**
  * The peek method returns the first in the stack
  * @method peek
  * @memberof Augmented.Utility.Stack
  * @returns {object} Returns the first object in the stack
  */
  this.peek = function() {
    return this.stack[0];
  };
  /**
  * The pop method returns and removes the first in the stack
  * @method pop
  * @memberof Augmented.Utility.Stack
  * @returns {object} Returns the first object in the stack
  */
  this.pop = function() {
    return this.stack.pop();
  };
  /**
  * The push method adds to the stack
  * @method push
  * @memberof Augmented.Utility.Stack
  * @param {object} item The item to push to the stack
  */
  this.push = function(item) {
    this.stack.push(item);
  };
  /**
  * The search method returns where in the stack an item exists
  * @method search
  * @memberof Augmented.Utility.Stack
  * @returns {number} Returns the index of the item
  */
  this.search = function(item) {
    return this.stack.indexOf(item);
  };
  /**
  * The size method returns the size of the stack
  * @method size
  * @memberof Augmented.Utility.Stack
  * @returns {number} Returns the size of the stack
  */
  this.size = function() {
    return this.stack.length;
  };
  /**
  * The clear method clears the stack
  * @method clear
  * @memberof Augmented.Utility.Stack
  */
  this.clear = function() {
    this.stack.splice(0, this.stack.length);
  };
  /**
  * The toArray method returns the stack as an array
  * @method toArray
  * @memberof Augmented.Utility.Stack
  * @returns {array} Returns the stack as an array
  */
  this.toArray = function() {
    return this.stack;
  };
};
