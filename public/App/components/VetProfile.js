import React, { Component } from 'react'
import HomeButton from '../components/HomeButton'
import store from '../stores/store'
import actions from '../actions/actions'

class VetProfile extends Component {

	constructor(props, context){
		super(props, context)
		
	}
	
	render(){
		var searches = this.props.searchHistory || {}
		var resultProfile = searches[this.props.slug] || {}
		console.log('VET PROFILE: SEARCHES = '+JSON.stringify(searches))
		console.log('VET PROFILE: RESULT PROFILE VICINITY = '+JSON.stringify(resultProfile))
	
		return(
			<div>
				<HomeButton />
				<h2>{resultProfile.name}</h2>
				<h3>{resultProfile.vicinity}</h3>
				
			</div>
		)
	}
}

export default VetProfile