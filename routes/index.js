var express = require('express');
var router = express.Router();
const array = ['item1', 'item2', 'item3'];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', items: array });
});

module.exports = router;
