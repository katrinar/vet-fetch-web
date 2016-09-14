import React, { Component } from 'react'
import PetRow from '../components/PetRow'
import navigation from '../utils/navigation'
import TopBar from '../components/TopBar'
import Nav from '../components/Nav'
import Footer from '../components/Footer'


class PetList extends Component {
	render(){
		var petList = this.props.petsArray.map(function(pet, i){
			return <PetRow key={i} pet={pet} />
		})

		return(
			<div>
				<TopBar />
				<Nav />

				<section id="page-title">
		            <div className="container clearfix">
		                <h1>Pet Dashboard</h1>
		            </div>
        		</section>

				<div className="section notopmargin nobottommargin nobg">
					<div className="container clearfix">
						<div className="fancy-title title-double-border">
	                        <h2>My Pets</h2>
	                	</div>
						
						{petList}

						<div className="divider"><i className="icon-circle"></i></div>
						
						<a href="#" onClick={navigation.registerPet} className="button button-3d button-small button-rounded button-aqua">Register your Pet</a>
					</div>
				</div>

				<Footer />
				
			</div>
		)
	}
}

export default PetList