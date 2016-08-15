import React, { Component } from 'react'
import navigation from '../utils/navigation'


class Appointments extends Component {
	render(){
		return(
			<div>Appointments shown here
				<button onClick={navigation.accountPage}>Back to Home</button>
			</div>

			)
	}
}

export default Appointments