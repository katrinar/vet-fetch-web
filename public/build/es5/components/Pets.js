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

var navigation = _interopRequire(require("../utils/navigation"));

var RegisterPet = _interopRequire(require("../components/RegisterPet"));

var PetList = _interopRequire(require("../components/PetList"));

var PetProfile = _interopRequire(require("../components/PetProfile"));

var store = _interopRequire(require("../stores/store"));

var actions = _interopRequire(require("../actions/actions"));

var connect = require("react-redux").connect;
var Pets = (function (Component) {
	function Pets(props, context) {
		_classCallCheck(this, Pets);

		_get(Object.getPrototypeOf(Pets.prototype), "constructor", this).call(this, props, context);
	}

	_inherits(Pets, Component);

	_prototypeProperties(Pets, null, {
		componentDidMount: {
			value: function componentDidMount() {
				console.log("PETS COMPONENT DID MOUNT:");
			},
			writable: true,
			configurable: true
		},
		render: {
			value: function render() {
				return React.createElement(
					"div",
					null,
					React.createElement(RegisterPet, null),
					React.createElement("br", null),
					React.createElement(PetList, null),
					React.createElement("br", null),
					React.createElement(
						"button",
						{ onClick: navigation.accountPage },
						"Back to Home"
					)
				);
			},
			writable: true,
			configurable: true
		}
	});

	return Pets;
})(Component);

var stateToProps = function (state) {
	console.log("STATE_TO_PROPS_PETS: " + JSON.stringify(state));
	return {
		currentUser: state.accountReducer.currentUser,
		petsArray: state.petReducer.petsArray
	};
};

module.exports = connect(stateToProps)(Pets);