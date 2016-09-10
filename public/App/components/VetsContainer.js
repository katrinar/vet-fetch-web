import React, { Component } from 'react'
import store from '../stores/store'
import actions from '../actions/actions'
import api from '../utils/api'
import VetSearchResultsList from '../components/VetSearchResultsList'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const GOOGLE_API_KEY = 'AIzaSyBqcuqe2FA3czjR1JlSlkUSnagT1BGKmJI';
const GOOGLE_API_URL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?';

class VetsContainer extends Component {

  constructor(props, context) {
    super(props, context)
    this.searchZip = this.searchZip.bind(this)
    this.submitZip = this.submitZip.bind(this)
    this.searchVets = this.searchVets.bind(this)
    this.state = {
    	search: {
	    	zipcode: '',
	    	geo: [],
	    	currentUserId: null
    	}
    }
  }

  submitZip(event){
  	event.preventDefault()
  	var user = this.props.currentUser || {}
  	var vetSearch = Object.assign({}, this.state.vet)
  	vetSearch[event.target.id] = event.target.value
  	vetSearch['currentUserId'] = user.id
  	this.setState({
  		search: vetSearch
  	})
  }

  searchZip(event){
		event.preventDefault()
		var _this = this
		

		var searchResponse = Object.assign({}, this.state.search)

		api.handlePost('/api/vet', this.state.search, function(err, response){
			if (err){
				alert(err.message)
				return
			}
			searchResponse = response.result
			console.log('response: '+JSON.stringify(searchResponse))

			store.dispatch(actions.receivedSearch(searchResponse))

			_this.searchVets()
		})	
	}

	searchVets() {
		event.preventDefault()
	
		var endpoint = '/api/vet/'+this.props.search.id

		api.handlePut(endpoint, this.props.search, function(err, response){
			if (err){
				alert(err.message)
				return
			}
			var vetResults = response.result
			

			console.log('SEARCH VETS: RESPONSE= '+JSON.stringify(response))
			
			store.dispatch(actions.receivedSearchResults(vetResults))
		})
  	}

	render(){


		return(
			<div>
				<Nav />

				<section id="page-title">
		            <div className="container clearfix">
		                <h1>Vet Locator</h1>
		            </div>
        		</section>

				<div className="section notopmargin nobottommargin">
					<div className="container clearfix">
				
						<h2>Find a vet!</h2>

						<form>
							<input type="text" onChange={this.submitZip}  id="zipcode" placeholder="Zipcode" /><br />
						</form> 
						<button onClick={this.searchZip}>Search</button>
						<VetSearchResultsList search={this.props.search}/>
					</div>
				</div>

				<Footer />

			</div>
		)
	}
}

export default VetsContainer