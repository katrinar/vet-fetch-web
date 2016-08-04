import React, { Component } from 'react'
import api from '../utils/api'
import Account from '../components/Account'
import Landing from '../components/Landing'
import Pets from '../components/Pets'
import PetProfile from '../components/PetProfile'
import store from '../stores/store'
import actions from '../actions/actions'
import { connect } from 'react-redux'


class Main extends Component {

	constructor(props, context){
		super(props, context)
		this.fetchPets = this.fetchPets.bind(this)
	}

	componentDidMount() {
		var _this = this
		console.log('MAIN COMPONENT DID MOUNT: This.props.page = '+this.props.page+', This.props.slug = '+this.props.slug)

		api.handleGet('/account/currentuser', null, function(err, response){
			if (err){
				alert(err.message)
				return
			}
	
			store.dispatch(actions.receivedCurrentUser(response.user))
			_this.fetchPets()
			return
		})
	}

	fetchPets(){
		var endpoint = '/api/pet?ownerId='+this.props.currentUser.id
		api.handleGet(endpoint, null, function(err, response){
			if (err){
				alert(err.message)
				return
			}
			// console.log('FETCH_PETS: '+JSON.stringify(response.results))
			store.dispatch(actions.receivedPets(response.results))
			store.dispatch(actions.receivedPetProfiles(response.results))
		})
	}

	render() {
		var page = null
		var loggedInUser = this.props.currentUser || {}
		console.log('MAIN: LOGGED IN USER = '+JSON.stringify(loggedInUser))

		switch(this.props.page){
			case 'home':
				return page = <Landing />
			case 'account':
				return page = <Account />
			case 'pets':
				return page = <Pets />
			case 'pet':
				return page = <PetProfile loggedInUser = {loggedInUser} slug={this.props.slug} />
			default: 
				return page = null
		}

		return (
			<div>
				{page}
			</div>
		)
	}
}

const stateToProps = function(state) {
	console.log('STATE_TO_PROPS_MAIN: '+JSON.stringify(state))
	return {
		currentUser: state.accountReducer.currentUser,
		petsArray: state.petReducer.petsArray	
	}
}

export default connect (stateToProps)(Main) 

