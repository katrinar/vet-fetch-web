import React, { Component } from 'react'
import api from '../utils/api'
import navigation from '../utils/navigation'
import store from '../stores/store'
import actions from '../actions/actions'
import Nav from '../components/Nav'
import Footer from '../components/Footer'


class RegisterPet extends Component {

	constructor(props, context){
		super(props, context)
		this.submitPet = this.submitPet.bind(this)
		this.registerPet = this.registerPet.bind(this)
		this.state = {
			registerPet: {
				name: '',
				species: '',
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
			navigation.dismissRegisterPet()
		})
	}

	render(){
		return(

			<div>
				<Nav />

				<section id="page-title">
		            <div className="container clearfix">
		                <h1>Pet Dashboard</h1>
		            </div>
        		</section>

				<div className="section notopmargin nobottommargin nobg">
					<div className="container clearfix">
						<div className="fancy-title title-double-border">
		                        <h2>Register your Pet</h2>
		                </div>
						<form >
							<input type="text" onChange={this.submitPet} id="name" placeholder="Name" /><br />
							<input type="text" onChange={this.submitPet} id="species" placeholder="Species" /><br />

							
						</form> 

						<a href="#" onClick={this.registerPet} className="button button-3d button-small button-rounded button-leaf">Register Pet</a>
			
						<a href="#" onClick={navigation.dismissRegisterPet} className="button button-3d button-small button-rounded button-aqua">Cancel</a>
			
					</div>
				</div>

				<Footer />			 
			</div>

		)
	}
}

export default RegisterPet