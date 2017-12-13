/**
* Augmented.Utility.AsynchronousQueue -
* An Async queue for handling async chained functions
* @constructor Augmented.Utility.AsynchronousQueue
* @param {number} timeout The timout period for each process in the queue (optional)
* @memberof Augmented.Utility
*/
Augmented.Utility.AsynchronousQueue = function(timeout) {
  var to = (timeout) ? timeout : Augmented.Configuration.AsynchronousQueueTimeout;
  this.queue = {};

  /**
  * @method add The Add method for adding processes to the queue
  * @memberof Augmented.Utility.AsynchronousQueue
  */
  this.add = function() {
    var args = arguments;
    if (args.length <= 0) {
      return false;
    }

    Augmented.Utility.extend(this.queue, args);
  };

  /**
  * @method clear Clear all processes in the queue
  * @memberof Augmented.Utility.AsynchronousQueue
  */
  this.clear = function() {
    if (this.queue.length > 0) {
      this.queue.splice(0, this.queue.length);
    }
  };

  /**
  * @method process Process the queue
  * @memberof Augmented.Utility.AsynchronousQueue
  */
  this.process = function() {
    if (arguments) {
      Augmented.Utility.extend(this.queue, arguments);
    }
    var args = this.queue;
    var l = Object.keys(args).length;//args.length;
    if (l <= 0) {
      return false;
    }
    (function chain(i) {
      if (i >= l || typeof args[i] !== 'function') {
        return false;
      }
      window.setTimeout(function() {
        args[i]();
        chain(i + 1);
      }, to);
    })(0);
    return true;
  };
  /**
  * @method getTimeout Get the timeout for the queue
  * @memberof Augmented.Utility.AsynchronousQueue
  */
  this.getTimeout = function() {
    return to;
  };
  /**
  * @method getQueue get the full queue
  * @memberof Augmented.Utility.AsynchronousQueue
  */
  this.getQueue = function() {
    return this.queue;
  };
};

Augmented.Utility.PromiseQueue = function() {
  var _queue = [];

  /**
  * @method add The Add method for adding processes to the queue
  * @memberof Augmented.Utility.PromiseQueue
  */
  this.add = function(func, resolve, reject) {
    const f = function() {
      var promise = new Promise(function(resolve, reject){
        var ret = func();
        if (ret) {
          resolve();
        }
        else {
          reject();
        }
      });
      return promise;
    }

    this.queue.push(f);
  };

  /**
  * @method clear Clear all processes in the queue
  * @memberof Augmented.Utility.AsynchronousQueue
  */
  this.clear = function() {
    if (this.queue.length > 0) {
      this.queue.splice(0, this.queue.length);
    }
  };

};
