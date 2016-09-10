import React, { Component } from 'react'
import navigation from '../utils/navigation'

class PetNavigation extends Component {
	render(){
		return(
			<div>
				<button onClick={navigation.petsPage}>Back to Pets</button>
				<a href="#" onClick={navigation.editPet} className="button button-3d button-small button-rounded button-aqua">Edit Pet Profile</a>
			</div>
		)
	}
}

export default PetNavigation