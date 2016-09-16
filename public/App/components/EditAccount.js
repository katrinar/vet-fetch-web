import React, { Component } from 'react'
import api from '../utils/api'
import text from '../utils/text'
import navigation from '../utils/navigation'
import store from '../stores/store'
import actions from '../actions/actions'
import TopBar from '../components/TopBar'
import Nav from '../components/Nav'

class EditAccount extends Component {
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

			<div className="modal fade" id="editAccountModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-body">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                <h4 className="modal-title" id="myModalLabel">Edit Profile</h4>
                            </div>
                            <div className="modal-body">
                                <form >
                                	<div className="portfolio-2 portfolio-masonry clearfix">
	                                	<article className="portfolio-item pf-illustrations">
											<label>First Name</label><br />
											<input type="text" onChange={this.submitEdit} id="firstName" placeholder={'First Name'} value={profile.firstName} /><br />	
										</article>	
										<article className="portfolio-item pf-illustrations">	
											<label>Email</label><br />
											<input type="text" onChange={this.submitEdit} id="email" placeholder={'Email'} value={profile.email} /><br />
										</article>
										<article className="portfolio-item pf-illustrations">	
											<label>Last Name</label><br />
											<input type="text" onChange={this.submitEdit} id="lastName" placeholder={'Last Name'} value={profile.lastName} /><br />
										</article>	
										<article className="portfolio-item pf-illustrations">	
											<label>Password</label><br />
											<input type="password" onChange={this.submitEdit} id="password" placeholder={'****'} value={profile.password} />	
										</article>
									</div>	
								</form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                <button onClick={this.submitProfileEdit} type="button" className="btn btn-primary button-aqua" data-dismiss="modal">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		)
	}
}

export default EditAccount