"use strict";

let config  = require("../config");
let logger  = require("../core/logger");

let response  = require("../core/response");

module.exports = function(app) {

	app.use(function(err, req, res, next) {

		if (!err) {
			return next();
		}

		logger.error(err.stack);
		res.status(err.status || 500);

		// Respond with html page
		if (req.accepts("html")) {
			return res.render("500", {
				url: req.originalUrl,
				error: err
			});
		}

		// Respond with json
		if (req.accepts("json")) {
			return response.json(res, null, response.SERVER_ERROR, err.message);
		}
	});

	app.use(function(req, res) {

		return res.redirect("/");

		// res.status(404);
        //
		// // Respond with html page
		// if (req.accepts("html")) {
		// 	let err = new Error("404 Page Not Found");
		// 	err.status = 404;
		// 	return res.render("404", {
		// 		url: req.originalUrl,
		// 		error: err
		// 	});
		// }
        //
		// // Respond with json
		// if (req.accepts("json")) {
		// 	return response.json(res, null, response.NOT_FOUND);
		// }
	});

};
