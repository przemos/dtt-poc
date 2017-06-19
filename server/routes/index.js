"use strict";

let config = require("../config");
let logger = require("../core/logger");
let path = require("path");

module.exports = function (app, db) {

	// Index page
	app.get("/", function (req, res) {
		res.render("index");
	});

	app.get("/questions", function(req, res) {

		res.json(require("../stubs/question"));
	});


	// Handle Auth routes
	//require("./auth")(app, db);

	//require("./account")(app)

	// Handle errors
	require("./errors")(app);
};
