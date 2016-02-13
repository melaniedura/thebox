var mongoose = require('mongoose');
var Country = mongoose.model('Country');
var ResponseHandler = require('./../helpers/responseHandler');

exports.getCountries = function (callback) {
	Country.find(function (err,res) {
		var result = undefined;

		if (err) {
			result = ResponseHandler.error('get', 'countries');
			result.data = {};
		} else {
			result = ResponseHandler.success('get', 'countries'),
			result.data = res;
		}
		callback(result);
	});
};

exports.createCountry = function (params, callback) {
	var country = new Country();
	country.name = params.name;
	country.code = params.code;

	country.save(function (err, res) {
		var result = undefined;

		if (err) {
			result = ResponseHandler.error('post', 'country');
			result.data = {};
		} else {
			result = ResponseHandler.success('post', 'country');
			result.data = res;
		}
		callback(result);
	});

};