import React, { Component } from 'react'
import navigation from '../utils/navigation'
import store from '../stores/store'
import actions from '../actions/actions'
import PetHealthRecord from '../components/PetHealthRecord'
import PetStats from '../components/PetStats'

class PetProfileInfo extends Component {
	constructor(props, context){
		super(props, context)

	}

	render(){
		const petSlug = this.props.slug
		const petProfile = this.props.pets[petSlug] || {}

		var display = this.props.showHealthRecord
		var content = null
		
		switch(display){
			case false:
				return content = <PetStats pets={this.props.pets} slug={this.props.slug}showHealthRecord={this.props.showHealthRecord} /> 
			case true:
				return content = <PetHealthRecord pets={this.props.pets} slug={this.props.slug} showHealthRecord={this.props.showHealthRecord} /> 

			default:
				return content = null
		}

		return(
			<div>
				
				<div>{content}</div>
			</div>
		)
	}

}

export default PetProfileInfo