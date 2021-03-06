var Vet = require('../models/Vet')
var Request = require('../utils/Request')

module.exports = {

	get: function(params, isRaw, callback){

		if (params.id != null){

			Vet.findById(params.id, function(err, vet){
				if (err){
					if (callback != null)
						callback(err, null)
					return
				}

				if (vet == null){
					callback(err, null)
					return
				}

				if(callback != null){
					if(isRaw == true){
						callback(null, vet)
						return
					}
					callback(null, vet.summary())
				}
			})
			return
		}

		Vet.find(params, function(err, vets){
			if(err){
				if (callback != null)
					callback(err, null)
				return
			}
			if (callback != null){
				if (isRaw == true){
					callback(null, vets)
					return
				}

				var summaries = []
				for (var i=0; i<vets.length; i++){
					var vet = vets[i]
					summaries.push(vet.summary())
				}
				callback(null, summaries)
			}
				
		})
	},

	getById: function(id, isRaw, callback){
		Vet.findById(id, function(err, vet){
			if(err){
				if(callback != null)
					callback({message: 'Vet Not Found'}, null)
				return
			}

			if(callback != null){
				if (isRaw == true){
					callback(null, vet)
					return
				}
				callback(null, vet.summary())
			}
		})
	},

	post: function(params, callback){	
		console.log('POST RESPONSE PARAMS = '+JSON.stringify(params))

		var url = 'https://maps.googleapis.com/maps/api/geocode/json?address='+params.zipcode
		var GOOGLE_API_KEY = 'AIzaSyBJC_SGcJWr83yZwNSMHzgtft75blNfLcI'
	
	    Request.get(url, {key: GOOGLE_API_KEY})
	    	.then(function(response){
		    	var results = response.results
		    	var locationInfo = results[0]
		    	var geometry = locationInfo.geometry
		    	var location = geometry.location
		    	var geo = [location.lat, location.lng]
		    	params['geo'] = geo

				Vet.create(params, function(err, vet){
					if(err){
						if (callback != null)
							callback(err, null)
						return
					}
					if(callback != null)
						callback(null, vet.summary())
				})	
			})
	    	.catch(function(err){
	    		console.log('ERROR: '+err)
	    	})

	},

	put: function(id, params, callback){
		console.log('PUT RESPONSE PARAMS = '+JSON.stringify(params))
		var lat = params.geo[0]
		var lng = params.geo[1]
		
		var GOOGLE_API_KEY = 'AIzaSyBJC_SGcJWr83yZwNSMHzgtft75blNfLcI'
		var GOOGLE_API_URL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='+lat+","+lng+"&radius=1000&types=veterinary_care&key="+GOOGLE_API_KEY

		console.log('GOOGLE URL = '+JSON.stringify(GOOGLE_API_URL))

		Request.get(GOOGLE_API_URL)
            .then(function(response){

            	if (response.status == "ZERO_RESULTS"){
            		params['searchStatus'] = response.status
            	}

            	if (response.status == "OK"){
            		params['searchStatus'] = response.status
            	}

		    	var vetResults = []
		    	vetResults = response.results
		    	params['vetResults'] = vetResults

		    	for (var i=0; i<vetResults.length; i++){
		    		result = vetResults[i]
		    		result['slug'] = result.place_id
		    	}
		  
		    	Vet.findByIdAndUpdate(id, params, {new: true}, function(err, vet){

					if(err){
						if (callback != null)
							callback(err, null)
						return
					}

					if (vet == null){
						callback(err, null)
						return
					}

					if (callback != null)
						callback(null, vet.summary())
					return
				})
		    })

		    .catch(function(err){
	    		console.log('ERROR: '+err)
	    	})
	}
}