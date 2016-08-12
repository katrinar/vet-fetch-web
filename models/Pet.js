var mongoose = require('mongoose')

var PetSchema = new mongoose.Schema({
	slug: {type: String, trim: true, default:''},
	ownerId:{type:String, default: ''},
	name:{type:String, default: ''},
	birthday:{type:String, lowercase: true, default: ''},
	species:{type:String, trim:true, lowercase: true, default: ''},
	breed:{type:String, trim:true, lowercase: true, default: ''},
	sex:{type:String, trim:true, lowercase: true, default: ''},
	allergies:{type: Array, default: []},
	medications:{type:Array, default: []},
	allergiesString:{type:String, trim:true, lowercase: true, default: ''},
	medicationsString:{type:String, trim:true, lowercase: true, default: ''},
	timestamp:{type: String, default: Date.now}
})

PetSchema.methods.summary = function(){
	var summary = {
		slug: this.slug,
		id: this._id,
		ownerId: this.ownerId,
		name: this.name,
		birthday: this.birthday, 
		sex: this.sex,
		species: this.species,
		breed: this.breed,
		allergies: this.allergies,
		medications: this.medications,
		allergiesString: this.allergiesString,
		medicationsString: this.medicationsString
	}

	return summary
}

module.exports = mongoose.model('PetSchema', PetSchema)