import React, { Component } from 'react'
import api from '../utils/api'
import store from '../stores/store'
import actions from '../actions/actions'

class Login extends Component {

	constructor(props, context){
		super(props, context)
		this.submitUser = this.submitUser.bind(this)
		this.login = this.login.bind(this)
	}

	submitUser(event){
		var loginUser = Object.assign({}, this.props.currentUser)
		loginUser[event.target.id] = event.target.value
		store.dispatch(actions.receivedCurrentUser(loginUser))
	}

	login(event){
		event.preventDefault()
		console.log('login = '+JSON.stringify(this.props.currentUser))

		api.handlePost('/account/login', this.props.currentUser, function(err, response){
			if (err != null){
				alert(err.message)
				return
			}
			console.log('login post: '+JSON.stringify(response.currentUser))
			
			store.dispatch(actions.receivedCurrentUser(response.currentUser))
		})
	}

	render(){
		return(
			<div>
				<p>Login</p>
				<form >
					<input type="text" onChange={this.submitUser} id="email" placeholder="Email" /><br />
					<input type="text" onChange={this.submitUser} id="password" placeholder="password" /><br />
					<button onClick={this.login}>Login</button>
				</form> 			 
			</div>
		)
	}
}

export default Login