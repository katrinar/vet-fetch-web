import React, { Component } from 'react'
import Register from '../components/Register'
import Login from '../components/Login'

class Landing extends Component {
	render(){
		return(
			<div>
				{<Register currentUser={this.props.currentUser} />}<br />
				{<Login currentUser={this.props.currentUser} />}
			</div>
		)
	}
}

export default Landing