var express = require('express');
var router = express.Router();

var data = require('../public/javascript/data.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Learning Hub' });	
});

router.get('/courses', function(req, res, next) {
	res.render('index', data.req);
});

module.exports = router;
