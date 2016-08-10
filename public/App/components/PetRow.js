import React, { Component } from 'react'

class PetRow extends Component {

	render(){
		return(
			<div>
				<a href={'/pet/'+this.props.pet.slug}> {this.props.pet.name},</a> {this.props.pet.breed}
			</div>
		)
	}
}

export default PetRow