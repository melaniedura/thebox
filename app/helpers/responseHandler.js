var responseHandler = function () {
	var result = {
		code: '',
		message: '',
		data: undefined
	}

	function error(action, model) {
		result.code = 500;
		result.message = action + ' ' + model + ' failed';

		return result;
	}

	function success(action, model) {
		result.code = 200;
		result.message = action + ' ' + model + ' success';

		return result;
	}

	return {
		error: error,
		success: success
	};
};

module.exports = responseHandler();