var Country = require('./../models/country');
var CountryCtrl = require('./../controllers/country');
var User = require('./../models/user');
var UserCtrl = require('./../controllers/user');

module.exports = function (app) {
    app.route('/api/user')
        .post(function (req, res, next) {
            UserCtrl.createUser(req.body, function (result) {
                console.log("ye");
                if (result) {
                    res.status(result.code).send(result);
                } else {
                    res.status(result.code).send(result);
                }
            });
        });

    app.route('/api/country')
		.get(function (req, res, next) {
			CountryCtrl.getCountries(function (result) {
				res.status(result.code).send(result);
			});
		})
		.post(function (req, res, next) {
            CountryCtrl.createCountry(req.body, function (result) {
                if (result) {
                    res.status(result.code).send(result);  
                } else {
                    res.status(result.code).send(result);
                }
            });
        });
};
