var Pet = require('../models/Pet')

module.exports = {

	get: function(params, isRaw, callback){

		if (params.id != null){

			Pet.findById(params.id, function(err, pet){
				if (err){
					if (callback != null)
						callback(err, null)
					return
				}

				if (pet == null){
					callback(err, null)
					return
				}

				if(callback != null){
					if(isRaw == true){
						callback(null, pet)
						return
					}
					callback(null, pet.summary())
				}
			})
			return
		}

		Pet.find(params, function(err, pets){
			if(err){
				if (callback != null)
					callback(err, null)
				return
			}
			if (callback != null){
				if (isRaw == true){
					callback(null, pets)
					return
				}

				var summaries = []
				for (var i=0; i<pets.length; i++){
					var pet = pets[i]
					summaries.push(pet.summary())
				}
				callback(null, summaries)
			}
				
		})
	},

	getById: function(id, isRaw, callback){
		Pet.findById(id, function(err, pet){
			if(err){
				if(callback != null)
					callback({message: 'Pet Not Found'}, null)
				return
			}

			if(callback != null){
				if (isRaw == true){
					callback(null, pet)
					return
				}
				callback(null, pet.summary())
			}
		})
	},

	post: function(params, callback){
		if (params['name'] != null){
			var name = params['name'].split(' ')
			var parts = name
			var slug = ''
			for (var i=0; i<parts.length; i++){
				var word = parts[i]
				slug += word
				if (i != parts.length-1)
					slug += '-'
			}

			slug = slug.replace('?', '')
			params['slug'] = slug
		}

		if(params['ownerId[]'] != null)
			params['ownerId'] = params['ownerId[]']

		var imageInfo = {}
		var processImage = false
		if(params['image[thumb]'] != null){
			processImage = true
			imageInfo['thumb'] = params['image[thumb]']
		}

    	if(params['image[original]'] != null){
    		processImage = true
    		imageInfo['original'] = params['image[original]']
    	}

    	if(processImage == true)
    	params['image'] = imageInfo		

		Pet.create(params, function(err, pet){
			if(err){
				if (callback != null)
					callback(err, null)
				return
			}
			if(callback != null)
				callback(null, pet.summary())
		})
	},

	put: function(id, params, callback){

		//handle params for react
		if (params.name != null){
				var name = params['name'].split(' ')
				var parts = name
				var slug = ''
				for (var i=0; i<parts.length; i++){
					var word = parts[i]
					slug += word
					if (i != parts.length-1)
						slug += '-'
				}

				slug = slug.replace('?', '')
				params['slug'] = slug
		}
		
		if(params.image['original'] != null){
			var originalUrl = params.image['original']
			params.image['thumb'] = originalUrl.replace("upload/", "upload/w_300,h_300/")
    	}

    	//handle params for iOS
		if(params['ownerId[]'] != null)
			params['ownerId'] = params['ownerId[]']
		
		var imageInfo = {}
		var processImage = false
		if(params['image[thumb]'] != null){
			processImage = true
			imageInfo['thumb'] = params['image[thumb]']
		}

    	if(params['image[original]'] != null){
    		processImage = true
    		imageInfo['original'] = params['image[original]']
    	}

    	if(processImage == true)
    	params['image'] = imageInfo


		Pet.findByIdAndUpdate(id, params, {new: true}, function(err, pet){
			if(err){
				if (callback != null)
					callback(err, null)
				return
			}

			if (pet == null){
				callback(err, null)
				return
			}

			if (callback != null)
				callback(null, pet.summary())
			return
		})
	}
}