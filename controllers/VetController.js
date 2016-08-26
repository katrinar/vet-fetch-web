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

		if (params.zipcode != null){
			var url = 'https://maps.googleapis.com/maps/api/geocode/json?address='+params.zipcode
	    
	    	Request.get(url, {key:'AIzaSyA7ubOEswjvE09Hdpii4ZRi__SndjdE7ds'})
	    	.then(function(response){
	    	console.log('POST RESPONSE = '+JSON.stringify(response))

		    	var results = response.results
		    	var locationInfo = results[0]
		    	var geometry = locationInfo.geometry
		    	var location = geometry.location

		    	var lat = location.lat
		    	var lng = location.lng
		    	var geo = params['geo']
		    	geo['lat'] = lat
		    	geo['lng'] = lng
			})	
	 	}
	  
	    console.log('POST RESPONSE PARAMS[GEO] = '+JSON.stringify(params['geo']))
	    console.log('POST RESPONSE PARAMS.GEO = '+JSON.stringify(params.geo))
	    	

		Vet.create(params, function(err, vet){
			if(err){
				if (callback != null)
					callback(err, null)
				return
			}
			if(callback != null)
				callback(null, vet.summary())
		})	
	},

	put: function(id, params, callback){

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
	}
}