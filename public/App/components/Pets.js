import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import api from '../utils/api'
import store from '../stores/store'
import actions from '../actions/actions'
import { connect } from 'react-redux'

class Pets extends Component {

	constructor(props, context){
		super(props, context)
		this.state = {
		
		}
	}

	componentDidMount(){
		var _this = this
		api.handleGet('/api/pet', null, function(err, results){
			if (err){
				alert(err.message)
				return
			}

			console.log('PETS GET RESPONSE: '+JSON.stringify(results.results))
			store.dispatch(actions.petsReceived(results.results))
			return
		})
	}

	render() {

		var petList = this.props.pets.map(function(pet, i){
			return <li key={pet.id}>{pet.name}</li>
		})

		return (

			<div>

				<ol>
					{petList}
				</ol>

			</div>
			
		)
	}
}

const stateToProps = function(state){
	console.log('PETS STATE TO PROPS: '+JSON.stringify(state))
	return {
		pets: state.petReducer.petsArray
	}
}



export default connect (stateToProps)(Pets)