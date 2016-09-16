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




// const CLOUDINARY_UPLOAD_PRESET = 'lpqeur5v';
var CLOUDINARY_UPLOAD_PRESET = "vxd4nrmq";
var CLOUDINARY_UPLOAD_URL = "https://api.cloudinary.com/v1_1/hsypls36a/image/upload";

var RegisterPetLanding = (function (Component) {
	function RegisterPetLanding(props, context) {
		_classCallCheck(this, RegisterPetLanding);

		_get(Object.getPrototypeOf(RegisterPetLanding.prototype), "constructor", this).call(this, props, context);
		this.submitPet = this.submitPet.bind(this);
		this.registerPet = this.registerPet.bind(this);
		this.state = {
			registerPet: {
				name: "",
				species: "",
				ownerId: null,
				slug: null
			}
		};
	}

	_inherits(RegisterPetLanding, Component);

	_prototypeProperties(RegisterPetLanding, null, {
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

				var loggedIn = this.props.currentUser || {};
				console.log("REGISTER PET: currentUser " + JSON.stringify(loggedIn));

				if (loggedIn.id == null) {
					alert("Please login or register to save your pets");
				}

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
					{ className: "section notopmargin nobottommargin" },
					React.createElement(
						"div",
						{ className: "container clearfix" },
						React.createElement(
							"div",
							{ className: "fancy-title title-double-border" },
							React.createElement(
								"h2",
								null,
								"Register your Pet"
							)
						),
						React.createElement(
							"form",
							null,
							React.createElement("input", { type: "text", onChange: this.submitPet, id: "name", placeholder: "Name" }),
							React.createElement("br", null),
							React.createElement("input", { type: "text", onChange: this.submitPet, id: "species", placeholder: "Species" }),
							React.createElement("br", null)
						),
						React.createElement(
							"a",
							{ href: "#", onClick: this.registerPet, className: "button button-3d button-small button-rounded button-aqua" },
							"Register your Pet"
						)
					)
				);
			},
			writable: true,
			configurable: true
		}
	});

	return RegisterPetLanding;
})(Component);

module.exports = RegisterPetLanding;