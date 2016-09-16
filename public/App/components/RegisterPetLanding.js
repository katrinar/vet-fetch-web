import React, { Component } from 'react'
import api from '../utils/api'
import text from '../utils/text'
import navigation from '../utils/navigation'
import petManager from '../utils/petManager'
import store from '../stores/store'
import actions from '../actions/actions'
import Dropzone from 'react-dropzone'
import request from 'superagent'


// const CLOUDINARY_UPLOAD_PRESET = 'lpqeur5v';
const CLOUDINARY_UPLOAD_PRESET = 'vxd4nrmq';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/hsypls36a/image/upload';

class RegisterPetLanding extends Component {

	constructor(props, context){
		super(props, context)
		this.submitPet = this.submitPet.bind(this)
		this.registerPet = this.registerPet.bind(this)
		this.state = {
			registerPet: {
				name: '',
				species: '',
				ownerId: null,
				slug: null
			}
		}
	}

	submitPet(event){
		var registerPet = Object.assign({}, this.state.registerPet)
		registerPet[event.target.id] = event.target.value
		registerPet['ownerId'] = this.props.currentUser.id 
		this.setState({
			registerPet: registerPet
		})
	}

	registerPet(event){
		event.preventDefault()

		var loggedIn = this.props.currentUser || {}
		console.log('REGISTER PET: currentUser '+JSON.stringify(loggedIn))

		if (loggedIn.id == null){
			alert("Please login or register to save your pets")
		}

		api.handlePost('/api/pet', this.state.registerPet, function(err, response){
			if (err){
				alert(err.message)
				return
			}
			console.log(JSON.stringify(response.result))
			store.dispatch(actions.registerPet(response.result))
		})
		
	}

	render(){
		return(
			<div className="section notopmargin nobottommargin">
					<div className="container clearfix">
						<div className="fancy-title title-double-border">
		                        <h2>Register your Pet</h2>
		                </div>
						<form >
							<input type="text" onChange={this.submitPet} id="name" placeholder="Name" /><br />
							<input type="text" onChange={this.submitPet} id="species" placeholder="Species" /><br />	
						</form> 

					<a href="#" onClick={this.registerPet} className="button button-3d button-small button-rounded button-aqua">Register your Pet</a>
					</div>
				</div>

			)
	}
}

export default RegisterPetLanding