import React, { Component } from 'react'

class Nav extends Component {
	render(){
		return(
			<header id="header" className="full-header dark">

	            <div id="header-wrap">

	                <div className="container clearfix">

	                    <div id="primary-menu-trigger"><i className="icon-reorder"></i></div>

	                    <div id="logo">
	                        <a href="index.html" className="standard-logo" data-dark-logo="/images/logo-dark.png"><img src="/images/logo.png" alt="Canvas Logo" /></a>
	                        <a href="index.html" className="retina-logo" data-dark-logo="/images/logo-dark@2x.png"><img src="/images/logo@2x.png" alt="Canvas Logo" /></a>
	                    </div>
	                    
	                    <nav id="primary-menu">
	                        <ul>
	                            <li><a href="/"><div>Home</div></a></li>
	                            <li className="mega-menu"><a href="/pets"><div>Pets</div></a> </li>
	                            <li className="mega-menu"><a href="/vets"><div>Vets</div></a></li>
	                            <li className="mega-menu"><a href="/account"><div>Account</div></a></li>
	                            <li className="mega-menu"><a href="/"><div>Login/Sign Up</div></a></li>
	                        </ul>
	                    </nav>
	                </div>
            </div>

        </header>

		)
	}
}

export default Nav