import React, { Component } from 'react'

class PetHealthRecord extends Component {

	render(){
		const petSlug = this.props.slug
		const petProfile = this.props.pets[petSlug] || {}

		return(
	
			<div>
				<div id='petHealthRecord'>
					<h3>Health Record</h3>
					<h4>Vaccines</h4>
					<h4>Medication</h4>
					<h4>Allergies</h4>
						<ul>
							<li>Vaccines: </li>
							<li>Medication: {petProfile.medicationsString} </li>
							<li>Allergies: {petProfile.allergiesString} </li>
						</ul>
				</div>
			</div>
		)
	}
}

export default PetHealthRecord