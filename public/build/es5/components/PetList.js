"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var store = _interopRequire(require("../stores/store"));

var actions = _interopRequire(require("../actions/actions"));

var connect = require("react-redux").connect;
var PetList = (function (Component) {
	function PetList() {
		_classCallCheck(this, PetList);

		if (Component != null) {
			Component.apply(this, arguments);
		}
	}

	_inherits(PetList, Component);

	_prototypeProperties(PetList, null, {
		render: {
			value: function render() {
				var petList = this.props.pets.map(function (pet, i) {
					return React.createElement(
						"li",
						{ key: pet._id },
						" ",
						pet.name,
						" "
					);
				});
				return React.createElement(
					"div",
					null,
					petList
				);
			},
			writable: true,
			configurable: true
		}
	});

	return PetList;
})(Component);

var stateToProps = function (state) {
	return {
		pets: state.petReducer.petsArray
	};
};

module.exports = connect(stateToProps)(PetList);