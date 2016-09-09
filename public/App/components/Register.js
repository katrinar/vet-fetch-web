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


                        <h3>Register right meow.</h3>

                        <p>Register to save your pets health information here. Check back in whenever you need it - desktop or mobile.</p>

                        <form id="register-form" name="register-form" className="nobottommargin" action="#" method="post">

                            <div className="col_half">
                                <label for="register-form-name">Name:</label>
                                <input type="text" id="register-form-name" name="register-form-name" value="" className="required form-control input-block-level" />
                            </div>

                            <div className="col_half col_last">
                                <label for="register-form-email">Email Address:</label>
                                <input type="text" id="register-form-email" name="register-form-email" value="" className="required form-control input-block-level" />
                            </div>

                            <div className="clear"></div>

                            <div className="col_half">
                                <label for="register-form-username">Choose a Username:</label>
                                <input type="text" id="register-form-username" name="register-form-username" value="" className="required form-control input-block-level" />
                            </div>

                            <div className="col_half col_last">
                                <label for="register-form-phone">Phone:</label>
                                <input type="text" id="register-form-phone" name="register-form-phone" value="" className="required form-control input-block-level" />
                            </div>

                            <div className="clear"></div>

                            <div className="col_half">
                                <label for="register-form-password">Choose Password:</label>
                                <input type="password" id="register-form-password" name="register-form-password" value="" className="required form-control input-block-level" />
                            </div>

                            <div className="col_half col_last">
                                <label for="register-form-repassword">Re-enter Password:</label>
                                <input type="password" id="register-form-repassword" name="register-form-repassword" value="" className="required form-control input-block-level" />
                            </div>

                            <div className="clear"></div>

                            <div className="col_full nobottommargin">
                                <button className="button button-3d button-black nomargin" id="register-form-submit" name="register-form-submit" value="register">Register Now</button>
                            </div>

                        </form>


                    </div>
		)
	}
}

export default Register