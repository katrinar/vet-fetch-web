import React, { Component } from 'react'

class VetSearchResultsRow extends Component {
	render(){

		var vets = this.props.search || {}
		var results = vets.vetResults

		console.log('VET_SEARCH_RESULTS ROW: '+JSON.stringify(vets))
		return(
			<div>
				{this.props.vet.name}
			</div>

		)
	}
}

export default VetSearchResultsRow