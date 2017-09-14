var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

var index = require('./routes/index.js');
var exec = require('./routes/exec');
var plan = require('./routes/plan');
var prep = require('./routes/prep');



app.use(express.static(path.join(__dirname, './public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



// app.use('/prep', prep);
app.use('/plan', plan);
// app.use('/exec', exec);
app.use('/', index);



app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
    console.log('listening on port:', app.get('port'));
    
});
