import React, { Component } from 'react'

class Nav extends Component {
	render(){
		return(
			<header id="header" className="full-header dark">

	            <div id="header-wrap">

	                <div className="container clearfix">

	                    <div id="primary-menu-trigger"><i className="icon-reorder"></i></div>

	                    <div id="logo">
	                        <a href="/" className="standard-logo" data-dark-logo="/images/vet-fetch.png"><img src="/images/vet-fetch.png" alt="Vet Fetch Logo" /></a>
	                        <a href="/" className="retina-logo" data-dark-logo="/images/vet-fetch@2x.png"><img src="/images/vet-fetch@2x.png" alt="Vet Fetch Logo" /></a>
	                    </div>
	                    
	                    <nav id="primary-menu">
	                        <ul>
	                            <li><a href="/"><div>Home</div></a></li>
	                            <li className="mega-menu"><a href="/pets"><div>Pets</div></a> </li>
	                            <li className="mega-menu"><a href="/vets"><div>Vets</div></a></li>
	                            <li className="mega-menu"><a href="/account"><div>Account</div></a></li>
	                        </ul>
	                    </nav>
	                </div>
            </div>

        </header>

		)
	}
}

export default Nav