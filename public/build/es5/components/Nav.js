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

var Nav = (function (Component) {
	function Nav(props, context) {
		_classCallCheck(this, Nav);

		_get(Object.getPrototypeOf(Nav.prototype), "constructor", this).call(this, props, context);
		this.logout = this.logout.bind(this);
	}

	_inherits(Nav, Component);

	_prototypeProperties(Nav, null, {
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
					"header",
					{ id: "header" },
					React.createElement(
						"div",
						{ id: "header-wrap" },
						React.createElement(
							"div",
							{ className: "container clearfix" },
							React.createElement(
								"div",
								{ id: "primary-menu-trigger" },
								React.createElement("i", { className: "icon-reorder" })
							),
							React.createElement(
								"div",
								{ id: "logo" },
								React.createElement(
									"a",
									{ href: "/", className: "standard-logo", "data-dark-logo": "images/logo-dark.png" },
									React.createElement("img", { src: "/images/vet-fetch-title.png", alt: "Vet Fetch Logo" })
								),
								React.createElement(
									"a",
									{ href: "/", className: "retina-logo", "data-dark-logo": "images/logo-dark@2x.png" },
									React.createElement("img", { src: "/images/vet-fetch-title@2x.png", alt: "Vet Fetch Logo" })
								)
							),
							React.createElement(
								"nav",
								{ id: "primary-menu", className: "sub-title" },
								React.createElement(
									"ul",
									null,
									React.createElement(
										"li",
										null,
										React.createElement(
											"a",
											{ href: "/pets" },
											React.createElement(
												"div",
												null,
												React.createElement("i", { className: "icon-folder-open" })
											),
											React.createElement(
												"span",
												null,
												"Dashboard"
											)
										),
										React.createElement(
											"ul",
											null,
											React.createElement(
												"li",
												null,
												React.createElement(
													"a",
													{ href: "/pets" },
													React.createElement(
														"div",
														null,
														"My Pets"
													)
												)
											),
											React.createElement(
												"li",
												null,
												React.createElement(
													"a",
													{ href: "/register-pet" },
													React.createElement(
														"div",
														null,
														"Register A Pet"
													)
												)
											),
											React.createElement(
												"li",
												null,
												React.createElement(
													"a",
													{ href: "/vets" },
													React.createElement(
														"div",
														null,
														"Find Vets"
													)
												)
											),
											React.createElement(
												"li",
												null,
												React.createElement(
													"a",
													{ href: "/insurance" },
													React.createElement(
														"div",
														null,
														"Insurance Plans"
													)
												)
											)
										)
									),
									React.createElement(
										"li",
										null,
										React.createElement(
											"a",
											{ href: "#" },
											React.createElement(
												"div",
												null,
												React.createElement("i", { className: "icon-user4" })
											),
											React.createElement(
												"span",
												null,
												"Profile"
											)
										),
										React.createElement(
											"ul",
											null,
											React.createElement(
												"li",
												null,
												React.createElement(
													"a",
													{ href: "/account" },
													React.createElement(
														"div",
														null,
														"My Account"
													)
												)
											),
											React.createElement(
												"li",
												null,
												React.createElement(
													"a",
													{ href: "#", onClick: this.logout },
													React.createElement(
														"div",
														null,
														"Log Out"
													)
												)
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

	return Nav;
})(Component);

module.exports = Nav;