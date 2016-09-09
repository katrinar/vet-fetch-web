import React, { Component } from 'react'
import store from '../stores/store'
import actions from '../actions/actions'

class VetProfile extends Component {

	constructor(props, context){
		super(props, context)
		
	}
	
	render(){
		var searches = this.props.searchHistory || {}
		var resultProfile = searches[this.props.slug] || {}
	
		return(
			<div>
				<h2>{resultProfile.name}</h2>
				<h3>{resultProfile.vicinity}</h3>
				
			</div>
		)
	}
}

export default VetProfile