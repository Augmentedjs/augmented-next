/**
* Object of configuration properties and callbacks.  Pass this to the request call to setup configutation
* @constructor Augmented.Request.Configuration
* @name Augmented.Request.Configuration
* @memberof Augmented.Request
*/
export default class Configuration {
  constructor() {
  };

  /**
  * url property
  * @property {string} url the url
  * @memberof Augmented.Request.Configuration
  */
  url = "localhost";
  /**
  * contentType property
  * @property {string} contentType the content type (default is text/plain)
  * @memberof Augmented.Request.Configuration
  */
  contentType = "text/plain";
  /**
  * dataType property
  * @property {string} dataType the data type (default is text)
  * @memberof Augmented.Request.Configuration
  */
  dataType = "text";
  /**
  * async property - no longer supported
  * @property {boolean} async set async (default true)
  * @memberof Augmented.Request.Configuration
  */
  //async = true;
  /**
  * method property
  * @property {string} method the ajax method (default GET)
  * @memberof Augmented.Request.Configuration
  */
  method = "GET";
  /**
  * cache property
  * @property {boolean} cache the cache toggle (default true)
  * @memberof Augmented.Request.Configuration
  */
  cache = true;
  /**
  * timeout property
  * @property {number} timeout the timeout property
  * @memberof Augmented.Request.Configuration
  */
  timeout = 0;
  /**
  * crossDomain property - sets withCredentials to true
  * @property {boolean} crossDomain the cross domain property
  * @memberof Augmented.Request.Configuration
  */
  crossDomain = false;
  /**
  * xhrFields property
  * @namespace xhrFields
  * @memberof Augmented.Request.Configuration
  */
  xhrFields = {};
  /**
  * withCredentials property
  * @property {boolean} withCredentials the setting for credentails
  * @memberof Augmented.Request.Configuration.xhrFields
  */
  withCredentials = false;
  /**
  * user property
  * @property {string} user the username for credentials
  * @memberof Augmented.Request.Configuration
  */
  user = null;
  /**
  * password property
  * @property {string} password the password for credentials
  * @memberof Augmented.Request.Configuration
  */
  password = null;
  /**
  * allowOrigins property
  * @property {string} allowOrigins the allowed origins for crossDomain
  * @memberof Augmented.Request.Configuration
  */
  allowOrigins = "";
  /**
  * allowMethods property
  * @property {string} allowMethods the allowed methods for crossDomain
  * @memberof Augmented.Request.Configuration
  */
  allowMethods = null;
  /**
  * headers property
  * @property {object} headers an object of headers (key, value)
  * @memberof Augmented.Request.Configuration
  */
  headers = {};
  /**
  * success callback
  * @property {function} success a callback for success
  * @memberof Augmented.Request.Configuration
  */
  success = null;
  /**
  * error callback
  * @property {function} error a callback for error
  * @memberof Augmented.Request.Configuration
  */
  error = null;
  /**
  * complete callback
  * @property {function} complete a callback after the ajax call
  * @memberof Augmented.Request.Configuration
  */
  complete = null;
  /**
  * beforeSend callback
  * @property {function} beforeSend a callback before the ajax call
  * @memberof Augmented.Request.Configuration
  */
  beforeSend = null;
  /**
  * mock
  * @property {boolean} mock a toggle to mock the ajax call
  * @memberof Augmented.Request.Configuration
  */
  mock = false;
};
