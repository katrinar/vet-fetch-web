import React, { Component } from 'react'
import Pets from '../components/Pets'
import store from '../stores/store'
import actions from '../actions/actions'
import { connect } from 'react-redux'


class Account extends Component {

	constructor(props, context){
		super(props, context)
	}

	render(){
		
		return(
			<div>
				<h2>
					Welcome, {this.props.currentUser.firstName}
				</h2>
				<h3><a href={'/pets/'}>Pets</a></h3>
				<h3>Appointments</h3>
			</div>
		)
	}
}

const stateToProps = function(state){
	return {
		currentUser: state.accountReducer.currentUser,
		petsArray: state.petReducer.petsArray
	}
}

export default connect (stateToProps)(Account)