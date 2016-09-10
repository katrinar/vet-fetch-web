import React, { Component } from 'react'
import store from '../stores/store'
import actions from '../actions/actions'
import navigation from '../utils/navigation'
import PetNavigation from '../components/PetNavigation'
import PetNavigationToggle from '../components/PetNavigationToggle'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

class PetHealthRecord extends Component {
	constructor(props, context){
		super(props, context)
	}

	render(){
		const petSlug = this.props.slug
		const petProfile = this.props.pets[petSlug] || {}

		return(
	
			<div>
			
				<Nav />

				<section id="page-title">
		            <div className="container clearfix">
		                <h1>Pet Dashboard</h1>
		            </div>
        		</section>

				<div className="section notopmargin nobottommargin">
					<div className="container clearfix">
						<div className="fancy-title title-double-border">
		                        <h2>{petProfile.name} | Health Record</h2>
		                </div>

						<PetNavigation />

						<div className="accordion accordion-bg clearfix">

                            <div className="acctitle"><i className="acc-closed icon-ok-circle"></i><i className="acc-open icon-remove-circle"></i>Vaccines</div>
                            <div className="acc_content clearfix">
                                <ul className="iconlist iconlist-color nobottommargin">
                                    <li><i className="icon-ok"></i>{petProfile.vaccinesString}</li>
                                </ul>
                            </div>

                            <div className="acctitle"><i className="acc-closed icon-ok-circle"></i><i className="acc-open icon-remove-circle"></i>Medication</div>
                            <div className="acc_content clearfix">
                                <ul className="iconlist iconlist-color nobottommargin">
                                    <li><i className="icon-ok"></i>{petProfile.medicationsString}</li>
                                </ul>
                            </div>

                            <div className="acctitle"><i className="acc-closed icon-ok-circle"></i><i className="acc-open icon-remove-circle"></i>Allergies</div>
                            <div className="acc_content clearfix">
	                            <ul className="iconlist iconlist-color nobottommargin">
	                                <li><i className="icon-ok"></i>{petProfile.allergiesString}</li>   
	                            </ul>
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

export default PetHealthRecord