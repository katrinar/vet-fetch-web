"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var navigation = _interopRequire(require("../utils/navigation"));

var store = _interopRequire(require("../stores/store"));

var actions = _interopRequire(require("../actions/actions"));

var PetProfileInfo = (function (Component) {
	function PetProfileInfo(props, context) {
		_classCallCheck(this, PetProfileInfo);

		_get(Object.getPrototypeOf(PetProfileInfo.prototype), "constructor", this).call(this, props, context);
		this.sendToEdit = this.sendToEdit.bind(this);
	}

	_inherits(PetProfileInfo, Component);

	_prototypeProperties(PetProfileInfo, null, {
		sendToEdit: {
			value: function sendToEdit(event) {
				var changeDisplay = Object.assign({}, this.props.displayContent);
				changeDisplay = true;
				console.log("sendToEdit: displayContent props = " + JSON.stringify(this.props.displayContent) + ", changeDisplay = " + JSON.stringify(changeDisplay));
				store.dispatch(actions.toggleDisplay(changeDisplay));
			},
			writable: true,
			configurable: true
		},
		render: {
			value: function render() {
				var petSlug = this.props.slug;
				var petProfile = this.props.pets[petSlug] || {};

				return React.createElement(
					"div",
					null,
					React.createElement(
						"div",
						null,
						React.createElement(
							"button",
							{ onClick: navigation.petsPage },
							"Back to Pets"
						),
						" ",
						React.createElement("br", null),
						React.createElement(
							"button",
							{ onClick: this.sendToEdit },
							"Edit Pet"
						),
						" ",
						React.createElement("br", null)
					),
					React.createElement(
						"ul",
						null,
						React.createElement(
							"li",
							null,
							"Name: ",
							petProfile.name,
							" "
						),
						React.createElement(
							"li",
							null,
							"DoB: ",
							petProfile.birthday,
							" "
						),
						React.createElement(
							"li",
							null,
							"Sex: ",
							petProfile.sex,
							" "
						),
						React.createElement(
							"li",
							null,
							"Species: ",
							petProfile.species,
							" "
						),
						React.createElement(
							"li",
							null,
							"Breed: ",
							petProfile.breed,
							" "
						),
						React.createElement(
							"li",
							null,
							"Allergies: ",
							petProfile.allergiesString,
							" "
						),
						React.createElement(
							"li",
							null,
							"Medications: ",
							petProfile.medicationsString,
							" "
						)
					)
				);
			},
			writable: true,
			configurable: true
		}
	});

	return PetProfileInfo;
})(Component);

module.exports = PetProfileInfo;