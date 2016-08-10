import api from '../utils/api'
import store from '../stores/store'
import actions from '../actions/actions'

export default {

	accountPage: function(){
		window.location.href = '/account'
	},

	petsPage: function(){
		window.location.href = '/pets'
	},

	checkCurrentUser: function(){

		api.handleGet('/account/currentuser', null, function(err, response){
			if (err){
				alert(err.message)
				return
			}

			store.dispatch(actions.receivedCurrentUser(response.user))
		})
	}
}