import React, { Component } from 'react'
import api from '../utils/api'

class PetProfile extends Component {
	render(){
		return(
			<div>
				{this.props.pet.name}
			</div>
		)
	}
}

export default PetProfile