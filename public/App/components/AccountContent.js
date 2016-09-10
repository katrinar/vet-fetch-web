import React, { Component } from 'react'
import text from '../utils/text'
import EditProfile from '../components/EditProfile'
import navigation from '../utils/navigation'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

class AccountContent extends Component {

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
                        	<a href="#" onClick={navigation.editProfile} className="button button-3d button-small button-rounded button-aqua">Edit Account</a>
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