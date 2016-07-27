import React, { Component } from 'react'
import api from '../utils/api'
import Register from '../components/Register'
import Account from '../components/Account'
import PetProfile from '../components/PetProfile'

class Main extends Component {


	componentDidMount() {

		console.log('Main componentDidMount: Page: '+this.props.page+", Slug: " +this.props.slug)
	}

	render() {

		var content = null
		var page = this.props.page
		

		if (page == 'home')
			content = <Register />

		if (page == 'account') 
			content = <Account />

		if (page == 'pet') {
			content = <PetProfile slug={this.props.slug} />
			console.log('Page: '+this.props.page+", Slug: " + this.props.slug)
		}
						
		return (
			<div>
				{ content } 
			</div>
		)
	}
}

export default Main 