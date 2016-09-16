import React, { Component } from 'react'
import PetRow from '../components/PetRow'
import navigation from '../utils/navigation'
import TopBar from '../components/TopBar'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import RegisterPetLanding from '../components/RegisterPetLanding'
import LandingSignUp from '../components/LandingSignUp'


class PetsLanding extends Component {
	render(){
	

		return(
			<div>
				<TopBar />
				<Nav />

				 <section id="slider" className="slider-parallax full-screen dark"style={{background: 'url("/images/landing/cover2.jpg") center', opacity: 0.7, overflow:'visible'}}>

		            <div className="container vertical-middle clearfix">

		                <div className="heading-block title-left nobottomborder">
		                    <h1>Register your furry friend</h1>
		                    <span>Save health record and access whenever, wherever</span>
		                </div>
		                <LandingSignUp currentUser={this.props.currentUser}/>
		            </div>

		        </section>

				<section id="page-title">
		            <div className="container clearfix">
		                <h1>Pet Dashboard</h1>
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

export default PetsLanding