// Create web server
// $ node comments.js
// Access in browser
// http://localhost:3000/comments

// Load modules
var http = require('http');
var fs = require('fs');

// Configure the server
var server = http.createServer(function(req, res) {
  // Get the path
  var url = req.url;
  console.log(url);

  // If the path is /comments, return the comments.html file
  if (url === '/comments') {
    fs.readFile('comments.html', function(err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  // If the path is /comments.js, return the comments.js file
  } else if (url === '/comments.js') {
    fs.readFile('comments.js', function(err, data) {
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      res.write(data);
      res.end();
    });
  // If the path is /comments.json, return the comments.json file
  } else if (url === '/comments.json') {
    fs.readFile('comments.json', function(err, data) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.write(data);
      res.end();
    });
  // If the path is /, return the index.html file
  } else {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  }
});

// Start the server
server.listen(3000);
console.log('Server running at http://localhost:3000/');