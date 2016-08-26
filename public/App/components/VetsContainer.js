import React, { Component } from 'react'
import shouldPureComponentUpdate from 'react-pure-render/function'
import HomeButton from '../components/HomeButton'
import GoogleMap from 'google-map-react'
import api from '../utils/api'

class VetsContainer extends Component {

  constructor(props, context) {
    super(props, context)
    this.searchZip = this.searchZip.bind(this)
    this.submitZip = this.submitZip.bind(this)
    this.state = {
    	vet: {
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
  		vet: vetSearch
  	})
  }

  searchZip(event){
		event.preventDefault()
		console.log('SEARCH ZIP PARAMS '+JSON.stringify(this.state.zipcode))

		api.handlePost('/api/vet', this.state.vet, function(err, response){
			if (err){
				alert(err.message)
				return
			}
			console.log('SEARCH ZIP RESPONSE '+JSON.stringify(response.result))
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
				        defaultCenter={this.props.center}
				        defaultZoom={this.props.zoom} style={this.props.style} yesIWantToUseGoogleMapApiInternals>
				    </GoogleMap>
				</div>
			</div>
		)
	}
}

VetsContainer.propTypes = {
   center : React.PropTypes.objectOf(React.PropTypes.number).isRequired,
   zoom : React.PropTypes.number.isRequired
}

VetsContainer.defaultProps = {
	center: {lat: 40.7058316, lng: -74.2581956},
	zoom: 9,
	style: {height: 500, width: 500, position: 'absolute'}
}

export default VetsContainer