	import constants from '../constants/constants'

var initialState = {
	pets: {},
	petsArray: []
}

export default function(state = initialState, action){

	switch (action.type){

		case constants.PETS_RECEIVED:
			console.log('PETS_RECEIVED: ' +JSON.stringify(action.pets))
			var newState = Object.assign({}, state)
			var array = []
			for (var i=0; i<action.pets.length; i++){
				var pet = action.pets[i]
				array.push(pet)
			}

			newState['petsArray'] = array
			return newState

		case constants.PET_CREATED:
			
			var newState = Object.assign({}, state)
			var array = Object.assign([], newState.petsArray)
			array.push(action.pet)
			newState['petsArray'] = array

			return newState
			
		default:
			return state
	}
}