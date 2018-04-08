/**
 * Logger Level
 * @name Level
 * @enum {Symbol}
 * @property {Symbol} INFO The Info level
 * @property {Symbol} DEBUG The debug level
 * @property {Symbol} ERROR The error level
 * @property {Symbol} WARN The warning level
 * @memberof Logger
 */
const Level = {};
Level.INFO = Symbol("info");
Level.DEBUG = Symbol("debug");
Level.ERROR = Symbol("error");
Level.WARN = Symbol("warn");

export default Level;
