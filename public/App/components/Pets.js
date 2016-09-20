import React, { Component } from 'react'
import navigation from '../utils/navigation'
import RegisterPet from '../components/RegisterPet'
import PetList from '../components/PetList'
import PetProfile from '../components/PetProfile' 
import PetsLanding from '../components/PetsLanding'

class Pets extends Component {

	constructor(props, context){
		super(props, context)
	}

	render(){
		var loggedIn = this.props.currentUser || {}
		console.log('PETS user: '+JSON.stringify(loggedIn))

		var content = null
		if (loggedIn.id != null){
			switch(this.props.showRegisterPet){
				case false: 
					return content = <PetList currentUser={this.props.currentUser} petsArray={this.props.petsArray}/> 
				case true: 
					return content = <RegisterPet currentUser={this.props.currentUser} />
			}
		}

		else {
			content = <PetsLanding currentUser={this.props.currentUser} petsArray={this.props.petsArray}/>
		}
		
		

		return(
			<div>
				{content}
			</div>
		)
	}
}

export default Pets