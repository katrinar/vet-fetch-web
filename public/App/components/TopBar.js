import React, { Component } from 'react'
import api from '../utils/api'
import TopBarLogin from '../components/TopBarLogin'
import TopBarSignUp from '../components/TopBarSignUp'

class TopBar extends Component {

	constructor(props, context){
		super(props, context)
	}

	render(){
		return(
		 <div id="top-bar">

            <div className="container clearfix">

                <div className="col_half nobottommargin">

                    <div className="top-links">
                        <ul>
                            <li><a href="#">Sign Up</a>
                                <div className="top-link-section">
                                    <TopBarSignUp />
                                </div>
                            </li>
                            <li><a href="#">Log In</a>
                                <div className="top-link-section">
                                    <TopBarLogin />
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="col_half fright col_last nobottommargin">

                 
                    <div id="top-social">
                        <ul>
                            <li><a href="https://twitter.com/milkshakeTech" className="si-twitter"><span className="ts-icon"><i className="icon-twitter"></i></span><span className="ts-text">Twitter</span></a></li>
                            <li><a href="https://github.com/katrinar" className="si-github"><span className="ts-icon"><i className="icon-github-circled"></i></span><span className="ts-text">Github</span></a></li>
                            <li><a href="https://www.pinterest.com/milkshaketech/" className="si-pinterest"><span className="ts-icon"><i className="icon-pinterest"></i></span><span className="ts-text">Pinterest</span></a></li>
                            <li><a href="https://www.instagram.com/milkshakenyc/" className="si-instagram"><span className="ts-icon"><i className="icon-instagram2"></i></span><span className="ts-text">Instagram</span></a></li>
                            <li><a href="tel:+91.11.85412542" className="si-call"><span className="ts-icon"><i className="icon-call"></i></span><span className="ts-text">703.362.7371</span></a></li>
                            <li><a href="mailto:info@canvas.com" className="si-email3"><span className="ts-icon"><i className="icon-email3"></i></span><span className="ts-text">katrina@milkshake.tech</span></a></li>
                        </ul>
                    </div>

                </div>

            </div>

        </div>

		)
	}
}

export default TopBar