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

		api.handlePost('/account/login', this.props.currentUser, function(err, response){
			if (err != null){
				alert(err.message)
				return
			}

			if (response.confirmation == "Fail"){
				alert(response.message)
			}

			if (response.confirmation == "Success"){
				store.dispatch(actions.receivedCurrentUser(response.currentUser))
			}	
			
		})
	}

	render(){
		return(
		
            <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-body">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                            <h4 className="modal-title" id="myModalLabel">Login</h4>
                            </div>
                            <div className="modal-body">
                                <form className="nobottommargin">
						            <div className="col_full">
						                <label>Email:</label>
						                <input type="text" className="required form-control input-block-level" onChange={this.submitUser} id="email" /><br />
						            </div>

						            <div className="col_full">
						                <label>Password:</label>
						                <input type="password" className="required form-control input-block-level" onChange={this.submitUser} id="password" /><br />
						            </div>

						            <div className="col_full nobottommargin">
						                <button onClick={this.login} className="button button-3d nomargin" id="login-form-submit" name="login-form-submit">Login</button>
						            </div>
						        </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        
					
		)
	}
}

export default Login