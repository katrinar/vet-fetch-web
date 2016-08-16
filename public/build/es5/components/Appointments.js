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

var PetList = _interopRequire(require("../components/PetList"));

var store = _interopRequire(require("../stores/store"));

var actions = _interopRequire(require("../actions/actions"));

var Appointments = (function (Component) {
	function Appointments(props, context) {
		_classCallCheck(this, Appointments);

		_get(Object.getPrototypeOf(Appointments.prototype), "constructor", this).call(this, props, context);
		this.submitEdit = this.submitEdit.bind(this);
		this.submitAppointment = this.submitAppointment.bind(this);
	}

	_inherits(Appointments, Component);

	_prototypeProperties(Appointments, null, {
		submitEdit: {
			value: function submitEdit(event) {
				event.preventDefault();

				var newAppt = Object.assign({}, this.props.appointment);

				newAppt[event.target.id] = event.target.value;
				newAppt.ownerId = this.props.currentUser.id;


				store.dispatch(actions.createAppt(newAppt));
			},
			writable: true,
			configurable: true
		},
		submitAppointment: {
			value: function submitAppointment(event) {
				event.preventDefault();
				var newAppt = Object.assign({}, this.props.appointment);
				store.dispatch(actions.createAppt(newAppt));
			},
			writable: true,
			configurable: true
		},
		render: {
			value: function render() {
				var appt = this.props.appointment || {};
				console.log("Appts Render: appt = " + JSON.stringify(appt));
				return React.createElement(
					"div",
					null,
					React.createElement(
						"h4",
						null,
						"Keep track of your vet appointments"
					),
					React.createElement(
						"button",
						{ onClick: navigation.accountPage },
						"Back to Home"
					),
					React.createElement(
						"div",
						null,
						React.createElement(
							"form",
							{ action: "", method: "" },
							React.createElement(
								"label",
								null,
								"Who"
							),
							React.createElement("br", null),
							React.createElement(PetList, { petsArray: this.props.petsArray }),
							React.createElement("input", { type: "text", onChange: this.submitEdit, id: "petName", placeholder: "Pet Name" }),
							React.createElement("br", null),
							React.createElement(
								"label",
								null,
								"When"
							),
							React.createElement("br", null),
							React.createElement("input", { type: "text", onChange: this.submitEdit, id: "date", placeholder: "DD/MM/YYYY" }),
							React.createElement("br", null),
							React.createElement("input", { type: "text", onChange: this.submitEdit, id: "time", placeholder: "00:00" }),
							React.createElement("br", null),
							React.createElement(
								"label",
								null,
								"Where"
							),
							React.createElement("br", null),
							React.createElement("input", { type: "text", onChange: this.submitEdit, id: "location", placeholder: "Address" }),
							React.createElement("br", null),
							React.createElement(
								"button",
								{ onClick: this.submitAppointment },
								"Add Appointment"
							)
						)
					)
				);
			},
			writable: true,
			configurable: true
		}
	});

	return Appointments;
})(Component);

module.exports = Appointments;