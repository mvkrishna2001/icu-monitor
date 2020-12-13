var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const request = require('request');
const { json } = require('express');
const APIURL = 'http://localhost:3001/process';

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


/* Process POST Form */
var urlencodedParser = bodyParser.urlencoded({ extended: false });  


router.get('/process',function(req,res,next){
  request(APIURL  ,

       function (error, response, body) {

           if (!error && response.statusCode == 200) {
               res.send(body);

           } else {

               console.log(response.statusCode + response.body);

               res.send({info: NULL});

           }

       })});


module.exports = router;
