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

var connect = require("react-redux").connect;
var TopBarLogin = (function (Component) {
	function TopBarLogin(props, context) {
		_classCallCheck(this, TopBarLogin);

		_get(Object.getPrototypeOf(TopBarLogin.prototype), "constructor", this).call(this, props, context);
		this.submitUser = this.submitUser.bind(this);
		this.login = this.login.bind(this);
	}

	_inherits(TopBarLogin, Component);

	_prototypeProperties(TopBarLogin, null, {
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
				var checkCurrentUser = this.props.currentUser || {};
				console.log("CHECK_CURRENT_USER: " + JSON.stringify(checkCurrentUser));

				api.handlePost("/account/login", checkCurrentUser, function (err, response) {
					console.log("POST LOGIN CHECK_CURRENT_USER: " + JSON.stringify(checkCurrentUser));
					if (err != null) {
						alert(err.message);
						return;
					}

					console.log("POST LOGIN: " + JSON.stringify(response));

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
					"form",
					{ id: "top-login", role: "form" },
					React.createElement(
						"div",
						{ className: "input-group", id: "top-login-username" },
						React.createElement(
							"span",
							{ className: "input-group-addon" },
							React.createElement("i", { className: "icon-user" })
						),
						React.createElement("input", { onChange: this.submitUser, id: "email", type: "email", className: "form-control", placeholder: "Email" })
					),
					React.createElement(
						"div",
						{ className: "input-group", id: "top-login-password" },
						React.createElement(
							"span",
							{ className: "input-group-addon" },
							React.createElement("i", { className: "icon-key" })
						),
						React.createElement("input", { onChange: this.submitUser, id: "password", type: "password", className: "form-control", placeholder: "Password" })
					),
					React.createElement(
						"label",
						{ className: "checkbox" },
						React.createElement("input", { type: "checkbox", value: "remember-me" }),
						" Remember me"
					),
					React.createElement(
						"button",
						{ onClick: this.login, className: "btn btn-danger btn-block", type: "submit" },
						"Sign in"
					)
				);
			},
			writable: true,
			configurable: true
		}
	});

	return TopBarLogin;
})(Component);

var stateToProps = function (state) {
	return {
		currentUser: state.accountReducer.currentUser
	};
};

module.exports = connect(stateToProps)(TopBarLogin);
// window.location.href = '/'