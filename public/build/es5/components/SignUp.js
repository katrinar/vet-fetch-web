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

var SignUp = (function (Component) {
	function SignUp(props, context) {
		_classCallCheck(this, SignUp);

		_get(Object.getPrototypeOf(SignUp.prototype), "constructor", this).call(this, props, context);
		this.submitProfile = this.submitProfile.bind(this);
		this.register = this.register.bind(this);
	}

	_inherits(SignUp, Component);

	_prototypeProperties(SignUp, null, {
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
					"form",
					{ className: "landing-wide-form clearfix" },
					React.createElement(
						"div",
						{ className: "col_four_fifth nobottommargin" },
						React.createElement(
							"div",
							{ className: "col_one_third nobottommargin" },
							React.createElement("input", { onChange: this.submitProfile, id: "username", type: "text", className: "form-control input-lg not-dark", placeholder: "Username*" })
						),
						React.createElement(
							"div",
							{ className: "col_one_third nobottommargin" },
							React.createElement("input", { onChange: this.submitProfile, id: "email", type: "email", className: "form-control input-lg not-dark", placeholder: "Email*" })
						),
						React.createElement(
							"div",
							{ className: "col_one_third col_last nobottommargin" },
							React.createElement("input", { onChange: this.submitProfile, id: "password", type: "password", className: "form-control input-lg not-dark", placeholder: "Password*" })
						)
					),
					React.createElement(
						"div",
						{ className: "col_one_fifth col_last nobottommargin" },
						React.createElement(
							"button",
							{ onClick: this.register, className: "btn btn-lg btn-danger btn-block nomargin" },
							"SIGN UP"
						)
					)
				);
			},
			writable: true,
			configurable: true
		}
	});

	return SignUp;
})(Component);

module.exports = SignUp;