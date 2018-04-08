import pad from "../functions/pad.js";
import Level from "./level.js";

/**
 * Augmented Abstract Logger
 * @param {Logger.Level} l The level to initialize the logger with
 * @memberof Logger
 * @abstract
 */
class AbstractLogger {
  constructor(l) {
    this.loggerLevel = (l) ? l : Level.INFO;
    this.label = Level;
    this.TIME_SEPERATOR = ":";
    this.DATE_SEPERATOR = "-";
    this.OPEN_GROUP = " [ ";
    this.CLOSE_GROUP = " ] ";
  };

  _getLogTime() {
    const now = new Date();
    const s = `${now.getFullYear()}${this.DATE_SEPERATOR}${(now.getMonth() + 1)}${this.DATE_SEPERATOR}${now.getDate()} ${now.getHours()}${this.TIME_SEPERATOR}${now.getMinutes()}${this.TIME_SEPERATOR}${now.getSeconds()}${this.TIME_SEPERATOR}${now.getMilliseconds()}`;
    return pad("                        ", s, false);
  };

  /**
   * log a message
   * @param {string} message The message to log
   * @param {Logger.Level} level The level of the log message
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
   * @param {string} message
   */
  info(message) {
    this.log(message, Level.INFO);
  };

  /**
   * Log a message in error level
   * @param {string} message
   */
  error(message) {
    this.log(message, Level.ERROR);
  };

  /**
   * Log a message in debug level
   * @param {string} message
   */
  debug(message) {
    this.log(message, Level.DEBUG);
  };

  /**
   * Log a message in warn level
   * @param {string} message
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
   */
   _logMe(message, level) {};
};

export default AbstractLogger;
