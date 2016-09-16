import React, { Component } from 'react'
import api from '../utils/api'
import store from '../stores/store'
import actions from '../actions/actions'
import { connect } from 'react-redux'

class TopBarSignUp extends Component {

	constructor(props, context){
		super(props, context)
		this.submitProfile = this.submitProfile.bind(this)
		this.register = this.register.bind(this)
	}

	submitProfile(event){
		var registerUser = Object.assign({}, this.props.currentUser)
		registerUser[event.target.id] = event.target.value
		store.dispatch(actions.receivedCurrentUser(registerUser))
	}

	register(event){
		event.preventDefault()

		api.handlePost('/api/profile', this.props.currentUser, function(err, response){
			if (err != null){
				alert(err.message)
				return
			}
			store.dispatch(actions.receivedCurrentUser(response.result))
		})
	}

	render(){
		return(

			<form id="top-login" role="form">
				<div className="input-group" id="top-login-username">
                    <span className="input-group-addon"><i className="icon-user"></i></span>
                    <input onChange={this.submitProfile} id="username" className="form-control" placeholder="Username" />
                </div>
                <div className="input-group" id="top-login-username">
                    <span className="input-group-addon"><i className="icon-email"></i></span>
                    <input onChange={this.submitProfile} id="email" type="email" className="form-control" placeholder="Email" />
                </div>
                <div className="input-group" id="top-login-password">
                    <span className="input-group-addon"><i className="icon-key"></i></span>
                    <input onChange={this.submitProfile} id="password" type="password" className="form-control" placeholder="Password" />
                </div>
                <label className="checkbox">
                    <input type="checkbox" value="remember-me" /> Remember me
                </label>
                <button onClick={this.register} className="btn btn-danger btn-block" type="submit">Sign in</button>
            </form>			
		)
	}
}

const stateToProps = function(state) {
	return {
		currentUser: state.accountReducer.currentUser
	}
}

export default connect (stateToProps)(TopBarSignUp) 