"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var constants = _interopRequire(require("../constants/constants"));

var initialState = {
	appointment: {
		id: null,
		date: "",
		time: "",
		location: "",
		result: "",
		bill: "",
		petName: "",
		ownerId: null,
		petId: null,
		slug: null
	}
};

module.exports = function (_x, action) {
	var state = arguments[0] === undefined ? initialState : arguments[0];
	switch (action.type) {
		case constants.CREATE_APPT:
			console.log("CREATE_APPT: " + JSON.stringify(action.appt));
			var newState = Object.assign({}, state);
			newState.appointment = action.appt;
			return newState;

		default:
			return state;
	}
};