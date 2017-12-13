/*
* Base Classes
*/

/**
* Augmented Object
* Base class for other classes to extend from
* triggers events with Backbone.Events
* @constructor Augmented.Object
* @param {object} options Object options
* @memberof Augmented
*/
Augmented.Object = function(options) {
  this.options = Augmented.Utility.extend({}, Augmented.result(this, 'options'), options);

};

Augmented.Object.prototype = function () {
  this.initialize.apply(this, arguments);
};

/**
* Entend the Object as a new instance
* @function Augmented.Object.extend
* @memberof Augmented.Object
* @returns Child class of Augmented.Object
*/
Augmented.Object.extend = Augmented.extend;

Augmented.Utility.extend(Augmented.Object.prototype, Backbone.Events, {
  initialize: function() {}
});
