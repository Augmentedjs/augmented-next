// For Node and Browser.  Requires xhr2 for Node (install in Node or by app)
//let XMLHttpRequest = (XMLHttpRequest) ? XMLHttpRequest : require("xhr2");

/*
 * Setup the rest of jQuery-like eventing and handlers for native xhr
*/
/*let aXHR = XMLHttpRequest;
Augmented.Utility.extend(aXHR, {
  done: function() {},
  fail: function() {},
  always: function() {},
  then: function() {}
});

let mockXHR = function(){
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
*/

const ASYNC = true;

/**
 * AJAX capability using simple jQuery-like API<br/>
 * Supports the following object properties and features:
 * <ul>
 * <li>method</li>
 * <li>url</li>
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
 * @method Augmented.Request.request
 * @static
 * @param {Augmented.Request.Configuration} configuration object of configuration properties and callbacks.
 * @returns success or failure callback
 * @memberof Augmented.Request
 * @example Augmented.Request.request({
 *         url: uri,
 *         contentType: "text/plain",
 *         dataType: "text",
 *         success: function (data, status) { ... },
 *         error: function (data, status) { ... }
 *     });
 */
const request = (configuration) => {
  //logger.debug("AUGMENTED: Ajax object: " + JSON.stringify(configuration));
  let xhr = null;
  if (configuration && configuration.url) {
    let type = configuration.type;

    if (!configuration.method && configuration.type) {
      configuration.method = configuration.type;
    }

    let method = (configuration.method) ? configuration.method : "GET";
    let cache = (configuration.cache) ? (configuration.cache) : true;

    xhr = (configuration.mock) ? new mockXHR() : new aXHR();

    if (configuration.timeout) {
      xhr.timeout = configuration.timeout;
    }
    //const ASYNC = true; //(configuration.async !== undefined) ? configuration.async : true;

    // CORS & Async
    if (configuration.crossDomain && configuration.xhrFields && configuration.xhrFields.withCredentials) {
      xhr.withCredentials = configuration.xhrFields.withCredentials;
      // Sync Not supported for all browsers in CORS mode
      //if (!async) {
      //  logger.warn("AUGMENTED: Augmented.Request: Sync Not supported for all browsers in CORS mode!");
      //}
      //async = true;
    }

    if (async && configuration.dataType) {
      xhr.responseType = (configuration.dataType) ? configuration.dataType : "text";
    }

    xhr.open(method, encodeURI(configuration.url), ASYNC,
    (configuration.user !== undefined) ? configuration.user : "",
    (configuration.password !== undefined) ? configuration.password : "");
    xhr.setRequestHeader("Content-Type", (configuration.contentType) ? configuration.contentType : "text/plain");

    if (configuration.dataType === "json") {
      xhr.setRequestHeader("Accept", "application/json");
    }

    if (!cache) {
      xhr.setRequestHeader("Cache-Control", "no-cache");
    }

    // CORS
    if (xhr.withCredentials) {
      let allowOrigins = "*", allowMethods = "GET";
      if (configuration.allowOrigins) {
        allowOrigins = configuration.allowOrigins;
      }
      if (configuration.allowMethods) {
        allowMethods = configuration.allowMethods;
      }

      xhr.setRequestHeader("Access-Control-Allow-Origin", allowOrigins);
      xhr.setRequestHeader("Access-Control-Allow-Methods", allowMethods);
    }

    // Authorization
    if (xhr.withCredentials && configuration.user && configuration.password) {
      xhr.setRequestHeader("Authorization", "Basic " + window.btoa(configuration.user + ":" + configuration.password));
    }

    // custom headers

    if (configuration.headers) {
      let i = 0, keys = Object.keys(configuration.headers), l = keys.length;

      for (i = 0; i < l; i++) {
        xhr.setRequestHeader(keys[i], configuration.headers[keys[i]]);
      }
    }

    xhr.onload = function() {
      try {
        if (xhr.status > 199 && xhr.status < 399) {
          if (configuration.success) {
            if (xhr.responseType === "" || xhr.responseType === "text") {
              if (xhr.responseText) {
                configuration.success(xhr.responseText, xhr.status, xhr);
              } else {
                //logger.warn("AUGMENTED: Ajax (" + xhr.responseType + " responseType) did not return anything.");
                configuration.success("", xhr.status, xhr);
              }
            } else if (xhr.responseType === "json") {
              if (xhr.response) {
                //logger.debug("AUGMENTED: Ajax (JSON responseType) native JSON.");
                configuration.success(xhr.response, xhr.status, xhr);
              } else if (xhr.responseText) {
                //logger.debug("AUGMENTED: Ajax (JSON responseType) parsed JSON from string.");
                configuration.success(JSON.parse(xhr.responseText), xhr.status, xhr);
              } else {
                //logger.warn("AUGMENTED: Ajax (" + xhr.responseType + " responseType) did not return anything.");
                configuration.success("", xhr.status, xhr);
              }
            } else {
              if (xhr.responseText) {
                configuration.success(xhr.responseText, xhr.status, xhr);
              } else if (xhr.response) {
                configuration.success(xhr.response, xhr.status, xhr);
              } else {
                //logger.warn("AUGMENTED: Ajax (" + xhr.responseType + " responseType) did not return anything.");
                configuration.success("", xhr.status, xhr);
              }
            }
          }
        } else if (xhr.status > 399 && xhr.status < 600) {
          if (configuration.failure) {
            configuration.failure(xhr, xhr.status, xhr.statusText);
          } else if (configuration.error) {
            configuration.error(xhr, xhr.status, xhr.statusText);
          }
        }
      } catch(e) {
        //logger.error("AUGMENTED: Ajax (" + e + ")");
        if (configuration && configuration.error) {
          configuration.error(xhr, xhr.status, xhr.statusText);
        }
        return xhr;
      }
      if (configuration.complete) {
        configuration.complete(xhr, xhr.status);
      }
      return xhr;
    };

    if (configuration.beforeSend) {
      configuration.beforeSend(xhr);
    }
    xhr.send(((configuration.data) ? configuration.data : ""));
  }

  //logger.debug("AUGMENTED: Ajax status (" + xhr.status + ")");

  this.done = () => {};
  this.fail = () => {};
  this.always = () => {};
  this.then = () => {};

  return this;
};

export default request;
