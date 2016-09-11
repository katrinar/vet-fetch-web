"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var Footer = (function (Component) {
	function Footer() {
		_classCallCheck(this, Footer);

		if (Component != null) {
			Component.apply(this, arguments);
		}
	}

	_inherits(Footer, Component);

	_prototypeProperties(Footer, null, {
		render: {
			value: function render() {
				return React.createElement(
					"footer",
					{ id: "footer", className: "dark" },
					React.createElement(
						"div",
						{ id: "copyrights" },
						React.createElement(
							"div",
							{ className: "container clearfix" },
							React.createElement(
								"div",
								{ className: "col_half" },
								"Copyrights © 2016 All Rights Reserved by Milkshake Tech."
							),
							React.createElement(
								"div",
								{ className: "col_half col_last tright" },
								React.createElement(
									"div",
									{ className: "fright clearfix" },
									React.createElement(
										"div",
										{ className: "copyrights-menu copyright-links nobottommargin" },
										React.createElement(
											"a",
											{ href: "/" },
											"Home"
										),
										"/",
										React.createElement(
											"a",
											{ href: "/pets" },
											"Pets"
										),
										"/",
										React.createElement(
											"a",
											{ href: "/vets" },
											"Vets"
										),
										"/",
										React.createElement(
											"a",
											{ href: "/account" },
											"Account"
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

	return Footer;
})(Component);

module.exports = Footer;