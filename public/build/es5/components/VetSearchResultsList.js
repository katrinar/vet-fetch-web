"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var VetSearchResultsRow = _interopRequire(require("../components/VetSearchResultsRow"));

var VetSearchResultsList = (function (Component) {
	function VetSearchResultsList() {
		_classCallCheck(this, VetSearchResultsList);

		if (Component != null) {
			Component.apply(this, arguments);
		}
	}

	_inherits(VetSearchResultsList, Component);

	_prototypeProperties(VetSearchResultsList, null, {
		render: {
			value: function render() {
				var vets = this.props.search || {};
				// console.log('VET_SEARCH_RESULTS LIST: '+JSON.stringify(vets))

				if (vets.searchStatus == "ZERO_RESULTS") {
					alert("Hm we couldn't find any vets in your area. Try another zipcode.");
				}

				// var vetList = this.props.search.vetResults.map(function(vet, i){
				// 	return <li key={vet.id}>{vet.name}</li>
				// })

				var vetList = this.props.search.vetResults.map(function (vet, i) {
					return React.createElement(VetSearchResultsRow, { key: vet.id, vet: vet });
				});

				return React.createElement(
					"div",
					null,
					vetList
				);
			},
			writable: true,
			configurable: true
		}
	});

	return VetSearchResultsList;
})(Component);

module.exports = VetSearchResultsList;