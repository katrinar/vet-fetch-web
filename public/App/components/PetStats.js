import React, { Component } from 'react'
import navigation from '../utils/navigation'
import store from '../stores/store'
import actions from '../actions/actions'
import PetNavigation from '../components/PetNavigation'
import PetNavigationToggle from '../components/PetNavigationToggle'
import PetHealthRecord from '../components/PetHealthRecord'


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
			
				<div className="section notopmargin nobottommargin nobg">
					<div className="container clearfix">
						<div className="fancy-title title-double-border">
		                        <h2>{petProfile.name} | Stats</h2>
		                </div>

						<PetNavigation />

						<div>
			        		{petProfileImg['thumb'] === '' ? null :
							        <div>
							          <img src={petProfileImg['original']} />
							        </div>
							    }
		      			</div>

		      			<div className="divider"><i className="icon-circle"></i></div>

						<div className="postcontent bothsidebar nobottommargin clearfix">
		                  	
		                  	<div className="col_half nobottommargin">
		                  		<h4>Species</h4>
		                  		 	
                            	<div className="well well-sm nobottommargin">{petProfile.species}</div>
                        	</div>

                        	<div className="divider"></div>

                        	<div className="col_half nobottommargin col_last">
                        		<h4>Breed</h4>
                            	<div className="well well-sm nobottommargin">{petProfile.breed}</div>
                        	</div>

							<div className="divider"></div>

                        	<div className="col_half nobottommargin col_last">
                        		<h4>Sex</h4>
                            	<div className="well well-sm nobottommargin">{petProfile.birthday}</div>
                        	</div>

                        	<div className="divider"></div>

                        	<div className="col_half nobottommargin col_last">
                        		<h4>Date of Birth</h4>
                            	<div className="well well-sm nobottommargin">{petProfile.sex}</div>
                        	</div>
 
		                </div>

						<PetHealthRecord pets={this.props.pets} slug={this.props.slug} showHealthRecord={this.props.showHealthRecord}/>
					</div>
				</div>

		)
	}
}

export default PetStats