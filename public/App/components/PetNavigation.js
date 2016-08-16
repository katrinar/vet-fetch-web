import React, { Component } from 'react'
import navigation from '../utils/navigation'

class PetNavigation extends Component {
	render(){
		return(
			<div>
				<button onClick={navigation.petsPage}>Back to Pets</button>
				<button onClick={navigation.editPet}>Edit Pet</button>
				<button onClick={navigation.accountPage}>Home</button>
			</div>
		)
	}
}

export default PetNavigation