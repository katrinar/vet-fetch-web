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
	}

}