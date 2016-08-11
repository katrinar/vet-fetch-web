import React, { Component } from 'react'
import api from '../utils/api'
import text from '../utils/text'
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

		var editPet = Object.assign({}, this.props.pets[this.props.slug])
		editPet[event.target.id] = event.target.value
		store.dispatch(actions.receivedPetEdit(editPet))

	}

	submitPetEdit(event){
		event.preventDefault()
		
		var petId = this.props.pets[this.props.slug].id
		var editedPet = Object.assign({}, this.props.pets[this.props.slug]) || {}

		editedPet['allergies'] = text.stringToArray(editedPet.allergies, ',')
		editedPet['medications'] = text.stringToArray(editedPet.medications, ',')

		var endpoint = '/api/pet/'+petId

		api.handlePut(endpoint, editedPet, function(err, response){
			if (err){
				alert(err.message)
				return
			}

			console.log('submitPetEdit: response = '+JSON.stringify(response))

			store.dispatch(actions.receivedPetEdit(response.result))
		} )
	}

	render(){
		const petSlug = this.props.slug
		const petProfile = this.props.pets[petSlug] || {}
		
		return (
			<div>
				<form action="" method="">
					<label>Name</label><br />
					<input type="text" onChange={this.submitEdit} id="name" /><br />

					<label>Birthday</label><br />
					<input type="text" onChange={this.submitEdit} id="birthday" /><br />

					<label>Sex</label><br />
					<input type="text" onChange={this.submitEdit} id="sex" /><br />

					<label>Species</label><br />
					<input type="text" onChange={this.submitEdit} id="species" /><br />

					<label>Breed</label><br />
					<input type="text" onChange={this.submitEdit} id="breed" /><br />

					<label>Allergies</label><br />
					<input type="text" onChange={this.submitEdit} id="allergies" /><br />

					<label>Medications</label><br />
					<input type="text" onChange={this.submitEdit} id="medications" /><br />

					<button onClick={this.submitPetEdit}>Save Edits</button>
				</form> 
			</div>
		)
	}
}

export default EditPet