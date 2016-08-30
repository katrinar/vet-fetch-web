import React, {Component} from 'react'

class Markers extends Component {

	render(){
		return(
			<div>
				{this.props.text}
			</div>
		)
	}
}

Markers.propTypes = {
	text: React.PropTypes.string.isRequired
}

Markers.defaultProps = {}

export default Markers