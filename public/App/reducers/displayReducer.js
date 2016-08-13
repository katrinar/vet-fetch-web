import constants from '../constants/constants'

var initialState = {
	displayContent: false
}

export default function(state = initialState, action){
	switch (action.type) {
		case constants.TOGGLE_DISPLAY: 
			console.log('TOGGLE_DISPLAY: '+JSON.stringify(action.displayContent))
			var newState = Object.assign({}, state)
			var displayContent = Object.assign({}, action.displayContent)
			newState['displayContent'] = action.displayContent
			return newState

		default:
			return state
	}
}