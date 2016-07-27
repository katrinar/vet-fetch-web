import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import api from '../utils/api'

class PetProfile extends Component {

	componentDidMount(){
		var _this = this
		console.log('SLUG == '+ this.props.slug)

		var endpoint = '/api/pet?slug=' + this.props.slug

		api.handleGet(endpoint, null, function(err, results){
			if (err){
				alert(err.message)
				return
			}
			console.log('FETCH PET PROFILE: '+JSON.stringify(results))
		})
	}

	render() {
		return (
			<div>Pet Profile goes here</div>
			)
	}
}

export default PetProfile