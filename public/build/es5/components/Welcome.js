"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var ReactDOM = _interopRequire(require("react-dom"));

var Register = _interopRequire(require("../components/Register"));

var Login = _interopRequire(require("../components/Login"));

var Welcome = (function (Component) {
	function Welcome() {
		_classCallCheck(this, Welcome);

		if (Component != null) {
			Component.apply(this, arguments);
		}
	}

	_inherits(Welcome, Component);

	_prototypeProperties(Welcome, null, {
		render: {
			value: function render() {
				return React.createElement(
					"div",
					null,
					React.createElement(
						"p",
						null,
						"New? Sign up to check out pet insurance options"
					),
					React.createElement(
						"div",
						null,
						React.createElement(Register, null),
						React.createElement("br", null),
						React.createElement(Login, null),
						React.createElement("br", null)
					)
				);
			},
			writable: true,
			configurable: true
		}
	});

	return Welcome;
})(Component);

module.exports = Welcome;