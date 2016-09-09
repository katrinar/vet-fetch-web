import React, { Component } from 'react'

class VetSearchResultsRow extends Component {
	constructor(props, context){
		super(props, context)
		this.displayVetDetails = this.displayVetDetails.bind(this)
	}

	displayVetDetails(event){
		console.log('DISPLAY_VET_DETAILS')
	}
	render(){

		var vets = this.props.search || {}
		var results = vets.vetResults

		return(
			<div>
				<h3 onClick={this.displayVetDetails}>{this.props.vet.name}</h3> 
				<h4>{this.props.vet.vicinity}</h4>
			</div>

		)
		// return(
		// 	<div>
		// 		<a href={'/vet/'+this.props.vet.slug}>{this.props.vet.name}, {this.props.vet.vicinity}</a>
		// 	</div>

		// )
	}
}

export default VetSearchResultsRow