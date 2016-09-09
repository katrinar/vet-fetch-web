import React, { Component } from 'react'
import api from '../utils/api'
import text from '../utils/text'
import navigation from '../utils/navigation'
import store from '../stores/store'
import actions from '../actions/actions'
import Nav from '../components/Nav'

class EditProfile extends Component {
	constructor(props, context){
		super(props, context)
		this.submitEdit = this.submitEdit.bind(this)
		this.submitProfileEdit = this.submitProfileEdit.bind(this)
	}

	submitEdit(event){
		event.preventDefault()
		const currentProfile = this.props.currentUser
		var editedProfile = Object.assign({}, currentProfile)

		editedProfile[event.target.id] = event.target.value
		store.dispatch(actions.receivedCurrentUser(editedProfile))
	}
	
	submitProfileEdit(event){
		event.preventDefault()
		const currentProfile = this.props.currentUser
		var editedProfile = Object.assign({}, currentProfile)
		var endpoint = '/api/profile/'+editedProfile.id

		api.handlePut(endpoint, editedProfile, function(err, response){
			if (err){
				alert(err.message)
				return
			}
			store.dispatch(actions.receivedCurrentUser(response.result))
			navigation.dismissEditProfile()
		})
	}

	render(){
		const profile = this.props.currentUser || {}
		
		return (
			<div>
				<Nav />

				<div className="section notopmargin nobottommargin">
					<div className="container clearfix">

						<form action="" method="">
							<label>First Name</label><br />
							<input type="text" onChange={this.submitEdit} id="firstName" placeholder={'First Name'} value={profile.firstName} /><br />

							<label>Last Name</label><br />
							<input type="text" onChange={this.submitEdit} id="lastName"  placeholder={'Last Name'} value={profile.lastName} /><br />

							<label>Email</label><br />
							<input type="text" onChange={this.submitEdit} id="email" placeholder={'Email'} value={profile.email}/><br />
						</form>

						<button onClick={this.submitProfileEdit}>Save Edits</button>
						<button onClick={navigation.accountPage}>Cancel</button>
					</div>
				</div>
			</div>
		)
	}
}

export default EditProfile