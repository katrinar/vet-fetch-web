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

var navigation = _interopRequire(require("../utils/navigation"));

var petManager = _interopRequire(require("../utils/petManager"));

var store = _interopRequire(require("../stores/store"));

var actions = _interopRequire(require("../actions/actions"));

var Dropzone = _interopRequire(require("react-dropzone"));

var request = _interopRequire(require("superagent"));

var TopBar = _interopRequire(require("../components/TopBar"));

var Nav = _interopRequire(require("../components/Nav"));

var Footer = _interopRequire(require("../components/Footer"));

// const CLOUDINARY_UPLOAD_PRESET = 'lpqeur5v';
var CLOUDINARY_UPLOAD_PRESET = "vxd4nrmq";
var CLOUDINARY_UPLOAD_URL = "https://api.cloudinary.com/v1_1/hsypls36a/image/upload";

var EditPet = (function (Component) {
	function EditPet(props, context) {
		_classCallCheck(this, EditPet);

		_get(Object.getPrototypeOf(EditPet.prototype), "constructor", this).call(this, props, context);
		this.submitEdit = this.submitEdit.bind(this);
		this.submitPetEdit = this.submitPetEdit.bind(this);
		this.onImageDrop = this.onImageDrop.bind(this);
		// this.sendPetImg = this.sendPetImg.bind(this)
		this.handleImageUpload = this.handleImageUpload.bind(this);
		this.state = {
			uploadedFileCloudinaryUrl: ""
		};
	}

	_inherits(EditPet, Component);

	_prototypeProperties(EditPet, null, {
		onImageDrop: {
			value: function onImageDrop(files) {
				this.setState({
					uploadedFile: files[0]
				});

				this.handleImageUpload(files[0]);
			},
			writable: true,
			configurable: true
		},
		handleImageUpload: {
			value: function handleImageUpload(file) {
				var _this = this;
				var upload = request.post(CLOUDINARY_UPLOAD_URL).field("upload_preset", CLOUDINARY_UPLOAD_PRESET).field("file", file);

				upload.end(function (err, response) {
					if (err) {
						console.error(err);
					}

					if (response.body.secure_url !== "") {
						_this.setState({
							uploadedFileCloudinaryUrl: response.body.secure_url
						});

						store.dispatch(actions.receivedPetImage(_this.state.uploadedFileCloudinaryUrl, _this.props.slug));

						var updatedPet = Object.assign({}, _this.props.pets[_this.props.slug]);

						petManager.sendPetEdit(updatedPet);
					}
				});
			},
			writable: true,
			configurable: true
		},
		submitEdit: {
			value: function submitEdit(event) {
				event.preventDefault();
				var currentPetProfile = this.props.pets[this.props.slug];

				var editedPet = Object.assign({}, currentPetProfile);

				editedPet[event.target.id] = event.target.value;

				store.dispatch(actions.receivedPetEdit(editedPet));
			},
			writable: true,
			configurable: true
		},
		submitPetEdit: {
			value: function submitPetEdit(event) {
				event.preventDefault();
				var currentPetProfile = this.props.pets[this.props.slug];
				var editedPet = Object.assign({}, currentPetProfile);

				var vaccinesString = editedPet.vaccinesString;
				var allergiesString = editedPet.allergiesString;
				var medicationsString = editedPet.medicationsString;

				editedPet.vaccines = text.stringToArray(vaccinesString, ",");

				editedPet.allergies = text.stringToArray(allergiesString, ",");

				editedPet.medications = text.stringToArray(medicationsString, ",");

				store.dispatch(actions.receivedPetEdit(editedPet));

				petManager.sendPetEdit(editedPet);
				navigation.petProfilePage(this.props.slug);
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
					React.createElement(TopBar, null),
					React.createElement(Nav, null),
					React.createElement(
						"section",
						{ id: "page-title" },
						React.createElement(
							"div",
							{ className: "container clearfix" },
							React.createElement(
								"h1",
								null,
								"Pet Dashboard"
							)
						)
					),
					React.createElement(
						"div",
						{ className: "section notopmargin nobottommargin nobg" },
						React.createElement(
							"div",
							{ className: "container clearfix" },
							React.createElement(
								"div",
								{ className: "fancy-title title-double-border" },
								React.createElement(
									"h2",
									null,
									"Edit Pet Profile"
								)
							),
							React.createElement(
								"form",
								null,
								React.createElement(
									"label",
									null,
									"Name"
								),
								React.createElement("br", null),
								React.createElement("input", { type: "text", onChange: this.submitEdit, id: "name", placeholder: "Name", value: petProfile.name }),
								React.createElement("br", null),
								React.createElement(
									"label",
									null,
									"Birthday"
								),
								React.createElement("br", null),
								React.createElement("input", { type: "text", onChange: this.submitEdit, id: "birthday", placeholder: "DD/MM/YYYY", value: petProfile.birthday }),
								React.createElement("br", null),
								React.createElement(
									"label",
									null,
									"Sex"
								),
								React.createElement("br", null),
								React.createElement("input", { type: "text", onChange: this.submitEdit, id: "sex", placeholder: "Sex", value: petProfile.sex }),
								React.createElement("br", null),
								React.createElement(
									"label",
									null,
									"Species"
								),
								React.createElement("br", null),
								React.createElement("input", { type: "text", onChange: this.submitEdit, id: "species", placeholder: "Species", value: petProfile.species }),
								React.createElement("br", null),
								React.createElement(
									"label",
									null,
									"Breed"
								),
								React.createElement("br", null),
								React.createElement("input", { type: "text", onChange: this.submitEdit, id: "breed", placeholder: "Breed", value: petProfile.breed }),
								React.createElement("br", null),
								React.createElement(
									"label",
									null,
									"Weight"
								),
								React.createElement("br", null),
								React.createElement("input", { type: "text", onChange: this.submitEdit, id: "weight", placeholder: "Weight", value: petProfile.weight }),
								React.createElement("br", null),
								React.createElement(
									"label",
									null,
									"Vaccines"
								),
								React.createElement("br", null),
								React.createElement("input", { type: "text", onChange: this.submitEdit, id: "vaccinesString", placeholder: "rabies...", value: petProfile.vaccinesString }),
								React.createElement("br", null),
								React.createElement(
									"label",
									null,
									"Allergies"
								),
								React.createElement("br", null),
								React.createElement("input", { type: "text", onChange: this.submitEdit, id: "allergiesString", placeholder: "advil,wheat,etc...", value: petProfile.allergiesString }),
								React.createElement("br", null),
								React.createElement(
									"label",
									null,
									"Medications"
								),
								React.createElement("br", null),
								React.createElement("input", { type: "text", onChange: this.submitEdit, id: "medicationsString", placeholder: "heartworm,vitamins,etc...", value: petProfile.medicationsString }),
								React.createElement("br", null),
								React.createElement("br", null),
								React.createElement(
									Dropzone,
									{ multiple: false, accept: "image/*", style: { width: 100 + "%", marginBottom: 24, background: "#fff", border: "1px solid #ddd" }, onDrop: this.onImageDrop },
									React.createElement(
										"div",
										{ style: { padding: 24 } },
										"Click to upload an image or drag image here."
									)
								),
								React.createElement(
									"div",
									null,
									this.state.uploadedFileCloudinaryUrl === "" ? null : React.createElement(
										"div",
										null,
										React.createElement(
											"p",
											null,
											this.state.uploadedFile.name
										),
										React.createElement("img", { src: this.state.uploadedFileCloudinaryUrl })
									)
								)
							),
							React.createElement(
								"a",
								{ href: "#", onClick: this.submitPetEdit, className: "button button-3d button-small button-rounded button-leaf" },
								"Save Edits"
							),
							React.createElement(
								"a",
								{ href: "#", onClick: navigation.dismissEditPet, className: "button button-3d button-small button-rounded button-aqua" },
								"Cancel"
							)
						)
					),
					React.createElement(Footer, null)
				);
			},
			writable: true,
			configurable: true
		}
	});

	return EditPet;
})(Component);

module.exports = EditPet;