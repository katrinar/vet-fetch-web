"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var constants = _interopRequire(require("../constants/constants"));

var initialState = {
	search: {
		zipcode: "",
		geo: [],
		id: "",
		vetResults: [],
		vetInfo: {}
	}
};

module.exports = function (_x, action) {
	var state = arguments[0] === undefined ? initialState : arguments[0];
	switch (action.type) {
		case constants.RECEIVED_SEARCH:
			console.log("RECEIVED_SEARCH: action.search" + JSON.stringify(action.search));
			var newState = Object.assign({}, state);
			var newSearch = Object.assign({}, state.search);
			newSearch = action.search;
			newState.search = newSearch;
			// newState['zipcode'] = action.search.zipcode
			// newState['id'] = action.search.id
			// newState['geo'] = action.search.geo
			return newState;

		case constants.RECEIVED_SEARCH_RESULTS:
			console.log("RECEIVED_SEARCH_RESULTS:");
			var newState = Object.assign({}, state);
			var newSearch = Object.assign({}, state.search);
			newSearch = action.searchResults;
			newState.search = newSearch;

			return newState;

		default:
			return state;
	}
};