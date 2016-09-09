import React, { Component } from 'react'
import PetRow from '../components/PetRow'
import navigation from '../utils/navigation'
import Nav from '../components/Nav'


class PetList extends Component {
	render(){
		var petList = this.props.petsArray.map(function(pet, i){
			return <PetRow key={i} pet={pet} />
		})

		return(
			<div>
				<Nav />

				<div className="section notopmargin nobottommargin">
					<div className="container clearfix">
						<h4>Pets</h4>
						{petList}
						<button onClick={navigation.registerPet}>Add a Pet</button>
					</div>
				</div>
				
			</div>
		)
	}
}

export default PetList