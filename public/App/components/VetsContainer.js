import React, { Component } from 'react'
import HomeButton from '../components/HomeButton'
import Markers from '../components/Markers'
import GoogleMap from 'google-map-react'
import store from '../stores/store'
import actions from '../actions/actions'
import api from '../utils/api'
import request from 'superagent'

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
	    	geo: []
    	}
    }
  }

  submitZip(event){
  	event.preventDefault()
  	var vetSearch = Object.assign({}, this.state.vet)
  	vetSearch[event.target.id] = event.target.value
  	this.setState({
  		search: vetSearch
  	})
  }

  searchZip(event){
		event.preventDefault()
		var _this = this
		// console.log('SEARCH ZIP PARAMS/ SEARCH STATE = '+JSON.stringify(this.state.search))
		var searchResponse = Object.assign({}, this.state.search)

		api.handlePost('/api/vet', this.state.search, function(err, response){
			if (err){
				alert(err.message)
				return
			}
			console.log('SEARCH ZIP RESPONSE.result = '+JSON.stringify(response.result))
			searchResponse = response.result
			console.log('SEARCH ZIP UPDATED SEARCH STATE GEO= '+JSON.stringify(searchResponse.geo))
			_this.searchVets(searchResponse.geo[0], searchResponse.geo[1])
			store.dispatch(actions.receivedSearch(searchResponse))
		})
		
	}

	searchVets(lat, lng) {
		event.preventDefault()
		
		// console.log('searchVets lat, lng = '+JSON.stringify(lat+', '+lng))
		var lat = lat
		var lng = lng


    	// request.get(GOOGLE_API_URL+"location="+lat+","+lng)
     //                    // .query({location: location})
     //                    .query({radius: '1000'})
     //                    .query({keyword: 'vet'})
     //                    .query({key: GOOGLE_API_KEY})
     //                    .end(function(err, response){
     //                    	if (err){
     //                    		console.error(err)
     //                    	}
                        	
     //                    	console.log('SearchVets response = '+JSON.stringify(response))
     //                    })
	

    	request.get(GOOGLE_API_URL+"location="+lat+","+lng)
                        .query({radius: '1000'})
                        .query({keyword: 'vet'})
                        .query({key: GOOGLE_API_KEY})
        				.end(function(err, response){
	        					if (err){
	        						console.error(err)
	        					}

	        					if (response.status == 'OK'){
	        						console.log('search response = '+JSON.stringify(response))}
	        					
        				})
  	}

	render(){

		return(
			<div>
				<HomeButton />
				<div>
					<h2>Find a vet!</h2>

					<form>
						<input type="text" onChange={this.submitZip}  id="zipcode" placeholder="Zipcode" /><br />
						
						<button onClick={this.searchZip}>Search</button>
					</form> 
				</div>

				<div>
					<GoogleMap
				        // defaultCenter={this.props.center}
				        center={this.props.search.geo}
				        defaultZoom={this.props.zoom} 
				        style={this.props.style} 
				        yesIWantToUseGoogleMapApiInternals>
				        <Markers {...this.props.search.geo} text={'A'} />
				    </GoogleMap>
				</div>
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
	style: {height: 500, width: 500, position: 'absolute'}
}

export default VetsContainer