// Create web server
// 1. npm init
// 2. npm install express --save
// 3. node comments.js
// 4. http://localhost:8080/comments
// 5. http://localhost:8080/comments/1
// 6. http://localhost:8080/comments/2

var express = require('express');
var app = express();

app.get('/comments', function(req, res) {
    res.send('GET request to the homepage');
});

app.get('/comments/:id', function(req, res) {
    res.send('GET request to the homepage');
});

app.listen(8080, function() {
    console.log('Example app listening on port 8080!');
});
