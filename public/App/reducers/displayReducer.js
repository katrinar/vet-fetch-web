
import constants from '../constants/constants'

var initialState = {
	displayEditPet: false,
	showHealthRecord: false,
	showRegisterPet: false,
	showLogin: null
}

export default function(state = initialState, action){
	switch (action.type) {
		case constants.DISPLAY_EDIT_PET: 
			console.log('DISPLAY_EDIT_PET: '+JSON.stringify(action.displayContent))
			var newState = Object.assign({}, state)
			newState['displayEditPet'] = action.displayContent
			return newState

		case constants.SHOW_HEALTH_RECORD: 
			console.log('SHOW_HEALTH_RECORD: '+JSON.stringify(action.showContent))
			var newState = Object.assign({}, state)
			newState['showHealthRecord'] = action.showContent
			return newState

		case constants.SHOW_REGISTER_PET: 
			console.log('SHOW_REGISTER_PET: '+JSON.stringify(action.showContent))
			var newState = Object.assign({}, state)
			newState['showRegisterPet'] = action.showContent
			return newState

		case constants.SHOW_LOGIN: 
			console.log('SHOW_LOGIN: '+JSON.stringify(action.loggedIn))
			var newState = Object.assign({}, state)
			newState['showLogin'] = action.loggedIn
			return newState

		default:
			return state
	}
}