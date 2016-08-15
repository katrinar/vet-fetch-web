import React, { Component } from 'react'
import navigation from '../utils/navigation'
import store from '../stores/store'
import actions from '../actions/actions'
import PetHealthRecord from '../components/PetHealthRecord'
import PetStats from '../components/PetStats'


class PetProfileInfo extends Component {
	constructor(props, context){
		super(props, context)
		this.sendToEdit = this.sendToEdit.bind(this)

	}

	sendToEdit(event){
		var changeDisplay = Object.assign({}, this.props.displayContent) 
		changeDisplay = true
		
		store.dispatch(actions.toggleDisplay(changeDisplay))
	}

	render(){
		const petSlug = this.props.slug
		const petProfile = this.props.pets[petSlug] || {}
		var displayContent = this.props.displayContent

		console.log('RENDER showEdit props = '+JSON.stringify(this.props.displayContent))
		return(
			<div>
				<div>
					<button onClick={navigation.petsPage}>Back to Pets</button>
					<button onClick={this.sendToEdit}>Edit Pet</button>
					<button onClick={this.showHealthRecord}>Health Record</button>
				</div>

				
				<div><PetStats pets={this.props.pets} slug={this.props.slug}/></div>
				<div><PetHealthRecord pets={this.props.pets} slug={this.props.slug} /></div>
			</div>
		)
	}

}

export default PetProfileInfo