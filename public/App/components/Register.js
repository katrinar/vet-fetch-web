import React, { Component } from 'react'
import api from '../utils/api'
import store from '../stores/store'
import actions from '../actions/actions'

class Register extends Component {

	constructor(props, context){
		super(props, context)
		this.submitProfile = this.submitProfile.bind(this)
		this.register = this.register.bind(this)
	}

	submitProfile(event){
		var registerUser = Object.assign({}, this.props.currentUser)
		registerUser[event.target.id] = event.target.value
		store.dispatch(actions.receivedCurrentUser(registerUser))
	}

	register(event){
		event.preventDefault()

		api.handlePost('/api/profile', this.props.currentUser, function(err, response){
			if (err != null){
				alert(err.message)
				return
			}
			store.dispatch(actions.receivedCurrentUser(response.result))
		})
	}

	render(){
		return(
			<div>
				<p>Register</p>
				<form action = "" method="">
					<input type="text" onChange={this.submitProfile} id="firstName" placeholder="First Name" /><br />
					<input type="text" onChange={this.submitProfile} id="lastName" placeholder="Last Name" /><br />
					<input type="text" onChange={this.submitProfile} id="email" placeholder="Email" /><br />
					<input type="text" onChange={this.submitProfile} id="password" placeholder="password" /><br />
					<button onClick={this.register}>Register</button>
				</form> 			 
			</div>
		)
	}
}

export default Register