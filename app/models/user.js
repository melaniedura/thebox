var mongoose = require('mongoose');

var Country = require('./country');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
	name: String,
	surname: String,
	password: String,
	email: String,
	country: {type: Schema.ObjectId, ref: 'Country'}
});

module.exports = mongoose.model('User', UserSchema);