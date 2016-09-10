import React, { Component } from 'react'
import Markers from '../components/Markers'
import GoogleMap from 'google-map-react'
import store from '../stores/store'
import actions from '../actions/actions'

class MapContainer extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
    
    }
  }

	render(){

		return(

				<div>
					<GoogleMap
				        defaultCenter={this.props.center}
				        // center={this.props.search.geo}
				        defaultZoom={this.props.zoom} 
				        style={this.props.style}>
				    </GoogleMap>
				</div>
		
		)
	}
}

MapContainer.propTypes = {
   center : React.PropTypes.arrayOf(React.PropTypes.number).isRequired,
   zoom : React.PropTypes.number.isRequired
}

MapContainer.defaultProps = {
	center: [40.7144522,-73.9601094],
	zoom: 10,
	style: {height: 500, width: 500, position: 'absolute'}
}

export default MapContainer
