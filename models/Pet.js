var mongoose = require('mongoose')

var PetSchema = new mongoose.Schema({
	name:{type:String, default: ''},
	slug: {type: String, trim: true, default:''},
	age:{type:String, default: ''},
	birthday:{type:String, lowercase: true, default: ''},
	breed:{type:String, trim:true, lowercase: true, default: ''},
	sex:{type:String, trim:true, lowercase: true, default: ''},
	neutered:{type:String, trim:true, lowercase: true, default: ''},
	spayed:{type:String, trim:true, lowercase: true, default: ''},
	allergies:{type: Array, default: []},
	medications:{type:Array, default: []},
	timestamp:{type: String, default: Date.now}
})

module.exports = mongoose.model('PetSchema', PetSchema)