import React, { Component } from 'react'
import text from '../utils/text'

class PetRow extends Component {

	render(){

	
		const pet = this.props.pet || {}
		const petProfileImg = pet.image || {}

		return(
			
				<div className="row">

                    <div className="col-md-6 bottommargin">

                        <div className="team team-list clearfix">
                            <div className="team-image">
	                            {petProfileImg['thumb'] === '' ? null :
								<div><img style ={{borderRadius:200}} src={petProfileImg['original']} /></div>
								}
                            </div>
                             <div className="team-desc">
                                <div className="team-title"><h4>{text.capitalize(this.props.pet.name)}</h4></div>
                                <a href={'/pet/'+this.props.pet.slug} className="button button-rounded button-reveal button-large button-white button-light tright"><i className="icon-line-arrow-right"></i><span>Profile</span></a>
                            </div>
                        </div>
                    </div>
                </div>

		)
	}
}

export default PetRow