import React, { Component } from 'react'
import api from '../utils/api'

class Nav extends Component {

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
			<header id="header">
            	<div id="header-wrap">
                	<div className="container clearfix">

                    	<div id="primary-menu-trigger"><i className="icon-reorder"></i></div>

		                <div id="logo">
		                    <a href="/" className="standard-logo" data-dark-logo="images/logo-dark.png"><img src="/images/vet-fetch-title.png" alt="Vet Fetch Logo" /></a>
		                    <a href="/" className="retina-logo" data-dark-logo="images/logo-dark@2x.png"><img src="/images/vet-fetch-title@2x.png" alt="Vet Fetch Logo" /></a>
		                </div>

		                <nav id="primary-menu" className="sub-title">
		                    <ul>
		                        <li><a href="/pets"><div><i className="icon-folder-open"></i></div><span>Dashboard</span></a>
		                            <ul>
		                                <li><a href="/pets"><div>My Pets</div></a></li>
		                                <li><a href="/register-pet"><div>Register A Pet</div></a></li>
		                                <li><a href="/vets"><div>Find Vets</div></a></li>
		                                <li><a href="/insurance"><div>Insurance Plans</div></a></li>
		                            </ul>
		                        </li>
		                        <li ><a href="#"><div><i className="icon-user4"></i></div><span>Profile</span></a>
		                            <ul>
		                                <li><a href="/account"><div>My Account</div></a></li>
		                                <li><a href="#" onClick={this.logout}><div>Log Out</div></a></li>
		                            </ul>
		                        </li>
		                    </ul>
		                </nav>

                	</div>

            	</div>
        	</header>
		)
	}
}

export default Nav