import api from '../utils/api'

export default {

	capitalize: function(string) {
		if (string.length == 1)
			return string.toUpperCase()

		var firstLetter = string.substring(0,1)
		return firstLetter.toUpperCase() + string.substring(1)
	},

	stringToArray: function(str, separator){
		var t = str.split(separator)
		var array = []
		for (var i=0; i<t.length; i++){
			var tag = t[i]

			if (tag.length == 0)
				continue
			array.push(tag.trim())
		}

		return array
	},

	sendPetEdit: function(petSubmit){

		delete petSubmit.allergiesString
		delete petSubmit.medicationsString

		console.log('sendPetEdit: petSubmit = '+JSON.stringify(petSubmit))

		var endpoint = '/api/pet/'+petSubmit.id

		api.handlePut(endpoint, petSubmit, function(err, response){
			if (err){
				alert(err.message)
				return
			}
			console.log('sendPetEdit: PUT RESPONSE = '+JSON.stringify(response))
			// store.dispatch(actions.receivedPetEdit(response.result))
		})
	}
}