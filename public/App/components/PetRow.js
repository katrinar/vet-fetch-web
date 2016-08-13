import React, { Component } from 'react'
import text from '../utils/text'

class PetRow extends Component {

	render(){
		return(
			<div>
				<a href={'/pet/'+this.props.pet.slug}> {text.capitalize(this.props.pet.name)},</a> {text.capitalize(this.props.pet.species)}
			</div>
		)
	}
}

export default PetRow