"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var Login = _interopRequire(require("../components/Login"));

var Nav = (function (Component) {
	function Nav() {
		_classCallCheck(this, Nav);

		if (Component != null) {
			Component.apply(this, arguments);
		}
	}

	_inherits(Nav, Component);

	_prototypeProperties(Nav, null, {
		render: {
			value: function render() {
				return React.createElement(
					"header",
					{ id: "header", className: "full-header dark" },
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
									{ href: "/", className: "standard-logo", "data-dark-logo": "/images/vet-fetch.png" },
									React.createElement("img", { src: "/images/vet-fetch.png", alt: "Vet Fetch Logo" })
								),
								React.createElement(
									"a",
									{ href: "/", className: "retina-logo", "data-dark-logo": "/images/vet-fetch@2x.png" },
									React.createElement("img", { src: "/images/vet-fetch@2x.png", alt: "Vet Fetch Logo" })
								)
							),
							React.createElement(
								"nav",
								{ id: "primary-menu" },
								React.createElement(
									"ul",
									null,
									React.createElement(
										"li",
										null,
										React.createElement(
											"a",
											{ href: "/" },
											React.createElement(
												"div",
												null,
												"Home"
											)
										)
									),
									React.createElement(
										"li",
										null,
										React.createElement(
											"a",
											{ href: "/pets" },
											React.createElement(
												"div",
												null,
												"Pets"
											)
										),
										" "
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
												"Vets"
											)
										)
									),
									React.createElement(
										"li",
										null,
										React.createElement(
											"a",
											{ href: "/account" },
											React.createElement(
												"div",
												null,
												"Account"
											)
										)
									),
									React.createElement(
										"li",
										null,
										React.createElement(
											"a",
											{ href: "#", "data-toggle": "modal", "data-target": "#myModal" },
											React.createElement(
												"div",
												null,
												"Login"
											)
										)
									)
								)
							)
						),
						React.createElement(Login, { currentUser: this.props.currentUser })
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