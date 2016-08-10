import React, { Component } from 'react'
import PetRow from '../components/PetRow'

class PetList extends Component {
	render(){
		var petList = this.props.petsArray.map(function(pet, i){
			return <PetRow key={i} pet={pet} />
		})

		return(
			<div>
				{petList}
			</div>
		)
	}
}

export default PetList