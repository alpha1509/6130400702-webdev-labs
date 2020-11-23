var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var app = express();

app.get('/', function(req, res) {
    res.render('form');
});
app.set('view engine', 'pug');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true}));

app.use(upload.array());
app.use(express.static('public'));

app.post('/', function(req, res) {
    console.log(req.body);
    let name = req.body.name.bold();
    let intern = req.body.internship.bold();
    let skills = req.body.skills.bold();
    res.send("<p>"+ name + " used these following skills:" +
            skills + " while doing internship at " + intern +"</p>");
});

app.listen(3000);