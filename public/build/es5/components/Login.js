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

var Login = (function (Component) {
	function Login(props, context) {
		_classCallCheck(this, Login);

		_get(Object.getPrototypeOf(Login.prototype), "constructor", this).call(this, props, context);
		this.submitUser = this.submitUser.bind(this);
		this.login = this.login.bind(this);
	}

	_inherits(Login, Component);

	_prototypeProperties(Login, null, {
		submitUser: {
			value: function submitUser(event) {
				var loginUser = Object.assign({}, this.props.currentUser);
				loginUser[event.target.id] = event.target.value;
				store.dispatch(actions.receivedCurrentUser(loginUser));
			},
			writable: true,
			configurable: true
		},
		login: {
			value: function login(event) {
				event.preventDefault();

				api.handlePost("/account/login", this.props.currentUser, function (err, response) {
					if (err != null) {
						alert(err.message);
						return;
					}

					if (response.confirmation == "Fail") {
						alert(response.message);
					}

					if (response.confirmation == "Success") {
						store.dispatch(actions.receivedCurrentUser(response.currentUser));
					}
				});
			},
			writable: true,
			configurable: true
		},
		render: {
			value: function render() {
				return React.createElement(
					"div",
					{ className: "col_one_third nobottommargin" },
					React.createElement(
						"div",
						{ className: "well well-lg nobottommargin" },
						React.createElement(
							"form",
							{ id: "login-form", name: "login-form", className: "nobottommargin" },
							React.createElement(
								"h3",
								null,
								"Already Have an Account? Login Here."
							),
							React.createElement(
								"div",
								{ className: "col_full" },
								React.createElement(
									"label",
									null,
									"Email:"
								),
								React.createElement("input", { type: "text", className: "required form-control input-block-level", onChange: this.submitUser, id: "email" }),
								React.createElement("br", null)
							),
							React.createElement(
								"div",
								{ className: "col_full" },
								React.createElement(
									"label",
									null,
									"Password:"
								),
								React.createElement("input", { type: "password", className: "required form-control input-block-level", onChange: this.submitUser, id: "password" }),
								React.createElement("br", null)
							),
							React.createElement(
								"div",
								{ className: "col_full nobottommargin" },
								React.createElement(
									"button",
									{ onClick: this.login, className: "button button-3d nomargin", id: "login-form-submit", name: "login-form-submit" },
									"Login"
								)
							)
						)
					)
				);
			},
			writable: true,
			configurable: true
		}
	});

	return Login;
})(Component);

module.exports = Login;