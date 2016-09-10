import React, { Component } from 'react'
import api from '../utils/api'
import store from '../stores/store'
import actions from '../actions/actions'

class Login extends Component {

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
		console.log('login = '+JSON.stringify(this.props.currentUser))

		api.handlePost('/account/login', this.props.currentUser, function(err, response){
			if (err != null){
				alert(err.message)
				return
			}
			console.log('login post: '+JSON.stringify(response.currentUser))
			
			store.dispatch(actions.receivedCurrentUser(response.currentUser))
		})
	}

	render(){
		return(
			<div className="col_one_third nobottommargin">
                <div className="well well-lg nobottommargin">
                    <form id="login-form" name="login-form" className="nobottommargin">

                        <h3>Already Have an Account? Login Here.</h3>

                        <div className="col_full">
                            <label>Username:</label>
                            <input type="text" className="required form-control input-block-level" onChange={this.submitUser} id="email" /><br />
                        </div>

                        <div className="col_full">
                            <label>Password:</label>
                            <input type="text" className="required form-control input-block-level" onChange={this.submitUser} id="password" /><br />
                        </div>

                        <div className="col_full nobottommargin">
                            <button onClick={this.login} className="button button-3d nomargin" id="login-form-submit" name="login-form-submit">Login</button>
                        </div>
                    </form>
                </div>
            </div>
					
		)
	}
}

export default Login