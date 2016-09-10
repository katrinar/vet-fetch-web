import React, { Component } from 'react'

class VetSearchResultsRow extends Component {
	constructor(props, context){
		super(props, context)
	}


	render(){

		var vets = this.props.search || {}
		var results = vets.vetResults

		return(
			<div>
                <div className="toggle">
                    <div className="togglet"><i className="toggle-closed icon-ok-circle"></i><i className="toggle-open icon-remove-circle"></i>{this.props.vet.name}</div>
                    <div className="togglec">{this.props.vet.vicinity}</div>
                </div>   
			</div>
		)
	}
}

export default VetSearchResultsRow