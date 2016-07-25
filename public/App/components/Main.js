import React, { Component } from 'react'
import api from '../utils/api'
import Register from '../components/Register'
import Account from '../components/Account'

class Main extends Component {


	componentDidMount() {

		console.log('Main componentDidMount: Page: '+this.props.page+", Slug: " + this.props.slug)
	}

	render() {

		var content = null
		var page = this.props.page
		if (page == 'home'){
			content = <Register />
			console.log(page)

		}

		if (page == 'account'){
			content = <Account />
			console.log(page)
		}
						

		return (
			<div>
				{ content } 
			</div>
		)
	}
}

export default Main 