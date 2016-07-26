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

var store = _interopRequire(require("../stores/store"));

var actions = _interopRequire(require("../actions/actions"));

var connect = require("react-redux").connect;
var Register = (function (Component) {
	function Register(props, context) {
		_classCallCheck(this, Register);

		_get(Object.getPrototypeOf(Register.prototype), "constructor", this).call(this, props, context);
		this.updateUser = this.updateUser.bind(this);
		this.register = this.register.bind(this);
		this.updateCredentials = this.updateCredentials.bind(this);
		this.login = this.login.bind(this);
		this.state = {
			newUser: {
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

	_inherits(Register, Component);

	_prototypeProperties(Register, null, {
		componentDidMount: {
			value: function componentDidMount() {
				console.log("Register componentDidMount");
			},
			writable: true,
			configurable: true
		},
		updateUser: {
			value: function updateUser(event) {
				// console.log('updateUser: '+event.target.id+' == '+event.target.value)
				var updatedUser = Object.assign({}, this.state.newUser);
				updatedUser[event.target.id] = event.target.value;
				this.setState({
					newUser: updatedUser
				});
			},
			writable: true,
			configurable: true
		},
		register: {
			value: function register(event) {
				event.preventDefault();
				api.handlePost("/api/profile", this.state.newUser, function (err, result) {
					if (err) {
						alert(err.message);
						return;
					}
					store.dispatch(actions.profileReceived(result));
					console.log("REGISTER PROFILE POST RESPONSE: " + JSON.stringify(result));

					window.location.href = "/account";
				});
			},
			writable: true,
			configurable: true
		},
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
						"h2",
						null,
						"New? Sign up to check out pet insurance options"
					),
					React.createElement(
						"p",
						null,
						"Register"
					),
					React.createElement(
						"form",
						{ action: "/api/profile", method: "post" },
						React.createElement("input", { type: "text", onChange: this.updateUser, id: "firstName", placeholder: "First Name" }),
						React.createElement("br", null),
						React.createElement("input", { type: "text", onChange: this.updateUser, id: "lastName", placeholder: "Last Name" }),
						React.createElement("br", null),
						React.createElement("input", { type: "text", onChange: this.updateUser, id: "email", placeholder: "Email" }),
						React.createElement("br", null),
						React.createElement("input", { type: "text", onChange: this.updateUser, id: "password", placeholder: "Password" }),
						React.createElement("br", null),
						React.createElement(
							"button",
							{ onClick: this.register },
							"Register"
						)
					),
					React.createElement(
						"p",
						null,
						"Login"
					),
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

	return Register;
})(Component);

var stateToProps = function (state) {
	console.log("REGISTER PROFILE STATE TO PROPS: " + JSON.stringify(state));
	return {

		profile: state.accountReducer.profile
	};

};

module.exports = connect(stateToProps)(Register);