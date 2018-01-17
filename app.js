//main server entry point file
const express = require('express'),
path = require('path'),
morgan = require('morgan'),
bodyParser = require('body-parser'),
cors = require('cors'),
config = require('./config'),
sqldb = require('./sqldb'),
compression = require('compression'),
uuid = require('uuid'),
fs = require('fs');

//Initiates app
const app = express();

//Cors Middleware
app.use(cors());

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

//Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//allows to extract data from req from front end

app.use(compression());

// Attach morgan
app.use(morgan('dev'));

// Start Server
function startServer() {
    app.listen(config.port, function() {
        console.log('Express server listening on %d, in development mode', config.port);
    });
}
sqldb.sequelize
.sync()
.then(startServer)
.catch(function(err) {
    console.log('Server failed to start due to error: %s', err);
});

// API routes of our server
app.use('/survey', require('./api/survey'));