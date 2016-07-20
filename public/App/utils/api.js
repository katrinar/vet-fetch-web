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
				if (res.body.confirmation == 'Success'){
					completion(null, res.body)
				}
				else {
					completion({message: res.body.message}, null)
				}
			}
		})
	}
}

