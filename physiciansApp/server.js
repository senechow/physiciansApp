const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// API file for interacting with MongoDB
const api = require('./server/routes/api');

app.use(logger('dev'));
// Parsers
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

// API location
app.use('/api', api);

// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


mongoose.connect('mongodb://localhost:27017/physiciansApp', {"useMongoClient": true});

var db = mongoose.connection;

db.on('connected', () => {
  console.log('MongoDB connect at port 27017');
});

db.on('error', (err) => {
  console.log("Failed to connect with MongoDB with error: " + err);

});


//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));

