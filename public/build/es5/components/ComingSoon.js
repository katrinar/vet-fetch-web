"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var TopBar = _interopRequire(require("../components/TopBar"));

var Nav = _interopRequire(require("../components/Nav"));

var Footer = _interopRequire(require("../components/Footer"));

var ComingSoon = (function (Component) {
	function ComingSoon() {
		_classCallCheck(this, ComingSoon);

		if (Component != null) {
			Component.apply(this, arguments);
		}
	}

	_inherits(ComingSoon, Component);

	_prototypeProperties(ComingSoon, null, {
		render: {
			value: function render() {
				return React.createElement(
					"div",
					null,
					React.createElement(TopBar, null),
					React.createElement(Nav, null),
					React.createElement(
						"div",
						{ className: "content-wrap" },
						React.createElement(
							"div",
							{ className: "container clearfix" },
							React.createElement(
								"div",
								{ className: "heading-block title-center nobottomborder" },
								React.createElement(
									"h1",
									null,
									"Coming Soon!"
								),
								React.createElement(
									"span",
									null,
									"Please check back again in a few days."
								)
							),
							React.createElement("div", { className: "clear" }),
							React.createElement(
								"div",
								{ className: "progress progress-striped active topmargin divcenter", style: { height: 10, maxWidth: 600 } },
								React.createElement(
									"div",
									{ className: "progress-bar progress-bar-danger", role: "progressbar", "aria-valuenow": "80", "aria-valuemin": "0", "aria-valuemax": "100", style: { width: 80 } },
									React.createElement(
										"span",
										{ className: "sr-only" },
										"80% Complete"
									)
								)
							),
							React.createElement(
								"div",
								{ className: "divider divider-center divider-short divider-margin" },
								React.createElement("i", { className: "icon-time" })
							),
							React.createElement("div", { id: "widget-subscribe-form-result", "data-notify-type": "success", "data-notify-msg": "" }),
							React.createElement(
								"form",
								{ id: "widget-subscribe-form", action: "include/subscribe.php", role: "form", className: "nobottommargin" },
								React.createElement(
									"div",
									{ className: "input-group input-group-lg divcenter", style: { maxWidth: 600 } },
									React.createElement(
										"span",
										{ className: "input-group-addon" },
										React.createElement("i", { className: "icon-email2" })
									),
									React.createElement("input", { type: "email", name: "widget-subscribe-form-email", className: "form-control required email", placeholder: "Enter your Email" }),
									React.createElement(
										"span",
										{ className: "input-group-btn" },
										React.createElement(
											"button",
											{ className: "btn btn-default", type: "submit" },
											"Subscribe Now"
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

	return ComingSoon;
})(Component);

module.exports = ComingSoon;