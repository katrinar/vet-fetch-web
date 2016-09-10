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
				 	
		        <section id="slider" className="slider-parallax full-screen dark"style={{background: 'url("/images/landing/cover.jpg") center', opacity: 0.7, overflow:'visible'}}>

		            <div className="container vertical-middle clearfix">

		                <div className="heading-block title-center nobottomborder">
		                    <h1>All your pet health information in one place.</h1>
		                    <span>Managing your pets health information has never been easier.</span>
		                </div>
		            </div>

		        </section>

                <section id="page-title">
                    <div className="container clearfix">
                        <h1>Keep track of all your pet health care in one spot.</h1>
                        <span>Track weight, vaccines, medications, and allergies with our pet dashboard. If you need vetinary care, VetFetch will find a few in your zipcode. Check in here or manage on the go with our mobile app. </span>
                    </div>
                </section>

				<div className="section notopmargin nobottommargin">
					<div className="container clearfix">

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

                        <div className="divider"><i className="icon-circle"></i></div>

                        <div id="posts" className="post-grid grid-2 clearfix">

                        <div className="entry clearfix">
                            <div className="entry-image">
                                <a href="/pets" data-lightbox="image"><img className="image_fade" src="/images/dog-with-cat.png" alt="Pets" /></a>
                            </div>
                            <div className="entry-title">
                                <h2>Manage from pet dashboard</h2>
                            </div>
                        </div>

                        <div className="entry clearfix">
                            <div className="entry-image">
                                <a href="/vets" data-lightbox="image"><img className="image_fade" src="/images/pet-with-family.jpg" alt="Vets" /></a>
                            </div>
                            <div className="entry-title">
                                <h2>Find vetinary care near you</h2>
                            </div>
                        </div>

                        <div className="entry clearfix">
                            <div className="entry-image">
                                <a href="/insurance" data-lightbox="image"><img className="image_fade" src="/images/man-at-desk.jpeg" alt="Pets" /></a>
                            </div>
                            <div className="entry-title">
                                <h2>Pick insurance plans for your pet</h2>
                            </div>
                        </div>

                        <div className="entry clearfix">
                            <div className="entry-image">
                                <a href="/account" data-lightbox="image"><img className="image_fade" src="/images/laptop.jpg" alt="Vets" /></a>
                            </div>
                            <div className="entry-title">
                                <h2>Manage your Account</h2>
                            </div>
                        </div>
                    </div>

                        <div className="line"></div>

                        <Login currentUser={this.props.currentUser} />
						<Register currentUser={this.props.currentUser} />

                        <div className="clear"></div>

                        <div className="line"></div>

                        <div className="col_one_fourth nobottommargin center">
                            <i className="i-plain i-xlarge divcenter nobottommargin icon-fire"></i>
                            <div className="counter counter-large" style={{color: '#1abc9c'}}><span data-from="0" data-to="80" data-refresh-interval="10" data-speed="2700"></span></div>
                            <h5>Million American Familes Own Pets</h5>
                        </div>

                        <div className="col_one_fourth nobottommargin center">
                            <i className="i-plain i-xlarge divcenter nobottommargin icon-gift"></i>
                            <div className="counter counter-large" style={{color: '#3498db'}}><span data-from="10" data-to="85" data-refresh-interval="15" data-speed="3500"></span></div>
                            <h5>Million Pet Cats</h5>
                        </div>

                        <div className="col_one_fourth nobottommargin center">
                            <i className="i-plain i-xlarge divcenter nobottommargin icon-gift"></i>
                            <div className="counter counter-large" style={{color: '#9b59b6'}}><span data-from="10" data-to="78" data-refresh-interval="30" data-speed="2700"></span></div>
                            <h5>Million Pet Dogs</h5>
                        </div>

                         <div className="col_one_fourth nobottommargin center col_last">
                            <i className="i-plain i-xlarge divcenter nobottommargin icon-fire"></i>
                            <div className="counter counter-large" style={{color: '#F49AC2'}}><span data-from="100" data-to="1288" data-refresh-interval="30" data-speed="2700"></span></div>
                            <h5>Dollars Spent on Vet Care a Year</h5>
                        </div>

                        
					</div>
				</div>

				<Footer />
			</div>
		)
	}
}

export default Landing