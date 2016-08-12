import constants from '../constants/constants'
import store from '../stores/store'

export default {

	receivedCurrentUser: function(user){
		return {
			type: constants.RECEIVED_CURRENT_USER,
			currentUser: user	
		}
	},

	registerPet: function(pet){
		return{
			type: constants.REGISTER_PET,
			pet: pet
		}

	},

	receivedPets: function(pets){
		return{
			type: constants.RECEIVED_PETS,
			pets: pets
		}
	},

	receivedPetEdit: function(editedPet){
		return{
			type: constants.RECEIVED_PET_EDIT,
			editedPet: editedPet
		}
	},

	createdCurrentPet: function(currentPet){
		return{
			type: constants.CREATED_CURRENT_PET,
			currentPet: currentPet
		}
	},

	updatePets: function(updatedPet){
		return{
			type: constants.UPDATE_PETS,
			updatedPet: updatedPet
		}
	}

}