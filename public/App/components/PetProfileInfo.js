import React, { Component } from 'react'
import navigation from '../utils/navigation'
import store from '../stores/store'
import actions from '../actions/actions'

class PetProfileInfo extends Component {
	constructor(props, context){
		super(props, context)
		this.sendToEdit = this.sendToEdit.bind(this)
	}

	sendToEdit(event){
		var changeDisplay = Object.assign({}, this.props.displayContent) 
		changeDisplay = true
		console.log('sendToEdit: displayContent props = '+JSON.stringify(this.props.displayContent)+', changeDisplay = '+JSON.stringify(changeDisplay))
		store.dispatch(actions.toggleDisplay(changeDisplay))
	}


	render(){
		const petSlug = this.props.slug
		const petProfile = this.props.pets[petSlug] || {}

		return(
			<div>
				<div>
					<button onClick={navigation.petsPage}>Back to Pets</button> <br />
					<button onClick={this.sendToEdit}>Edit Pet
					</button> <br />
				</div>

				<ul>
					<li>Name: {petProfile.name} </li>
					<li>DoB: {petProfile.birthday} </li>
					<li>Sex: {petProfile.sex} </li>
					<li>Species: {petProfile.species} </li>
					<li>Breed: {petProfile.breed} </li>
					<li>Allergies: {petProfile.allergiesString} </li>
					<li>Medications: {petProfile.medicationsString} </li>
				</ul>
			</div>
		)
	}

}

export default PetProfileInfo