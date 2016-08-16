import React, { Component } from 'react'
import store from '../stores/store'
import actions from '../actions/actions'
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
		var displayEditPet = this.props.displayEditPet
		
		switch(displayEditPet){
			case false:
				return petProfileContent = <PetProfileContent pets={this.props.pets} slug={this.props.slug} displayEditPet={displayEditPet} showHealthRecord={this.props.showHealthRecord}/> 
			case true:
				return petProfileContent = <EditPet pets={this.props.pets} slug={this.props.slug} displayEditPet={displayEditPet}/> 

			default:
				return petProfileContent = null
		}

		return(
			<div>{petProfileContent}</div>
		)
	}
}

export default PetProfile