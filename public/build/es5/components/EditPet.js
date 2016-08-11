"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var EditPet = (function (Component) {
	function EditPet(props, context) {
		_classCallCheck(this, EditPet);

		_get(Object.getPrototypeOf(EditPet.prototype), "constructor", this).call(this, props, context);
		this.submitEdit = this.submitEdit.bind(this);
		this.submitPetEdit = this.submitPetEdit.bind(this);
		this.state = {
			editPet: {
				name: "",
				birthday: "",
				sex: "",
				species: "",
				breed: "",
				allergies: "",
				medications: ""
			}
		};
	}

	_inherits(EditPet, Component);

	_prototypeProperties(EditPet, null, {
		submitEdit: {
			value: function submitEdit(event) {
				var petSlug = this.props.slug;

				var editPet = Object.assign({}, this.props.pets[petSlug]);
				editPet[event.target.id] = event.target.value;
				this.setState({
					editPet: editPet
				});
			},
			writable: true,
			configurable: true
		},
		submitPetEdit: {
			value: function submitPetEdit(event) {
				event.preventDefault();

				console.log("submitPetEdit: editPet = " + JSON.stringify(this.state.editPet));
			},
			writable: true,
			configurable: true
		},
		render: {
			value: function render() {
				console.log("EDIT PET: this.state.editPet = " + JSON.stringify(this.state.editPet));
				var petSlug = this.props.slug;
				var petProfile = this.props.pets[petSlug] || {};

				return React.createElement(
					"div",
					null,
					React.createElement(
						"form",
						null,
						React.createElement(
							"label",
							null,
							"Name"
						),
						React.createElement("input", { type: "text", onChange: this.submitEdit, id: "name", value: petProfile.name, placeholder: "Name" }),
						React.createElement("br", null),
						React.createElement(
							"label",
							null,
							"Birthday"
						),
						React.createElement("input", { type: "text", onChange: this.submitEdit, id: "birthday", value: petProfile.birthday, placeholder: "Birthday" }),
						React.createElement("br", null),
						React.createElement(
							"label",
							null,
							"Sex"
						),
						React.createElement("input", { type: "text", onChange: this.submitEdit, id: "sex", value: petProfile.sex }),
						React.createElement("br", null),
						React.createElement(
							"label",
							null,
							"Species"
						),
						React.createElement("input", { type: "text", onChange: this.submitEdit, id: "species", value: petProfile.species }),
						React.createElement("br", null),
						React.createElement(
							"label",
							null,
							"Breed"
						),
						React.createElement("input", { type: "text", onChange: this.submitEdit, id: "breed", value: petProfile.breed }),
						React.createElement("br", null),
						React.createElement(
							"label",
							null,
							"Allergies"
						),
						React.createElement("input", { type: "text", onChange: this.submitEdit, id: "allergies", value: petProfile.allergies }),
						React.createElement("br", null),
						React.createElement(
							"label",
							null,
							"Medications"
						),
						React.createElement("input", { type: "text", onChange: this.submitEdit, id: "medications", value: petProfile.medications }),
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