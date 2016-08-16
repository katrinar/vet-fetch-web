import React, { Component } from 'react'
import navigation from '../utils/navigation'

class PetNavigationToggle extends Component {
	render(){
		return(
			<div>
				<button onClick={navigation.dismissHealthRecord}>Stats</button>
				<button onClick={navigation.healthRecord}>Health Record</button>
			</div>
		)
	}
}

export default PetNavigationToggle