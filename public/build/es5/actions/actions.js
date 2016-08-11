"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var constants = _interopRequire(require("../constants/constants"));

var store = _interopRequire(require("../stores/store"));

module.exports = {

	receivedCurrentUser: function (user) {
		return {
			type: constants.RECEIVED_CURRENT_USER,
			currentUser: user
		};
	},

	registerPet: function (pet) {
		return {
			type: constants.REGISTER_PET,
			pet: pet
		};
	},

	receivedPets: function (pets) {
		return {
			type: constants.RECEIVED_PETS,
			pets: pets
		};
	},

	receivedPetEdit: function (editedPet) {
		return {
			type: constants.RECEIVED_PET_EDIT,
			editedPet: editedPet
		};
	}

};