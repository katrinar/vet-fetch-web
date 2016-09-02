import React, { Component } from 'react'

class VetSearchResultsRow extends Component {
	render(){

		var vets = this.props.search || {}
		var results = vets.vetResults

		console.log('VET_SEARCH_RESULTS ROW: '+JSON.stringify(vets))
		return(
			<div>
				<a href={'/vet/'+this.props.vet.slug}>{this.props.vet.name}</a>
			</div>

		)
	}
}

export default VetSearchResultsRow