import React, { Component } from 'react'
import store from '../stores/store'
import actions from '../actions/actions'
import { connect } from 'react-redux'
import navigation from '../utils/navigation'
import text from '../utils/text'
import EditPet from '../components/EditPet'
import PetProfileContent from '../components/PetProfileContent'

class PetProfile extends Component {

	constructor(props, context){
		super(props, context)
	}

	render(){

		const petSlug = this.props.slug
		const petProfile = this.props.pets[petSlug] || {}
		var petProfileContent = null
		var displayContent = this.props.displayContent
		
		switch(displayContent){
			case false:
				return petProfileContent = <PetProfileContent pets={this.props.pets} slug={this.props.slug} displayContent={displayContent}/> 
			case true:
				return petProfileContent = <EditPet pets={this.props.pets} slug={this.props.slug} displayContent={displayContent}/> 

			default:
				return petProfileContent = null
		}

		return(
			<div>{petProfileContent}</div>
		)
	}
}

export default PetProfile