import React, { Component } from 'react'
import api from '../utils/api'
import store from '../stores/store'
import actions from '../actions/actions'
import { connect } from 'react-redux'

class TopBarLogin extends Component {

	constructor(props, context){
		super(props, context)
		this.submitUser = this.submitUser.bind(this)
		this.login = this.login.bind(this)
	}

	submitUser(event){
		var loginUser = Object.assign({}, this.props.currentUser)
		loginUser[event.target.id] = event.target.value
		store.dispatch(actions.receivedCurrentUser(loginUser))
	}

	login(event){
		event.preventDefault()
		var checkCurrentUser = this.props.currentUser || {}
		console.log('CHECK_CURRENT_USER: '+JSON.stringify(checkCurrentUser))

		api.handlePost('/account/login', checkCurrentUser, function(err, response){
			console.log('POST LOGIN CHECK_CURRENT_USER: '+JSON.stringify(checkCurrentUser))
			if (err != null){
				alert(err.message)
				return
			}

			console.log('POST LOGIN: '+JSON.stringify(response))

			if (response.confirmation == "Fail"){
				alert(response.message)
			}

			if (response.confirmation == "Success"){
				store.dispatch(actions.receivedCurrentUser(response.currentUser))
				// window.location.href = '/'
			}	
			
		})
	}

	render(){
		return(
	
         	<form id="top-login" role="form">
                <div className="input-group" id="top-login-username">
                    <span className="input-group-addon"><i className="icon-user"></i></span>
                    <input onChange={this.submitUser} id="email" type="email" className="form-control" placeholder="Email" />
                </div>
                <div className="input-group" id="top-login-password">
                    <span className="input-group-addon"><i className="icon-key"></i></span>
                    <input onChange={this.submitUser} id="password" type="password" className="form-control" placeholder="Password" />
                </div>
                <label className="checkbox">
                    <input type="checkbox" value="remember-me" /> Remember me
                </label>
                <button onClick={this.login} className="btn btn-danger btn-block" type="submit">Sign in</button>
            </form>		
		)
	}
}

const stateToProps = function(state) {
	return {
		currentUser: state.accountReducer.currentUser
	}
}

export default connect (stateToProps)(TopBarLogin) 