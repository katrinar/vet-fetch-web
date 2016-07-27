var Pet = require('../models/Pet')

module.exports = {

	get: function(params, isRaw, callback){

		if (params.id != null){
			Pet.findById(params.id, function(err, pet){
				if (err){
					callback(err, null)
					return
				}

				if (pet == null){
					callback(err, null)
				}

				callback(null, pet.summary())
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
		Pet.findById({id:id}, function(err, pet){
			if(err){
				if(callback != null)
					callback({message: 'Pet Not Found'}, null)
				return
			}

			if(callback != null)
				callback(null, pet.summary())
		})
	},

	post: function(params, callback){

		var parts = params.name.split(' ')
		var slug = ''
		for (var i=0; i<parts.length; i++){
			var word = parts[i]
			if (i != parts.length-1)
				slug += '-'
		}

		slug = slug.replace('?', '')
		params['slug'] = slug

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
		Pet.findByIdAndUpdate(id, params, {new: true}, function(err, result){
			if(err){
				if (callback != null)
					callback(err, null)
				return
			}

			if (callback != null)
				callback(null, pet.summary())
		})
	}
}