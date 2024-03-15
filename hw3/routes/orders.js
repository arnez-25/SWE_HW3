//Jacob Arnez



var express = require('express');
var router = express.Router();
var dbms  = require('./dbms');

cheesecakes = [{"topping":"plain", "quantity":2},
{"topping":"cherry", "quantity":1},
 {"topping":"chocolate", "quantity":4}];

/* GET orders listing. */
router.get('/', function(req, res, next) {
  res.json(cheesecakes);
});

/* POST orders when a post request is sent on the client side it sends the json object */
router.post('/', function(req, res) {
  console.log(req);//look for body month keyword
  //res.send(cheesecakes);
  dbms.dbquery("select * from ORDERS where MONTH='FEB' and TOPPING='Plain';", function(err, results){
    console.log("Got a response from db");
    console.log(results);





    res.send(cheesecakes);


  } )
});



module.exports = router;
