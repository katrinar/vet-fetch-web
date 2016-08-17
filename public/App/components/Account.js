import React, { Component } from 'react'
import HomeButton from '../components/HomeButton'

class Account extends Component {

	
	render(){

		return(
			<div>
				<HomeButton />
				<div id='profileInfo'>
					<h4>Name</h4>
						<ul>
							<li>{this.props.currentUser.firstName} </li>
						</ul>
					<h4>Email</h4>
						<ul>
							<li>{this.props.currentUser.email} </li>
						</ul>
				</div>
			</div>
		)
	}
}

export default Account