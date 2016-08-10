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

	componentWillMount(){

		var storeState = store.getState()
		console.log("MAIN COMPONENT WILL MOUNT: "+JSON.stringify(storeState))
	}

	componentDidMount() {
		var _this = this


		var storeState = store.getState()
		console.log("MAIN: "+JSON.stringify(storeState))

		api.handleGet('/account/currentuser', null, function(err, response){
			if (err){
				alert(err.message)
				return
			}

			store.dispatch(actions.receivedCurrentUser(response.user))

			_this.fetchPets()
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

			store.dispatch(actions.receivedPets(response.results))
			
			return
		})
	}

	render() {
		var page = null

		// switch(this.props.page){
		// 	case 'home':
		// 		return page = <Landing />
		// 	case 'account':
		// 		return page = <Account currentUser={this.props.currentUser}/>
		// 	case 'pets':
		// 		return page = <Pets />
		// 	case 'pet':
		// 		return page = <PetProfile slug={this.props.slug} pets={this.props.pets} />
		// 	default: 
		// 		return page = null
		// }

		switch(this.props.page){
			case 'home':
				if (this.props.currentUser.id != null){
					return page = <Account currentUser={this.props.currentUser} /> 
				}
					
				return page = <Landing />
			case 'account':
				return page = <Account currentUser={this.props.currentUser}/>
			case 'pets':
				return page = <Pets />
			case 'pet':
				return page = <PetProfile slug={this.props.slug} pets={this.props.pets} />
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

