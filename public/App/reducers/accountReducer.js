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
}

export default function(state = initialState, action){
	switch (action.type) {
		case constants.RECEIVED_CURRENT_USER: 
			console.log('RECEIVED_CURRENT_USER: '+JSON.stringify(action.currentUser))
			var newState = Object.assign({}, state)
			newState['currentUser'] = action.currentUser
			return newState

		default:
			return state
	}
}