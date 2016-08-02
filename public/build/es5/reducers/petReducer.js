"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var constants = _interopRequire(require("../constants/constants"));

var initialState = {
	petsArray: []
};

module.exports = function (_x, action) {
	var state = arguments[0] === undefined ? initialState : arguments[0];
	switch (action.type) {
		case constants.RECEIVED_PETS:
			console.log("RECEIVED_PETS: " + JSON.stringify(action.pets));
			var newState = Object.assign({}, state);
			var array = Object.assign([], state);
			for (var i = 0; i < action.pets.length; i++) {
				var pet = action.pets[i];
				array.push(pet);
			}
			newState.petsArray = array;

			return newState;

		case constants.REGISTER_PET:
			console.log("RECEIVED_REGISTER_PET: " + JSON.stringify(action.pets));
			var newState = Object.assign({}, state);
			var array = Object.assign([], state.petsArray);
			array.push(action.pets);
			newState.petsArray = array;

			return newState;

		default:
			return state;

	}
};