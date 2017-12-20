import pad from "./pad.js";

/**
 * A Logger package
 * @namespace Augmented.Logger
 * @memberof Augmented
 */

/**
 * Augmented.Logger.Type
 * @name Augmented.Logger.Type
 * @enum {Symbol}
 * @memberof Augmented.Logger
 * @property {Symbol} CONSOLE The console logger (HTML5 console)
 * @property {Symbol} COLOR_CONSOLE The color console logger (HTML5 console)
 * @property {Symbol} REST A REST-based logger
 * @memberof Augmented.Logger
 */
export const Type = {};
Type.CONSOLE = Symbol("console");
Type.COLOR_CONSOLE = Symbol("colorConsole");
Type.REST = Symbol("rest");

/**
 * Augmented.Logger.Level
 * @name Augmented.Logger.Level
 * @enum {Symbol}
 * @property {Symbol} INFO The Info level
 * @property {Symbol} DEBUG The debug level
 * @property {Symbol} ERROR The error level
 * @property {Symbol} WARN The warning level
 * @memberof Augmented.Logger
 */
export const Level = {};
Level.INFO = Symbol("info");
Level.DEBUG = Symbol("debug");
Level.ERROR = Symbol("error");
Level.WARN = Symbol("warn");

/**
 * Augmented Abstract Logger
 * @constructor Augmented.AbstractLogger
 * @param {Augmented.Logger.Level} l The level to initialize the logger with
 * @abstract
 * @memberof Augmented
 */
class AbstractLogger {
  constructor(l) {
    this.loggerLevel = (l) ? l : Level.INFO;
  };
  TIME_SEPERATOR = ":";
  DATE_SEPERATOR = "-";
  OPEN_GROUP = " [ ";
  CLOSE_GROUP = " ] ";
  label = Level;

  _getLogTime() {
    const now = new Date();
    const s = `${now.getFullYear()}${this.DATE_SEPERATOR}${(now.getMonth() + 1)}${this.DATE_SEPERATOR}${now.getDate()} ${now.getHours()}${this.TIME_SEPERATOR}${now.getMinutes()}${this.TIME_SEPERATOR}${now.getSeconds()}${this.TIME_SEPERATOR}${now.getMilliseconds()}`;
    return pad("                        ", s, false);
  };

  /**
   * log a message
   * @method log
   * @memberof AbstractLogger
   * @param {string} message The message to log
   * @param {Augmented.Logger.Level} level The level of the log message
   * @returns {string} The message
   */
  log(message, level) {
    let m = "";
    if (message) {
      if (!level) {
        level = Level.INFO;
      }
      if (this.loggerLevel === Level.DEBUG && level === Level.DEBUG) {
        m = this._logMe(`${this._getLogTime()}${this.OPEN_GROUP}DEBUG${this.CLOSE_GROUP}${message}`, level);
      } else if (level === Level.ERROR) {
        m = this._logMe(`${this._getLogTime()}${this.OPEN_GROUP}ERROR${this.CLOSE_GROUP}${message}`, level);
      } else if (level === Level.WARN) {
        m = this._logMe(`${this._getLogTime()}${this.OPEN_GROUP}WARN ${this.CLOSE_GROUP}${message}`, level);
      } else if (this.loggerLevel === Level.DEBUG || this.loggerLevel === Level.INFO) {
        m = this._logMe(`${this._getLogTime()}${this.OPEN_GROUP}INFO ${this.CLOSE_GROUP}${message}`, level);
      }
    }
    return m;
  };

  /**
   * Logs a message in info level
   * @method info
   * @param {string} message
   * @memberof AbstractLogger
   */
  info(message) {
    this.log(message, Level.INFO);
  };

  /**
   * Log a message in error level
   * @method error
   * @param {string} message
   * @memberof AbstractLogger
   */
  error(message) {
    this.log(message, Level.ERROR);
  };

  /**
   * Log a message in debug level
   * @method debug
   * @param {string} message
   * @memberof AbstractLogger
   */
  debug(message) {
    this.log(message, Level.DEBUG);
  };

  /**
   * Log a message in warn level
   * @method warn
   * @param {string} message
   * @memberof AbstractLogger
   */
  warn(message) {
    this.log(message, Level.WARN);
  };

  /**
   * logMe method - the actual logger method that logs.  Each instance will have it's own<br/>
   * override this in an instance
   * @example _logMe(message, level) { ... };
   * @method _logMe
   * @param {string} message The message to log
   * @param {string} level The level to log to
   * @returns {string} The message
   * @memberof AbstractLogger
   * @private
   */
   _logMe(message, level) {};
};

class ConsoleLogger extends AbstractLogger {
  constructor(l) {
    super(l);
  };
  _logMe(message, level) {
    if (level === Level.INFO) {
      console.info(message);
    } else if (level === Level.ERROR) {
      console.error(message);
    } else if (level === Level.DEBUG) {
      console.log(message);
    } else if (level === Level.WARN) {
      console.warn(message);
    } else {
      console.log(message);
    }
    return message;
  };
};

class ColorConsoleLogger extends AbstractLogger {
  constructor(l) {
    super(l);
  };
  _logMe(message, level) {
    if (level === Level.INFO) {
      console.info("\x1b[36m" + message + "\x1b[0m");
    } else if (level === Level.ERROR) {
      console.error("\x1b[31m" + message + "\x1b[0m");
    } else if (level === Level.DEBUG) {
      console.log("\x1b[34m" + message + "\x1b[0m");
    } else if (level === Level.WARN) {
      console.warn("\x1b[33m" + message + "\x1b[0m");
    } else {
      console.log("\x1b[37m" + message + "\x1b[0m");
    }
  };
};

class RestLogger extends AbstractLogger {
  constructor(l, uri) {
    super(l);
    this.uri = uri;
  };
  setURI(uri) {
    this.uri = uri;
  };
  _logMe(message) {
    // use new ajax promise
    /*
    Augmented.ajax({
      url: this.uri,
      method: "POST",
      contentType: "text/plain",
      dataType: "text",
      async: true,
      data: message,
      success: function (data, status) { this.success(); },
      failure: function (data, status) { this.failure(); }
    });
    */
  };
};

/**
* Augmented.Logger.LoggerFactory - A logger factory for creating a logger instance
* @namespace Augmented.Logger.LoggerFactory
* @memberof Augmented.Logger
*/
export class LoggerFactory {
  constructor() {
  };
  /**
   * getLogger - get an instance of a logger
   * @method getLogger
   * @param {Augmented.Logger.Type} type Type of logger instance
   * @param {Augmented.Logger.Level} level Level to set the logger to
   * @memberof Augmented.Logger.LoggerFactory
   * @returns {Augmented.Logger.abstractLogger} logger Instance of a logger by istance type
   * @example Augmented.Logger.LoggerFactory.getLogger(Augmented.Logger.Type.console, Augmented.Logger.Level.debug);
   */
  static getLogger(type, level) {
    if (type === Type.CONSOLE) {
      return new ConsoleLogger(level);
    } else if (type === Type.COLOR_CONSOLE) {
      return new ColorConsoleLogger(level);
    } else if (type === Type.REST) {
      return new RestLogger(level);
    }
  };
};
