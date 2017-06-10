"use strict";

let logger 	= require("../core/logger");
let config	= require("../config");

// Print to console the full config in dev mode
if (!config.isProductionMode()) {
	logger.info("Loaded configuration:");
	logger.info(config);
	logger.info();
}
