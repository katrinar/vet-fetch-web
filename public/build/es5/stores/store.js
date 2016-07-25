"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _redux = require("redux");

var createStore = _redux.createStore;
var applyMiddleware = _redux.applyMiddleware;
var combineReducers = _redux.combineReducers;
var thunk = _interopRequire(require("redux-thunk"));

var accountReducer = _interopRequire(require("../reducers/accountReducer"));

var petReducer = _interopRequire(require("../reducers/petReducer"));

// Combine reducers
var reducers = combineReducers({
		accountReducer: accountReducer,
		petReducer: petReducer
});

// Create createStore
var store = createStore(reducers, applyMiddleware(thunk));

module.exports = store;