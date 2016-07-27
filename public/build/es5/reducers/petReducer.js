"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var constants = _interopRequire(require("../constants/constants"));

var initialState = {
	newPet: {
		id: null,
		ownerId: null,
		name: "",
		breed: "",
		sex: ""
	},

	petsArray: [],

	pets: {}
};

module.exports = function (_x, action) {
	var state = arguments[0] === undefined ? initialState : arguments[0];


	switch (action.type) {

		case constants.PET_CREATED:
			console.log("REDUCING PET_CREATED: " + JSON.stringify(action.pet));
			var newState = Object.assign({}, state);
			var array = Object.assign([], state);
			array.push(action.pet);
			newState.petsArray = array;

			return newState;

		case constants.PETS_RECEIVED:
			console.log("REDUCING PETS_RECEIVED: " + JSON.stringify(action.pets));
			var newState = Object.assign({}, state);
			newState.pets = action.pets;

			var array = [];
			for (var i = 0; i < action.pets.length; i++) {
				var pet = action.pets[i];
				array.push(pet);
			}

			newState.petsArray = array;

			return newState;

		default:
			return state;
	}
};