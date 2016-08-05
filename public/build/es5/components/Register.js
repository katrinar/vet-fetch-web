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
		this.state = {
			registerUser: {
				firstName: "",
				lastName: "",
				email: "",
				password: ""
			}
		};
	}

	_inherits(Register, Component);

	_prototypeProperties(Register, null, {
		componentDidMount: {
			value: function componentDidMount() {
				console.log("LOGIN COMPONENT: ");
			},
			writable: true,
			configurable: true
		},
		submitProfile: {
			value: function submitProfile(event) {
				var registerUser = Object.assign({}, this.state.registerUser);
				registerUser[event.target.id] = event.target.value;
				this.setState({
					registerUser: registerUser
				});
			},
			writable: true,
			configurable: true
		},
		register: {
			value: function register(event) {
				event.preventDefault();

				api.handlePost("/api/profile", this.state.registerUser, function (err, response) {
					if (err != null) {
						alert(err.message);
						return;
					}
					console.log(JSON.stringify(response.result));
					// store.dispatch(actions.receivedCurrentUser(response.result))
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
						"p",
						null,
						"Register"
					),
					React.createElement(
						"form",
						{ action: "/api/profile", method: "post" },
						React.createElement("input", { type: "text", onChange: this.submitProfile, id: "firstName", placeholder: "First Name" }),
						React.createElement("br", null),
						React.createElement("input", { type: "text", onChange: this.submitProfile, id: "lastName", placeholder: "Last Name" }),
						React.createElement("br", null),
						React.createElement("input", { type: "text", onChange: this.submitProfile, id: "email", placeholder: "Email" }),
						React.createElement("br", null),
						React.createElement("input", { type: "text", onChange: this.submitProfile, id: "password", placeholder: "password" }),
						React.createElement("br", null),
						React.createElement(
							"button",
							{ onClick: this.register },
							"Register"
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