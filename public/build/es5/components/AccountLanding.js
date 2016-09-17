"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var navigation = _interopRequire(require("../utils/navigation"));

var TopBar = _interopRequire(require("../components/TopBar"));

var Nav = _interopRequire(require("../components/Nav"));

var Footer = _interopRequire(require("../components/Footer"));

var LandingSignUp = _interopRequire(require("../components/LandingSignUp"));

var AccountLanding = (function (Component) {
	function AccountLanding() {
		_classCallCheck(this, AccountLanding);

		if (Component != null) {
			Component.apply(this, arguments);
		}
	}

	_inherits(AccountLanding, Component);

	_prototypeProperties(AccountLanding, null, {
		render: {
			value: function render() {


				return React.createElement(
					"div",
					null,
					React.createElement(TopBar, null),
					React.createElement(Nav, null),
					React.createElement(
						"section",
						{ id: "slider", className: "slider-parallax full-screen dark", style: { background: "url(\"/images/landing/cover2.jpg\") center", opacity: 0.7, overflow: "visible" } },
						React.createElement(
							"div",
							{ className: "container vertical-middle clearfix" },
							React.createElement(
								"div",
								{ className: "heading-block title-left nobottomborder" },
								React.createElement(
									"h1",
									null,
									"Sign Up Today"
								)
							),
							React.createElement(LandingSignUp, { currentUser: this.props.currentUser })
						)
					),
					React.createElement(
						"section",
						{ id: "page-title" },
						React.createElement(
							"div",
							{ className: "container clearfix" },
							React.createElement(
								"h1",
								null,
								"Account"
							),
							React.createElement(
								"span",
								null,
								"Get started today - log in or sign up to register your pet and save their healh information."
							)
						)
					),
					React.createElement(
						"div",
						{ className: "section notopmargin nobottommargin" },
						React.createElement("div", { className: "container clearfix" })
					),
					React.createElement(Footer, null)
				);
			},
			writable: true,
			configurable: true
		}
	});

	return AccountLanding;
})(Component);

module.exports = AccountLanding;