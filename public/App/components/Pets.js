import React, { Component } from 'react'
import api from '../utils/api'
import navigation from '../utils/navigation'
import RegisterPet from '../components/RegisterPet'
import PetList from '../components/PetList'
import PetProfile from '../components/PetProfile' 
import store from '../stores/store'
import actions from '../actions/actions'
import { connect } from 'react-redux'

class Pets extends Component {

	constructor(props, context){
		super(props, context)
	}

	componentDidMount() {
		console.log('PETS COMPONENT DID MOUNT:')
	}

	render(){

		return(
			<div>
				{<RegisterPet />}<br />
				{< PetList /> }<br />
				<button onClick={navigation.accountPage}>Back to Home</button>

			</div>
		)
	}
}

const stateToProps = function(state){
	console.log('STATE_TO_PROPS_PETS: '+JSON.stringify(state))
	return{
		currentUser: state.accountReducer.currentUser,
		petsArray: state.petReducer.petsArray
	}
}

export default connect (stateToProps)(Pets)