import React, { Component } from 'react'
import api from '../utils/api'
import Login from '../components/Login'
import Pets from '../components/Pets'
import SignInContainer from '../components/SignInContainer'
import store from '../stores/store'
import actions from '../actions/actions'
import { connect } from 'react-redux'


class Main extends Component {

	constructor(props, context){
		super(props, context)
	}

	componentDidMount() {
		var _this = this
		console.log('MAIN COMPONENT: ')
		api.handleGet('/account/currentuser', null, function(err, response){
			if (err){
				alert(err.message)
				return
			}

			console.log('FETCH_CURRENT_USER_MAIN: '+JSON.stringify(response.user))

			if (response == null){
				return
			}
			
			store.dispatch(actions.receivedCurrentUser(response.user))
			return
		})
	}

	

	render() {
		var content = null
		var loggedIn = false

		if (this.props.currentUser.id != null){
			loggedIn = true

		}

		if (loggedIn == true){
			content = <Pets />
		}

		if (loggedIn == false){
			content = <SignInContainer />
		}
		
		return (
			<div>
				{content}
			</div>
		)
	}
}

const stateToProps = function(state) {
	console.log('STATE_TO_PROPS_MAIN: '+JSON.stringify(state))
	return {
		currentUser: state.accountReducer.currentUser,
		pets: state.petReducer.petsArray
	}
}

export default connect (stateToProps)(Main) 

