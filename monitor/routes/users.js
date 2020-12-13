var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser'); 
var urlencodedParser = bodyParser.urlencoded({ extended: false }); 
const { response } = require('../app');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


/* Process POST Form */

router.post('/process', urlencodedParser, function (req, res) {  
   var bpm = req.body.bpm;
   var bps = req.body.bps;   
   var bpd = req.body.bpd;
   var result;
   var name = req.body.name;
  if(bpm >= 60 && bpm <= 100 && bps >= 90 && bps <= 140 && bpd >= 60 && bpd <= 90)
    result = 'normal';
  else  
    result = 'not normal';

   res.render('response',  {name : name, message: result});
  
});



/*
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
*/
/*
router.post('/process', urlencodedParser, function (req, res) {  
  var collection = db.get('info');
  var name= req.body.name; 
  var email= req.body.email;
  var id = req.body.id;
  var result;
  
  
 if(db.collection.find({name}: 0, {email}: email, {id}: id)){
 	res.send('User found');
 	router.post('/login', urlencodedpParser);

 }
 else{
 collection.insert({
 "name": name,
 "email": email,
 "id": id;
 });
 
   res.send('You are succesfully logged in');
  
});  
*/



module.exports = router;
