import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import api from '../utils/api'

class RegisterPet extends Component {

	constructor(props, context){
		super(props, context)
		this.updatePet = this.updatePet.bind(this)
		this.register = this.register.bind(this)
		this.state = {
			pet: {
				name: '',
				breed: '',
				sex: ''
			}
		}
	}

	componentDidMount(){
		console.log('RegisterPet componentDidMount')

	}

	updatePet(event){
		console.log('updatePet: '+event.target.id+' == '+event.target.value)
		var updatedPet = Object.assign({}, this.state.pet)
		updatedPet[event.target.id] = event.target.value
		this.setState({
			pet: updatedPet
		})
	}

	register(event){
		event.preventDefault()
		api.handlePost('/api/pet', this.state.pet, function(err, response){
			if (err){
				alert(err.message)
				return
			}
			console.log(JSON.stringify(response))
			window.location.ref = '/account'
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
   					<button onClick={this.register}>Register</button>
   				</form>
			</div>
		)
	}
}


export default RegisterPet