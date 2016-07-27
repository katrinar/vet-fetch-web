"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var ReactDOM = _interopRequire(require("react-dom"));

var api = _interopRequire(require("../utils/api"));

var Login = (function (Component) {
	function Login(props, context) {
		_classCallCheck(this, Login);

		_get(Object.getPrototypeOf(Login.prototype), "constructor", this).call(this, props, context);
		this.updateCredentials = this.updateCredentials.bind(this);
		this.login = this.login.bind(this);
		this.state = {
			user: {

				firstName: "",
				lastName: "",
				email: "",
				password: ""
			},
			credentials: {
				email: "",
				password: ""
			}
		};
	}

	_inherits(Login, Component);

	_prototypeProperties(Login, null, {
		updateCredentials: {
			value: function updateCredentials(event) {
				var credentials = Object.assign({}, this.state.credentials);
				credentials[event.target.id] = event.target.value;
				this.setState({
					credentials: credentials
				});
			},
			writable: true,
			configurable: true
		},
		login: {
			value: function login(event) {
				event.preventDefault();

				api.handlePost("/account/login", this.state.credentials, function (err, response) {
					if (err != null) {
						alert(err.message);
						return;
					}

					console.log(JSON.stringify(response));
					window.location.href = "/account";
				});
			},
			writable: true,
			configurable: true
		},
		render: {
			value: function render() {
				return React.createElement(
					"div",
					null,
					React.createElement(
						"form",
						{ action: "/account/login", method: "post" },
						React.createElement("input", { type: "text", onChange: this.updateCredentials, id: "email", placeholder: "Email" }),
						React.createElement("br", null),
						React.createElement("input", { type: "text", onChange: this.updateCredentials, id: "password", placeholder: "Password" }),
						React.createElement("br", null),
						React.createElement(
							"button",
							{ onClick: this.login },
							"Login"
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