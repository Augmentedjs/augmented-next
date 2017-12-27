import extend from "./functions/extend.js";
import Configuration from "./configuration.js";

/**
 * Augmented.Utility.AsynchronousQueue -
 * An Async queue for handling async chained functions
 * @constructor Augmented.Utility.AsynchronousQueue
 * @param {number} timeout The timout period for each process in the queue (optional)
 * @memberof Augmented.Utility
 */
class AsynchronousQueue {
  constructor(timeout) {
    this._timeout = (timeout) ? timeout : Configuration.AsynchronousQueueTimeout;
    this._queue = {};
  };

  /**
   * @method add The Add method for adding processes to the queue
   * @memberof Augmented.Utility.AsynchronousQueue
   */
  add(...args) {
    if (args && args.length > 0) {
      extend(this._queue, args);
      return true;
    }
    return false;
  };

  /**
   * @method clear Clear all processes in the queue
   * @memberof Augmented.Utility.AsynchronousQueue
   */
  clear() {
    if (this._queue.length > 0) {
      this._queue.splice(0, this._queue.length);
    }
  };

  /**
   * @method process Process the queue
   * @memberof Augmented.Utility.AsynchronousQueue
   */
  process(...args) {
    if (args) {
      extend(this._queue, args);
    }
    const q = this._queue;
    const l = Object.keys(q).length;//args.length;
    let to = this._timeout;

    if (l <= 0) {
      return false;
    }
    const chain = (i) => {
      if (i >= l || typeof q[i] !== 'function') {
        return false;
      }
      setTimeout( () => {
        q[i]();
        chain(i + 1);
      }, to);
    };
    chain(0);
    return true;
  };

  /**
   * @method getTimeout Get the timeout for the queue
   * @memberof Augmented.Utility.AsynchronousQueue
   */
  get timeout() {
    return this._timeout;
  };

  /**
   * @method getQueue get the full queue
   * @memberof Augmented.Utility.AsynchronousQueue
   */
  get queue() {
    return this._queue;
  };
};

export default AsynchronousQueue;
