import React, { Component } from 'react'
import PetRow from '../components/PetRow'
import navigation from '../utils/navigation'
import HomeButton from '../components/HomeButton'


class PetList extends Component {
	render(){
		var petList = this.props.petsArray.map(function(pet, i){
			return <PetRow key={i} pet={pet} />
		})

		return(
			<div>
				<div>
					<button onClick={navigation.registerPet}>Add a Pet</button>
					<HomeButton />
				</div>
				<h4>Pets</h4>
				{petList}
			</div>
		)
	}
}

export default PetList