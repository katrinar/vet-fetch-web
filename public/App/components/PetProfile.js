import React, { Component } from 'react'
import store from '../stores/store'
import actions from '../actions/actions'
import { connect } from 'react-redux'
import navigation from '../utils/navigation'

class PetProfile extends Component {

	render(){
		var profile = this.props.currentPet
		var profileTest = this.props.pets[this.props.slug]
		console.log('PET PROFILE = '+JSON.stringify(profileTest))
	
		return(
			<div>
				<ul>
				{profileTest && Object.keys(profileTest).map(function(key) {
            return <li key={key}>{key}: {profileTest[key]}</li>;
        }.bind(this))}
				</ul>
				<button onClick={navigation.petsPage}>Back to Pets</button>
			</div>
		)
	}
}

const stateToProps = function(state){
	console.log('STATE_TO_PROPS_PET_PROFILE: '+JSON.stringify(state))
	return {
		currentPet: state.petReducer.currentPet,
		pets: state.petReducer.pets
	}
}

export default connect (stateToProps)(PetProfile)