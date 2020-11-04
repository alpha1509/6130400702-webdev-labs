var request1 = require("request");
var myIP;
request1.get("https://httpbin.org/ip", (error, response, body) => {
        if (error) {
            return JSON.parse(body);
        };
        var result = JSON.parse(body);
        myIP = result.origin;
});

var express = require('express');
var app = express();
app.get('/ip', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    var jsonip = {"ip":myIP};
    res.send(jsonip);
});
app.listen(3000);