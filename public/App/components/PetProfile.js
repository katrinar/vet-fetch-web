import React, { Component } from 'react'
import store from '../stores/store'
import actions from '../actions/actions'
import { connect } from 'react-redux'
import navigation from '../utils/navigation'
import text from '../utils/text'

class PetProfile extends Component {
	
	// render(){
	// 	var profile = this.props.pets[this.props.slug]	
	// 	return(
	// 		<div>
	// 			<ul>
	// 			{profile && Object.keys(profile).map(function(key) {
 //            return <li key={key}>{text.capitalize(key)}: {profile[key]}</li>;
 //        }.bind(this))}
	// 			</ul>
	// 			<button onClick={navigation.petsPage}>Back to Pets</button>
	// 		</div>
	// 	)
	// }

	render(){
		const petSlug = this.props.slug
		const petProfile = this.props.pets[petSlug] || {}

		console.log(' var petProfile = '+JSON.stringify(petProfile))

		return(
			<div>
				<ul>
					<li>Name: {petProfile.name} </li>
					<li>DoB: {petProfile.birthday} </li>
					<li>Sex: {petProfile.sex} </li>
					<li>Species: {petProfile.species} </li>
					<li>Breed: {petProfile.breed} </li>
					<li>Allergies: {petProfile.allergies} </li>
					<li>Medications: {petProfile.medications} </li>
				</ul>
				
			</div>
		)
	}
}

const stateToProps = function(state){
	return{
		pets: state.petReducer.pets
	}
}

export default connect (stateToProps)(PetProfile)