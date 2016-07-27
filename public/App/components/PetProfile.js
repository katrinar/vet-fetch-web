import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import api from '../utils/api'

class PetProfile extends Component {

	componentDidMount(){
		console.log('SLUG == '+ this.props.slug)
	}

	render() {
		return (
			<div>Pet Profile goes here</div>
			)
	}
}

export default PetProfile