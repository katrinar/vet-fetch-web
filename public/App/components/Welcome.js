import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Register from '../components/Register'
import Login from '../components/Login'

class Welcome extends Component {
	render(){
		return(
			<div>
				<p>New? Sign up to check out pet insurance options</p>
				<div>
					{<Register /> }<br />
					{<Login /> }<br />
				</div>
   				
			</div>

		)
	}
}

export default Welcome