import constants from '../constants/constants'

var initialState = {
	petsArray: []
}

export default function(state = initialState, action){
	switch(action.type){
		case constants.RECEIVED_PETS:
			console.log('RECEIVED_PETS: '+JSON.stringify(action.pets))
			var newState = Object.assign({}, state)
			var array = Object.assign([], state)
			for (var i=0; i<action.pets.length; i++){
				var pet = action.pets[i]
				array.push(pet)
			}
			newState['petsArray'] = array

		return newState

		case constants.REGISTER_PET:
			console.log('RECEIVED_REGISTER_PET: '+JSON.stringify(action.pets))
			var newState = Object.assign({}, state)
			var array = Object.assign([], state.petsArray)
			array.push(action.pets)
			newState['petsArray'] = array

		return newState

		default: 
			return state

	}
}