const before = (app) => {
  return new Promise( (resolve, reject) => {
    const t = app.beforeInitialize();
    if (t) {
      resolve(app);
    } else {
      reject(new Error("failed before initialize!"));
    }
  });
},
init = (app) => {
  return new Promise( (resolve, reject) => {
    const t = app.initialize();
    if (t) {
      resolve(app);
    } else {
      reject(new Error("failed initialize!"));
    }
  });
},
after = (app) => {
  return new Promise( (resolve, reject) => {
    const t = app.afterInitialize();
    if (t) {
      resolve(app);
    } else {
      reject(new Error("failed after initialize!"));
    }
  });
},
setStarted = (app) => {
  return new Promise( (resolve, reject) => {
    app._started = true;
    if (app.started) {
      resolve(app);
    } else {
      reject(new Error("failed setting started!"));
    }
  });
},
check = (app) => {
  return new Promise( (resolve, reject) => {
    const t = app.started;
    if (t) {
      resolve(app);
    } else {
      reject(new Error("failed starting!"));
    }
  });
};

/**
 * <p>Application Class for use to define an application.<br/>
 * An application contains metadata and initializers for the application.<br/>
 * <em>Applications track history, and normally would contain the entire single page App startup.</em></p>
 * @constructor Augmented.Application
 * @param {string} name Name of the application
 * @memberof Augmented
 * @example const app = new Augmented.Application("Awesome");
 * app.start();
 * @example const app = new Augmented.Application();
 * app.name = "My Super Application!";
 * app.setMetadataItem("description", "something very awesome");
 * app.beforeInitialize = () => { do some stuff... };
 * app.start();
 */
class Application {
  constructor(name) {
    // preassign a name
    if (name) {
      this._metadata["name"] = name;
    } else {
      this._metadata["name"] = "untitled";
    }

    // preset a datastore object
    this._metadata["datastore"] = {};
  };

  _metadata = {};

  /**
   * The router property of the application
   * @property router
   * @memberof Augmented.Application
   */
  _router = null;
  get router() {
    return this._router;
  };

  /**
   * The started property of the application
   * @property started
   * @memberof Augmented.Application
   * @returns {boolean} Returns the property of the started Event
   */
  _started = false;
  get started() {
    return this._started;
  };

  /** Event for after during startup of the application
   * @method initialize
   * @memberof Augmented.Application
   */
  initialize() {
    return true;
  };

  /** Event for before the startup of the application
   * @method beforeInitialize
   * @memberof Augmented.Application
   */
  beforeInitialize() {
    return true;
  };

  /** Event for after the startup of the application
   * @method afterInitialize
   * @memberof Augmented.Application
   */
  afterInitialize() {
    return true;
  };

  /** Get the application name
   * @method getName
   * @memberof Augmented.Application
   */
  get name() {
    return this.getMetadataItem("name");
  };

  /** Set the application name
   * @method setName
   * @memberof Augmented.Application
   */
  set name(n) {
    return this.setMetadataItem("name", n);
  };

  /** Get the metadata map
  * @method getMetadata
  * @memberof Augmented.Application
  * @returns Map of metadata in an Augmented.Utility.Map
  */
  get metadata() {
    return this._metadata;
  };

  /** Set a specific item in metadata
   * @method setMetadataItem
   * @memberof Augmented.Application
   */
  setMetadataItem(key, value) {
    this._metadata[key] = value;
  };

  /** Get a specific item in metadata
   * @method getMetadataItem
   * @memberof Augmented.Application
   */
  getMetadataItem(key) {
    return this._metadata[key];
  };

  /** Register a Router - adds routes to the application
   * @method registerRouter
   * @memberof Augmented.Application
   */
  registerRouter(router) {
    if (router){
      this._router = router;
    }
  };

  /** Event to start the application and history
   * @method start
   * @memberof Augmented.Application
   */
  start() {
    const app = this;
    before(app)
    .then(init)
    .then(after)
    .then(setStarted)
    .then(check)
    .catch( (e) => {
      app.stop();
      throw e;
    });
  };

  /** Event to stop the application and history
   * @method stop
   * @memberof Augmented.Application
   */
  stop() {
    this._started = false;
  };

  /** Gets the datastore for the application
   * @method getDatastore
   * @returns {Augmented.Model|object} the datastore
   * @memberof Augmented.Application
   */
  get datastore() {
    return this.getMetadataItem("datastore");
  }

  /** Sets a datastore
   * @method setDatastore
   * @param {object} model A datastore
   * @memberof Augmented.Application
   */
  set datastore(ds) {
    if (ds) {
      this.setMetadataItem("datastore", ds);
    }
  };
};

export default Application;
