import React, { Component } from 'react'
import api from '../utils/api'
import text from '../utils/text'
import navigation from '../utils/navigation'
import petManager from '../utils/petManager'
import store from '../stores/store'
import actions from '../actions/actions'
import Dropzone from 'react-dropzone'

class EditPet extends Component {
	constructor(props, context){
		super(props, context)
		this.submitEdit = this.submitEdit.bind(this)
		this.submitPetEdit = this.submitPetEdit.bind(this)
		this.uploadProfileImage = this.uploadProfileImage.bind(this)
	}

	uploadProfileImage(files){
		var file = files
		var fileUrl = file[0]
		const currentPetProfile = this.props.pets[this.props.slug]
		var fileObj = Object.assign({}, currentPetProfile)
		fileObj['imagePreview'] = fileUrl.preview

		console.log('uploadProfileImage fileObj = '+JSON.stringify(fileObj))

		api.upload(fileObj)
	}

	// uploadProfileImage(files){
	// 	var file = files
	// 	var fileUrl = file[0].preview
		
	// 	console.log('uploadProfileImage var uploadFile = '+JSON.stringify(fileUrl))

	// 	cloudinary.config({
	// 	  cloud_name: 'mtech',
	// 	  api_key: '289663892411772',
	// 	  api_secret: 'wqCHR14jkti89DZSy0cXRnDlKkg'
	// 	})
	
	// 	cloudinary.uploader.upload(fileUrl, function(result) { 
 //  			console.log('cloudinary uploader result = '+JSON.stringify(result)) 
	// 	})
	// }

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

		var vaccinesString = editedPet['vaccinesString']
		var allergiesString = editedPet['allergiesString']
		var medicationsString = editedPet['medicationsString']

		editedPet['vaccines'] = text.stringToArray(vaccinesString, ',')

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

					<label>Vaccines</label><br />
					<input type="text" onChange={this.submitEdit} id="vaccinesString" placeholder={'rabies...'} value={petProfile.vaccinesString} /><br />

					<label>Allergies</label><br />
					<input type="text" onChange={this.submitEdit} id="allergiesString" placeholder={'advil,wheat,etc...'} value={petProfile.allergiesString} /><br />

					<label>Medications</label><br />
						<input type="text" onChange={this.submitEdit} id="medicationsString" placeholder={'heartworm,vitamins,etc...'} value={petProfile.medicationsString} /><br />
						<br />

					 <Dropzone style={{width:100+'%', marginBottom:24, background:'#fff', border:'1px solid #ddd'}} onDrop={this.uploadProfileImage}>
							<div style={{padding:24}}>
								Click to upload an image or drag image here.		           
							</div>
					 </Dropzone>

					<button onClick={this.submitPetEdit}>Save Edits</button>
					<button onClick={navigation.dismissEditPet}>Cancel</button>
				</form> 
			</div>
		)
	}
}

export default EditPet