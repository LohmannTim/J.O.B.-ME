var express = require('express');
var router = express.Router();
var pool = require('../modules/pool.js');

router.get('/', function(req, res) {
    console.log('GET route hit');
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


router.get('/activitytracker', function(req, res) {
    console.log('GET route hit');
    pool.connect(function (err, db, done) {
        if (err) {
            console.log('Error connecting to database', err);
            res.sendStatus(500);
        } else {

            db.query('SELECT * FROM activitytracker',
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

router.post('/activitytracker', function(req, res){
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
			client.query('INSERT INTO activitytracker (company, job, date, contact, next_steps, notes) VALUES ($1, $2, $3, $4, $5, $6);',
							[req.body.company, req.body.job, req.body.date, req.body.contact, req.body.next_steps, req.body.notes], 
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





router.post('/glassdoor', function (req, res) {
    //console.log(repo_options);
    searchTerm = req.body.location;
    console.log(req.body);
    var userKEY = 'eNLRYYKjp4C';    
    var userID = '196332';
    var request = require('request');
    var searchTerm = req.body.location;
    var pageNumber = '2'; 
    var pageSize = '50';
    var repo_options = {
    url: 'http://api.glassdoor.com/api/api.htm?t.p=' +
     userID + '&t.k=' +
     userKEY + '&userip=0.0.0.0&useragent=&format=json&v=1&action=employers&city=' +
     searchTerm + 
     '&pn=3',
    headers: {
        'User-Agent': 'request',
    }
};
    request(repo_options, function (error, response, body) {
        console.log('this is our response', body);
        if (response && response.statusCode == 200) {
            res.send(body);
        } else {
            console.log('error retrieving data from glass door', error);
             res.sendStatus(500);
        }
    });
});
module.exports = router;