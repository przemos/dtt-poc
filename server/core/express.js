"use strict";

let logger = require("./logger");
let config = require("../config");

let express = require("express");
let http = require("http");
let path = require("path");

let moment = require("moment");
let flash = require("express-flash");
let favicon = require("serve-favicon");
let morgan = require("morgan");
let bodyParser = require("body-parser");
let cookieParser = require("cookie-parser");
let validator = require("express-validator");
let nunjucks = require('nunjucks');
let csrf = require("csurf");

let session = require("express-session");
let compress = require("compression");
let methodOverride = require("method-override");
let helmet = require("helmet");
let crossdomain = require("helmet-crossdomain");
let cookieSession = require("cookie-session");

let serverFolder = path.normalize(path.join(config.rootPath, "server"));

/**
	* Initialize local variables
	*
	* @param {any} app
	*/
function initLocalVariables(app) {
	// Setting application local variables
	app.locals.app = config.app;

	// Passing the request url to environment locals
	app.use(function (req, res, next) {
		res.locals.url = req.protocol + "://" + req.headers.host + req.url;
		return next();
	});

	app.locals.year = moment().format("YYYY");
	app.locals.features = config.features;
}

/**
	* Initialize middlewares
	*
	* @param {any} app
	*/
function initMiddleware(app) {
	// Should be placed before express.static
	app.use(compress({
		filter: function (req, res) {
			return /json|text|javascript|css/.test(res.getHeader("Content-Type"));
		},
		level: 3,
		threshold: 512
	}));

	// Configure express app
	app.set("port", config.port);

	// Request body parsing middleware should be above methodOverride
	app.use(bodyParser.urlencoded({
		extended: true,
		limit: config.contentMaxLength * 2
	}));
	app.use(validator());
	app.use(bodyParser.json());
	app.use(methodOverride());

	if (!config.isDevMode()) {


		// Setting up static folder
		app.use(express["static"](path.join(serverFolder, "public")));

	}
	// Favicon
	app.use(favicon(path.join(serverFolder, "public", "favicon.ico")));

	// Cookie parser should be above session
	app.use(cookieParser());

	app.set("etag", true); // other values 'weak', 'strong'

	app.use(flash());

	if (config.isDevMode()) {
		// Init morgan
		let stream = require("stream");
		let lmStream = new stream.Stream();

		lmStream.writable = true;
		lmStream.write = function (data) {
			return logger.debug(data);
		};

		app.use(morgan("dev", {
			stream: lmStream
		}));

	}
}

/**
	* Initialize view engine (pug)
	*
	* @param {any} app
	*/
function initViewEngine(app) {
	// Set view folder


	nunjucks.configure(path.join(serverFolder, 'views'), {
		autoescape: true,
		cache: false,
		express: app
	});
	app.set('view engine', 'njk');


	// Environment dependent middleware
	if (config.isDevMode()) {
		app.set("showStackError", true);

		// Disable views cache
		app.set("view cache", false);
		app.use(helmet.noCache());

		// Jade options: Don't minify html, debug intrumentation
		app.locals.pretty = true;
		//app.locals.compileDebug = true;

	} else {
		app.locals.cache = "memory";
		app.set("view cache", true);
	}
}

/**
	* Initialize session handler
	*
	* @param {any} app
	*/
function initSession(app) {
	app.use(cookieSession({
		name: 'session',
		keys: [
			'key1'
		],
		// Cookie Options
		maxAge: 24 * 60 * 60 * 1000 // 24 hours
	}));
}

/**
	* Initiliaze Helmet security module
	*
	* @param {any} app
	*/
function initHelmetHeaders(app) {
	// Use helmet to secure Express headers
	app.use(helmet.xssFilter());
	app.use(helmet.noSniff());
	app.use(helmet.frameguard());
	app.use(helmet.ieNoOpen());
	app.use(crossdomain());
	app.use(helmet.hidePoweredBy());
}

/**
	* Initialize authentication & CSRF
	*
	* @param {any} app
	*/
function initAuth(app) {
	// Init auth
	require("./auth/passport")(app);
}

/**
	* Initialize Webpack hot reload module.
	*  Note: Only in development mode
	*
	* @param {any} app
	*/
function initWebpack(app) {
	// Webpack middleware in development mode
	if (!config.isProductionMode()) {
		let webpack = require("webpack");
		let wpConfig = require("../../build/webpack.dev.config");

		let compiler = webpack(wpConfig);
		let devMiddleware = require('webpack-dev-middleware'); // eslint-disable-line
		app.use(devMiddleware(compiler, {
			noInfo: true,
			publicPath: wpConfig.output.publicPath,
			headers: {"Access-Control-Allow-Origin": "*"},
			//stats: 'errors-only'
			stats: {colors: true}
		}));

		let hotMiddleware = require('webpack-hot-middleware'); // eslint-disable-line
		app.use(hotMiddleware(compiler, {
			log: logger.info
		}));
	}
}

module.exports = function () {

	// Create express app
	let app = express();

	// Init local variables
	initLocalVariables(app);

	// Init middlewares
	initMiddleware(app);

	// Init view engine
	initViewEngine(app);

	// Init Helmet security headers
	initHelmetHeaders(app);

	// Init session handler
	initSession(app);

	// Init auth and CSRF module
	initAuth(app);

	// Init webpack devserver & hot reload module
	initWebpack(app);
	// Load routes
	require("../routes")(app);

	return app;
};
