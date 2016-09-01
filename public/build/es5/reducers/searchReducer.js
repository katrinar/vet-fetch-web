"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var constants = _interopRequire(require("../constants/constants"));

var initialState = {
	search: {
		zipcode: "",
		geo: [],
		id: "",
		vetResults: []
	}
};

module.exports = function (_x, action) {
	var state = arguments[0] === undefined ? initialState : arguments[0];
	switch (action.type) {
		case constants.RECEIVED_SEARCH:
			console.log("RECEIVED_SEARCH: action.search" + JSON.stringify(action.search));
			var newState = Object.assign({}, state);
			newState.search = action.search;
			return newState;

		default:
			return state;
	}
};