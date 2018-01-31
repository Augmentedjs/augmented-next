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
 * @class Augmented.Application
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
    this._metadata = {};
    // preassign a name
    if (name) {
      this._metadata["name"] = name;
    } else {
      this._metadata["name"] = "untitled";
    }

    // preset a datastore object
    this._metadata["datastore"] = {};
    this._router = null;
    this._started = false;
  };

  /**
   * The router property of the application
   * @property router
   * @memberof Application
   */

  get router() {
    return this._router;
  };

  set router(router) {
    this._router = router;
  };

  /**
   * The started property of the application
   * @property started
   * @memberof Application
   * @returns {boolean} Returns the property of the started Event
   */

  get started() {
    return this._started;
  };

  /** Event for after during startup of the application
   * @method initialize
   * @memberof Application
   */
  initialize() {
    return true;
  };

  /** Event for before the startup of the application
   * @method beforeInitialize
   * @memberof Application
   */
  beforeInitialize() {
    return true;
  };

  /** Event for after the startup of the application
   * @method afterInitialize
   * @memberof Application
   */
  afterInitialize() {
    return true;
  };

  /** The application name
   * @property name
   * @memberof Application
   */
  get name() {
    return this.getMetadataItem("name");
  };

  set name(n) {
    return this.setMetadataItem("name", n);
  };

  /** The metadata map
  * @property metadata
  * @memberof Application
  * @returns Map of metadata in an Augmented.Utility.Map
  */
  get metadata() {
    return this._metadata;
  };

  /** Set a specific item in metadata
   * @method setMetadataItem
   * @param {string} key Key to set
   * @param {object} value Value of the key
   * @memberof Application
   */
  setMetadataItem(key, value) {
    this._metadata[key] = value;
  };

  /** Get a specific item in metadata
   * @method getMetadataItem
   * @param {string} key Key
   * @returns {object} value of the key
   * @memberof Application
   */
  getMetadataItem(key) {
    return this._metadata[key];
  };

  /** Register a Router - adds routes to the application
   * @method registerRouter
   * @param {Router} router Router to register
   * @memberof Application
   */
  registerRouter(router) {
    if (router){
      this._router = router;
    }
  };

  /** Event to start the application and history
   * @method start
   * @returns {Promise} Promise.Resolve or Promise.Reject based on success
   * @memberof Application
   */
   start() {
     const app = this;
     return new Promise( (resolve, reject) => {
       before(app)
       .then(init)
       .then(after)
       .then(setStarted)
       .then(check)
       .then( (app) => {
         resolve(app);
       })
       .catch( (e) => {
         app.stop();
         reject(e);
       });
     });
   };

  /** Event to stop the application and history
   * @method stop
   * @memberof Application
   */
  stop() {
    this._started = false;
  };

  /** Gets the datastore for the application
   * @property {Augmented.Model|object}datastore
   * @memberof Application
   */
  get datastore() {
    return this.getMetadataItem("datastore");
  };

  set datastore(ds) {
    if (ds) {
      this.setMetadataItem("datastore", ds);
    }
  };
};

export default Application;
