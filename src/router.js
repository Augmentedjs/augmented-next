/**
* @class Router
* @extends Backbone.Router
* @memberof Augmented
*/
Augmented.Router = Backbone.Router.extend({
  /**
  * Load a view safely and remove the last view by calling cleanup, then remove
  * @method loadView
  * @param {Augmented.View} view The View to load
  * @memberof Augmented.Router
  */
  loadView: function(view) {
    this.cleanup();
    this._view = view;
    this._view.render();
  },
  /**
  * remove the last view by calling cleanup, then remove
  * @method cleanup
  * @memberof Augmented.Router
  */
  cleanup: function() {
    if (this._view) {
      if (this._view.cleanup) {
        this._view.cleanup();
      }
      this._view.remove();
      this._view = null;
    }
  }
});
