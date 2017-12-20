/**
* Augmented View - the base view for handlng display in the MV* Concept
* @constructor
* @name Augmented.View
* @memberof Augmented
* @borrows Backbone.View
* @see http://backbonejs.org/#View
* @extends Augmented.Object
*/
var augmentedView = Backbone.View.extend({
  /**
  * Custom initialize - Override for custom code
  * @method init
  * @param {object} options Optional options to pass to the view
  * @memberof Augmented.View
  */
  init: function(options) {
  },
  /**
  * Initializes the view - <em>Note: Do not override, use init instead!</em>
  * @method initialize
  * @param {object} options Optional options to pass to the view
  * @memberof Augmented.View
  * @returns {Augmented.View} Returns 'this,' as in, this view context
  */
  initialize: function(options) {
    this.options = options;
    this.init(options);
    this.render = Augmented.Utility.wrap(this.render, function(render) {
      this.beforeRender();
      render.apply(this);
      this.afterRender();
      return this;
    });
  },
  /**
  * Before Render callback for the view
  * @method beforeRender
  * @returns this Context of the view
  * @memberof Augmented.View
  */
  beforeRender: function() {
    return this;
  },
  /**
  * Render callback for the view
  * @method render
  * @returns this Context of the view
  * @memberof Augmented.View
  */
  render: function() {
    return this;
  },
  /**
  * After Render callback for the view
  * @method afterRender
  * @returns this Context of the view
  * @memberof Augmented.View
  */
  afterRender: function() {
    return this;
  },
  /**
  * The name property of the view
  * @property {string} name The Name of the view
  * @memberof Augmented.View
  * @private
  */
  name: "",
  /**
  * Sets the name of the view
  * @method setName
  * @param {string} name The name of the view
  * @memberof Augmented.View
  */
  setName: function(name) {
    this.name = name;
  },
  /**
  * Gets the name of the view
  * @method getName
  * @returns {string} Returns the name of the view
  * @memberof Augmented.View
  */
  getName: function() {
    return this.name;
  },
  /**
  * Permissions in the view
  * @property permissions
  * @memberof Augmented.View
  * @private
  */
  permissions: {
    include: [],
    exclude: []
  },
  /**
  * Adds a permission to the view
  * @method addPermission
  * @param {string} permission The permission to add
  * @param {boolean} negative Flag to set a nagative permission (optional)
  * @memberof Augmented.View
  */
  addPermission: function(permission, negative) {
    if (!negative) {
      negative = false;
    }
    if (permission !== null && !Array.isArray(permission)) {
      var p = (negative) ? this.permissions.exclude : this.permissions.include;
      p.push(permission);
    }
  },
  /**
  * Removes a permission to the view
  * @method removePermission
  * @param {string} permission The permission to remove
  * @param {boolean} negative Flag to set a nagative permission (optional)
  * @memberof Augmented.View
  */
  removePermission: function(permission, negative) {
    if (!negative) {
      negative = false;
    }
    if (permission !== null && !Array.isArray(permission)) {
      var p = (negative) ? this.permissions.exclude : this.permissions.include;
      p.splice((p.indexOf(permission)), 1);
    }
  },
  /**
  * Sets the permissions to the view
  * @method setPermissions
  * @param {array} permissions The permissions to set
  * @param {boolean} negative Flag to set a nagative permission (optional)
  * @memberof Augmented.View
  */
  setPermissions: function(permissions, negative) {
    if (!negative) {
      negative = false;
    }
    if (permissions !== null && Array.isArray(permissions)) {
      if (negative) {
        this.permissions.exclude = permissions;
      } else {
        this.permissions.include = permissions;
      }
    }
  },
  /**
  * Gets the permissions to the view<br/>
  * Return format:<br/>
  * <pre>{
  *     include: [],
  *     exclude: []
  * }</pre>
  *
  * @method getPermissions
  * @returns {object} The permissions in the view
  * @memberof Augmented.View
  */
  getPermissions: function() {
    return this.permissions;
  },
  /**
  * Clears the permissions in the view
  * @method clearPermissions
  * @memberof Augmented.View
  */
  clearPermissions: function() {
    this.permissions = {
      include: [],
      exclude: []
    };
  },
  /**
  * Matches a permission in the view
  * @method matchesPermission
  * @param {string} match The permissions to match
  * @param {boolean} negative Flag to set a nagative permission (optional)
  * @returns {boolean} Returns true if the match exists
  * @memberof Augmented.View
  */
  matchesPermission: function(match, negative) {
    if (!negative) {
      negative = false;
    }
    var p = (negative) ? this.permissions.exclude : this.permissions.include;
    return (p.indexOf(match) !== -1);
  },
  /**
  * Callback to return if this view can display
  * @method canDisplay
  * @returns {boolean} Returns true if this view can display
  * @memberof Augmented.View
  */
  canDisplay: function() {
    return true;
  }
});
