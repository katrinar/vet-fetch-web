import React, { Component } from 'react'
import text from '../utils/text'
import api from '../utils/api'
import EditProfile from '../components/EditProfile'
import navigation from '../utils/navigation'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

class AccountContent extends Component {

	constructor(props, context){
		super(props, context)
		this.logout = this.logout.bind(this)
	}

	logout(event){
		event.preventDefault()

		api.handleGet('account/logout', null, function(err, response){
			if (err){
				alert(err.message)
				return
			}
			window.location.href = '/'
		})

	}

	render(){

		return(
			<div>
				<Nav />

				<section id="page-title">
		            <div className="container clearfix">
		                <h1>Account</h1>
		            </div>
        		</section>

        		<section id="content">

            		<div className="content-wrap">
            			<div className="container clearfix">

            			<div className="fancy-title title-double-border">
		                    <h2>Welcome, {text.capitalize(this.props.currentUser.firstName)}</h2>
		                </div>

		                <div className="postcontent bothsidebar nobottommargin clearfix">
		                  	
		                  		<div className="col_half nobottommargin">
		                  		 	<h4>Name</h4>
		                  		 	
                            		<div className="well well-sm nobottommargin">{text.capitalize(this.props.currentUser.firstName)} {text.capitalize(this.props.currentUser.lastName)}</div>
                        		</div>

                        		<div className="divider"></div>

                        		<div className="col_half nobottommargin col_last">
                        			<h4>Email</h4>
                            		<div className="well well-sm nobottommargin">{this.props.currentUser.email} </div>
                        		</div>
						
                        	<div className="divider"></div>	
                        	<a href="#" onClick={navigation.editProfile} className="button button-3d button-small button-rounded button-leaf">Edit Account</a>
                        	<a href="#" onClick={this.logout} className="button button-3d button-small button-rounded button-aqua">Logout</a>
							<div className="divider"><i className="icon-circle"></i></div> 
		                </div>
		            </div>
                	</div>

        		</section>

				<Footer />	
			</div>
		)
	}
}

export default AccountContent