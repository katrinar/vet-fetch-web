import React, { Component } from 'react'
import HomeButton from '../components/HomeButton'
import GoogleMap from 'google-map-react'
import store from '../stores/store'
import actions from '../actions/actions'
import api from '../utils/api'

class VetsContainer extends Component {

  constructor(props, context) {
    super(props, context)
    this.searchZip = this.searchZip.bind(this)
    this.submitZip = this.submitZip.bind(this)
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
		console.log('SEARCH ZIP PARAMS/ SEARCH STATE = '+JSON.stringify(this.state.search))
		var searchResponse = Object.assign({}, this.state.search)

		api.handlePost('/api/vet', this.state.search, function(err, response){
			if (err){
				alert(err.message)
				return
			}
			console.log('SEARCH ZIP RESPONSE.result = '+JSON.stringify(response.result))
			searchResponse = response.result
			console.log('SEARCH ZIP UPDATED SEARCH STATE = '+JSON.stringify(searchResponse))
			store.dispatch(actions.receivedSearch(searchResponse))
		})
		
	}

	render(){
		var newCenter = []
		if (this.props.search.geo != null){
			
			newCenter = this.props.search.geo
			console.log('RENDER: this.props.search.geo = '+JSON.stringify(newCenter))
		}

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
				        defaultCenter={this.props.center}
				      
				        // center={this.props.search.geo}
				         // center={this.props.center || this.props.search.geo}
				        defaultZoom={this.props.zoom} style={this.props.style} yesIWantToUseGoogleMapApiInternals>
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
	zoom: 9,
	style: {height: 500, width: 500, position: 'absolute'}
}

export default VetsContainer