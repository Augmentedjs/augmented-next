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

/**
* Paginated Collection Class - A Collection that handles pagination from client or server-side
* @constructor Augmented.PaginatedCollection
* @memberof Augmented
* @extends Augmented.Collection
*/
var paginatedCollection = Augmented.PaginatedCollection = augmentedCollection.extend({
  /**
  * Configuration for the pagination
  * @property paginationConfiguration
  * @memberof Augmented.PaginatedCollection
  * @private
  */
  paginationConfiguration: {
    currentPageParam: "page",
    pageSizeParam: "per_page"
  },
  /**
  * Page Size for the collection
  * @property pageSize
  * @memberof Augmented.PaginatedCollection
  * @private
  */
  pageSize: 20,
  /**
  * Current page for the collection
  * @property currentPage
  * @memberof Augmented.PaginatedCollection
  */
  currentPage: 1,
  /**
  * Total pages for the collection
  * @property totalPages
  * @memberof Augmented.PaginatedCollection
  */
  totalPages: 1,
  /**
  * Sets the number of items in a page
  * @method setPageSize
  * @memberof Augmented.PaginatedCollection
  * @param {number} size Number of items in each page
  */
  setPageSize: function(size) {
    if (size) {
      this.pageSize = size;
    }
    this.refresh();
  },
  /**
  * Sets the current page
  * @method setCurrentPage
  * @memberof Augmented.PaginatedCollection
  * @param {number} page Current page in collection
  */
  setCurrentPage: function(page) {
    if (!page) {
      page = 1;
    }
    this.currentPage = page;
    this.refresh();
  },
  /**
  * Sets pagination configuration
  * @method setPaginationConfiguration
  * @memberof Augmented.PaginatedCollection
  * @param {object} config pagination configuration
  * @private
  */
  setPaginationConfiguration: function(config) {
    this.paginationConfiguration = config;
  },
  /**
  * Collection.fetch - rewritten fetch method from Backbone.Collection.fetch
  * @method fetch
  * @memberof Augmented.PaginatedCollection
  * @borrows Collection.fetch
  */
  fetch: function(options) {
    options = (options) ? options : {};
    var data = (options.data || {});
    var p = this.paginationConfiguration;
    var d = {};
    d[p.currentPageParam] = this.currentPage;
    d[p.pageSizeParam] = this.pageSize;

    options.data = d;

    var xhr = Augmented.Collection.prototype.fetch.call(this, options);

    // TODO: parse header links to sync up vars

    return xhr;
  },
  /**
  * Moves to the next page
  * @method nextPage
  * @memberof Augmented.PaginatedCollection
  */
  nextPage: function() {
    if (this.currentPage < this.totalPages) {
      this.currentPage = this.currentPage + 1;
      this.refresh();
    }
  },
  /**
  * Moves to the previous page
  * @method previousPage
  * @memberof Augmented.PaginatedCollection
  */
  previousPage: function() {
    if (this.currentPage > 0) {
      this.currentPage = this.currentPage - 1;
      this.refresh();
    }
  },
  /**
  * Goes to page
  * @method goToPage
  * @memberof Augmented.PaginatedCollection
  * @param {number} page Page to go to
  */
  goToPage: function(page) {
    if ((page) && (page < this.totalPages) && (page > 0)) {
      this.currentPage = page;
      this.refresh();
    }
  },
  /**
  * Moves to the first page
  * @method firstPage
  * @memberof Augmented.PaginatedCollection
  */
  firstPage: function() {
    this.currentPage = 1;
    this.refresh();
  },
  /**
  * Moves to the last page
  * @method lastPage
  * @memberof Augmented.PaginatedCollection
  */
  lastPage: function() {
    this.currentPage = this.totalPages;
    this.refresh();
  },
  /**
  * Refreshes the collection
  * @method refresh
  * @memberof Augmented.PaginatedCollection
  */
  refresh: function() {
    this.fetch();
  }
});

/**
* Types of pagination API
* @enum
* @name Augmented.PaginationFactory.type
* @memberof Augmented.PaginationFactory
* @property {string} github GitHub API
* @property {string} solr SOLR API
* @property {string} database Database-like API
*/
var paginationAPIType = {
  github: "github",
  solr: "solr",
  database: "database"
};

/**
* Pagination factory for returning pagination collections of an API type
* @namespace Augmented.PaginationFactory
* @memberof Augmented
*/
Augmented.PaginationFactory = {
  type: paginationAPIType,
  /**
  * Get a pagination collection of type
  * @method getPaginatedCollection
  * @memberof Augmented.PaginationFactory
  * @param {Augmented.PaginationFactory.type} apiType The API type to return an instance of
  * @param {object} args Collection arguments
  */
  getPaginatedCollection: function(apiType, data) {
    var arg = (data) ? data : {};
    var collection = null;

    if (!apiType) {
      apiType = paginationAPIType.github;
    }
    if (apiType === paginationAPIType.github) {
      collection = new paginatedCollection(arg);
      collection.setPaginationConfiguration({
        currentPageParam: "page",
        pageSizeParam: "per_page"
      });
    } else if (apiType === paginationAPIType.solr) {
      collection = new paginatedCollection(arg);
      collection.setPaginationConfiguration({
        currentPageParam: "start",
        pageSizeParam: "rows"
      });
    } else if (apiType === paginationAPIType.database) {
      collection = new paginatedCollection(arg);
      collection.setPaginationConfiguration({
        currentPageParam: "offset",
        pageSizeParam: "limit"
      });
    }
    return collection;
  }
};
