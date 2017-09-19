var express = require('express');
var path = require('path');
var app = express();
var port = process.env.PORT || 5000;

app.use(express.static('server/public'));

var request = require('request');

var repo_options = {
    url: 'http://api.glassdoor.com/api/api.htm?t.p=' + userID + '&t.k=' + userKEY + '&userip=0.0.0.0&useragent=&format=json&v=1&action=employers&q=' + searchTerm,
    headers: {
      'User-Agent': 'request',
    }
  };

router.get('/', function(req, res){
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