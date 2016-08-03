import React, { Component } from 'react'
import api from '../utils/api'
import store from '../stores/store'
import actions from '../actions/actions'

class Login extends Component {
	componentDidMount() {
		console.log('REGISTER COMPONENT: ')
	}

	constructor(props, context){
		super(props, context)
		this.submitUser = this.submitUser.bind(this)
		this.login = this.login.bind(this)
		this.state = {
			loginUser: {
				email: '',
				password: ''
			}
		}
	}

	submitUser(event){
		var loginUser = Object.assign({}, this.state.loginUser)
		loginUser[event.target.id] = event.target.value
		this.setState({
			loginUser: loginUser 
		})
	}

	login(event){
		event.preventDefault()

		api.handlePost('/account/login', this.state.loginUser, function(err, response){
			if (err != null){
				alert(err.message)
				return
			}

			// console.log(JSON.stringify(response.currentUser))
			store.dispatch(actions.receivedCurrentUser(response.currentUser))
			window.location.href = '/account'
		})
	}

	render(){
		return(
			<div>
				<p>Login</p>
				<form action = "/account/login" method="post">
					<input type="text" onChange={this.submitUser} id="email" placeholder="Email" /><br />
					<input type="text" onChange={this.submitUser} id="password" placeholder="password" /><br />
					<button onClick={this.login}>Login</button>
				</form> 			 
			</div>
		)
	}
}

export default Login