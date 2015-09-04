var express = require('express');
var https = require('https');
var router = express.Router();
var passport = require('passport');
var data = require('../public/javascript/courses.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {user: req.user});
});

router.get('/courses', function(req, res, next) {
    if(req.user){
        data.user = req.user;
        console.log(data);
    }

    res.render('courses', data);
});

module.exports = router;
