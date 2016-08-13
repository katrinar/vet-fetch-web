import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import accountReducer from '../reducers/accountReducer'
import petReducer from '../reducers/petReducer'
import displayReducer from '../reducers/displayReducer'

// Combine reducers
var reducers = combineReducers({
	accountReducer: accountReducer,
	petReducer: petReducer,
	displayReducer: displayReducer
});

// Create createStore
var store = createStore(
		reducers,
		applyMiddleware(thunk)
		);

export default store; 