import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import api from '../utils/api'
import store from '../stores/store'
import actions from '../actions/actions'
import { connect } from 'react-redux'

class Register extends Component {

	componentDidMount(){
		console.log('Register componentDidMount')
	}

	constructor(props, context){
		super(props, context)
		this.updateUser = this.updateUser.bind(this)
		this.register = this.register.bind(this)
		this.updateCredentials = this.updateCredentials.bind(this)
		this.login = this.login.bind(this)
		this.state = {
			newUser: {
				firstName: '',
				lastName: '',
				email: '',
				password: ''
			},

			credentials: {
				email: '',
				password: ''
			}
		}
	}

	updateUser(event){
		console.log('updateUser: '+event.target.id+' == '+event.target.value)
		var updatedUser = Object.assign({}, this.state.newUser)
		updatedUser[event.target.id] = event.target.value
		this.setState({
			newUser: updatedUser
		})
	}

	register(event){
		event.preventDefault()
		api.handlePost('/api/profile', this.state.newUser, function(err, result){
			if (err){
				alert(err.message)
				return
			}
			store.dispatch(actions.profileReceived(result))
			console.log('Register handlePost: '+ JSON.stringify(result))

			// window.location.href = '/account'

		})
	}

	updateCredentials(event){
		var credentials = Object.assign({}, this.state.credentials)
		credentials[event.target.id] = event.target.value
		this.setState({
			credentials: credentials
		})
	}

	login(event){
		event.preventDefault()

		api.handlePost('/account/login', this.state.credentials, function(err, response){
			if (err != null){
				alert(err.message)
				return
			}

			console.log(JSON.stringify(response))
			window.location.href = '/account'
		})
	}

	render(){

		return(

			<div>
				<h2>New? Sign up to check out pet insurance options</h2>
				<p>Register</p>
				<form action="/api/profile" method="post">
	   				<input type="text" onChange={this.updateUser} id="firstName" placeholder="First Name" /><br />
	   				<input type="text" onChange={this.updateUser} id="lastName" placeholder="Last Name" /><br />
	   				<input type="text" onChange={this.updateUser} id="email" placeholder="Email" /><br />
	   				<input type="text" onChange={this.updateUser} id="password" placeholder="Password" /><br />
	   				<button onClick={this.register}>Register</button>
   				</form>

   				<p>Login</p>
   				<form action="/account/login" method="post">
   					<input type="text" onChange={this.updateCredentials} id="email" placeholder="Email" /><br />
   					<input type="text" onChange={this.updateCredentials} id="password" placeholder="Password" /><br />
   					<button onClick={this.login}>Login</button>
   				</form>
			</div>

		)
	}
}

const stateToProps = function(state){
	console.log('stateToProps: '+JSON.stringify(state))
	return {

		profile: state.accountReducer.profile
	}
	

}

export default connect (stateToProps)(Register)