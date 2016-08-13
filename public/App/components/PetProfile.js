import React, { Component } from 'react'
import store from '../stores/store'
import actions from '../actions/actions'
import { connect } from 'react-redux'
import navigation from '../utils/navigation'
import text from '../utils/text'
import EditPet from '../components/EditPet'
import PetProfileInfo from '../components/PetProfileInfo'

class PetProfile extends Component {

	constructor(props, context){
		super(props, context)
	}

	// sendToEdit(event){
	// 	console.log('sendToEdit: displayContent props = '+JSON.stringify(this.props.displayContent))
	// }

	render(){
		console.log('RENDER showEdit props = '+JSON.stringify(this.props.displayContent))

		const petSlug = this.props.slug
		const petProfile = this.props.pets[petSlug] || {}
		var petProfileContent = null
		var displayContent = this.props.displayContent
		
		switch(displayContent){
			case false:
				return petProfileContent = <PetProfileInfo pets={this.props.pets} slug={this.props.slug} isplayContent={displayContent}/> 
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