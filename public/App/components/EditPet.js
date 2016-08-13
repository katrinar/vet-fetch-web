import React, { Component } from 'react'
import api from '../utils/api'
import text from '../utils/text'
import navigation from '../utils/navigation'
import petManager from '../utils/petManager'
import store from '../stores/store'
import actions from '../actions/actions'

class EditPet extends Component {
	constructor(props, context){
		super(props, context)
		this.submitEdit = this.submitEdit.bind(this)
		this.submitPetEdit = this.submitPetEdit.bind(this)
		this.cancel = this.cancel.bind(this)
	}

	cancel(event){
		navigation.petProfilePage(this.props.slug)
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

		var allergiesString = editedPet['allergiesString']
		var medicationsString = editedPet['medicationsString']

		editedPet['allergies'] = text.stringToArray(allergiesString, ',')
		
		editedPet['medications'] = text.stringToArray(medicationsString, ',')

		store.dispatch(actions.receivedPetEdit(editedPet))

		petManager.sendPetEdit(editedPet)
		navigation.petProfilePage(this.props.slug)

	}

	render(){
		const petSlug = this.props.slug
		const petProfile = this.props.pets[petSlug] || {}
		
		return (
			<div>
				<form action="" method="">
					<label>Name</label><br />
					<input type="text" onChange={this.submitEdit} id="name" placeholder={'Name'} value={petProfile.name} /><br />

					<label>Birthday</label><br />
					<input type="text" onChange={this.submitEdit} id="birthday"  placeholder={'DD/MM/YYYY'} value={petProfile.birthday} /><br />

					<label>Sex</label><br />
					<input type="text" onChange={this.submitEdit} id="sex" placeholder={'Sex'} value={petProfile.sex}/><br />

					<label>Species</label><br />
					<input type="text" onChange={this.submitEdit} id="species" placeholder={'Species'} value={petProfile.species}/><br />

					<label>Breed</label><br />
					<input type="text" onChange={this.submitEdit} id="breed" placeholder={'Breed'} value={petProfile.breed}/><br />

					<label>Allergies</label><br />
					<input type="text" onChange={this.submitEdit} id="allergiesString" placeholder={'advil,wheat,etc...'} value={petProfile.allergiesString} /><br />

					<label>Medications</label><br />
						<input type="text" onChange={this.submitEdit} id="medicationsString" placeholder={'heartworm,vitamins,etc...'} value={petProfile.medicationsString} /><br />

					<button onClick={this.submitPetEdit}>Save Edits</button>
					<button onClick={this.cancel}>Cancel</button>
				</form> 
			</div>
		)
	}
}

export default EditPet