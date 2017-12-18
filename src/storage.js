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
