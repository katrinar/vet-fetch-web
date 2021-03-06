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
var SignUpModal = (function (Component) {
	function SignUpModal(props, context) {
		_classCallCheck(this, SignUpModal);

		_get(Object.getPrototypeOf(SignUpModal.prototype), "constructor", this).call(this, props, context);
		this.submitProfile = this.submitProfile.bind(this);
		this.register = this.register.bind(this);
	}

	_inherits(SignUpModal, Component);

	_prototypeProperties(SignUpModal, null, {
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
					{ className: "modal fade", id: "signUpModal", tabIndex: "-1", role: "dialog", "aria-labelledby": "myModalLabel", "aria-hidden": "true" },
					React.createElement(
						"div",
						{ className: "modal-dialog" },
						React.createElement(
							"div",
							{ className: "modal-body" },
							React.createElement(
								"div",
								{ className: "modal-content" },
								React.createElement(
									"div",
									{ className: "modal-header" },
									React.createElement(
										"button",
										{ type: "button", className: "close", "data-dismiss": "modal", "aria-hidden": "true" },
										"×"
									),
									React.createElement(
										"h4",
										{ className: "modal-title", id: "myModalLabel" },
										"Sign Up"
									)
								),
								React.createElement(
									"div",
									{ className: "modal-body" },
									React.createElement(
										"form",
										{ className: "nobottommargin" },
										React.createElement(
											"div",
											{ className: "col_full" },
											React.createElement(
												"label",
												null,
												"Username:"
											),
											React.createElement("input", { type: "text", className: "required form-control input-block-level", onChange: this.submitProfile, id: "username" }),
											React.createElement("br", null)
										),
										React.createElement(
											"div",
											{ className: "col_full" },
											React.createElement(
												"label",
												null,
												"Email:"
											),
											React.createElement("input", { type: "text", className: "required form-control input-block-level", onChange: this.submitProfile, id: "email" }),
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
											React.createElement("input", { type: "password", className: "required form-control input-block-level", onChange: this.submitProfile, id: "password" }),
											React.createElement("br", null)
										),
										React.createElement(
											"div",
											{ className: "col_full nobottommargin" },
											React.createElement(
												"button",
												{ onClick: this.register, className: "button button-3d nomargin", id: "login-form-submit", name: "login-form-submit" },
												"Sign Up"
											)
										)
									)
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

	return SignUpModal;
})(Component);

var stateToProps = function (state) {
	console.log("STATE_TO_PROPS_REGISTER: USER = " + JSON.stringify(state.accountReducer.currentUser));

	return {
		currentUser: state.accountReducer.currentUser
	};
};

module.exports = connect(stateToProps)(SignUpModal);