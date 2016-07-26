"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var ReactDOM = _interopRequire(require("react-dom"));

var api = _interopRequire(require("../utils/api"));

var store = _interopRequire(require("../stores/store"));

var actions = _interopRequire(require("../actions/actions"));

var connect = require("react-redux").connect;
var Pets = (function (Component) {
	function Pets(props, context) {
		_classCallCheck(this, Pets);

		_get(Object.getPrototypeOf(Pets.prototype), "constructor", this).call(this, props, context);
		this.state = {};
	}

	_inherits(Pets, Component);

	_prototypeProperties(Pets, null, {
		componentDidMount: {
			value: function componentDidMount() {
				var _this = this;
				api.handleGet("/api/pet", null, function (err, results) {
					if (err) {
						alert(err.message);
						return;
					}

					console.log("PETS GET RESPONSE: " + JSON.stringify(results.results));
					store.dispatch(actions.petsReceived(results.results));
					return;
				});
			},
			writable: true,
			configurable: true
		},
		render: {
			value: function render() {
				var petList = this.props.pets.map(function (pet, i) {
					return React.createElement(
						"li",
						{ key: pet.id },
						pet.name
					);
				});

				return React.createElement(
					"div",
					null,
					React.createElement(
						"ol",
						null,
						petList
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
	console.log("PETS STATE TO PROPS: " + JSON.stringify(state));
	return {
		pets: state.petReducer.petsArray
	};
};



module.exports = connect(stateToProps)(Pets);