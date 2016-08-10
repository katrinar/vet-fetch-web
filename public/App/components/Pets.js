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

	render(){

		return(
			<div>
				{<RegisterPet />}<br />
				{< PetList petsArray={this.props.petsArray}/> }<br />
				<button onClick={navigation.accountPage}>Back to Home</button>

			</div>
		)
	}
}

const stateToProps = function(state) {
	console.log('STATE_TO_PROPS_PETS: '+JSON.stringify(state))
	return {
		petsArray: state.petReducer.petsArray
	}
}

export default connect (stateToProps)(Pets)