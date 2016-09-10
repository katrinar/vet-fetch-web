import React, { Component } from 'react'
import text from '../utils/text'

class PetRow extends Component {

	render(){

	
		const pet = this.props.pet || {}
		const petProfileImg = pet.image || {}

		return(
			<div>
				<div>
			        {petProfileImg['thumb'] === '' ? null :
						<div><img src={petProfileImg['original']} /></div>
					}
		      	</div>
				<a href={'/pet/'+this.props.pet.slug}> {text.capitalize(this.props.pet.name)},</a> {text.capitalize(this.props.pet.species)}
			</div>
		)
	}
}

export default PetRow