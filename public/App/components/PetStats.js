import React, { Component } from 'react'
import navigation from '../utils/navigation'
import store from '../stores/store'
import actions from '../actions/actions'
import PetNavigation from '../components/PetNavigation'
import PetNavigationToggle from '../components/PetNavigationToggle'
import Nav from '../components/Nav'
import Footer from '../components/Footer'


class PetStats extends Component {
	constructor(props, context){
		super(props, context)
	}

	render(){
		const petSlug = this.props.slug
		const petProfile = this.props.pets[petSlug] || {}
		const petProfileImg = petProfile.image || {}
		console.log('petStats image[thumb] = '+JSON.stringify(petProfileImg['thumb']))

		return(
			

			<div>
				<Nav />

				<div className="section notopmargin nobottommargin">
					<div className="container clearfix">

						<PetNavigation />

						<div id='profileContent'>
							<div id='profileHeader'>
								<h2>{petProfile.name} | Stats</h2>
							</div>

							 <div>
			        			{petProfileImg['thumb'] === '' ? null :
							        <div>
							          <img src={petProfileImg['original']} />
							        </div>
							    }
		      				</div>

							<div id='profileStats'>
								<h4>Species: {petProfile.species}</h4> 
								<h4>Breed: {petProfile.breed}</h4>
								<h4>Sex: {petProfile.sex}</h4>
								<h4>DoB: {petProfile.birthday}</h4>
							</div>
						</div>
						<PetNavigationToggle />
					</div>
				</div>
				<Footer />

			</div>
		)
	}
}

export default PetStats