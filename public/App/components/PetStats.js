import React, { Component } from 'react'
import navigation from '../utils/navigation'
import store from '../stores/store'
import actions from '../actions/actions'
import PetNavigation from '../components/PetNavigation'
import PetNavigationToggle from '../components/PetNavigationToggle'


class PetStats extends Component {
	constructor(props, context){
		super(props, context)
	}

	render(){
		const petSlug = this.props.slug
		const petProfile = this.props.pets[petSlug] || {}
		const petProfileImg = petProfile.image || {}
		console.log('petStats = '+JSON.stringify(petProfileImg['thumb']))

		return(
			

			<div>
				<div><PetNavigation /></div>

				<div id='profileContent'>
					<div id='profileHeader'>
						<h2>{petProfile.name} | Stats</h2>
					</div>

					   <div>
	        				{petProfileImg['thumb'] === '' ? null :
					        <div>
					          
					          <img src={petProfileImg['thumb']} />
					        </div>}
      					</div>

					<div id='profileStats'>
						<h4>{petProfile.species}</h4> 
						<h4>{petProfile.breed}</h4>
						<h4>{petProfile.sex}</h4>
						<h4>DoB: {petProfile.birthday}</h4>
					</div>

					<div><PetNavigationToggle /></div>
				</div>

			</div>
		)
	}
}

export default PetStats