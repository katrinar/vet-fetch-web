var Appointments = require('../models/Appointments')

module.exports = {

	get: function(params, isRaw, callback){

		if (params.id != null){

			Appointments.findById(params.id, function(err, appointment){
				if (err){
					if (callback != null)
						callback(err, null)
					return
				}

				if (appointment == null){
					callback(err, null)
					return
				}

				if(callback != null){
					if(isRaw == true){
						callback(null, appointment)
						return
					}
					callback(null, appointment.summary())
				}
			})
			return
		}

		Appointments.find(params, function(err, appointments){
			if(err){
				if (callback != null)
					callback(err, null)
				return
			}
			if (callback != null){
				if (isRaw == true){
					callback(null, appointments)
					return
				}

				var summaries = []
				for (var i=0; i<appointments.length; i++){
					var appointment = appointments[i]
					summaries.push(appointment.summary())
				}
				callback(null, summaries)
			}
				
		})
	},

	getById: function(id, isRaw, callback){
		Appointments.findById(id, function(err, appointment){
			if(err){
				if(callback != null)
					callback({message: 'Appointment Not Found'}, null)
				return
			}

			if(callback != null){
				if (isRaw == true){
					callback(null, appointment)
					return
				}
				callback(null, appointment.summary())
			}
		})
	},

	post: function(params, callback){

		var name = params['petName'].split(' ')
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

		Appointments.create(params, function(err, appointment){
			if(err){
				if (callback != null)
					callback(err, null)
				return
			}
			if(callback != null)
				callback(null, appointment.summary())
		})
	},

	put: function(id, params, callback){

		Appointments.findByIdAndUpdate(id, params, {new: true}, function(err, appointment){
			if(err){
				if (callback != null)
					callback(err, null)
				return
			}

			if (appointment == null){
				callback(err, null)
				return
			}

			if (callback != null)
				callback(null, appointment.summary())
			return
		})
	}
}