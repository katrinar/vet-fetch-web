import superagent from 'superagent'

export default {

	handleGet: function(endpoint, params, completion){
		superagent
		.get(endpoint)
		.query(params)
		.set('Accept', 'application/json')
		.end(function(err, res){
			if(err){
				if (completion != null)
					completion(err, null)
				return	
			}

			if (completion != null){

				completion(null, res.body)
				return	
				// if (res.body.confirmation == 'Success'){
				// 	completion(null, res.body)
				// }
				// else {
				// 	completion({message: res.body.message}, null)
				// }
			}
		})
	},

	handleGetById: function(endpoint, params, completion){
		superagent
		.get(endpoint)
		.query(params)
		.set('Accept', 'application/json')
		.end(function(err, res){
			if(err){
				if (completion != null)
					completion(err, null)
				return	
			}

			if (completion != null){

				completion(null, res.body)
				return	
			}
		})	
	},

	handlePost: function(endpoint, body, completion){
		superagent
		.post(endpoint)
		.send(body)
		.set('Accept', 'application/json')
		.end(function(err, res){
			if (err){ 
				if (completion != null)
					completion(err, null)

				return
			}

			if (completion != null){
				if (res.body.confirmation == 'Success'){
		    		completion(null, res.body)
				}
				else {
		    		completion({message:res.body.message}, null)
				}
			}


		});
	},

	handlePut: function(endpoint, body, completion){
		superagent
		.put(endpoint)
		.send(body)
		.set('Accept', 'application/json')
		.end(function(err, res){
			if (err){ 
				if (completion != null)
					completion(err, null)
				return
			}
			
			if (completion != null){
				if (res.body.confirmation == 'Success'){
		    		completion(null, res.body)
				}
				else {
		    		completion(err, null)
				}
			}
		});
	},

	upload: function(file){
		var uploadFile = file
		// var imageFile = file[0]
		console.log('imageFileSent: uploadFile =  '+JSON.stringify(uploadFile)+ 'file preview = '+JSON.stringify(uploadFile['imagePreview']))
		// this.handlePost('/api/pet', uploadFile, function(err, response){
		// 	if (err){
		// 		alert(err.message)
		// 		return
		// 	}
		// 	console.log('upload post response: '+JSON.stringify(response))
		// })
	}
		
}

