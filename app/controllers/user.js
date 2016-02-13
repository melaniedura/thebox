var mongoose = require('mongoose');
var User = mongoose.model('User');

var ResponseHandler = require('./../helpers/responseHandler');

exports.createUser = function (params, callback) {
	var user = new User();
	user.name = params.name;
	user.surname = params.surname;
	user.password = params.password;
	user.email = params.email;
	user.country = params.country;

	user.save(function (err, res) {
		var result = undefined;

		if (err) {
			result = ResponseHandler.error('post', 'user');
			result.data = {};
		} else {
			result = ResponseHandler.success('post', 'user');
			result.data = res;
		}
		callback(result);
	});
};