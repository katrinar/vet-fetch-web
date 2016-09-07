"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var constants = _interopRequire(require("../constants/constants"));

var initialState = {
	search: {
		zipcode: "",
		geo: [],
		id: "",
		vetResults: [],
		searchStatus: "",
		currentUserId: ""
	},
	searchHistory: {}
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

			return newState;

		case constants.RECEIVED_SEARCH_RESULTS:
			console.log("RECEIVED_SEARCH_RESULTS: ");
			var newState = Object.assign({}, state);
			var newSearch = Object.assign({}, state.search);
			newSearch = action.searchResults;
			newState.search = newSearch;

			var updatedVetMap = Object.assign({}, newState.vetMap);

			var vets = action.searchResults.vetResults;

			for (var i = 0; i < vets.length; i++) {
				var vetProfile = vets[i];
				updatedVetMap[vetProfile.slug] = vetProfile;
			}

			newState.vetMap = updatedVetMap;

			return newState;

		case constants.RECEIVED_USER_SEARCH_HISTORY:
			console.log("RECEIVED_USER_SEARCH_HISTORY: ");
			var newState = Object.assign({}, state);
			var searchMap = Object.assign({}, newState.searchHistory);

			for (var i = 0; i < action.searchHistory.length; i++) {
				var zipcodeSearch = action.searchHistory[i];
				var slug = "";
				var individualResult = {};
				var zipcodeSearchResults = zipcodeSearch.vetResults;
				for (var j = 0; j < zipcodeSearchResults.length; j++) {
					individualResult = zipcodeSearchResults[j];
					slug = individualResult.slug;
					searchMap[slug] = individualResult;
				}
			}

			newState.searchHistory = searchMap;

			return newState;

		default:
			return state;
	}
};