"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var api = _interopRequire(require("../utils/api"));

var store = _interopRequire(require("../stores/store"));

var actions = _interopRequire(require("../actions/actions"));

var Register = (function (Component) {
  function Register(props, context) {
    _classCallCheck(this, Register);

    _get(Object.getPrototypeOf(Register.prototype), "constructor", this).call(this, props, context);
    this.submitProfile = this.submitProfile.bind(this);
    this.register = this.register.bind(this);
  }

  _inherits(Register, Component);

  _prototypeProperties(Register, null, {
    submitProfile: {
      value: function submitProfile(event) {
        var registerUser = Object.assign({}, this.props.currentUser);
        registerUser[event.target.id] = event.target.value;
        store.dispatch(actions.receivedCurrentUser(registerUser));
      },
      writable: true,
      configurable: true
    },
    register: {
      value: function register(event) {
        event.preventDefault();

        api.handlePost("/api/profile", this.props.currentUser, function (err, response) {
          if (err != null) {
            alert(err.message);
            return;
          }
          store.dispatch(actions.receivedCurrentUser(response.result));
        });
      },
      writable: true,
      configurable: true
    },
    render: {
      value: function render() {
        return React.createElement(
          "div",
          { className: "col_two_third col_last nobottommargin" },
          React.createElement(
            "h3",
            null,
            "Register Here"
          ),
          React.createElement(
            "p",
            null,
            "Register to save your pets health information here. Check back in whenever you need it - desktop or mobile."
          ),
          React.createElement(
            "form",
            { id: "register-form", name: "register-form", className: "nobottommargin" },
            React.createElement(
              "div",
              { className: "col_half" },
              React.createElement(
                "label",
                null,
                "First Name:"
              ),
              React.createElement("input", { type: "text", onChange: this.submitProfile, id: "firstName", name: "register-form-name", className: "required form-control input-block-level" })
            ),
            React.createElement(
              "div",
              { className: "col_half col_last" },
              React.createElement(
                "label",
                null,
                "Last Name:"
              ),
              React.createElement("input", { type: "text", onChange: this.submitProfile, id: "lastName", name: "register-form-email", className: "required form-control input-block-level" })
            ),
            React.createElement("div", { className: "clear" }),
            React.createElement(
              "div",
              { className: "col_half" },
              React.createElement(
                "label",
                null,
                "Email:"
              ),
              React.createElement("input", { type: "text", onChange: this.submitProfile, id: "email", name: "register-form-username", className: "required form-control input-block-level" })
            ),
            React.createElement(
              "div",
              { className: "col_half col_last" },
              React.createElement(
                "label",
                null,
                "Password:"
              ),
              React.createElement("input", { type: "text", onChange: this.submitProfile, id: "password", name: "register-form-phone", className: "required form-control input-block-level" })
            ),
            React.createElement("div", { className: "clear" }),
            React.createElement(
              "div",
              { className: "col_full nobottommargin" },
              React.createElement(
                "button",
                { onClick: this.register, className: "button button-3d button-black nomargin", id: "register-form-submit", name: "register-form-submit", value: "register" },
                "Register"
              )
            )
          )
        );
      },
      writable: true,
      configurable: true
    }
  });

  return Register;
})(Component);

module.exports = Register;