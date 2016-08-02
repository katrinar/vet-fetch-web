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

var store = _interopRequire(require("../stores/store"));

var connect = require("react-redux").connect;
var actions = _interopRequire(require("../actions/actions"));

var RegisterPet = (function (Component) {
	function RegisterPet(props, context) {
		_classCallCheck(this, RegisterPet);

		_get(Object.getPrototypeOf(RegisterPet.prototype), "constructor", this).call(this, props, context);
		this.submitPet = this.submitPet.bind(this);
		this.registerPet = this.registerPet.bind(this);
		this.state = {
			registerPet: {
				name: "",
				breed: "",
				ownerId: null,
				slug: null
			}
		};
	}

	_inherits(RegisterPet, Component);

	_prototypeProperties(RegisterPet, null, {
		submitPet: {
			value: function submitPet(event) {
				var registerPet = Object.assign({}, this.state.registerPet);
				registerPet[event.target.id] = event.target.value;
				registerPet.ownerId = this.props.currentUser.id;
				this.setState({
					registerPet: registerPet
				});
			},
			writable: true,
			configurable: true
		},
		registerPet: {
			value: function registerPet(event) {
				event.preventDefault();
				api.handlePost("/api/pet", this.state.registerPet, function (err, response) {
					if (err) {
						alert(err.message);
						return;
					}
					console.log(JSON.stringify(response.result));
					store.dispatch(actions.registerPet(response.result));
				});
			},
			writable: true,
			configurable: true
		},
		render: {
			value: function render() {
				return React.createElement(
					"div",
					null,
					React.createElement(
						"p",
						null,
						"Register your Pet"
					),
					React.createElement(
						"form",
						{ action: "/api/pet", method: "post" },
						React.createElement("input", { type: "text", onChange: this.submitPet, id: "name", placeholder: "Name" }),
						React.createElement("br", null),
						React.createElement("input", { type: "text", onChange: this.submitPet, id: "breed", placeholder: "Breed" }),
						React.createElement("br", null),
						React.createElement(
							"button",
							{ onClick: this.registerPet },
							"Register Pet"
						)
					)
				);
			},
			writable: true,
			configurable: true
		}
	});

	return RegisterPet;
})(Component);

var stateToProps = function (state) {
	console.log("STATE_TO_PROPS_REGISTER_PET: " + JSON.stringify(state));
	return {
		currentUser: state.accountReducer.currentUser,
		pets: state.petReducer.petsArray
	};
};

module.exports = connect(stateToProps)(RegisterPet);