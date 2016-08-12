"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var store = _interopRequire(require("../stores/store"));

var actions = _interopRequire(require("../actions/actions"));

var connect = require("react-redux").connect;
var navigation = _interopRequire(require("../utils/navigation"));

var text = _interopRequire(require("../utils/text"));

var EditPet = _interopRequire(require("../components/EditPet"));

var PetProfile = (function (Component) {
	function PetProfile(props, context) {
		_classCallCheck(this, PetProfile);

		_get(Object.getPrototypeOf(PetProfile.prototype), "constructor", this).call(this, props, context);
		this.sendToEdit = this.sendToEdit.bind(this);
		this.state = {
			showEdit: false
		};
	}

	_inherits(PetProfile, Component);

	_prototypeProperties(PetProfile, null, {
		sendToEdit: {
			value: function sendToEdit(event) {
				console.log("sendToEdit: ");
				this.setState({ showEdit: true });
			},
			writable: true,
			configurable: true
		},
		render: {
			value: function render() {
				var petSlug = this.props.slug;
				var petProfile = this.props.pets[petSlug] || {};
				var editPet = null;

				if (this.state.showEdit == true) {
					editPet = React.createElement(EditPet, { currentPet: this.props.currentPet, pets: this.props.pets, slug: this.props.slug });
				}

				return React.createElement(
					"div",
					null,
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
							petProfile.allergies,
							" "
						),
						React.createElement(
							"li",
							null,
							"Medications: ",
							petProfile.medications,
							" "
						)
					),
					React.createElement(
						"button",
						{ onClick: navigation.petsPage },
						"Back to Pets"
					),
					React.createElement(
						"button",
						{ onClick: this.sendToEdit },
						"Edit Pet"
					),
					" ",
					React.createElement("br", null),
					React.createElement(
						"div",
						null,
						editPet
					)
				);
			},
			writable: true,
			configurable: true
		}
	});

	return PetProfile;
})(Component);

module.exports = PetProfile;