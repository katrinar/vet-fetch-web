import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Register extends Component {
	render(){

		return(

			<div>
				<form action="/api/profile" method="post">
	   				<input type="text" name="firstName" placeholder="First Name" /><br />
	   				<input type="text" name="lastName" placeholder="Last Name" /><br />
	   				<input type="text" name="email" placeholder="Email" /><br />
	   				<input type="text" name="password" placeholder="Password" /><br />
	   				<input type="submit" value="Submit" /><br />
   				</form>
			</div>

		)
	}
}

export default Register