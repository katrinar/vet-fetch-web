import React, { Component } from 'react'
import store from '../stores/store'
import actions from '../actions/actions'
import { connect } from 'react-redux'
import navigation from '../utils/navigation'
import text from '../utils/text'
import EditPet from '../components/EditPet'

class PetProfile extends Component {

	constructor(props, context){
		super(props, context)
		this.sendToEdit = this.sendToEdit.bind(this)
		this.state = {
			showEdit: false
		}
	}

	sendToEdit(event){
		console.log('sendToEdit: ')
		this.setState({showEdit: true})
	}

	render(){
		const petSlug = this.props.slug
		const petProfile = this.props.pets[petSlug] || {}
		var editPet = null

		if (this.state.showEdit == true){
			editPet = <EditPet currentPet={this.props.currentPet} pets={this.props.pets} slug={this.props.slug}/> 
		}

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
				<button onClick={navigation.petsPage}>Back to Pets</button>
				<button onClick={this.sendToEdit}>Edit Pet</button> <br />
				<div>{editPet}</div>
			</div>
		)
	}
}

export default PetProfile