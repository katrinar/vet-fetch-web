import constants from '../constants/constants'

var initialState = {
	pets: {},
	petsArray: [],
	currentPet: {
		id: '',
		slug: '',
		ownerId: '',
		name: '',
		birthday: '',
		sex: '',
		species: '',
		breed: '',
		allergies: [],
		medications: [],
		allergiesString: '',
		medicationsString: ''
	}
}

export default function(state = initialState, action){

	switch(action.type){
		case constants.RECEIVED_PETS:
			console.log('RECEIVED_PETS: ')
			var newState = Object.assign({}, state)
			var array = Object.assign([], state)
			for (var i=0; i<action.pets.length; i++){
				var pet = action.pets[i]
				array.push(pet)
			}
			newState['petsArray'] = array

			var petMap = Object.assign({}, newState.pets)
			
			for (var i=0; i<action.pets.length; i++){
				var petProfile = action.pets[i]
				petMap[petProfile.slug] = petProfile
			}
			newState['pets'] = petMap

			return newState

		case constants.REGISTER_PET:
			console.log('RECEIVED_REGISTER_PET: ')
			var newState = Object.assign({}, state)
			var array = Object.assign([], state.petsArray)
			array.push(action.pet)
			newState['petsArray'] = array

			var petMap = Object.assign({}, newState.pets)
			var pet = action.pet
			petMap[pet.slug] = pet
		
			newState['pets'] = petMap
					
			return newState

		case constants.RECEIVED_PET_EDIT:
		console.log('RECEIVED_PET_EDIT: action.editedPet = '+JSON.stringify(action.editedPet))

		var newState = Object.assign({}, state)
		var editedPet = action.editedPet

		newState['currentPet'] = editedPet

		return newState

		default: 
			return state
	}
}