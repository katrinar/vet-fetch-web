var Pet = require('../models/Pet')
var cloudinary = require('cloudinary')


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
		console.log('POST params = '+JSON.stringify(params))
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

		// if(params['preview'] != null){
		// 	var imgPreview = params['preview']
		// 	// var imgPreview = params.imagePreview
		// 	console.log('POST params[preview] = '+JSON.stringify(imgPreview))

		// 	cloudinary.config({
		// 	  cloud_name: 'mtech',
		// 	  api_key: '289663892411772',
		// 	  api_secret: 'wqCHR14jkti89DZSy0cXRnDlKkg'
		// 	})

		// 	cloudinary.uploader.upload(imgPreview, function(result) { 
  // 			console.log('CLOUDINARY uploader result = '+JSON.stringify(result)) 
  // 			})
		// }

		if(params['imagePreview'] != null){
			var imgPreview = params['imagePreview']
			// var imgPreview = params.imagePreview
			

			cloudinary.config({
			  cloud_name: 'mtech',
			  api_key: '289663892411772',
			  api_secret: 'wqCHR14jkti89DZSy0cXRnDlKkg'
			})

			cloudinary.uploader.upload(imgPreview, function(result) { 
			console.log('POST params[imagePreview] = '+JSON.stringify(imgPreview))
  			console.log('CLOUDINARY uploader result = '+JSON.stringify(result)) 
  			})
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