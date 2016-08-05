var request = require('request');
var utils = require('./utils.js');
var pug = require('pug');
var log = utils.richLogging;
var tmrFormatter = require('./tmr.js');
var intermediateFormatter = require('./intermediate.js').format;
var lastResults = null;
var tmrData = [];

module.exports = {
	index: function(req, res) {
		// Homepage
		log.info("Serving INDEX");
		res.render("index", {
			debugging: false
		});
	},
	tmr: function(req, res) {
		// Multiple TMR viewer
		log.info("Received SENTENCE");

		// read the TMR data from the request body or the input file
		var inputData = req.body.inputData;
		if (inputData == "")
			inputData = utils.readInputFile();

		// parse and format the TMR data
		var formattedData = intermediateFormatter(inputData);
		var results = tmrFormatter.formatTMRList(formattedData);

		// render the multiTMR file normally
		res.render("multitmr", {
			pageTitle: 'page-tmr',
			debugging: false,
			via: 'index',
			results: results,
			clientscripts: ['client.js']
		});
	},
	subtmr: function(req, res) {
		// read the TMR data from the oldest TMR that has been sent from the analyzer
		var inputData = tmrData.shift();

		// parse and format the TMR data
		var formattedData = intermediateFormatter(inputData);
		var results = tmrFormatter.formatTMRList(formattedData);

		// this request is being made by the listener page so render just one tmr file
		var tmrHTML = pug.renderFile('views/tmr.pug', {result: results[0]});
		res.send({
			tmrHTML: tmrHTML
		});
	},
	intermediate: function(req, res) {
		// intermediate results viewer
		log.info("Serving INTERMEDIATE");

		var raw = utils.readInputFile();
		if (req.body.inputData.length > 0)
			raw = req.body.inputData.replace(/\\n/g, '');
		var results = intermediateFormatter(raw);

		res.render("intermediate", {
			pageTitle: 'page-intermediate',
			parseResults: results,
			data: JSON.stringify(results),
			clientscripts: ['intermediateclient.js', 'client.js', 'prism.js'],
			clientStyles: ['prism.css']
		});
	},
	listen: function(req, res) {
		log.info("Serving listener page");
		var hostURL = req.headers.host;

		res.render("multitmr", {
			pageTitle: 'page-tmr',
			via: 'listener',
			data: hostURL,
			clientscripts: ['waiting.js', 'client.js']
		});
	},
	getResults: function(req, res) {
		if (tmrData.length > 0)
			res.send('TMR');
		else
			res.send('none');
	},
	tmrData: function(req, res) {
		log.info("Receiving results from analyzer");
		tmrData.push(req.body.inputData);
		res.send('Successfully received data:\n\t'+req.body.inputData);
	}
};
