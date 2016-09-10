"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var text = _interopRequire(require("../utils/text"));

var EditProfile = _interopRequire(require("../components/EditProfile"));

var navigation = _interopRequire(require("../utils/navigation"));

var Nav = _interopRequire(require("../components/Nav"));

var Footer = _interopRequire(require("../components/Footer"));

var AccountContent = (function (Component) {
	function AccountContent() {
		_classCallCheck(this, AccountContent);

		if (Component != null) {
			Component.apply(this, arguments);
		}
	}

	_inherits(AccountContent, Component);

	_prototypeProperties(AccountContent, null, {
		render: {
			value: function render() {
				return React.createElement(
					"div",
					null,
					React.createElement(Nav, null),
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
							)
						)
					),
					React.createElement(
						"section",
						{ id: "content" },
						React.createElement(
							"div",
							{ className: "content-wrap" },
							React.createElement(
								"div",
								{ className: "container clearfix" },
								React.createElement(
									"div",
									{ className: "postcontent bothsidebar nobottommargin clearfix" },
									React.createElement(
										"div",
										{ className: "col_half nobottommargin" },
										React.createElement(
											"h4",
											null,
											"Name"
										),
										React.createElement(
											"div",
											{ className: "well well-sm nobottommargin" },
											text.capitalize(this.props.currentUser.firstName),
											" ",
											text.capitalize(this.props.currentUser.lastName)
										)
									),
									React.createElement("div", { className: "divider" }),
									React.createElement(
										"div",
										{ className: "col_half nobottommargin col_last" },
										React.createElement(
											"h4",
											null,
											"Email"
										),
										React.createElement(
											"div",
											{ className: "well well-sm nobottommargin" },
											this.props.currentUser.email,
											" "
										)
									),
									React.createElement("div", { className: "divider" }),
									React.createElement(
										"a",
										{ href: "#", onClick: navigation.editProfile, className: "button button-3d button-small button-rounded button-aqua" },
										"Edit Account"
									),
									React.createElement(
										"div",
										{ className: "divider" },
										React.createElement("i", { className: "icon-circle" })
									)
								)
							)
						)
					),
					React.createElement(Footer, null)
				);
			},
			writable: true,
			configurable: true
		}
	});

	return AccountContent;
})(Component);

module.exports = AccountContent;