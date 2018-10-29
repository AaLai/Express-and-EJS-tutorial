'use strict'
//keeping their format for explaination if I need later
// ================================================================
// get all the tools we need
// ================================================================
var express = require('express');
var routes = require('./routes/index.js');
var port = process.env.PORT || 3000;

var app = express();

// ================================================================
// setup our express application
// ================================================================

app.use('/public', express.static(process.cwd() + '/public'));
app.set('view engine', 'ejs');

// ================================================================
// setup routes
// ================================================================
routes(app);

// ================================================================
// start our server
// ================================================================
app.listen(port, function() {
  console.log('server listening on port ' + port + '...');
});