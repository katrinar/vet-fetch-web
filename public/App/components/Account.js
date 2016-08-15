import React, { Component } from 'react'
import api from '../utils/api'
import text from '../utils/text'
import store from '../stores/store'

class Account extends Component {

	constructor(props, context){
		super(props, context)
		this.logout = this.logout.bind(this)
	}

	logout(event){
		event.preventDefault()

		api.handleGet('account/logout', null, function(err, response){
			if (err){
				alert(err.message)
				return
			}
			window.location.href = '/'
		})

	}

	render(){
		
		return(
			<div>
				<h2>
					Welcome, {text.capitalize(this.props.currentUser.firstName)}
				</h2>
				<h3><a href={'/pets/'}>Pets</a></h3>
				<h3><a href={'/appointments/'}>Appointments</a></h3>
				<button onClick={this.logout}>Logout</button>
			</div>
		)
	}
}

export default Account