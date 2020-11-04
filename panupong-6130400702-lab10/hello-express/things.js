var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.send("GET route on things\n");
});
router.post('/', function(req, res) {
    res.send("POST route on things\n");
});

module.exports = router;