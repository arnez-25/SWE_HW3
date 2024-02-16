//Jacob Arnez

var express = require('express');
var router = express.Router();

cheesecake = [{"topping":"plain", "quantity":2},
{"topping":"cherry", "quantity":1},
 {"topping":"chocolate", "quantity":4}];

/* GET orders listing. */
router.get('/', function(req, res, next) {
  res.json(cheesecake);
});

module.exports = router;
