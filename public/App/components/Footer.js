import React, { Component } from 'react'

class Footer extends Component {
	render(){
		return(
			 <footer id="footer" className="dark">

	            <div id="copyrights">

	                <div className="container clearfix">

	                    <div className="col_half">
	                        Copyrights &copy; 2016 All Rights Reserved by Milkshake Tech.
	                    </div>

	                    <div className="col_half col_last tright">
	                        <div className="fright clearfix">
	                            <div className="copyrights-menu copyright-links nobottommargin">
	                                <a href="/">Home</a>/<a href="#">About</a>/<a href="/pets">Pets</a>/<a href="/vets">Vets</a>/<a href="/account">Account</a>/<a href="#">Contact</a>
	                            </div>
	                        </div>
	                    </div>

	                </div>

	            </div>

       		 </footer>
		)
	}
}

export default Footer