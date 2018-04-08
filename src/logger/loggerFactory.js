import ConsoleLogger from "./consoleLogger.js";
import ColorConsoleLogger from "./colorConsoleLogger.js";
import Type from "./type.js";

/**
 * A logger factory for creating a logger instance
 * @memberof Logger
 */
class LoggerFactory {
  constructor() {
  };
  /**
   * getLogger - get an instance of a logger
   * @param {Logger.Type} type Type of logger instance
   * @param {Logger.Level} level Level to set the logger to
   * @returns {Logger.AbstractLogger} logger Instance of a logger by istance type
   * @example Logger.LoggerFactory.getLogger(Logger.Type.CONSOLE, Logger.Level.DEBUG);
   */
  static getLogger(type, level) {
    if (type === Type.CONSOLE) {
      return new ConsoleLogger(level);
    } else if (type === Type.COLOR_CONSOLE) {
      return new ColorConsoleLogger(level);
    } /*else if (type === Type.REST) {
      return new RestLogger(level);
    }*/
  };
};

export default LoggerFactory;
