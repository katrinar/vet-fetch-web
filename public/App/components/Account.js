import React, { Component } from 'react'
import text from '../utils/text'
import EditProfile from '../components/EditProfile'
import AccountContent from '../components/AccountContent'
import AccountLanding from '../components/AccountLanding'

class Account extends Component {

	render(){
		var loggedIn = this.props.currentUser || {}
		console.log('ACCOUNT user: '+JSON.stringify(loggedIn))
		var content = null

		if (loggedIn.id != null){
			switch(this.props.showEditProfile){
				case false: 
					return content = <AccountContent showEditProfile={this.props.showEditProfile} currentUser={this.props.currentUser}/>
				case true: 
					return content= <EditProfile showEditProfile={this.props.showEditProfile} currentUser={this.props.currentUser}/>
			}
		}

		else {
			content = <AccountLanding currentUser={this.props.currentUser} showEditProfile={this.props.showEditProfile} />
		}

		

		return(
			<div>
				{content}
			</div>
		)
	}
}

export default Account