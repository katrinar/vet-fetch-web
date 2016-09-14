import React, { Component } from 'react'
import api from '../utils/api'
import store from '../stores/store'
import actions from '../actions/actions'

class SignUp extends Component {

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
            <form className="landing-wide-form clearfix">
                <div className="col_four_fifth nobottommargin">
                    <div className="col_one_third nobottommargin">
                        <input onChange={this.submitProfile} id="username" type="text" className="form-control input-lg not-dark"  placeholder="Username*"/>
                    </div>
                    <div className="col_one_third nobottommargin">
                        <input onChange={this.submitProfile} id="email" type="email" className="form-control input-lg not-dark" placeholder="Email*"/>
                    </div>
                    <div className="col_one_third col_last nobottommargin">
                        <input onChange={this.submitProfile} id="password" type="password" className="form-control input-lg not-dark"  placeholder="Password*"/>
                    </div>
                </div>
                <div className="col_one_fifth col_last nobottommargin">
                    <button onClick={this.register} className="btn btn-lg btn-danger btn-block nomargin">SIGN UP</button>
                </div>
            </form>
		)
	}
}

export default SignUp