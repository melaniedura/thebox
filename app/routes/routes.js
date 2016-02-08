var Country = require('./../models/country');
var CountryCtrl = require('./../controllers/country');

module.exports = function (app) {
	app.route('/api/country')
		.get(function (req, res, next) {
			CountryCtrl.getCountries(function (result) {
				res.status(result.code).send(result);
			});
		})
		.post(function (req, res, next) {
            CountryCtrl.createCountry(function (result) {
                if (result) {
                    res.status(result.code).send(result);  
                } else {
                    res.status(result.code).send(result);
                }
            });
        });
};
