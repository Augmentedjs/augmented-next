import AbstractLogger from "./abstractLogger.js";
import Level from "./level.js";

/**
 * Console Logger
 * @param {Logger.Level} l The level to initialize the logger with
 * @memberof Logger
 * @extends AbstractLogger
 */
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

export default ConsoleLogger;
