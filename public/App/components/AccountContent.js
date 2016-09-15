import React, { Component } from 'react'
import text from '../utils/text'
import api from '../utils/api'
import navigation from '../utils/navigation'
import TopBar from '../components/TopBar'
import Nav from '../components/Nav'
import EditAccount from '../components/EditAccount'
import EditProfile from '../components/EditProfile'
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
				<TopBar />
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
			                    <h2>Welcome, {text.capitalize(this.props.currentUser.username)}</h2>
			                </div>

		                	<div id="side-navigation">

		                        <div className="col_one_third nobottommargin">

		                            <ul className="sidenav">
		                                <li className="ui-tabs-active"><a href="#snav-content1"><i className="icon-screen"></i>Account Basics<i className="icon-chevron-right"></i></a></li>
		                                <li><a href="#snav-content2"><i className="icon-user4"></i>Profile<i className="icon-chevron-right"></i></a></li>
		                                <li><a href="#snav-content3"><i className="icon-lightbulb"></i>Notifications<i className="icon-chevron-right"></i></a></li>
		                            </ul>

		                            <a href="#" onClick={this.logout} className="button button-3d button-small button-rounded button-aqua">Logout</a>
		                        </div>

		                        <div className="col_two_third col_last nobottommargin">

		                            <div id="snav-content1">
		                                <h3>Account Basics</h3>
		                             
		                                <div className="col_half nobottommargin">
				                  		 	<h4>First Name</h4>
				                  		 	
		                            		<div className="well well-sm nobottommargin">{text.capitalize(this.props.currentUser.firstName)}</div>
		                        		</div>

		                        		<div className="col_half nobottommargin col_last">
		                        			<h4>Last Name</h4>
		                            		<div className="well well-sm nobottommargin">{text.capitalize(this.props.currentUser.lastName)} </div>
		                        		</div>

		                        		<div className="divider"></div>

		                        		<div className="col_half nobottommargin">
		                        			<h4>Email</h4>
		                            		<div className="well well-sm nobottommargin">{this.props.currentUser.email} </div>
		                        		</div>

		                        		<div className="col_half nobottommargin col_last">
		                        			<h4>Password</h4>
		                            		<div className="well well-sm nobottommargin">Change Password</div>
		                        		</div>

		                        		<div className="divider"></div>

		                        		<a href="#"className="button button-3d button-small button-rounded button-aqua" data-toggle="modal" data-target="#editAccountModal">Edit Account</a>
		                        		<EditAccount currentUser={this.props.currentUser}/>

		                            </div>

		                             <div className="clearfix"></div>
		                             <div className="divider divider-short divider-rounded divider-center"><i className="icon-pencil"></i></div>

		                            <div id="snav-content2">
		                                <h3>Profile</h3>

		                                <div className="col_half nobottommargin">
				                  		 	<h4>Username</h4>
				                  		 	
		                            		<div className="well well-sm nobottommargin">{text.capitalize(this.props.currentUser.username)} </div>
		                        		</div>

		                        		<div className="divider"></div>

		                        		<a href="#"className="button button-3d button-small button-rounded button-aqua" data-toggle="modal" data-target="#editProfileModal">Edit Profile</a>
		                        		<EditProfile currentUser={this.props.currentUser}/>
		                            </div>

		                            <div className="clearfix"></div>
		                            <div className="divider divider-short divider-rounded divider-center"><i className="icon-pencil"></i></div>

		                            <div id="snav-content3">
		                                <h3>Notifications</h3>
		                                	<h4>Coming Soon!</h4>
				                  		 	<p>We will let you know about important updates, but you can pick what else you want to hear about here.</p>
		                            </div>
		                    	</div>
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