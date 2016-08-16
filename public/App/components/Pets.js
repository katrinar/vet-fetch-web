import React, { Component } from 'react'
import navigation from '../utils/navigation'
import RegisterPet from '../components/RegisterPet'
import PetList from '../components/PetList'
import PetProfile from '../components/PetProfile' 

class Pets extends Component {

	constructor(props, context){
		super(props, context)
	}

	render(){

		var content = null
		switch(this.props.showRegisterPet){
			case false: 
				return content = <PetList petsArray={this.props.petsArray}/> 
			case true: 
				return content = <RegisterPet currentUser={this.props.currentUser}/>
		}

		return(
			<div>
				{content}
			</div>
		)
	}
}

export default Pets