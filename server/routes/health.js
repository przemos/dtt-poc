"use strict";

let config 			= require("../config");
let logger 			= require("../core/logger");

module.exports = function(app) {

	app.get("/health", (req, res) => {
		res.sendStatus(200);
	});

};
