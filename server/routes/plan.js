var express = require('express');
var router = express.Router();
var pool = require('../modules/pool.js');

console.log('loading plan.routes');

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

router.post('/', function(req, res){
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
			client.query('INSERT INTO activitytracker (Company, Job, Date, Date, Contact, Next_steps, Notes) VALUES ($1, $2, $3, $4, $5, $6, $7);',
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

module.exports = router;