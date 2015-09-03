// Casper's File!!!!!!!!!!!
var https = require('https');
var Q = require('q');

/**
 * wrapper for http request object
 * @param  {Object} requestOptions
 * @return Promise Object
 */
exports.promisedRequest = function(requestOptions) {
	//create a deferred object from Q
	var deferred  = Q.defer();

	var req = https.request(requestOptions, function(response) {
		// https.get(options,function (res) {
		//     res.on('data', function(chunk) {
		// 		chunks.push(chunk);
		// 	});
		// 	res.on('end', function(chunk) {
		// 		var result = Buffer.concat(chunks);
		//         JSON.parse(result);
		// 	});
		//     res.on('error', function (e) {
		//         console.error(e);
		//     });
		// });
	  response.setEncoding('utf8');
	  var responseData = '';

	  response.on('data', function(data) {
		responseData += data;
	  });

	  response.on('end', function() {
		deferred.resolve(responseData);
	  });

	});

	req.on('error', function(err) {
	  deferred.reject(err);
	});

	req.end();
	return deferred.promise;
};

// var courses,
// options = {
// 	host: 'api.coursera.org',
// 	path: '/api/catalog.v1/sessions?startMonth:9',
// 	method: 'GET'
// };
//
// this.promisedRequest(options)
// 	.then(function(data) {
// 		courses = JSON.stringify(data);
// 		console.log(courses);
//
// 	}, function(error) {
// 		console.log(error);
// });
