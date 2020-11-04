var express = require('express');
var app = express();

var things = require('./things.js');

app.get('/', function(req, res) {
    res.end('Hello world');
});


app.use('/things', things);
app.listen(3000);