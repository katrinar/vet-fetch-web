var mongoose = require('mongoose')

var ProfileSchema = new mongoose.Schema({
	firstName:{type:String, lowercase: true, trim: true, default: ''},
	lastName:{type:String, lowercase: true, trim: true, default: ''},
	email:{type:String, lowercase: true, trim: true, default: ''},
	password:{type: String, default: ''},
	pets:{type: Array, default: []},
	timestamp:{type: String, default: Date.now}
})

ProfileSchema.methods.summary = function(){
	var summary = {
		firstName: this.firstName,
		lastName: this.lastName,
		email: this.email, 
		timestamp: this.timestamp,
		id: this._id
	}

	return summary
}

module.exports = mongoose.model('ProfileSchema', ProfileSchema)