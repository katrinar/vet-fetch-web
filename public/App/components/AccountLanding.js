import React, { Component } from 'react'
import navigation from '../utils/navigation'
import TopBar from '../components/TopBar'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import LandingSignUp from '../components/LandingSignUp'


class AccountLanding extends Component {
	render(){
	

		return(
			<div>
				<TopBar />
				<Nav />

				 <section id="slider" className="slider-parallax full-screen dark"style={{background: 'url("/images/landing/cover2.jpg") center', opacity: 0.7, overflow:'visible'}}>

		            <div className="container vertical-middle clearfix">

		                <div className="heading-block title-left nobottomborder">
		                    <h1>Sign Up Today</h1>
		                   
		                </div>
		                <LandingSignUp currentUser={this.props.currentUser}/>
		            </div>

		        </section>

				<section id="page-title">
		            <div className="container clearfix">
		                <h1>Account</h1>
		                <span>Get started today - log in or sign up to register your pet and save their healh information.</span>
		            </div>
        		</section>

				<div className="section notopmargin nobottommargin">
					<div className="container clearfix">
			

					</div>
				</div>

				<Footer />
				
			</div>
		)
	}
}

export default AccountLanding