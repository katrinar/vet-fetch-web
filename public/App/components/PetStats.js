import React, { Component } from 'react'

class PetStats extends Component {
	constructor(props, context){
		super(props, context)
		this.showHealthRecord = this.showHealthRecord.bind(this)
	}

	showHealthRecord(event){
		var changeDisplay = Object.assign({}, this.props.displayContent) 
		changeDisplay = true
		console.log('showHealthRecord: displayContent props = '+JSON.stringify(changeDisplay))
	}

	render(){
		const petSlug = this.props.slug
		const petProfile = this.props.pets[petSlug] || {}

		return(
			

			<div>
				<div id='profileContent'>
					<div id='profileHeader'>
						<h2>{petProfile.name}</h2>
						<h4>{petProfile.species}</h4> 
						<h4>{petProfile.breed}</h4>
					</div>

					<div id='profileStats'>
						<h4>{petProfile.sex}</h4>
						<h4>DoB: {petProfile.birthday}</h4>
					</div>	
				</div>

			</div>
		)
	}
}

export default PetStats