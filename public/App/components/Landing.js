import React, { Component } from 'react'
import Register from '../components/Register'
import Login from '../components/Login'

class Landing extends Component {
	render(){
		return(
			<div>
				{<Register />}<br />
				{<Login />}
			</div>
		)
	}
}

export default Landing