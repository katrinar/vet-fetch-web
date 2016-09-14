import React, { Component } from 'react'
import api from '../utils/api'
import text from '../utils/text'
import navigation from '../utils/navigation'
import petManager from '../utils/petManager'
import store from '../stores/store'
import actions from '../actions/actions'
import Dropzone from 'react-dropzone'
import request from 'superagent'
import TopBar from '../components/TopBar'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

// const CLOUDINARY_UPLOAD_PRESET = 'lpqeur5v';
const CLOUDINARY_UPLOAD_PRESET = 'vxd4nrmq';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/hsypls36a/image/upload';

class EditPet extends Component {
	constructor(props, context){
		super(props, context)
		this.submitEdit = this.submitEdit.bind(this)
		this.submitPetEdit = this.submitPetEdit.bind(this)
		this.onImageDrop = this.onImageDrop.bind(this)
		// this.sendPetImg = this.sendPetImg.bind(this)
		this.handleImageUpload = this.handleImageUpload.bind(this)
		this.state = {
			uploadedFileCloudinaryUrl: ''
		}
	}

	onImageDrop(files){
		this.setState({
			uploadedFile: files[0]
		})

		this.handleImageUpload(files[0])
	}

	handleImageUpload(file) {
    	let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file)

	    upload.end((err, response) => {
	      if (err) {
	        console.error(err)
	      }

	      if (response.body.secure_url !== '') {

	        this.setState({
	          uploadedFileCloudinaryUrl: response.body.secure_url
	        })

	        store.dispatch(actions.receivedPetImage(this.state.uploadedFileCloudinaryUrl, this.props.slug))

	        var updatedPet = Object.assign({}, this.props.pets[this.props.slug])

	        petManager.sendPetEdit(updatedPet)
	      }
	    })
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
				<TopBar />
				<Nav />

				<section id="page-title">
		            <div className="container clearfix">
		                <h1>Pet Dashboard</h1>
		            </div>
        		</section>

				<div className="section notopmargin nobottommargin nobg">
					<div className="container clearfix">

						<div className="fancy-title title-double-border">
		                        <h2>Edit Pet Profile</h2>
		                </div>

						<form>
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

							<label>Weight</label><br />
							<input type="text" onChange={this.submitEdit} id="weight" placeholder={'Weight'} value={petProfile.weight}/><br />

							<label>Vaccines</label><br />
							<input type="text" onChange={this.submitEdit} id="vaccinesString" placeholder={'rabies...'} value={petProfile.vaccinesString} /><br />

							<label>Allergies</label><br />
							<input type="text" onChange={this.submitEdit} id="allergiesString" placeholder={'advil,wheat,etc...'} value={petProfile.allergiesString} /><br />

							<label>Medications</label><br />
								<input type="text" onChange={this.submitEdit} id="medicationsString" placeholder={'heartworm,vitamins,etc...'} value={petProfile.medicationsString} /><br />
								<br />

							 <Dropzone multiple={false} accept="image/*" style={{width:100+'%', marginBottom:24, background:'#fff', border:'1px solid #ddd'}} onDrop={this.onImageDrop}>
									<div style={{padding:24}}>
										Click to upload an image or drag image here.	           
									</div>
							 </Dropzone>

							   <div>
			        				{this.state.uploadedFileCloudinaryUrl === '' ? null :
							        <div>
							          <p>{this.state.uploadedFile.name}</p>
							          <img src={this.state.uploadedFileCloudinaryUrl} />
							        </div>}
		      					</div>

						</form>

						<a href="#" onClick={this.submitPetEdit} className="button button-3d button-small button-rounded button-leaf">Save Edits</a>
			
						<a href="#" onClick={navigation.dismissEditPet} className="button button-3d button-small button-rounded button-aqua">Cancel</a>
					</div>
				</div> 
				<Footer />
			</div>
		)
	}
}

export default EditPet