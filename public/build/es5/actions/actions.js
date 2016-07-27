"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var constants = _interopRequire(require("../constants/constants"));

module.exports = {

	currentUserReceived: function (user) {
		return {
			type: constants.CURRENT_USER_RECEIVED,
			user: user
		};
	},

	profileReceived: function (profile) {
		return {
			type: constants.PROFILE_RECEIVED,
			profile: profile
		};
	},

	currentUserLogout: function (user) {
		return {
			type: constants.CURRENT_USER_LOGOUT,
			user: user
		};
	},

	petCreated: function (pet) {
		return {
			type: constants.PET_CREATED,
			pet: pet
		};
	},

	petsReceived: function (pets) {
		return {
			type: constants.PETS_RECEIVED,
			pets: pets
		};
	}
};