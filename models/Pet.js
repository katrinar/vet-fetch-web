var mongoose = require('mongoose')

var PetSchema = new mongoose.Schema({
	name:{type:String, default: ''},
	age:{type:String, default: ''},
	birthday:{type:String, lowercase: true, default: ''},
	breed:{type:String, lowercase: true, default: ''},
	sex:{type:String, lowercase: true, default: ''},
	neutered:{type:String, lowercase: true, default: ''},
	spayed:{type:String, lowercase: true, default: ''},
	allergies:{type:String, lowercase: true, default: ''},
	medications:{type:String, lowercase: true, default: ''},
	timestamp:{type: String, default: Date.now}
})

module.exports = mongoose.model('PetSchema', PetSchema)