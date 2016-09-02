"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var VetSearchResultsRow = (function (Component) {
	function VetSearchResultsRow() {
		_classCallCheck(this, VetSearchResultsRow);

		if (Component != null) {
			Component.apply(this, arguments);
		}
	}

	_inherits(VetSearchResultsRow, Component);

	_prototypeProperties(VetSearchResultsRow, null, {
		render: {
			value: function render() {
				var vets = this.props.search || {};
				var results = vets.vetResults;

				console.log("VET_SEARCH_RESULTS ROW: " + JSON.stringify(vets));
				return React.createElement(
					"div",
					null,
					this.props.vet.name
				);
			},
			writable: true,
			configurable: true
		}
	});

	return VetSearchResultsRow;
})(Component);

module.exports = VetSearchResultsRow;