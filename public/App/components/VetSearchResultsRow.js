import React, { Component } from 'react'

class VetSearchResultsRow extends Component {
	render(){
		console.log('VET_SEARCH_RESULTS ROW: '+JSON.stringify(this.props.search))
		return(
			<div>
				{this.props.search.vetResults}
			</div>

			)
	}
}

export default VetSearchResultsRow