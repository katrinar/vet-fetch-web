import React, { Component } from 'react'
import api from '../utils/api'
import store from '../stores/store'
import actions from '../actions/actions'

class Register extends Component {

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
			<div className="col_two_third col_last nobottommargin">

                <h3>Register Here</h3>

                <p>Register to save your pets health information here. Check back in whenever you need it - desktop or mobile.</p>

                <form id="register-form" name="register-form" className="nobottommargin">

                    <div className="col_half">
                        <label>First Name:</label>
                        <input type="text" onChange={this.submitProfile} id="firstName" name="register-form-name" className="required form-control input-block-level" />
                    </div>

                    <div className="col_half col_last">
                        <label>Last Name:</label>
                        <input type="text" onChange={this.submitProfile} id="lastName" name="register-form-email" className="required form-control input-block-level" />
                    </div>

                    <div className="clear"></div>

                    <div className="col_half">
                        <label>Email:</label>
                        <input type="text" onChange={this.submitProfile} id="email" name="register-form-username" className="required form-control input-block-level" />
                    </div>

                    <div className="col_half col_last">
                        <label>Password:</label>
                        <input type="password" onChange={this.submitProfile} id="password" name="register-form-phone" className="required form-control input-block-level" />
                    </div>

                    <div className="clear"></div>

                    <div className="col_full nobottommargin">
                        <button onClick={this.register} className="button button-3d button-black nomargin" id="register-form-submit" name="register-form-submit" value="register">Register</button>
                    </div>

                </form>

            </div>
		)
	}
}

export default Register