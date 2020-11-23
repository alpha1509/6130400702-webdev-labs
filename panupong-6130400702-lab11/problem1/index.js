var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views', './');
app.use(express.static('public'));

app.get('/info', function(req, res) {
    res.render('static_view', {
        name: "Panupong Chimmai",
        profile_url: "https://alpha1509.github.io/profile/",
        company1: "https://www.aerogroup1992.com/",
        company1_name: "Aero Group (1992)",
        company2: "https://www.nasa.gov/",
        company2_name: "NASA",
        company3: "https://about.fb.com/company-info/",
        company3_name: "Facebook"
    });
});

app.listen(3000);