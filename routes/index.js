var express = require('express');
var https = require('https');
var router = express.Router();
var passport = require('passport');
var data = require('../public/resources/courses.json');
var hubs = require('../public/resources/hubs.json');

/* GET home page. */
router.get('/', function(req, res, next) {
    if(req.user){
        hubs.user = req.user;
    }

  res.render('index', hubs);
});

router.get('/courses', function(req, res, next) {
    if(req.user){
        data.user = req.user;
    }

    res.render('courses', data);
});

module.exports = router;
