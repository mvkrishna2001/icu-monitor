var express = require('express');
var router = express.Router();
var APIURL = 'http://localhost:3001/form';
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ICU Monitor' });
});


router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/form', function(req, res, next) {
  res.render('form');
});



module.exports = router;
