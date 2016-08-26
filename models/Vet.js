var mongoose = require('mongoose')

var VetSchema = new mongoose.Schema({
	slug: {type: String, trim: true, default:''},
	vetName: {type: String, trim: true, default:''},	
	address:{type:String, lowercase: true, trim: true, default: ''},
	city:{type:String, lowercase: true, trim: true, default: ''},
	state:{type:String, lowercase: true, trim: true, default: ''},
	zipcode:{type:String, lowercase: true, trim: true, default: ''},
	geo: {type:Array, default:[]},
	timestamp:{type: String, default: Date.now}
})

VetSchema.methods.summary = function(){
	var summary = {
		slug: this.slug,
		id: this._id,
		vetName: this.vetName,
		geo: this.geo,
		address: this.address,
		city: this.city,
		state: this.state,
		zipcode: this.zipcode
	}

	return summary
}

module.exports = mongoose.model('VetSchema', VetSchema)