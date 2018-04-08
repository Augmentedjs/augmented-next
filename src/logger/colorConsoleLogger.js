import AbstractLogger from "./abstractLogger.js";
import Level from "./level.js";

/**
 * Color Console Logger
 * @param {Logger.Level} l The level to initialize the logger with
 * @memberof Logger
 * @extends AbstractLogger
 */
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

export default ColorConsoleLogger;
