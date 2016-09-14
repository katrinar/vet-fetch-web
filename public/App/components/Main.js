import React, { Component } from 'react'
import api from '../utils/api'
import navigation from '../utils/navigation'
import Account from '../components/Account'
import Landing from '../components/Landing'
import HomeContainer from '../components/HomeContainer'
import Pets from '../components/Pets'
import PetProfile from '../components/PetProfile'
import RegisterPet from '../components/RegisterPet'
import VetProfile from '../components/VetProfile'
import VetsContainer from '../components/VetsContainer'
import ComingSoon from '../components/ComingSoon'
import store from '../stores/store'
import actions from '../actions/actions'
import { connect } from 'react-redux'


class Main extends Component {

	constructor(props, context){
		super(props, context)
		this.fetchPets = this.fetchPets.bind(this)
		this.fetchVetResults = this.fetchVetResults.bind(this)
	}

	componentDidMount() {
		var _this = this

		api.handleGet('/account/currentuser', null, function(err, response){
			if (err){
				alert(err.message)
				return
			}

			if (response.confirmation == "Success"){
				store.dispatch(actions.receivedCurrentUser(response.user))
				_this.fetchPets()
				_this.fetchVetResults()
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

			store.dispatch(actions.receivedPets(response.results))
			
			return
			})	
		}
	}

	fetchVetResults(){
		var user = this.props.currentUser || {}
		

		if (user.id != null && this.props.page == 'vet'){
			var endpoint = '/api/vet?currentUserId='+user.id
			console.log('FETCH_VET_RESULTS ENDPOINT: '+JSON.stringify(endpoint))
			api.handleGet(endpoint, null, function(err, response){
			if (err){
				alert(err.message)
				return
			}

			if (response.confirmation == "Success"){
				console.log('VET SEARCH RESULTS: '+JSON.stringify(response.results))
				store.dispatch(actions.receivedUserSearchHistory(response.results))
			}

			})	
		}
	}

	render() {
		var page = null
		var currentUser = this.props.currentUser || {}

		switch(this.props.page){
			case 'home':
				if (currentUser.id != null){
					return page = <HomeContainer currentUser={this.props.currentUser} /> 
				}
					
				return page = <Landing currentUser={this.props.currentUser} />
			case 'account':
				return page = <Account currentUser={this.props.currentUser} showEditProfile={this.props.showEditProfile}/>
			case 'pets':
				return page = <Pets currentUser={this.props.currentUser} petsArray={this.props.petsArray} showRegisterPet={this.props.showRegisterPet}/>
			case 'pet':
				return page = <PetProfile currentUser={this.props.currentUser} pets={this.props.pets} slug={this.props.slug} displayEditPet={this.props.displayEditPet}/>
			case 'register-pet':
				return page = <RegisterPet currentUser={this.props.currentUser} />
			case 'vets':
				return page = <VetsContainer currentUser={this.props.currentUser} search={this.props.search} pets={this.props.pets} slug={this.props.slug}/>
			case 'vet':
				return page = <VetProfile currentUser={this.props.currentUser} searchHistory={this.props.searchHistory} slug={this.props.slug}/>
			case 'insurance':
				return page = <ComingSoon />
			default: 
				return page = null
		}

		return (
			<div>

		        <div>
		        	{page}
		        </div>
	        	
			</div>
		)
	}
}

const stateToProps = function(state) {
	console.log('STATE_TO_PROPS_MAIN: ')
	
	return {
		currentUser: state.accountReducer.currentUser,
		petsArray: state.petReducer.petsArray,
		pets: state.petReducer.pets,
		search: state.searchReducer.search,
		searchHistory: state.searchReducer.searchHistory,
		displayEditPet: state.displayReducer.displayEditPet,
		showRegisterPet: state.displayReducer.showRegisterPet,
		showEditProfile: state.displayReducer.showEditProfile
	}
}

export default connect (stateToProps)(Main) 

