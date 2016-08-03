import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Main from './components/Main'
import store from './stores/store'
import { Provider } from 'react-redux'

class App extends Component {

	constructor(props, context){
		super(props, context)
		this.state = {
			page: null,
			slug: null
		}
	}

	initialState(){
		return{
			page: null,
			slug: null
		}
	}

	componentWillMount(){
		var pathname = window.location.pathname
		var path = pathname.replace('/', ''); // http://localhost:3000/ - replace '/' with space
		var page = 'home'
		var slug = null

		if (path.length > 0){
			var parts = path.split('/')
			page = parts[0]
			if (parts.length > 1)
				slug = parts[1]
		}

		var address = window.location.href // http://localhost:3000/courses?type=online
		var params = null
		if (address.indexOf('?') != -1){
			params = {}
			var parts = address.split('?')
			var paramsString = parts[1] // key=value&key=value
			var keyValuePairs = paramsString.split('&')
			for (var i=0; i<keyValuePairs.length; i++){
				var keyValue = keyValuePairs[i]
				if (keyValue.indexOf('=') == -1)
					continue

				var pieces = keyValue.split('=');
				var key = pieces[0]
				var value = pieces[1]
				params[key] = value
			}
		}

		this.setState({
			page: page,
			slug: slug,
			params: params
		})
	}

	render() {
		return(

			<div>
				<Main page={this.state.page} slug={this.state.slug} />
			</div>
		)
	}
}

ReactDOM.render(
	<Provider store = {store}> 
		<App /> 
	</Provider>, 
	document.getElementById('app')
	)