// clean this up by replacing += with join

var https = require('https');
var url = require('url');
var Q = require('q');

/*
 * Returns a promise that contains an api JSON value.
 *
 */

function getContent(site) {
	var def = Q.defer();
	var options = url.parse(site);
	var response = '';

	var req = https.request(options, function (res) {
		res.setEncoding('utf8');
		res.on('data', function (chunk) {
			response += chunk;
		});

		res.on('end', function () {
			var json = JSON.parse(response);
			def.resolve(json);
		});
	});

	req.end();
	return def.promise;
};

exports.getContent = getContent;
