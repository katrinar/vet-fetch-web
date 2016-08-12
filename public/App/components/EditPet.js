import React, { Component } from 'react'
import api from '../utils/api'
import text from '../utils/text'
import petManager from '../utils/petManager'
import store from '../stores/store'
import actions from '../actions/actions'

class EditPet extends Component {
	constructor(props, context){
		super(props, context)
		this.submitEdit = this.submitEdit.bind(this)
		this.submitPetEdit = this.submitPetEdit.bind(this)
	}

	submitEdit(event){
		event.preventDefault()
		const currentPetProfile = this.props.pets[this.props.slug]
		
		var editedPet = Object.assign({}, currentPetProfile)

		editedPet[event.target.id] = event.target.value

		store.dispatch(actions.receivedPetEdit(editedPet))
	}
	
	submitPetEdit(event){
		event.preventDefault()
		const currentPetProfile = this.props.pets[this.props.slug]
		var editedPet = Object.assign({}, currentPetProfile)
		// var editedPet = Object.assign({}, this.props.currentPet)

		var allergiesString = editedPet['allergiesString']
		var medicationsString = editedPet['medicationsString']

		editedPet['allergies'] = text.stringToArray(allergiesString, ',')
		
		editedPet['medications'] = text.stringToArray(medicationsString, ',')

			
		console.log('submitPetEdit: editedPet = '+JSON.stringify(editedPet))

		store.dispatch(actions.receivedPetEdit(editedPet))

		petManager.sendPetEdit(editedPet)
	}

	render(){
		const petSlug = this.props.slug
		const petProfile = this.props.pets[petSlug] || {}
		const currentPet = this.props.currentPet || {}
		
		return (
			<div>
				<form action="" method="">
					<label>Name</label><br />
					<input type="text" onChange={this.submitEdit} id="name" /><br />

					<label>Birthday</label><br />
					<input type="text" onChange={this.submitEdit} id="birthday"  /><br />

					<label>Sex</label><br />
					<input type="text" onChange={this.submitEdit} id="sex" /><br />

					<label>Species</label><br />
					<input type="text" onChange={this.submitEdit} id="species" /><br />

					<label>Breed</label><br />
					<input type="text" onChange={this.submitEdit} id="breed" /><br />

					<label>Allergies</label><br />
					<input type="text" onChange={this.submitEdit} id="allergiesString" placeholder={'advil,wheat,etc...'} /><br />

					<label>Medications</label><br />
					<input type="text" onChange={this.submitEdit} id="medicationsString" placeholder={'heartworm,vitamins,etc...'}/><br />

					<button onClick={this.submitPetEdit}>Save Edits</button>
				</form> 
			</div>
		)
	}
}

export default EditPet