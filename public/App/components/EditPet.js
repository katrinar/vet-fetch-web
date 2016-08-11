import React, { Component } from 'react'

class EditPet extends Component {
	constructor(props, context){
		super(props, context)
		this.submitEdit = this.submitEdit.bind(this)
		this.submitPetEdit = this.submitPetEdit.bind(this)
		this.state = {
			editPet: {
				name: '',
				birthday: '',
				sex: '',
				species: '',
				breed: '',
				allergies: '',
				medications: ''
			}
		}
	}

	submitEdit(event){
		const petSlug = this.props.slug

		var editPet = Object.assign({}, this.props.pets[petSlug])
		editPet[event.target.id] = event.target.value
		this.setState({
			editPet: editPet
		})

	}

	submitPetEdit(event){
		event.preventDefault()

		console.log('submitPetEdit: editPet = '+JSON.stringify(this.state.editPet))
	}

	render(){
		console.log('EDIT PET: this.state.editPet = '+JSON.stringify(this.state.editPet))
		const petSlug = this.props.slug
		const petProfile = this.props.pets[petSlug] || {}
		
		return (
			<div>
				<form >
					<label>Name</label>
					<input type="text" onChange={this.submitEdit} id="name" value={petProfile.name} placeholder="Name"/><br />

					<label>Birthday</label>
					<input type="text" onChange={this.submitEdit} id="birthday" value={petProfile.birthday} placeholder="Birthday"/><br />

					<label>Sex</label>
					<input type="text" onChange={this.submitEdit} id="sex" value={petProfile.sex} /><br />

					<label>Species</label>
					<input type="text" onChange={this.submitEdit} id="species" value={petProfile.species} /><br />

					<label>Breed</label>
					<input type="text" onChange={this.submitEdit} id="breed" value={petProfile.breed} /><br />

					<label>Allergies</label>
					<input type="text" onChange={this.submitEdit} id="allergies" value={petProfile.allergies}/><br />

					<label>Medications</label>
					<input type="text" onChange={this.submitEdit} id="medications" value={petProfile.medications} /><br />

					<button onClick={this.submitPetEdit}>Save Edits</button>
				</form> 
			</div>
		)
	}
}

export default EditPet