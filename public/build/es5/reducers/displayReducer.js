"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var constants = _interopRequire(require("../constants/constants"));

var initialState = {
	displayEditPet: false,
	showRegisterPet: false,
	showEditProfile: false
};

module.exports = function (_x, action) {
	var state = arguments[0] === undefined ? initialState : arguments[0];
	switch (action.type) {
		case constants.DISPLAY_EDIT_PET:
			console.log("DISPLAY_EDIT_PET: " + JSON.stringify(action.displayContent));
			var newState = Object.assign({}, state);
			newState.displayEditPet = action.displayContent;
			return newState;

		case constants.SHOW_REGISTER_PET:
			console.log("SHOW_REGISTER_PET: " + JSON.stringify(action.showContent));
			var newState = Object.assign({}, state);
			newState.showRegisterPet = action.showContent;
			return newState;

		case constants.SHOW_EDIT_PROFILE:
			console.log("SHOW_EDIT_PROFILE: " + JSON.stringify(action.showContent));
			var newState = Object.assign({}, state);
			newState.showEditProfile = action.showContent;
			return newState;

		default:
			return state;
	}
};