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

				<section id="page-title">
			            <div className="container clearfix">
			                <h1>Account</h1>
			            </div>
        		</section>

				<div className="section notopmargin nobottommargin nobg">
					<div className="container clearfix">

						<div className="fancy-title title-double-border">
		                    <h2>Edit Account Settings </h2>
		                </div>

						<form action="" method="">
							<label>First Name</label><br />
							<input type="text" onChange={this.submitEdit} id="firstName" placeholder={'First Name'} value={profile.firstName} /><br />

							<label>Last Name</label><br />
							<input type="text" onChange={this.submitEdit} id="lastName"  placeholder={'Last Name'} value={profile.lastName} /><br />

							<label>Email</label><br />
							<input type="text" onChange={this.submitEdit} id="email" placeholder={'Email'} value={profile.email}/><br />
						</form>

						<a href="#" onClick={this.submitProfileEdit} className="button button-3d button-small button-rounded button-leaf">Save Edits</a>
			
						<a href="#" onClick={navigation.accountPage} className="button button-3d button-small button-rounded button-aqua">Cancel</a>
					</div>
				</div>
			</div>
		)
	}
}

export default EditProfile