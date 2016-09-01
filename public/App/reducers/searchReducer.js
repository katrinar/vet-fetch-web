import constants from '../constants/constants'

var initialState = {
	search: {
		zipcode: '',
		geo: [],
		id: '',
		vetResults: []
	}
}

export default function(state = initialState, action){
	switch (action.type) {
		case constants.RECEIVED_SEARCH: 
			console.log('RECEIVED_SEARCH: action.search'+JSON.stringify(action.search))
			var newState = Object.assign({}, state)
			newState['search'] = action.search
			return newState

		default:
			return state
	}
}