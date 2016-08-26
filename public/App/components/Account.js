import React, { Component } from 'react'
import text from '../utils/text'
import EditProfile from '../components/EditProfile'
import AccountContent from '../components/AccountContent'

class Account extends Component {

	render(){
		var content = null

		switch(this.props.showEditProfile){
			case false: 
				return content = <AccountContent showEditProfile={this.props.showEditProfile} currentUser={this.props.currentUser}/>
			case true: 
				return content= <EditProfile showEditProfile={this.props.showEditProfile} currentUser={this.props.currentUser}/>
		}

		return(
			<div>
				{content}
			</div>
		)
	}
}

export default Account