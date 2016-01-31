var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
	name: String,
	surname: String,
	password: String,
	email: String,
	country: String
});

module.exports = mongoose.model('User', UserSchema);