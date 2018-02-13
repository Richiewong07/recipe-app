var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cons = require('consolidate');
var dust = require('dustjs-helpers');
var pg = require('pg');

app = express();

// DB Connect String
var connect = 'postgres://richiewong:1168334aN*@localhost/recipebookdb';

// Assign Dust Engine To .dust Files
app.engine('dust', cons.dust);

// Set Default Ext .dustj
app.set('view engine', 'dust');
app.set('views', __dirname + '/views');

// Set Public Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res) {
  console.log('TEST');
})

// Server
app.listen(3000, function() {
  console.log('Server Started On Port 3000');
})
