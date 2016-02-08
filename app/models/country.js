var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CountrySchema = new Schema({
	name: String,
	code: String
});

module.exports = mongoose.model('Country', CountrySchema);