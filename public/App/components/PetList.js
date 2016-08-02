import React, { Component } from 'react'
import store from '../stores/store'
import actions from '../actions/actions'
import { connect } from 'react-redux'

class PetList extends Component {
	render(){
		var petList = this.props.pets.map(function(pet, i){
			return <li key={pet._id}> {pet.name} </li>
		})
		return(
			<div>{petList}</div>

			)
	}
}

const stateToProps  = function(state){
	return{
		pets: state.petReducer.petsArray
	}
}

export default connect (stateToProps)(PetList)