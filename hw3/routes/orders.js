//Jacob Arnez

var express = require('express');
var router = express.Router();

/* GET orders listing. */
router.get('/', function(req, res, next) {
  res.json([{"topping":"plain", "quantity":2},
   {"topping":"cherry", "quantity":1},
    {"topping":"chocolate", "quantity":4}])
});

module.exports = router;
