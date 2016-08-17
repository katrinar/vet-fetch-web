import React, { Component } from 'react'
import navigation from '../utils/navigation'

class HomeButton extends Component {
	render(){
		return(
			<button onClick={navigation.homePage}>Home</button>
			)
	}
}

export default HomeButton