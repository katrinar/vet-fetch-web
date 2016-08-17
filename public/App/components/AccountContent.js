import React, { Component } from 'react'
import HomeButton from '../components/HomeButton'
import text from '../utils/text'
import EditProfile from '../components/EditProfile'
import navigation from '../utils/navigation'

class AccountContent extends Component {

	render(){

		return(
			<div>
				<HomeButton />
				<button onClick={navigation.editProfile}>Edit Profile</button>
				<div id='profileInfo'>
					<h4>Name</h4>
						<ul>
							<li>{text.capitalize(this.props.currentUser.firstName)} {text.capitalize(this.props.currentUser.lastName)}</li>
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

export default AccountContent