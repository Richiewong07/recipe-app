var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cons = require('consolidate');
var dust = require('dustjs-helpers');
var pg = require('pg');
var pgp = require('pg-promise');
// var db = pgp({database: 'recipebookdb'});


app = express();

// DB Connect String
// var connect = 'postgres://richiewong:1168334aN*@localhost/recipebookdb';

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

  // res.render('index');
  // console.log('TEST');

//   var pool = new pg.Pool()
//
//   pool.connect(function(err, client, done) {
//     if(err) {
//       return console.error('error fetching client from pool', err);
//     }
//     client.query('SELECT * FROM recipes', function(err, result) {
//       if(err) {
//         return console.error('error running query', err);
//       }
//       res.render('index', {recipes: results.row});
//       done();
//     });
//   });
//   pool.end();
// });




// Server
app.listen(3000, function() {
  console.log('Server Started On Port 3000');
})
