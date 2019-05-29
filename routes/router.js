var express = require('express');
var bodyParser = require('body-parser')
var router = express.Router();
var { index, users } = require('../controller/indexController.js');


console.log('accessing router.js')

router.get('/', index)
router.get('/users', users)

module.exports = router;