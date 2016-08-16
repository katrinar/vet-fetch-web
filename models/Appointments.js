var mongoose = require('mongoose')

var AppointmentSchema = new mongoose.Schema({
	slug: {type: String, trim: true, default:''},
	ownerId:{type: String, default: ''},
	petId:{type: String, default: ''},
	petName:{type: String, lowercase: true, trim: true, default: ''},
	location:{type:String, lowercase: true, trim: true, default: ''},
	date:{type:String, default: Date},
	time:{type:String, lowercase: true, trim: true, default: ''},
	result:{type:String, lowercase: true, trim: true, default: ''},
	bill:{type: Array, default: []},
	timestamp:{type: String, default: Date.now}
})

AppointmentSchema.methods.summary = function(){
	var summary = {
		slug: this.slug,
		id: this._id,
		ownerId: this.ownerId,
		petId: this.petId,
		petName: this.pet,
		location: this.location,
		date: this.date,
		time: this.time,
		result: this.result,
		bill: this.bill
	}

	return summary
}

module.exports = mongoose.model('AppointmentSchema', AppointmentSchema)