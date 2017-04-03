var http = require('http');
var express = require('express');
var app = express();

/*http.createServer(function(request, response) {
  response.writeHead(200, {"Content-type": "text/plain"});
  response.end();
})*/

app.set('view engine', 'pug')

app.get('/', function(req, res) { //index route
  res.render('index')
});

app.get('/bio', function(req, res) { //index route
  res.end("bio");
});

app.get('/about', function(req, res) { //index route
  res.end("about");
});

app.listen(8080);
