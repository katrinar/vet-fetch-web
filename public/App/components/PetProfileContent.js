import React, { Component } from 'react'
import navigation from '../utils/navigation'
import store from '../stores/store'
import actions from '../actions/actions'
import PetStats from '../components/PetStats'
import TopBar from '../components/TopBar'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

class PetProfileInfo extends Component {
	constructor(props, context){
		super(props, context)

	}

	render(){
		const petSlug = this.props.slug
		const petProfile = this.props.pets[petSlug] || {}


		return(
			<div>
				<TopBar />
				<Nav />
				<section id="page-title">
		            <div className="container clearfix">
		                <h1>Pet Dashboard</h1>
		            </div>
        		</section>

				<PetStats pets={this.props.pets} slug={this.props.slug}/> 
				
				<Footer />
			</div>
		)
	}

}

export default PetProfileInfo