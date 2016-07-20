import React, { Component } from 'react'
import api from '../utils/api'
import Pets from '../components/Pets'
import Welcome from '../components/Welcome'

class Main extends Component {

	componentDidMount() {

		var currentuser = null
		
		api.handleGet('/account/currentuser', null, function(err, response){
			if (err){
				alert('OOPS: '+ err)
				return
			}
			else {
				
				
				return response

				currentuser = response

			}
		})

		console.log('Main:' + currentuser)


	}

	render() {

		return (
			<div>
				<div>{ <Welcome /> }</div>
				<div>{ <Pets /> }</div>
			</div>
		)
	}
}

export default Main 