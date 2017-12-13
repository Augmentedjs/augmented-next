/**
* @namespace Augmented.Logger
* @memberof Augmented
*/
Augmented.Logger = {};

/**
* Augmented.Logger.Type
* @name Augmented.Logger.Type
* @enum {string}
* @memberof Augmented.Logger
* @property {string} console The console logger (HTML5 console)
* @property {string} colorConsole The color console logger (HTML5 console)
* @property {string} rest A REST-based logger
* @memberof Augmented.Logger
*/
Augmented.Logger.Type = {
  console: "console",
  colorConsole: "colorConsole",
  rest: "rest"
};

/**
* Augmented.Logger.Level
* @name Augmented.Logger.Level
* @enum {string}
* @property {string} info The Info level
* @property {string} debug The debug level
* @property {string} error The error level
* @property {string} warn The warning level
* @memberof Augmented.Logger
*/
Augmented.Logger.Level = {
  info:  "info",
  debug: "debug",
  error: "error",
  warn:  "warn"
};


var pad = function(pad, str, padLeft) {
  if (typeof str === 'undefined')
  return pad;
  if (padLeft) {
    return (pad + str).slice(-pad.length);
  } else {
    return (str + pad).substring(0, pad.length);
  }
}

/**
* Augmented Abstract Logger
* @constructor Augmented.AbstractLogger
* @param {Augmented.Logger.Level} l The level to initialize the logger with
* @abstract
* @memberof Augmented
*/
var abstractLogger = Augmented.AbstractLogger = function(l) {
  this.TIME_SEPERATOR = ":";
  this.DATE_SEPERATOR = "-";
  this.OPEN_GROUP = " [ ";
  this.CLOSE_GROUP = " ] ";

  this.label = Augmented.Logger.Level;

  this.loggerLevel = (l) ? l : Augmented.Logger.Level.info;

  this.getLogTime = function() {
    var now = new Date();
    return pad("                        ",
    now.getFullYear() + this.DATE_SEPERATOR + (now.getMonth() + 1) + this.DATE_SEPERATOR + now.getDate() + " " +
    now.getHours() + this.TIME_SEPERATOR + now.getMinutes() + this.TIME_SEPERATOR + now.getSeconds() + this.TIME_SEPERATOR + now.getMilliseconds(),
    false);
  };

  /**
  * log a message
  * @method log
  * @memberof abstractLogger
  * @param {string} message The message to log
  * @param {Augmented.Logger.Level} level The level of the log message
  */
  this.log = function(message, level) {
    if (message) {
      if (!level) {
        level = Augmented.Logger.Level.info;
      }

      if (this.loggerLevel === Augmented.Logger.Level.debug && level === Augmented.Logger.Level.debug) {
        this.logMe(this.getLogTime() + this.OPEN_GROUP + Augmented.Logger.Level.debug + this.CLOSE_GROUP + message, level);
      } else if (level === Augmented.Logger.Level.error) {
        this.logMe(this.getLogTime() + this.OPEN_GROUP + Augmented.Logger.Level.error + this.CLOSE_GROUP + message, level);
      } else if (level === Augmented.Logger.Level.warn) {
        this.logMe(this.getLogTime() + this.OPEN_GROUP + Augmented.Logger.Level.warn + " " + this.CLOSE_GROUP + message, level);
      } else if (this.loggerLevel === Augmented.Logger.Level.debug || this.loggerLevel === Augmented.Logger.Level.info) {
        this.logMe(this.getLogTime() + this.OPEN_GROUP + Augmented.Logger.Level.info + " " + this.CLOSE_GROUP + message, level);
      }
    }
  };

  /**
  * Logs a message in info level
  * @method info
  * @param {string} message
  * @memberof abstractLogger
  */
  this.info = function(message) {
    this.log(message, Augmented.Logger.Level.info);
  };

  /**
  * Log a message in error level
  * @method error
  * @param {string} message
  * @memberof abstractLogger
  */
  this.error = function(message) {
    this.log(message, Augmented.Logger.Level.error);
  };

  /**
  * Log a message in debug level
  * @method debug
  * @param {string} message
  * @memberof abstractLogger
  */
  this.debug = function(message) {
    this.log(message, Augmented.Logger.Level.debug);
  };

  /**
  * Log a message in warn level
  * @method warn
  * @param {string} message
  * @memberof abstractLogger
  */
  this.warn = function(message) {
    this.log(message, Augmented.Logger.Level.warn);
  };

  /**
  * logMe method - the actual logger method that logs.  Each instance will have it's own<br/>
  * override this in an instance
  * @example this.logMe = function(message, level) { ... };
  * @method logMe
  * @memberof abstractLogger
  * @param {string} message The message to log
  * @param {string} level The level to log to
  */
};

var consoleLogger = function() {
  abstractLogger.apply(this, arguments);
};
consoleLogger.prototype = Object.create(abstractLogger.prototype);
consoleLogger.prototype.constructor = consoleLogger;

consoleLogger.prototype.logMe = function(message, level) {
  if (level === Augmented.Logger.Level.info) {
    console.info(message);
  } else if (level === Augmented.Logger.Level.error) {
    console.error(message);
  } else if (level === Augmented.Logger.Level.debug) {
    console.log(message);
  } else if (level === Augmented.Logger.Level.warn) {
    console.warn(message);
  } else {
    console.log(message);
  }
};

var colorConsoleLogger = function() {
  abstractLogger.apply(this, arguments);
};
colorConsoleLogger.prototype = Object.create(abstractLogger.prototype);
colorConsoleLogger.prototype.constructor = colorConsoleLogger;

colorConsoleLogger.prototype.logMe = function(message, level) {
  if (level === Augmented.Logger.Level.info) {
    console.info("\x1b[36m" + message + "\x1b[0m");
  } else if (level === Augmented.Logger.Level.error) {
    console.error("\x1b[31m" + message + "\x1b[0m");
  } else if (level === Augmented.Logger.Level.debug) {
    console.log("\x1b[34m" + message + "\x1b[0m");
  } else if (level === Augmented.Logger.Level.warn) {
    console.warn("\x1b[33m" + message + "\x1b[0m");
  } else {
    console.log("\x1b[37m" + message + "\x1b[0m");
  }
};

var restLogger = function() {
  abstractLogger.apply(this, arguments);
};

restLogger.prototype = Object.create(abstractLogger.prototype);
restLogger.prototype.constructor = restLogger;
restLogger.prototype.setURI = function(uri) {
  this.uri = uri;
};
restLogger.prototype.logMe = function(message) {
  Augmented.ajax({
    url: this.uri,
    method: "POST",
    contentType: 'text/plain',
    dataType: 'text',
    async: true,
    data: message,
    success: function (data, status) { this.success(); },
    failure: function (data, status) { this.failure(); }
  });
};

/**
* Augmented.Logger.LoggerFactory - A logger factory for creating a logger instance
* @namespace Augmented.Logger.LoggerFactory
* @memberof Augmented.Logger
*/
Augmented.Logger.LoggerFactory = {
  /**
  * getLogger - get an instance of a logger
  * @method getLogger
  * @param {Augmented.Logger.Type} type Type of logger instance
  * @param {Augmented.Logger.Level} level Level to set the logger to
  * @memberof Augmented.Logger.LoggerFactory
  * @returns {Augmented.Logger.abstractLogger} logger Instance of a logger by istance type
  * @example Augmented.Logger.LoggerFactory.getLogger(Augmented.Logger.Type.console, Augmented.Logger.Level.debug);
  */
  getLogger: function(type, level) {
    if (type === Augmented.Logger.Type.console) {
      return new consoleLogger(level);
    } else if (type === Augmented.Logger.Type.colorConsole) {
      return new colorConsoleLogger(level);
    } else if (type === Augmented.Logger.Type.rest) {
      return new restLogger(level);
    }
  }
};

/**
* A private logger for use in the framework only
* @private
*/
var logger = Augmented.Logger.LoggerFactory.getLogger(Augmented.Logger.Type.console, Augmented.Configuration.LoggerLevel);
