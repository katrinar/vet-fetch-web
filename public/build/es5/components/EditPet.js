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

var text = _interopRequire(require("../utils/text"));

var store = _interopRequire(require("../stores/store"));

var actions = _interopRequire(require("../actions/actions"));

var EditPet = (function (Component) {
	function EditPet(props, context) {
		_classCallCheck(this, EditPet);

		_get(Object.getPrototypeOf(EditPet.prototype), "constructor", this).call(this, props, context);
		this.submitEdit = this.submitEdit.bind(this);
		this.submitPetEdit = this.submitPetEdit.bind(this);
	}

	_inherits(EditPet, Component);

	_prototypeProperties(EditPet, null, {
		submitEdit: {
			value: function submitEdit(event) {
				event.preventDefault();
				var curentPetProfile = this.props.pets[this.props.slug];

				var editedPet = Object.assign({}, this.props.currentPet);
				editedPet.name = curentPetProfile.name;
				editedPet.species = curentPetProfile.species;

				editedPet[event.target.id] = event.target.value;

				store.dispatch(actions.receivedPetEdit(editedPet));
			},
			writable: true,
			configurable: true
		},
		submitPetEdit: {
			value: function submitPetEdit(event) {
				event.preventDefault();
				var curentPetProfile = this.props.pets[this.props.slug];

				var editedPet = Object.assign({}, this.props.currentPet);

				editedPet.id = curentPetProfile.id;
				editedPet.ownerId = curentPetProfile.ownerId;

				var allergiesString = editedPet.allergiesString;
				var medicationsString = editedPet.medicationsString;

				editedPet.allergies = text.stringToArray(allergiesString, ",");

				editedPet.medications = text.stringToArray(medicationsString, ",");

				console.log("submitPetEdit: editedPet = " + JSON.stringify(editedPet));

				store.dispatch(actions.receivedPetEdit(editedPet));

				text.sendPetEdit(editedPet);
			},
			writable: true,
			configurable: true
		},
		render: {
			value: function render() {
				var petSlug = this.props.slug;
				var petProfile = this.props.pets[petSlug] || {};
				var currentPet = this.props.currentPet || {};

				return React.createElement(
					"div",
					null,
					React.createElement(
						"form",
						{ action: "", method: "" },
						React.createElement(
							"label",
							null,
							"Name"
						),
						React.createElement("br", null),
						React.createElement("input", { type: "text", onChange: this.submitEdit, id: "name" }),
						React.createElement("br", null),
						React.createElement(
							"label",
							null,
							"Birthday"
						),
						React.createElement("br", null),
						React.createElement("input", { type: "text", onChange: this.submitEdit, id: "birthday" }),
						React.createElement("br", null),
						React.createElement(
							"label",
							null,
							"Sex"
						),
						React.createElement("br", null),
						React.createElement("input", { type: "text", onChange: this.submitEdit, id: "sex" }),
						React.createElement("br", null),
						React.createElement(
							"label",
							null,
							"Species"
						),
						React.createElement("br", null),
						React.createElement("input", { type: "text", onChange: this.submitEdit, id: "species" }),
						React.createElement("br", null),
						React.createElement(
							"label",
							null,
							"Breed"
						),
						React.createElement("br", null),
						React.createElement("input", { type: "text", onChange: this.submitEdit, id: "breed" }),
						React.createElement("br", null),
						React.createElement(
							"label",
							null,
							"Allergies"
						),
						React.createElement("br", null),
						React.createElement("input", { type: "text", onChange: this.submitEdit, id: "allergiesString", placeholder: "advil,wheat,etc..." }),
						React.createElement("br", null),
						React.createElement(
							"label",
							null,
							"Medications"
						),
						React.createElement("br", null),
						React.createElement("input", { type: "text", onChange: this.submitEdit, id: "medicationsString", placeholder: "heartworm,vitamins,etc..." }),
						React.createElement("br", null),
						React.createElement(
							"button",
							{ onClick: this.submitPetEdit },
							"Save Edits"
						)
					)
				);
			},
			writable: true,
			configurable: true
		}
	});

	return EditPet;
})(Component);

module.exports = EditPet;