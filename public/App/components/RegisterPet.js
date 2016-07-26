import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import api from '../utils/api'
import store from '../stores/store'
import actions from '../actions/actions'
import { connect } from 'react-redux'

class RegisterPet extends Component {

	componentDidMount(){
		console.log('RegisterPet componentDidMount')

	}

	constructor(props, context){
		super(props, context)
		this.updatePet = this.updatePet.bind(this)
		this.registerPet = this.registerPet.bind(this)
		this.state = {
			newPet: {
				name: '',
				breed: '',
				sex: ''
			}
		}
	}

	updatePet(event){
		// console.log('updatePet: '+event.target.id+' == '+event.target.value)
		var updatedPet = Object.assign({}, this.state.newPet)
		updatedPet[event.target.id] = event.target.value
		this.setState({
			newPet: updatedPet
		})
	}

	registerPet(event){
		event.preventDefault()
		api.handlePost('/api/pet', this.state.newPet, function(err, response){
			if (err){
				alert(err.message)
				return
			}
			console.log('REGISTER_PET POST RESPONSE: '+ JSON.stringify(response.result))
			store.dispatch(actions.petCreated(response.result))
			})
	}

	render(){

		return(

			<div>
				<p>Tell us About Your Pet</p>
   				<form action="/api/pet" method="post">
   					<input type="text" onChange={this.updatePet} id="name" placeholder="Name" /><br />
			   		<input type="text" onChange={this.updatePet} id="breed" placeholder="Breed" /><br />
			   		<input type="text" onChange={this.updatePet} id="sex" placeholder="Sex" /><br />
   					<button onClick={this.registerPet}>Register your Pet</button>
   				</form>
			</div>
		)
	}
}

const stateToProps = function(state){
	console.log('REGISTER PET STATE TO PROPS: '+JSON.stringify(state))
	return {
		newPet: state.petReducer.newPet	}
}

export default connect (stateToProps)(RegisterPet)