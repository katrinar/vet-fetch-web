import React, { Component } from 'react'
import api from '../utils/api'
import store from '../stores/store'
import { connect } from 'react-redux'
import actions from '../actions/actions'

class RegisterPet extends Component {

	constructor(props, context){
		super(props, context)
		this.submitPet = this.submitPet.bind(this)
		this.registerPet = this.registerPet.bind(this)
		this.state = {
			registerPet: {
				name: '',
				breed: '',
				ownerId: null,
				slug: null
			}
		}
	}

	submitPet(event){
		var registerPet = Object.assign({}, this.state.registerPet)
		registerPet[event.target.id] = event.target.value
		registerPet['ownerId'] = this.props.currentUser.id 
		this.setState({
			registerPet: registerPet
		})
	}

	registerPet(event){
		event.preventDefault()
		api.handlePost('/api/pet', this.state.registerPet, function(err, response){
			if (err){
				alert(err.message)
				return
			}
			console.log(JSON.stringify(response.result))
			store.dispatch(actions.registerPet(response.result))
		})

	}

	render(){
		return(

			<div>
				<p>Register your Pet</p>
				<form action = "/api/pet" method="post">
					<input type="text" onChange={this.submitPet} id="name" placeholder="Name" /><br />
					<input type="text" onChange={this.submitPet} id="breed" placeholder="Breed" /><br />
					<button onClick={this.registerPet}>Register Pet</button>
				</form> 			 
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

export default connect (stateToProps)(RegisterPet)