// For Node and Browser.  Requires xhr2 for Node (install in Node or by app)
//var XMLHttpRequest = (XMLHttpRequest) ? XMLHttpRequest : require('xhr2');

/*
* Setup the rest of jQuery-like eventing and handlers for native xhr
*/
var aXHR = XMLHttpRequest;
Augmented.Utility.extend(aXHR, {
  done: function() {},
  fail: function() {},
  always: function() {},
  then: function() {}
});

var mockXHR = function(){
  this.responseType = "text";
  this.responseText = "";
  this.async = true;
  this.status = 200;
  this.header = {};
  this.timeout = 70;
  this.open = function(method, uri, async, user, password) {
    this.url = uri;
    this.async = async;
    this.user = user;
    this.method = method;
  };
  this.send = function() { this.onload(); };
  this.setRequestHeader = function(header, value) {
    this.header.header = value;
  };
  this.done = function() {};
  this.fail = function() {};
  this.always = function() {};
  this.then = function() {};
  this.options = {};
};

/**
* Ajax namespace for use with Ajax related configuration and methods
* @namespace Augmented.Ajax
* @memberof Augmented
*/
Augmented.Ajax = {};

/**
* Object of configuration properties and callbacks.  Pass this to the ajax call to setup configutation
* @namespace Augmented.Ajax.Configuration
* @name Augmented.Ajax.Configuration
* @memberof Augmented.Ajax
*/
Augmented.Ajax.Configuration = {
  /**
  * url property
  * @property {string} url the url
  * @memberof Augmented.Ajax.Configuration
  */
  url: 'localhost',
  /**
  * contentType property
  * @property {string} contentType the content type (default is text/plain)
  * @memberof Augmented.Ajax.Configuration
  */
  contentType: 'text/plain',
  /**
  * dataType property
  * @property {string} dataType the data type (default is text)
  * @memberof Augmented.Ajax.Configuration
  */
  dataType: 'text',
  /**
  * async property
  * @property {boolean} async set async (default true)
  * @memberof Augmented.Ajax.Configuration
  */
  async: true,
  /**
  * method property
  * @property {string} method the ajax method (default GET)
  * @memberof Augmented.Ajax.Configuration
  */
  method: "GET",
  /**
  * cache property
  * @property {boolean} cache the cache toggle (default true)
  * @memberof Augmented.Ajax.Configuration
  */
  cache: true,
  /**
  * timeout property
  * @property {number} timeout the timeout property
  * @memberof Augmented.Ajax.Configuration
  */

  /**
  * crossDomain property - sets withCredentials to true
  * @property {boolean} crossDomain the cross domain property
  * @memberof Augmented.Ajax.Configuration
  */

  /**
  * xhrFields property
  * @namespace xhrFields
  * @memberof Augmented.Ajax.Configuration
  */

  /**
  * withCredentials property
  * @property {boolean} withCredentials the setting for credentails
  * @memberof Augmented.Ajax.Configuration.xhrFields
  */

  /**
  * user property
  * @property {string} user the username for credentials
  * @memberof Augmented.Ajax.Configuration
  */

  /**
  * password property
  * @property {string} password the password for credentials
  * @memberof Augmented.Ajax.Configuration
  */

  /**
  * allowOrigins property
  * @property {string} allowOrigins the allowed origins for crossDomain
  * @memberof Augmented.Ajax.Configuration
  */

  /**
  * allowMethods property
  * @property {string} allowMethods the allowed methods for crossDomain
  * @memberof Augmented.Ajax.Configuration
  */

  /**
  * headers property
  * @property {object} headers an object of headers (key, value)
  * @memberof Augmented.Ajax.Configuration
  */

  /**
  * success callback
  * @property {function} success a callback for success
  * @memberof Augmented.Ajax.Configuration
  */

  /**
  * error callback
  * @property {function} error a callback for error
  * @memberof Augmented.Ajax.Configuration
  */

  /**
  * complete callback
  * @property {function} complete a callback after the ajax call
  * @memberof Augmented.Ajax.Configuration
  */

  /**
  * beforeSend callback
  * @property {function} beforeSend a callback before the ajax call
  * @memberof Augmented.Ajax.Configuration
  */

  /**
  * mock
  * @property {boolean} mock a toggle to mock the ajax call
  * @memberof Augmented.Ajax.Configuration
  */
};

/**
* AJAX capability using simple jQuery-like API<br/>
* Supports the following object properties and features:
* <ul>
* <li>method</li>
* <li>url</li>
* <li>async</li>
* <li>contentType</li>
* <li>dataType</li>
* <li>beforeSend function</li>
* <li>success callback</li>
* <li>failure callback</li>
* <li>complete callback</li>
* <li>user</li>
* <li>password</li>
* <li>withCredentials</li>
* <li>cache</li>
* <li>timeout</li>
* <li>mock - special flag for mocking response</li>
* </ul>
* @method Augmented.Ajax.ajax
* @static
* @param {Augmented.Ajax.Configuration} ajaxObject object of configuration properties and callbacks.
* @returns success or failure callback
* @memberof Augmented.Ajax
* @example Augmented.ajax({
*         url: uri,
*         contentType: 'text/plain',
*         dataType: 'text',
*         async: true,
*         success: function (data, status) { ... },
*         error: function (data, status) { ... }
*     });
*/
Augmented.ajax = Augmented.Ajax.ajax = function(ajaxObject) {
  //logger.debug("AUGMENTED: Ajax object: " + JSON.stringify(ajaxObject));
  var xhr = null;
  if (ajaxObject && ajaxObject.url) {
    var type = ajaxObject.type;

    if (!ajaxObject.method && ajaxObject.type) {
      ajaxObject.method = ajaxObject.type;
    }

    var method = (ajaxObject.method) ? ajaxObject.method : 'GET';
    var cache = (ajaxObject.cache) ? (ajaxObject.cache) : true;

    xhr = (ajaxObject.mock) ? new mockXHR() : new aXHR();

    if (ajaxObject.timeout) {
      xhr.timeout = ajaxObject.timeout;
    }
    var async = (ajaxObject.async !== undefined) ? ajaxObject.async : true;

    // CORS & Async
    if (ajaxObject.crossDomain && ajaxObject.xhrFields && ajaxObject.xhrFields.withCredentials) {
      xhr.withCredentials = ajaxObject.xhrFields.withCredentials;
      // Sync Not supported for all browsers in CORS mode
      if (!async) {
        logger.warn("AUGMENTED: Augmented.ajax: Sync Not supported for all browsers in CORS mode!");
      }
      async = true;
    }

    if (async && ajaxObject.dataType) {
      xhr.responseType = (ajaxObject.dataType) ? ajaxObject.dataType : 'text';
    }

    xhr.open(method, encodeURI(ajaxObject.url), async,
    (ajaxObject.user !== undefined) ? ajaxObject.user : '',
    (ajaxObject.password !== undefined) ? ajaxObject.password : '');
    xhr.setRequestHeader('Content-Type', (ajaxObject.contentType) ? ajaxObject.contentType : 'text/plain');

    if (ajaxObject.dataType === "json") {
      xhr.setRequestHeader("Accept", "application/json");
    }

    if (!cache) {
      xhr.setRequestHeader('Cache-Control', 'no-cache');
    }

    // CORS
    if (xhr.withCredentials) {
      var allowOrigins = '*', allowMethods = 'GET';
      if (ajaxObject.allowOrigins) {
        allowOrigins = ajaxObject.allowOrigins;
      }
      if (ajaxObject.allowMethods) {
        allowMethods = ajaxObject.allowMethods;
      }

      xhr.setRequestHeader('Access-Control-Allow-Origin', allowOrigins);
      xhr.setRequestHeader('Access-Control-Allow-Methods', allowMethods);
    }

    // Authorization
    if (xhr.withCredentials && ajaxObject.user && ajaxObject.password) {
      xhr.setRequestHeader('Authorization', 'Basic ' + window.btoa(ajaxObject.user + ':' + ajaxObject.password));
    }

    // custom headers

    if (ajaxObject.headers) {
      var i = 0, keys = Object.keys(ajaxObject.headers), l = keys.length;

      for (i = 0; i < l; i++) {
        xhr.setRequestHeader(keys[i], ajaxObject.headers[keys[i]]);
      }
    }

    xhr.onload = function() {
      try {
        if (xhr.status > 199 && xhr.status < 399) {
          if (ajaxObject.success) {
            if (xhr.responseType === "" || xhr.responseType === "text") {
              if (xhr.responseText) {
                ajaxObject.success(xhr.responseText, xhr.status, xhr);
              } else {
                logger.warn("AUGMENTED: Ajax (" + xhr.responseType + " responseType) did not return anything.");
                ajaxObject.success("", xhr.status, xhr);
              }
            } else if (xhr.responseType === "json") {
              if (xhr.response) {
                //logger.debug("AUGMENTED: Ajax (JSON responseType) native JSON.");
                ajaxObject.success(xhr.response, xhr.status, xhr);
              } else if (xhr.responseText) {
                //logger.debug("AUGMENTED: Ajax (JSON responseType) parsed JSON from string.");
                ajaxObject.success(JSON.parse(xhr.responseText), xhr.status, xhr);
              } else {
                logger.warn("AUGMENTED: Ajax (" + xhr.responseType + " responseType) did not return anything.");
                ajaxObject.success("", xhr.status, xhr);
              }
            } else {
              if (xhr.responseText) {
                ajaxObject.success(xhr.responseText, xhr.status, xhr);
              } else if (xhr.response) {
                ajaxObject.success(xhr.response, xhr.status, xhr);
              } else {
                logger.warn("AUGMENTED: Ajax (" + xhr.responseType + " responseType) did not return anything.");
                ajaxObject.success("", xhr.status, xhr);
              }
            }
          }
        } else if (xhr.status > 399 && xhr.status < 600) {
          if (ajaxObject.failure) {
            ajaxObject.failure(xhr, xhr.status, xhr.statusText);
          } else if (ajaxObject.error) {
            ajaxObject.error(xhr, xhr.status, xhr.statusText);
          }
        }
      } catch(e) {
        logger.error("AUGMENTED: Ajax (" + e + ")");
        if (ajaxObject && ajaxObject.error) {
          ajaxObject.error(xhr, xhr.status, xhr.statusText);
        }
        return xhr;
      }
      if (ajaxObject.complete) {
        ajaxObject.complete(xhr, xhr.status);
      }
      return xhr;
    };

    if (ajaxObject.beforeSend) {
      ajaxObject.beforeSend(xhr);
    }
    xhr.send(((ajaxObject.data) ? ajaxObject.data : ""));
  }

  logger.debug("AUGMENTED: Ajax status (" + xhr.status + ")");

  this.done = function() {};
  this.fail = function() {};
  this.always = function() {};
  this.then = function() {};

  return this;
};
