import React, { Component } from 'react'
import PetRow from '../components/PetRow'
import store from '../stores/store'
import actions from '../actions/actions'
import { connect } from 'react-redux'

class PetList extends Component {
	render(){
		var petList = this.props.petsArray.map(function(pet, i){
			return <PetRow key={pet._id} pet={pet} />
		})

		return(
			<div>
				{petList}
			</div>
		)
	}
}

const stateToProps  = function(state){
	return{
		petsArray: state.petReducer.petsArray,
		currentUser: state.accountReducer.currentUser
	}
}

export default connect (stateToProps)(PetList)