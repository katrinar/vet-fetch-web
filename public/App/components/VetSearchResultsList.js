import React, { Component } from 'react'
import VetSearchResultsRow from '../components/VetSearchResultsRow'

class VetSearchResultsList extends Component{
	render(){
		var vets = this.props.search || {}
		console.log('VET_SEARCH_RESULTS LIST: '+JSON.stringify(vets))

		var vetList = this.props.search.vetResults.map(function(vet, i){
			return <li key={vet.id}>{vet.name}</li>
		})
		return(
			<div>{vetList}
			</div>
		)
	}
}

export default VetSearchResultsList