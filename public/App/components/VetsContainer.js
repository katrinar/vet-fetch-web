import React, { Component } from 'react'
import store from '../stores/store'
import actions from '../actions/actions'
import api from '../utils/api'
import VetSearchResultsList from '../components/VetSearchResultsList'
import TopBar from '../components/TopBar'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import MapContainer from '../components/MapContainer'
import GoogleMap from 'google-map-react'

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
			// console.log('response: '+JSON.stringify(searchResponse))

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
			
			store.dispatch(actions.receivedSearchResults(vetResults))
		})
  	}

	render(){


		return(
			<div>
				<TopBar />
				<Nav />

				<section id="page-title">
		            <div className="container clearfix">
		                <h1>Vet Dashboard</h1>
		            </div>
        		</section>

				<div className="section notopmargin nobottommargin nobg">
					<div className="container clearfix">
				
						<div className="fancy-title title-double-border">
	                        <h2>Find Vets Near You</h2>
	                	</div>

						<form>
							<input type="text" onChange={this.submitZip}  id="zipcode" placeholder="Zipcode" /><br />
						</form> 

						<a href="#" onClick={this.searchZip} className="button button-3d button-small button-rounded button-aqua">Search</a>
					</div>
				</div>

						<div className="section notopmargin nobottommargin nobg">
							<div className="container clearfix">
								<VetSearchResultsList search={this.props.search}/>
						 	</div>
						</div>

						<div className="clear"></div>

						<div className="section notopmargin nobottommargin nobg">
							<div className="container clearfix">
								<GoogleMap
							        // defaultCenter={this.props.center}
							        center={this.props.search.geo}
							        defaultZoom={this.props.zoom} 
							        style={this.props.style}>
							    </GoogleMap>
						 	</div>
						</div>

				<Footer />

			</div>
		)
	}
}

VetsContainer.propTypes = {
   center : React.PropTypes.arrayOf(React.PropTypes.number).isRequired,
   zoom : React.PropTypes.number.isRequired
}

VetsContainer.defaultProps = {
	center: [40.7144522,-73.9601094],
	zoom: 10,
	style: {height: 500, width: 500, position: 'relative'}
}

export default VetsContainer