import React, { Component } from 'react'
import Register from '../components/Register'
import Login from '../components/Login'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

class Landing extends Component {
	render(){
		return(
			<div>
				<Nav />
				 	
		        <section id="slider" className="slider-parallax full-screen dark"style={{background: 'url("/images/landing/cover.jpg") center', overflow:'visible'}}>

		            <div className="container vertical-middle clearfix">

		                <div className="heading-block title-center nobottomborder">
		                    <h1>All your pet health information in one place.</h1>
		                    <span>Managing your pets health information has never been easier.</span>
		                </div>
		            </div>

		        </section>

				<div className="section notopmargin nobottommargin">
					<div className="container clearfix">

					<div className="fancy-title title-dotted-border">
                        <h3>Fetch your pet care today!</h3>
                    </div>

                    <div className="col_one_third">
                        <div className="feature-box fbox-center fbox-bg fbox-outline fbox-dark fbox-effect">
                            <div className="fbox-icon">
                                <a href="#"><i className="i-alt">1</i></a>
                            </div>
                            <h3>Register Your Pet<span className="subtitle">Step 1</span></h3>
                        </div>
                    </div>

                    <div className="col_one_third">
                        <div className="feature-box fbox-center fbox-bg fbox-outline fbox-dark fbox-effect">
                            <div className="fbox-icon">
                                <a href="#"><i>2</i></a>
                            </div>
                            <h3>Save Health Record<span className="subtitle">Step 2</span></h3>
                        </div>
                    </div>

                    <div className="col_one_third col_last">
                        <div className="feature-box fbox-center fbox-bg fbox-outline fbox-dark fbox-effect">
                            <div className="fbox-icon">
                                <a href="#"><i className="i-alt">3</i></a>
                            </div>
                            <h3>Find Vets Near You<span className="subtitle">Step 3</span></h3>
                        </div>
                    </div>

						<Register currentUser={this.props.currentUser} /><br />
						<Login currentUser={this.props.currentUser} />
							
					</div>
				</div>

				<Footer />
			</div>
		)
	}
}

export default Landing