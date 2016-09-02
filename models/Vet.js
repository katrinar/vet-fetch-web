var mongoose = require('mongoose')

var VetSchema = new mongoose.Schema({
	zipcode:{type:String, lowercase: true, trim: true, default: ''},
	geo: {type:Array, default:[]},
	vetResults: {type:Array, default:[]},
	searchStatus: {type:String, default: ''},
	timestamp:{type: String, default: Date.now}
})

VetSchema.methods.summary = function(){
	var summary = {
		id: this._id,
		zipcode: this.zipcode,
		geo: this.geo,
		vetResults: this.vetResults,
		searchStatus: this.searchStatus
	}

	return summary
}

module.exports = mongoose.model('VetSchema', VetSchema)