var Pet = require('../models/Pet')

module.exports = {

	get: function(params, isRaw, callback){
		Pet.find(params, function(err, pets){
			if(err){
				if (callback != null)
					callback(err, null)
				return
			}
			if (callback != null)
				callback(null, pets)
		})
	},

	getById: function(id, isRaw, callback){
		Pet.findById(id, function(err, pet){
			if(err){
				if(callback != null)
					callback({message: 'Pet Not Found'}, null)
				return
			}

			if(callback != null)
				callback(null, pet)
		})
	},

	post: function(params, callback){
		Pet.create(params, function(err, pet){
			if(err){
				if (callback != null)
					callback(err, null)
				return
			}
			if(callback != null)
				callback(null, pet)
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
				callback(null, pet)
		})
	}
}