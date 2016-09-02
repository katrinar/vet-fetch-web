import React, { Component } from 'react'
import HomeButton from '../components/HomeButton'

class VetProfile extends Component {
	render(){
		var slug = this.props.slug || {}
		console.log('VET PROFILE SLUG = '+JSON.stringify(slug))
		return(
			<div>
				<HomeButton />
				
			</div>
		)
	}
}

export default VetProfile