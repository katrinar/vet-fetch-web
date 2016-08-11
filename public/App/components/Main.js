import React, { Component } from 'react'
import api from '../utils/api'
import navigation from '../utils/navigation'
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

		api.handleGet('/account/currentuser', null, function(err, response){
			if (err){
				alert(err.message)
				return
			}

			if (response.confirmation == "Fail"){
				return
			}

			if (response.confirmation == "Success"){
				store.dispatch(actions.receivedCurrentUser(response.user))
				_this.fetchPets()
			}
		})
	}

	fetchPets(){

		 var user = this.props.currentUser || {}
		//  var storeState = store.getState()
		// var user = storeState.accountReducer.currentUser || {}

		if (user.id != null){
			var endpoint = '/api/pet?ownerId='+user.id
			api.handleGet(endpoint, null, function(err, response){
			if (err){
				alert(err.message)
				return
			}
			console.log('fetch pets: '+JSON.stringify(response.results))

			store.dispatch(actions.receivedPets(response.results))
			
			return
			})	
		}
	}

	render() {
		var page = null
		var currentUser = this.props.currentUser || {}

		switch(this.props.page){
			case 'home':
				if (currentUser.id != null){
					return page = <Account currentUser={this.props.currentUser} /> 
				}
					
				return page = <Landing />
			case 'account':
				return page = <Account currentUser={this.props.currentUser}/>
			case 'pets':
				return page = <Pets currentUser={this.props.currentUser} petsArray={this.props.petsArray}/>
			case 'pet':
				return page = <PetProfile pets={this.props.pets} slug={this.props.slug}  />
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
		petsArray: state.petReducer.petsArray,
		pets: state.petReducer.pets	}
}

export default connect (stateToProps)(Main) 

