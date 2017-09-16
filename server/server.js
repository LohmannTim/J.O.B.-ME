var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var sessionConfig = require('./modules/session.config');
var index = require('./routes/index.js');
var exec = require('./routes/exec');
var plan = require('./routes/plan');
var prep = require('./routes/prep');
var passport = require('./strategies/sql.localstrategy');

// Route includes
var indexRouter = require('./routes/index');
var userRouter = require('./routes/user.router');
var registerRouter = require('./routes/register.router');

var port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, './public')));

//body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Passport Session Configuration
app.use(sessionConfig);

// Start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/register', registerRouter);
app.use('/user', userRouter);
app.use('/prep', prep);
app.use('/plan', plan);
app.use('/exec', exec);
app.use('/', index);

// Catch all bucket, must be last!
app.use('/', indexRouter);




app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
    console.log('listening on port:', app.get('port'));
    
});
