import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Login extends Component {
	render(){
		return(

			<div>
				<form action="/account/login" method="post">
   					<input type="text" name="email" placeholder="Email" /><br />
   					<input type="text" name="password" placeholder="Password" /><br />
   					<input type="submit" value="Submit" /><br />
   				</form>
			</div>
		)
	}
}

export default Login