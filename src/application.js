/**
* <p>Application Class for use to define an application.<br/>
* An application contains metadata and initializers for the application.<br/>
* <em>Applications track history, and normally would contain the entire single page App startup.</em></p>
* @constructor Augmented.Application
* @param {string} name Name of the application
* @memberof Augmented
* @example var app = new Augmented.Application("Awesome");
* app.start();
* @example var app = new Augmented.Application();
* app.setName("My Super Application!");
* app.setMetadataItem("description", "something very awesome");
* app.beforeInitialize() = function() { do some stuff... };
* app.start();
*/
Augmented.Application = function(name) {
  var _metadata, _routers = [];

  /**
  * The router property of the application
  * @property router
  * @memberof Augmented.Application
  */
  this.router = null;

  /**
  * The started property of the application
  * @property started
  * @memberof Augmented.Application
  * @returns {boolean} Returns the property of the started Event
  */
  this.started = false;

  if (!_metadata) {
    _metadata = new Augmented.Utility.Map();
  } else {
    _metadata.clear();
  }

  // preassign a name
  if (name) {
    _metadata.set("name", name);
  } else {
    _metadata.set("name", "untitled");
  }

  // preset a datastore object
  _metadata.set("datastore", {});

  /** Event for after during startup of the application
  * @method initialize
  * @memberof Augmented.Application
  */
  this.initialize = function() {
  };

  /** Event for before the startup of the application
  * @method beforeInitialize
  * @memberof Augmented.Application
  */
  this.beforeInitialize = function() {
  };

  /** Event for after the startup of the application
  * @method afterInitialize
  * @memberof Augmented.Application
  */
  this.afterInitialize = function() {
  };

  /** Get the application name
  * @method getName
  * @memberof Augmented.Application
  */
  this.getName = function() {
    return this.getMetadataItem("name");
  };

  /** Set the application name
  * @method setName
  * @memberof Augmented.Application
  */
  this.setName = function(n) {
    return this.setMetadataItem("name", n);
  };

  /** Get the metadata map
  * @method getMetadata
  * @memberof Augmented.Application
  * @returns Map of metadata in an Augmented.Utility.Map
  */
  this.getMetadata = function() {
    return _metadata;
  };

  /** Set a specific item in metadata
  * @method setMetadataItem
  * @memberof Augmented.Application
  */
  this.setMetadataItem = function(key, value) {
    _metadata.set(key, value);
  };

  /** Get a specific item in metadata
  * @method getMetadataItem
  * @memberof Augmented.Application
  */
  this.getMetadataItem = function(key) {
    return _metadata.get(key);
  };

  /** Register a Router - adds routes to the application
  * @method registerRouter
  * @memberof Augmented.Application
  */
  this.registerRouter = function(router) {
    if (router){
      this.router = router;
    }
  };

  /** Event to start the application and history
  * @method start
  * @memberof Augmented.Application
  */
  this.start = function() {
    var asyncQueue = new Augmented.Utility.AsynchronousQueue(Augmented.Configuration.ApplicationInitProcessTimeout);
    var startCheck = function() {
      if (!Augmented.History.started) {
        Augmented.history.start();
      }
    };
    this.started = asyncQueue.process(
      this.beforeInitialize(),
      this.initialize(),
      this.afterInitialize(),
      startCheck()
    );
    if (!this.started) {
      this.stop();
    }
  };

  /** Event to stop the application and history
  * @method stop
  * @memberof Augmented.Application
  */
  this.stop = function() {
    if (Augmented.History.started) {
      Augmented.history.stop();
    }
    this.started = false;
  };

  /** creates a custom datastore based on a model
  * @method createDatastore
  * @param {Augmented.Model|object} model A custom Model
  * @memberof Augmented.Application
  */
  this.createDatastore = function(model) {
    if (model) {
      this.setMetadataItem("datastore", new model());
    }
  };

  /** Gets the datastore for the application
  * @method getDatastore
  * @returns {Augmented.Model|object} the datastore
  * @memberof Augmented.Application
  */
  this.getDatastore = function() {
    return this.getMetadataItem("datastore");
  }

  /** Sets a datastore
  * @method setDatastore
  * @param {object} model A datastore
  * @memberof Augmented.Application
  */
  this.setDatastore = function(ds) {
    if (ds) {
      this.setMetadataItem("datastore", ds);
    }
  };

};
Augmented.Application.prototype.constructor = Augmented.Application;
