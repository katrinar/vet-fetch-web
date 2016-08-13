"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var constants = _interopRequire(require("../constants/constants"));

var initialState = {
	displayContent: false
};

module.exports = function (_x, action) {
	var state = arguments[0] === undefined ? initialState : arguments[0];
	switch (action.type) {
		case constants.TOGGLE_DISPLAY:
			console.log("TOGGLE_DISPLAY: " + JSON.stringify(action.displayContent));
			var newState = Object.assign({}, state);
			var displayContent = Object.assign({}, action.displayContent);
			newState.displayContent = action.displayContent;
			return newState;

		default:
			return state;
	}
};