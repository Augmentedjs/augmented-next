/**
 * Pricipal object for use in security as part of the abstract implimentation
 * @memberof Security
 * @property {string} fullName The full name of the principal
 * @property {number} id The id of the principal
 * @property {string} login The login of the principal
 * @property {string} email The email of the principal
 */
class Principal {
  constructor(options) {
    if (options && options.id) {
      this._id = options.id;
    } else {
      this._id = 0;
    }

    if (options && options.email) {
      this._email = options.email;
    } else {
      this._email = "";
    }

    if (options && options.login) {
      this._login = options.login;
    } else {
      this._login = "";
    }

    if (options && options.fullName) {
      this._fullName = options.fullName;
    } else {
      this._fullName = "";
    }
  };

  get fullName() {
    return this._fullName;
  };
  set fullName(name) {
    this._fullName = name;
  };

  get id() {
    return this._id;
  };

  set id(id) {
    this._id = id;
  };

  get login() {
    return this._login;
  };
  set login(login) {
    this._login = login;
  };

  get email() {
    return this._email;
  };
  set email(email) {
    this._email = email;
  };
};

export default Principal;
