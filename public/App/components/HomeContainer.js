import React, { Component } from 'react'
import api from '../utils/api'
import text from '../utils/text'
import store from '../stores/store'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

class HomeContainer extends Component {

	constructor(props, context){
		super(props, context)
		this.logout = this.logout.bind(this)
	}

	logout(event){
		event.preventDefault()

		api.handleGet('account/logout', null, function(err, response){
			if (err){
				alert(err.message)
				return
			}
			window.location.href = '/'
		})

	}

	render(){
		
		return(
			<div>

				<Nav />
				<div className="section notopmargin nobottommargin nobg">
					<div className="container clearfix">

					<h2>
						Welcome, {text.capitalize(this.props.currentUser.firstName)}
					</h2>

					<div id="posts" className="post-grid grid-2 clearfix">

                        <div className="entry clearfix">
                            <div className="entry-image">
                                <a href="/pets" data-lightbox="image"><img className="image_fade" src="/images/dog-with-cat.png" alt="Pets" /></a>
                            </div>
                            <div className="entry-title">
                                <h2>Manage your Pets</h2>
                            </div>
                        </div>

                        <div className="entry clearfix">
                            <div className="entry-image">
                                <a href="/vets" data-lightbox="image"><img className="image_fade" src="/images/pet-with-family.jpg" alt="Vets" /></a>
                            </div>
                            <div className="entry-title">
                                <h2>Find Vets Near You</h2>
                            </div>
                        </div>
                    </div>

						
					
						<button onClick={this.logout}>Logout</button>
					</div>
				</div>

				<Footer />
			</div>
		)
	}
}

export default HomeContainer