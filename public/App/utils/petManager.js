import api from '../utils/api'
import store from '../stores/store'
import actions from '../actions/actions'

export default {

	sendPetEdit: function(petSubmit){
		var endpoint = '/api/pet/'+petSubmit.id

		api.handlePut(endpoint, petSubmit, function(err, response){
			if (err){
				alert(err.message)
				return
			}
			// console.log('sendPetEdit: PUT RESPONSE = '+JSON.stringify(response.result))
			store.dispatch(actions.updatePets(response.result))
		})
	}
}