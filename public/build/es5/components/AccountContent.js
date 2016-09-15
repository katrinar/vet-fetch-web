"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var text = _interopRequire(require("../utils/text"));

var api = _interopRequire(require("../utils/api"));

var navigation = _interopRequire(require("../utils/navigation"));

var TopBar = _interopRequire(require("../components/TopBar"));

var Nav = _interopRequire(require("../components/Nav"));

var EditAccount = _interopRequire(require("../components/EditAccount"));

var EditProfile = _interopRequire(require("../components/EditProfile"));

var Footer = _interopRequire(require("../components/Footer"));

var AccountContent = (function (Component) {
	function AccountContent(props, context) {
		_classCallCheck(this, AccountContent);

		_get(Object.getPrototypeOf(AccountContent.prototype), "constructor", this).call(this, props, context);
		this.logout = this.logout.bind(this);
	}

	_inherits(AccountContent, Component);

	_prototypeProperties(AccountContent, null, {
		logout: {
			value: function logout(event) {
				event.preventDefault();

				api.handleGet("account/logout", null, function (err, response) {
					if (err) {
						alert(err.message);
						return;
					}
					window.location.href = "/";
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
					React.createElement(TopBar, null),
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
									{ className: "fancy-title title-double-border" },
									React.createElement(
										"h2",
										null,
										"Welcome, ",
										text.capitalize(this.props.currentUser.username)
									)
								),
								React.createElement(
									"div",
									{ id: "side-navigation" },
									React.createElement(
										"div",
										{ className: "col_one_third nobottommargin" },
										React.createElement(
											"ul",
											{ className: "sidenav" },
											React.createElement(
												"li",
												{ className: "ui-tabs-active" },
												React.createElement(
													"a",
													{ href: "#snav-content1" },
													React.createElement("i", { className: "icon-screen" }),
													"Account Basics",
													React.createElement("i", { className: "icon-chevron-right" })
												)
											),
											React.createElement(
												"li",
												null,
												React.createElement(
													"a",
													{ href: "#snav-content2" },
													React.createElement("i", { className: "icon-user4" }),
													"Profile",
													React.createElement("i", { className: "icon-chevron-right" })
												)
											),
											React.createElement(
												"li",
												null,
												React.createElement(
													"a",
													{ href: "#snav-content3" },
													React.createElement("i", { className: "icon-lightbulb" }),
													"Notifications",
													React.createElement("i", { className: "icon-chevron-right" })
												)
											)
										),
										React.createElement(
											"a",
											{ href: "#", onClick: this.logout, className: "button button-3d button-small button-rounded button-aqua" },
											"Logout"
										)
									),
									React.createElement(
										"div",
										{ className: "col_two_third col_last nobottommargin" },
										React.createElement(
											"div",
											{ id: "snav-content1" },
											React.createElement(
												"h3",
												null,
												"Account Basics"
											),
											React.createElement(
												"div",
												{ className: "col_half nobottommargin" },
												React.createElement(
													"h4",
													null,
													"First Name"
												),
												React.createElement(
													"div",
													{ className: "well well-sm nobottommargin" },
													text.capitalize(this.props.currentUser.firstName)
												)
											),
											React.createElement(
												"div",
												{ className: "col_half nobottommargin col_last" },
												React.createElement(
													"h4",
													null,
													"Last Name"
												),
												React.createElement(
													"div",
													{ className: "well well-sm nobottommargin" },
													text.capitalize(this.props.currentUser.lastName),
													" "
												)
											),
											React.createElement("div", { className: "divider" }),
											React.createElement(
												"div",
												{ className: "col_half nobottommargin" },
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
											React.createElement(
												"div",
												{ className: "col_half nobottommargin col_last" },
												React.createElement(
													"h4",
													null,
													"Password"
												),
												React.createElement(
													"div",
													{ className: "well well-sm nobottommargin" },
													"Change Password"
												)
											),
											React.createElement("div", { className: "divider" }),
											React.createElement(
												"a",
												{ href: "#", className: "button button-3d button-small button-rounded button-aqua", "data-toggle": "modal", "data-target": "#editAccountModal" },
												"Edit Account"
											),
											React.createElement(EditAccount, { currentUser: this.props.currentUser })
										),
										React.createElement("div", { className: "clearfix" }),
										React.createElement(
											"div",
											{ className: "divider divider-short divider-rounded divider-center" },
											React.createElement("i", { className: "icon-pencil" })
										),
										React.createElement(
											"div",
											{ id: "snav-content2" },
											React.createElement(
												"h3",
												null,
												"Profile"
											),
											React.createElement(
												"div",
												{ className: "col_half nobottommargin" },
												React.createElement(
													"h4",
													null,
													"Username"
												),
												React.createElement(
													"div",
													{ className: "well well-sm nobottommargin" },
													text.capitalize(this.props.currentUser.username),
													" "
												)
											),
											React.createElement("div", { className: "divider" }),
											React.createElement(
												"a",
												{ href: "#", className: "button button-3d button-small button-rounded button-aqua", "data-toggle": "modal", "data-target": "#editProfileModal" },
												"Edit Profile"
											),
											React.createElement(EditProfile, { currentUser: this.props.currentUser })
										),
										React.createElement("div", { className: "clearfix" }),
										React.createElement(
											"div",
											{ className: "divider divider-short divider-rounded divider-center" },
											React.createElement("i", { className: "icon-pencil" })
										),
										React.createElement(
											"div",
											{ id: "snav-content3" },
											React.createElement(
												"h3",
												null,
												"Notifications"
											),
											React.createElement(
												"h4",
												null,
												"Coming Soon!"
											),
											React.createElement(
												"p",
												null,
												"We will let you know about important updates, but you can pick what else you want to hear about here."
											)
										)
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