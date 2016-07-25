import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import api from '../utils/api'

class Pets extends Component {

	constructor(props, context){
		super(props, context)
		this.state = {
		
		}
	}

	componentDidMount(){
		// var _this = this
		// api.handleGet('/api/pet', null, function(err, results){
		// 	if (err){
		// 		alert(err.message)
		// 		return
		// 	}

		// 	console.log('Pets handleGet Response: '+JSON.stringify(results))
	
		// 	return
		// })
	}

	render() {

		return (
			<div>

				<ol>
					<li> Pets </li>
				</ol>

			</div>
			
		)
	}
}

export default Pets