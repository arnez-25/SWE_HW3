//Jacob Arnez

var express = require('express');
var router = express.Router();

/* GET orders listing. */
router.get('/', function(req, res, next) {
  res.json({"name":"John", "age":30, "car":null})
});

module.exports = router;
