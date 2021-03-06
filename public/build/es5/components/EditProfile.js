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

var store = _interopRequire(require("../stores/store"));

var actions = _interopRequire(require("../actions/actions"));

var TopBar = _interopRequire(require("../components/TopBar"));

var Nav = _interopRequire(require("../components/Nav"));

var EditProfile = (function (Component) {
	function EditProfile(props, context) {
		_classCallCheck(this, EditProfile);

		_get(Object.getPrototypeOf(EditProfile.prototype), "constructor", this).call(this, props, context);
		this.submitEdit = this.submitEdit.bind(this);
		this.submitProfileEdit = this.submitProfileEdit.bind(this);
	}

	_inherits(EditProfile, Component);

	_prototypeProperties(EditProfile, null, {
		submitEdit: {
			value: function submitEdit(event) {
				event.preventDefault();
				var currentProfile = this.props.currentUser;
				var editedProfile = Object.assign({}, currentProfile);

				editedProfile[event.target.id] = event.target.value;
				store.dispatch(actions.receivedCurrentUser(editedProfile));
			},
			writable: true,
			configurable: true
		},
		submitProfileEdit: {
			value: function submitProfileEdit(event) {
				event.preventDefault();
				var currentProfile = this.props.currentUser;
				var editedProfile = Object.assign({}, currentProfile);
				var endpoint = "/api/profile/" + editedProfile.id;

				api.handlePut(endpoint, editedProfile, function (err, response) {
					if (err) {
						alert(err.message);
						return;
					}
					store.dispatch(actions.receivedCurrentUser(response.result));
					navigation.dismissEditProfile();
				});
			},
			writable: true,
			configurable: true
		},
		render: {
			value: function render() {
				var profile = this.props.currentUser || {};

				return React.createElement(
					"div",
					{ className: "modal fade", id: "editProfileModal", tabIndex: "-1", role: "dialog", "aria-labelledby": "myModalLabel", "aria-hidden": "true" },
					React.createElement(
						"div",
						{ className: "modal-dialog" },
						React.createElement(
							"div",
							{ className: "modal-body" },
							React.createElement(
								"div",
								{ className: "modal-content" },
								React.createElement(
									"div",
									{ className: "modal-header" },
									React.createElement(
										"button",
										{ type: "button", className: "close", "data-dismiss": "modal", "aria-hidden": "true" },
										"×"
									),
									React.createElement(
										"h4",
										{ className: "modal-title", id: "myModalLabel" },
										"Edit Profile"
									)
								),
								React.createElement(
									"div",
									{ className: "modal-body" },
									React.createElement(
										"form",
										{ action: "", method: "" },
										React.createElement(
											"label",
											null,
											"Username"
										),
										React.createElement("br", null),
										React.createElement("input", { type: "text", onChange: this.submitEdit, id: "username", placeholder: "Username", value: profile.username }),
										React.createElement("br", null)
									)
								),
								React.createElement(
									"div",
									{ className: "modal-footer" },
									React.createElement(
										"button",
										{ type: "button", className: "btn btn-default", "data-dismiss": "modal" },
										"Close"
									),
									React.createElement(
										"button",
										{ onClick: this.submitProfileEdit, type: "button", className: "btn btn-primary button-aqua", "data-dismiss": "modal" },
										"Save changes"
									)
								)
							)
						)
					)
				);
			},
			writable: true,
			configurable: true
		}
	});

	return EditProfile;
})(Component);

module.exports = EditProfile;