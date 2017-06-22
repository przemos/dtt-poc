"use strict";

global.WEBPACK_BUNDLE = false;

let config		= require("./config");
let logger 		= require("./core/logger");
let moment 		= require("moment");
let chalk 		= require("chalk");
const SocketServer = require('ws').Server;

logger.info();
logger.info(chalk.bold("---------------------[ Server starting at %s ]---------------------------"), moment().format("YYYY-MM-DD HH:mm:ss.SSS"));
logger.info();

logger.info(chalk.bold("Application root path: ") + global.rootPath);

let init		= require("./core/init");
let app 		= require("./core/express")();

let server = app.listen(config.port, config.ip, function() {

	logger.info("");
	logger.info(config.app.title + " v" + config.app.version + " application started!");
	logger.info("----------------------------------------------");
	logger.info("Environment:\t" + chalk.underline.bold(process.env.NODE_ENV));
	logger.info("IP:\t\t" + config.ip);
	logger.info("Port:\t\t" + config.port);
	logger.info("Database:\t\t" + config.db.uri);
	logger.info("");

	require("./libs/sysinfo")();

	logger.info("----------------------------------------------");
});

let initializeBRF = require("../BRFv4_JS_trial.js").initializeBRF;

console.log(initializeBRF);
var brfv4 = {locateFile: function() { return "BRFv4_JS_trial.js.mem" }};
initializeBRF(brfv4);
let resolution	= new brfv4.Rectangle(0, 0, 300, 255);
let brfManager	= new brfv4.BRFManager();
brfManager.init(resolution, resolution, "com.tastenkunst.brfv4.js.examples.minimal.webcam");



	const wss = new SocketServer({ server });
wss.on('connection', (ws) => {
	console.log('Client connected');
	ws.on('close', () => console.log('Client disconnected'));

	ws.on('message', (message) => {

		brfManager.update(message);
		var faces = brfManager.getFaces();
		console.log(faces[0].state);
	});
});


setInterval(() => {
	wss.clients.forEach((client) => {
	});
}, 1000);

exports = module.exports = app;
