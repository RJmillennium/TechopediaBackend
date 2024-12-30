var express = require('express');
// const user = require('../models/user');
var router = express.Router();

/* GET users listing. */
router.get('/user', (req, res, next)=> {
  res.render('list');
});

module.exports = router;
