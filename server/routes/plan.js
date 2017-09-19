var express = require('express');
var router = express.Router();
var pool = require('../modules/pool.js');

console.log('loading plan.routes');

router.get('/', function(req, res) {
    console.log('GET route hit');
    if(req.isAuthenticated()){
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
    } else{
        console.log('not logged in');
        res.send(false);
    }
});


//retrieving user answers
router.get('/qanda', function(req, res) {
	console.log('GET route hit');
    pool.connect(function (err, db, done) {
        if (err) {
            console.log('Error connecting to database', err);
            res.sendStatus(500);
        } else {
            db.query('SELECT * FROM qanda',//where user id = req.user.id
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
//post answers from prep1 to db
router.post('/qanda', function(req, res){
	console.log('message post was hit!:', req.body);
	//Add an INSERT query
	pool.connect(function(errorConnectingToDatabase, client, done){
		if(errorConnectingToDatabase) {
			// when connecting to database failed
			console.log('Error connecting to database', errorConnectingToDatabase);
			res.sendStatus(500);
		} else {
			// when connecting to database worked!
			// query like this: UPDATE messages SET message='Have a really terrific day!' WHERE id=1;
			client.query('INSERT INTO qanda (q1input, q2input,q3input,q4input,q5input) VALUES ($1, $2, $3, $4, $5);',
							[req.body.why, req.body.what, req.body.where, req.body.factors, req.body.obstacles], 
							function(errorMakingQuery, result) {
				done();
				if(errorMakingQuery) {
					console.log('Error making database query', errorMakingQuery);
					res.sendStatus(500);
				} else {
					res.sendStatus(200);
				}
			});
		}
	});
});

//bring on the glassdoor API
var userKEY = 'eNLRYYKjp4C';
var userID = '196332';
var request = require('request');
var searchTerm = 'minneapolis'

var repo_options = {
    url: 'http://api.glassdoor.com/api/api.htm?t.p=' + userID + '&t.k=' + userKEY + '&userip=0.0.0.0&useragent=&format=json&v=1&action=employers&q=city&l=' + searchTerm,
    headers: {
      'User-Agent': 'request',
    }
  };

router.get('/glassdoor', function(req, res){
  console.log(repo_options);
  request(repo_options, function (error, response, body) {
      console.log('this is our response', body);
    if (response && response.statusCode == 200) {
      res.send(body);
    } else {
      res.sendStatus(500);
    }
  });
});

module.exports = router;