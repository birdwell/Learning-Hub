// Casper's File!!!!!!!!!!!
var https = require('https');

var options = {
	host: 'api.coursera.org',
	path: '/api/catalog.v1/courses',
};

exports.getCourses = https.get(options, function(res) {
	chunks = [];
	res.on('data', function(chunk) {
		chunks.push(chunk);
	})
	res.on('end', function(chunk) {
		var result = Buffer.concat(chunks);
		return JSON.parse(result);
	})
	res.on('error', function(err) {
		return 'error: ' + err.message;
	})
});
