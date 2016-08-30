import React, { Component } from 'react'
import Map, {GoogleApiWrapper} from 'google-maps-react'

export class MapContainer extends Component {
  render() {
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }
    return (
      <div>Map will go here</div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: __GAPI_KEY__
})(Container)
