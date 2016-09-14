import React, { Component } from 'react'
import navigation from '../utils/navigation'
import store from '../stores/store'
import actions from '../actions/actions'
import PetNavigation from '../components/PetNavigation'

class PetStats extends Component {
	constructor(props, context){
		super(props, context)
	}

	render(){
		const petSlug = this.props.slug
		const petProfile = this.props.pets[petSlug] || {}
		const petProfileImg = petProfile.image || {}
		// console.log('petStats image[thumb] = '+JSON.stringify(petProfileImg['thumb']))

		return(
			
				<div className="section notopmargin nobottommargin nobg">
					<div className="container clearfix">
						<div className="fancy-title title-double-border">
		                        <h2>{petProfile.name} </h2>
		                </div>

						<div>
			        		{petProfileImg['thumb'] === '' ? null :
							        <div>
							          <img style={{borderRadius:200}}src={petProfileImg['original']} />
							        </div>
							    }
		      			</div>

		      			<div className="divider"><i className="icon-circle"></i></div>

						<div className="postcontent bothsidebar nobottommargin clearfix">

                        	<h3>Stats</h3>

	                        <div className="toggle">
	                            <div className="togglet"><i className="toggle-closed icon-ok-circle"></i><i className="toggle-open icon-remove-circle"></i>Species</div>
	                            <div className="togglec">{petProfile.species}</div>
	                        </div>

	                        <div className="toggle">
	                            <div className="togglet"><i className="toggle-closed icon-ok-circle"></i><i className="toggle-open icon-remove-circle"></i>Breed</div>
	                            <div className="togglec">{petProfile.breed}</div>
	                        </div>

	                        <div className="toggle">
	                            <div className="togglet"><i className="toggle-closed icon-ok-circle"></i><i className="toggle-open icon-remove-circle"></i>Date of Birth</div>
	                            <div className="togglec">{petProfile.birthday}</div>
	                        </div>

	                        <div className="toggle">
	                            <div className="togglet"><i className="toggle-closed icon-ok-circle"></i><i className="toggle-open icon-remove-circle"></i>Weight</div>
	                            <div className="togglec">{petProfile.weight}</div>
	                        </div>
                       </div>

                        <div className="sidebar nobottommargin clearfix">
                       		<h3>Health Record</h3>

	                        <div className="toggle">
	                            <div className="togglet"><i className="toggle-closed icon-ok-circle"></i><i className="toggle-open icon-remove-circle"></i>Vaccines</div>
	                            <div className="togglec">{petProfile.vaccinesString}</div>
	                        </div>

	                        <div className="toggle">
	                            <div className="togglet"><i className="toggle-closed icon-ok-circle"></i><i className="toggle-open icon-remove-circle"></i>Medication</div>
	                            <div className="togglec">{petProfile.medicationsString}</div>
	                        </div>

	                        <div className="toggle">
	                            <div className="togglet"><i className="toggle-closed icon-ok-circle"></i><i className="toggle-open icon-remove-circle"></i>Allergies</div>
	                            <div className="togglec">{petProfile.allergiesString}</div>
	                        </div>
                       </div>

                       <div className="divider"><i className="icon-circle"></i></div>
						<PetNavigation />
					</div>
				</div>

		)
	}
}

export default PetStats