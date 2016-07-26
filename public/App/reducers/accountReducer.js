import constants from '../constants/constants'

var initialState = {
	currentUser: {
		id: null,
		firstName: '',
		lastName: '',
		email: '',
		pets: [],
		password: ''
	},

	profile: {
		id: null,
		firstName: '',
		lastName: '',
		email: '',
		password: ''
	}	
}

export default function(state = initialState, action){
	switch (action.type) {
		case constants.CURRENT_USER_RECEIVED: 
			console.log('CURRENT_USER_RECEIVED: '+JSON.stringify(action.user))
			var newState = Object.assign({}, state)
			newState['currentUser'] = action.user
			return newState

		case constants.PROFILE_RECEIVED: 
			console.log('PROFILE_RECEIVED: '+JSON.stringify(action.profile))
			var newState = Object.assign({}, state)
			newState['profile'] = action.profile
			return newState

		case constants.CURRENT_USER_LOGOUT:
			console.log('CURRENT_USER_LOGOUT: '+JSON.stringify(initialState.currentUser))
			var newState = Object.assign({}, state)
			newState['currentUser'] = initialState.currentUser 
			return newState

		default:
			return state
	}
}