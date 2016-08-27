"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _redux = require("redux");

var createStore = _redux.createStore;
var applyMiddleware = _redux.applyMiddleware;
var combineReducers = _redux.combineReducers;
var thunk = _interopRequire(require("redux-thunk"));

var accountReducer = _interopRequire(require("../reducers/accountReducer"));

var petReducer = _interopRequire(require("../reducers/petReducer"));

var displayReducer = _interopRequire(require("../reducers/displayReducer"));

var searchReducer = _interopRequire(require("../reducers/searchReducer"));

// Combine reducers
var reducers = combineReducers({
	accountReducer: accountReducer,
	petReducer: petReducer,
	displayReducer: displayReducer,
	searchReducer: searchReducer
});

// Create createStore
var store = createStore(reducers, applyMiddleware(thunk));

module.exports = store;