import React, { Component } from 'react'
import Pets from '../components/Pets'
import api from '../utils/api'
import store from '../stores/store'

class Account extends Component {

	constructor(props, context){
		super(props, context)
		this.logout = this.logout.bind(this)
	}

	// componentDidMount(){
	// 	 var storeState = store.getState()
	// 	var user = storeState.accountReducer.currentUser || {}
	// 	console.log('ACCOUNT componentDidMount: '+JSON.stringify(user))
	// }

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
					Welcome, {this.props.currentUser.firstName}
				</h2>
				<h3><a href={'/pets/'}>Pets</a></h3>
				<h3>Appointments</h3>
				<button onClick={this.logout}>Logout</button>
			</div>
		)
	}
}

export default Account