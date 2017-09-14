var express = require('express');
var router = express.Router();
var pool = require('../modules/pool.js');

router.get('/', function(req, res) {
    pool.connect(function (err, db, done) {
        if (err) {
            console.log('Error connecting to database', err);
            res.sendStatus(500);
        } else {

            db.query('SELECT * FROM tipsntricks',
                function (errorMakingQuery, result) {
                    done();
                    if (errorMakingQuery) {
                        console.log('Error making database query', errorMakingQuery);
                        res.sendStatus(500);   
                    } else {
                        res.send(result.rows);
                    }
                });
        }
    })
});

module.exports = router;