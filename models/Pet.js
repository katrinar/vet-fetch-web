var mongoose = require('mongoose')

var PetSchema = new mongoose.Schema({
	slug: {type: String, trim: true, default:''},
	ownerId:{type:String, default: ''},
	name:{type:String, default: ''},
	birthday:{type:String, lowercase: true, default: ''},
	breed:{type:String, trim:true, lowercase: true, default: ''},
	sex:{type:String, trim:true, lowercase: true, default: ''},
	allergies:{type: Array, default: []},
	medications:{type:Array, default: []},
	timestamp:{type: String, default: Date.now}
})

PetSchema.methods.summary = function(){
	var summary = {
		slug: this.slug,
		ownerId: this.ownerId,
		name: this.name,
		breed: this.breed,
		sex: this.sex,
		id: this._id
	}

	return summary
}

module.exports = mongoose.model('PetSchema', PetSchema)