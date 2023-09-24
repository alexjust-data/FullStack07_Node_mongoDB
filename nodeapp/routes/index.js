var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
  // le puse esto
  // app.locals.title = "NodeApp - mi aplicación"
});

module.exports = router;
