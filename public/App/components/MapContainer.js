import React, { Component } from 'react'
import Markers from '../components/Markers'
import GoogleMap from 'google-map-react'
import store from '../stores/store'
import actions from '../actions/actions'

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

	render(){

		return(
			<div>
				<div>
					<GoogleMap
				        // defaultCenter={this.props.center}
				        center={this.props.search.geo}
				        defaultZoom={this.props.zoom} 
				        style={this.props.style}>
				        <Markers {...this.props.search.geo} text={'A'} />
				    </GoogleMap>
				</div>
			</div>
		)
	}
}

MapsContainer.propTypes = {
   center : React.PropTypes.arrayOf(React.PropTypes.number).isRequired,
   zoom : React.PropTypes.number.isRequired
}

MapsContainer.defaultProps = {
	center: [40.7144522,-73.9601094],
	zoom: 10,
	style: {height: 500, width: 500, position: 'absolute'}
}

export default VetsContainer
