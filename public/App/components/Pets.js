import React, { Component } from 'react'
import api from '../utils/api'
import RegisterPet from '../components/RegisterPet'
import PetList from '../components/PetList' 
import store from '../stores/store'
import actions from '../actions/actions'
import { connect } from 'react-redux'

class Pets extends Component {

	constructor(props, context){
		super(props, context)
		this.fetchPets = this.fetchPets.bind(this)
	}

	componentDidMount() {
		var _this = this
		console.log('PETS COMPONENT: ')
		_this.fetchPets()
	}

	fetchPets(){
		var endpoint = '/api/pet?ownerId='+this.props.currentUser.id
		api.handleGet(endpoint, null, function(err, response){
			if (err){
				alert(err.message)
				return
			}
			console.log('FETCH_PETS: '+JSON.stringify(response.results))
			store.dispatch(actions.receivedPets(response.results))
		})
	}

	render(){
		return(
			<div>
				<p>
					Welcome, {this.props.currentUser.firstName}
				</p>
				{<RegisterPet />}<br />
				{ < PetList /> }
			</div>
		)
	}
}

const stateToProps = function(state){
	return{
		currentUser: state.accountReducer.currentUser,
		pets: state.petReducer.petsArray
	}
}

export default connect (stateToProps)(Pets)