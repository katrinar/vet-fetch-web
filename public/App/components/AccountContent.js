import React, { Component } from 'react'
import text from '../utils/text'
import EditProfile from '../components/EditProfile'
import navigation from '../utils/navigation'
import Nav from '../components/Nav'

class AccountContent extends Component {

	render(){

		return(
			<div>
				<Nav />

				<div className="section notopmargin nobottommargin">
					<div className="container clearfix">
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
						<button onClick={navigation.editProfile}>Edit Profile</button>
					</div>
				</div>	
			</div>
		)
	}
}

export default AccountContent