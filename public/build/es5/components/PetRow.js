"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var api = _interopRequire(require("../utils/api"));

var PetRow = (function (Component) {
	function PetRow() {
		_classCallCheck(this, PetRow);

		if (Component != null) {
			Component.apply(this, arguments);
		}
	}

	_inherits(PetRow, Component);

	_prototypeProperties(PetRow, null, {
		componentDidMount: {
			value: function componentDidMount() {},
			writable: true,
			configurable: true
		},
		render: {
			value: function render() {
				return React.createElement(
					"div",
					null,
					React.createElement(
						"a",
						{ href: "/pet/" + this.props.pet.slug },
						" ",
						this.props.pet.name,
						","
					),
					" ",
					this.props.pet.breed
				);
			},
			writable: true,
			configurable: true
		}
	});

	return PetRow;
})(Component);

module.exports = PetRow;