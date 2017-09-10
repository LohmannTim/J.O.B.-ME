var express = require('express');
var router = express.Router();
var pool = require('../modules/pool.js');
var path = require('path');


router.use('/',  function(req, res){
    res.sendFile(path.resolve('./server/public/index.html'))//sending index.html
});

module.exports = router;