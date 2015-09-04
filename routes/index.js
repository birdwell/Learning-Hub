var express = require('express');
var https = require('https');
var router = express.Router();
var Q = require('q');
var passport = require('passport');
var data = require('../public/javascript/courses.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {user: req.user});
});

router.get('/courses', function(req, res, next) {
    res.render('courses', data);
});

module.exports = router;
