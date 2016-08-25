"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var constants = _interopRequire(require("../constants/constants"));

var initialState = {
	pets: {},
	petsArray: []
};

module.exports = function (_x, action) {
	var state = arguments[0] === undefined ? initialState : arguments[0];


	switch (action.type) {
		case constants.RECEIVED_PETS:
			console.log("RECEIVED_PETS: ");
			var newState = Object.assign({}, state);
			var array = Object.assign([], state);
			for (var i = 0; i < action.pets.length; i++) {
				var pet = action.pets[i];
				array.push(pet);
			}
			newState.petsArray = array;

			var petMap = Object.assign({}, newState.pets);

			for (var i = 0; i < action.pets.length; i++) {
				var petProfile = action.pets[i];
				petMap[petProfile.slug] = petProfile;
			}
			newState.pets = petMap;

			return newState;

		case constants.REGISTER_PET:
			var newState = Object.assign({}, state);
			var array = Object.assign([], state.petsArray);
			array.push(action.pet);
			newState.petsArray = array;

			var petMap = Object.assign({}, newState.pets);
			var pet = action.pet;
			petMap[pet.slug] = pet;

			newState.pets = petMap;

			return newState;

		case constants.RECEIVED_PET_EDIT:
			var newState = Object.assign({}, state);
			var editedPet = action.editedPet;
			var updatedPets = Object.assign({}, state.pets);

			updatedPets[editedPet.slug] = editedPet;

			newState.pets = updatedPets;

			return newState;

		case constants.RECEIVED_PET_IMAGE:


			var newState = Object.assign({}, state);
			var petImageUrl = action.petImg;
			var updatedPets = Object.assign({}, state.pets);

			var pet = updatedPets[action.petSlug];
			pet.image.original = petImageUrl;

			newState.pets = updatedPets;

			return newState;

		case constants.UPDATE_PETS:
			var newState = Object.assign({}, state);
			var updatedPet = action.updatedPet;
			var updatedPets = Object.assign({}, state.pets);

			var vaccinesArray = updatedPet.vaccines;
			var vaccinesString = "";
			for (var i = 0; i < vaccinesArray.length; i++) {
				var vaccine = vaccinesArray[i];
				if (vaccine.length == 0) continue;

				vaccinesString = vaccinesString + vaccine;
				if (i == vaccinesArray.length - 1) continue;

				vaccinesString = vaccinesString + ",";
			}
			updatedPet.vaccinesString = vaccinesString;

			var allergiesArray = updatedPet.allergies;
			var allergiesString = "";
			for (var i = 0; i < allergiesArray.length; i++) {
				var allergy = allergiesArray[i];
				if (allergy.length == 0) continue;

				allergiesString = allergiesString + allergy;
				if (i == allergiesArray.length - 1) continue;

				allergiesString = allergiesString + ",";
			}
			updatedPet.allergiesString = allergiesString;

			var medicationArray = updatedPet.medications;
			var medicationsString = "";
			for (var i = 0; i < medicationArray.length; i++) {
				var medication = medicationArray[i];
				if (medication.length == 0) continue;
				medicationsString = medicationsString + medication;
				if (i == medicationArray.length - 1) continue;
				medicationsString = medicationsString + ",";
			}
			updatedPet.medicationsString = medicationsString;

			updatedPets[updatedPet.slug] = updatedPet;

			newState.pets = updatedPets;

			var petsArray = Object.assign([], state.petsArray);
			var array = Object.assign([], state);

			for (var i = 0; i < petsArray.length; i++) {
				var pet = petsArray[i];

				if (updatedPet.id == pet.id) {
					pet = updatedPet;
				}
				array.push(pet);
			}

			newState.petsArray = array;

			return newState;

		default:
			return state;
	}
};