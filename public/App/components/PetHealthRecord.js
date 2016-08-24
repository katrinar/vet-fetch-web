import React, { Component } from 'react'
import store from '../stores/store'
import actions from '../actions/actions'
import navigation from '../utils/navigation'
import PetNavigation from '../components/PetNavigation'
import PetNavigationToggle from '../components/PetNavigationToggle'

class PetHealthRecord extends Component {
	constructor(props, context){
		super(props, context)
	}

	render(){
		const petSlug = this.props.slug
		const petProfile = this.props.pets[petSlug] || {}

		return(
	
			<div>
				<div id='petHealthRecord'>
					<div><PetNavigation /></div>

					<div id='healthRecContent'>
						<div id='healthRecHeader'>
							<h2>{petProfile.name} | Health Record</h2>
						</div>

						<div id='healthRecStats'>
							<h4>Vaccines</h4>
								<ul>
									<li>Vaccines: {petProfile.vaccinesString}</li>
								</ul>
							<h4>Medication</h4>
								<ul>
									<li>Medication: {petProfile.medicationsString} </li>
								</ul>
							<h4>Allergies</h4>
								<ul>
									<li>Allergies: {petProfile.allergiesString} </li>
								</ul>
						</div>

						<div><PetNavigationToggle /></div>
					</div>
				</div>
				
			</div>
		)
	}
}

export default PetHealthRecord