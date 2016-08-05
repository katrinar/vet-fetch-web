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
		this.fetchPetProfiles = this.fetchPetProfiles.bind(this)
		this.fetchCurrentPet = this.fetchCurrentPet.bind(this)
	}

	componentWillMount(){
		console.log('MAIN COMPONENT WILL MOUNT: This.props.page = '+this.props.page+', This.props.slug = '+this.props.slug)
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
		var _this = this

		var endpoint = '/api/pet?ownerId='+this.props.currentUser.id
		api.handleGet(endpoint, null, function(err, response){
			if (err){
				alert(err.message)
				return
			}

			var petProfiles = response.results
			var slug = _this.props.slug
			var currentPet = petProfiles.slug

			for (var i=0; i<petProfiles.length; i++){
				var petProfile = petProfiles[i]

				if (petProfile.slug == slug){
					var currentPet = petProfile
				}
			}

			store.dispatch(actions.receivedPets(response.results))
			_this.fetchPetProfiles(petProfiles)
			_this.fetchCurrentPet(currentPet)
			return
		})
	}
	fetchPetProfiles(petProfiles){
		store.dispatch(actions.receivedPetProfiles(petProfiles))
	}

	fetchCurrentPet(currentPet){
		store.dispatch(actions.receivedCurrentPetProfile(currentPet))
	}

	render() {
		var page = null

		switch(this.props.page){
			case 'home':
				return page = <Landing />
			case 'account':
				return page = <Account />
			case 'pets':
				return page = <Pets />
			case 'pet':
				return page = <PetProfile slug={this.props.slug} />
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
		pets: state.petReducer.pets,
		currentPet: state.petReducer.currentPet
	}
}

export default connect (stateToProps)(Main) 

