import METHOD_MAP from "./methodMap.js";
import extend from "./extend.js";
import isFunction from "./isFunction.js";
import request from "./request/request.js";

/**
 * Augmented.sync - Base sync method that can pass special augmented features
 * @method sync
 * @memberof Augmented
 */
const sync = (method, model, options) => {
  const type = METHOD_MAP[method];

  if (!options) {
    options = {};
  }

  // Default JSON-request options.
  const params = {type: type, dataType: "json"};

  // Ensure that we have a URL.
  if (!options.url) {
    if (model.url) {
      if (isFunction(model.url)) {
        params.url = model.url();
      } else {
        params.url = model.url;
      }
    } else {
      throw new Error("A \"url\" property or function must be specified");
    }
  }

  // Ensure that we have the appropriate request data.
  if (options.data == null && model && (method === "create" || method === "update" || method === "patch")) {
    params.contentType = "application/json";
    params.data = JSON.stringify(options.attrs || model.toJSON(options));
  }

  // Don't process data on a non-GET request.
  if (params.type !== "GET") {
    params.processData = false;
  }

  // Pass along `textStatus` and `errorThrown` from jQuery.
  const error = options.error;
  options.error = (xhr, textStatus, errorThrown) => {
    options.textStatus = textStatus;
    options.errorThrown = errorThrown;
    if (error) {
      error.call(options.context, xhr, textStatus, errorThrown);
    }
  };

  // Make the request, allowing the user to override any Ajax options.
  const xhr = options.xhr = request(extend(params, options));
  model.trigger("request", model, xhr, options);
  return xhr;
};

export default sync;
