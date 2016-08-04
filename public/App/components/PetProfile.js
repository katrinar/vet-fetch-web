import React, { Component } from 'react'
import store from '../stores/store'
import actions from '../actions/actions'
import { connect } from 'react-redux'
import api from '../utils/api'

class PetProfile extends Component {

	constructor(props, context){
		super(props, context)
	}

	componentWillMount(){

		var currentUser = this.props.currentUser
		console.log('PET PROFILE WILL MOUNT: CURRENT USER PROPS ='+JSON.stringify(currentUser)+', CURRENT USER STATE = '+JSON.stringify(this.state.currentUser))
	}

	componentDidMount(){
		console.log('PET PROFILE DID MOUNT: SLUG = '+JSON.stringify(this.props.slug)+', CURRENT USER PROPS = '+JSON.stringify(this.props.currentUser)+ 'CURRENT USER STATE = '+JSON.stringify(this.state.currentUser))
		//TO DO: pass this.props.pets object to pet profile from Main and use for api request
		//TO DO: replace hardcoded li with iterated array li; api req/store dispatch to currentPet	

		// var endpoint = '/api/pet?slug='+this.props.slug
		// api.handleGet(endpoint, null, function(err, response){
		// 	if (err){
		// 		alert(err.message)
		// 		return
		// 	}
		// 	var petResults = response.results
		// 	// for (var i=0; i<petResults.length; i++){
		// 	// 	if (petResults.ownerId == this.props.currentUser.id){
		// 	// }
		// 	// }
		
		// 	console.log('PET RESULTS: '+JSON.stringify(petResults)+', CURRENT OWNER ID: '+JSON.stringify(this.state.currentUser))
		// })
	}

	render(){
		var petSlug = this.props.slug
		const petProfile = this.props.pets[petSlug] || {}
		console.log('PET PROFILE RENDER: CURRENT USER PROPS: '+JSON.stringify(this.props.currentUser))
		return(
			<div>
				<div>
					<ul> 
						<li>Name: {petProfile.name}</li>
						<li>Breed: {petProfile.breed}</li>
						<li>Sex: {petProfile.sex}</li>
						<li>Birthday: {petProfile.birthday}</li>
						<li>Allergies: {petProfile.allergies}</li>
						<li>Medication: {petProfile.medications}</li>
					</ul> 
				</div>

				<div>
					<ul>
					</ul>
				</div>
				
			</div>
		)
	}
}

const stateToProps = function(state){
	console.log('STATE_TO_PROPS_PET_PROFILE: '+JSON.stringify(state))
	return {
		pets: state.petReducer.pets,
		currentUser: state.accountReducer.currentUser
	}
}

export default connect (stateToProps)(PetProfile)