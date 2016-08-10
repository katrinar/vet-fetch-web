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

		return(
			<div>
				{<RegisterPet currentUser={this.props.currentUser}/>}<br />
				{< PetList petsArray={this.props.petsArray}/> }<br />
				<button onClick={navigation.accountPage}>Back to Home</button>

			</div>
		)
	}
}

export default Pets