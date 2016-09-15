import React, { Component } from 'react'
import LandingSignUp from '../components/LandingSignUp'
import TopBar from '../components/TopBar'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

class Landing extends Component {
	render(){
		return(
			<div>
                <TopBar />
				<Nav />
				 	
		        <section id="slider" className="slider-parallax full-screen dark"style={{background: 'url("/images/landing/cover.jpg") center', opacity: 0.7, overflow:'visible'}}>

		            <div className="container vertical-middle clearfix">

		                <div className="heading-block title-center nobottomborder">
		                    <h1>All your pet health information in one place.</h1>
		                    <span>Managing your pets health information has never been easier.</span>
		                </div>

                        <LandingSignUp currentUser={this.props.currentUser} />
		            </div>

		        </section>

                <section id="page-title">
                    <div className="container clearfix">
                        <h1>Find a Vet for your Pet</h1>
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

                        <div className="line"></div>

                        <div id="portfolio" className="portfolio-2 clearfix">

                            <article className="portfolio-item pf-illustrations">
                                <div className="portfolio-image">
                                    <img src="/images/search-vets.png" alt="Search Vets" />
                                </div>

                                <div className="fancy-title title-bottom-border title-center">
                                    <h3>Fetch on the go - use on desktop or mobile</h3>        
                                </div>
                            </article>

                             <article className="portfolio-item pf-illustrations">
                                <div className="portfolio-image">
                                    <img src="/images/pet-dashboard.png" alt="Open Imagination" />  
                                </div>
                                <div className="fancy-title title-bottom-border title-center">
                                    <h3>Manage all your pets from the Pet Dashboard</h3> 
                                </div>
                            </article>

                            <article className="portfolio-item pf-illustrations">
                                <div className="portfolio-image">
                                    <img src="/images/pet-profile.png" alt="Pet Profile" />
                                </div>
                                <div className="fancy-title title-bottom-border title-center">
                                    <h3>Pull up health records and update whenever</h3>        
                                </div>
                            </article>

                            <article className="portfolio-item pf-illustrations">
                                <div className="portfolio-image">
                                    <img src="/images/typing.png" alt="Insurance Search" />
                                </div>
                                <div className="fancy-title title-bottom-border title-center">
                                    <h3>Find the right insurance coverage for your pet</h3>        
                                </div>
                            </article>
 
                        </div>

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