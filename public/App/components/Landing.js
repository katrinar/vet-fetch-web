import React, { Component } from 'react'
import Register from '../components/Register'
import Login from '../components/Login'
import Nav from '../components/Nav'

class Landing extends Component {
	render(){
		return(
			<div>
				<Nav />
					<div className="section notopmargin nobottommargin">
						<div className="container clearfix">


							<Register currentUser={this.props.currentUser} /><br />
							<Login currentUser={this.props.currentUser} />
						</div>
					</div>
			</div>
		)
	}
}

export default Landing