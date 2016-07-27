import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import api from '../utils/api'
import store from '../stores/store'
import actions from '../actions/actions'
import { connect } from 'react-redux'
import Pets from '../components/Pets'
import RegisterPet from '../components/RegisterPet'


class Account extends Component {

	constructor(props, context){
		super(props, context)
		this.logout = this.logout.bind(this)
		this.fetchPets = this.fetchPets.bind(this)

		this.state = {
		}
	}

	componentDidMount(){
		console.log('ACCOUNT componentDidMount: Page: '+this.props.page+", Slug: " + this.props.slug)

		var _this = this
		api.handleGet('/account/currentuser', null, function(err, result){
			if (err){
				alert(err.message)
				return
			}

			console.log('Account Get Current User: '+JSON.stringify(result.user))

			store.dispatch(actions.currentUserReceived(result.user))
			_this.fetchPets()
			return
		})

	}

	fetchPets(){

		if (this.props.user.id == null){
			return
		}	
		var endpoint = '/api/pet?ownerId='+this.props.user.id
	
		api.handleGet(endpoint, null, function(err, results){
			if (err){
				alert(err.message)
				return
			}
			console.log('FETCH PETS: '+JSON.stringify(results.results))
			store.dispatch(actions.petsReceived(results.results))
		})
	}

	logout(event){
		event.preventDefault()
		api.handleGet('/account/logout', null, function(err, results){
			if (err){
				alert(err.message)
				return
			}

			console.log('Account logout Response: '+JSON.stringify(result))
			store.dispatch(actions.currentUserLogout(results.user))
			return
		})
		window.location.href = '/index'
	}

	render(){

		return(
			<div>
				This is your Account Home Page!
				<h1>Welcome, {this.props.user.firstName}</h1>
				{ <RegisterPet /> }<br />
				{ <Pets /> }<br />
				<a onClick={this.logout} href ='/'>Logout</a>
			</div>
		)
	}
}

const stateToProps = function(state){
	console.log('ACCOUNT STATE TO PROPS: '+JSON.stringify(state))
	return {
		user: state.accountReducer.currentUser

	}
}

export default connect (stateToProps)(Account)