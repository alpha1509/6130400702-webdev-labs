var emails = ["panupong.chimmai@kkumail.com", "alpha.haha@yomail.com", "panupong.ch@gmali.com"]

var unirest = require("unirest");

for (each of emails) {
	var req = unirest("GET", "https://rapidapi.p.rapidapi.com/v2/validate");
	req.query({
		"ip_address": each,
		"email": each
	});
	req.headers({
		"x-rapidapi-key": "a005cde6ffmsh1a4cf16de2469efp176760jsn236def3507e3",
		"x-rapidapi-host": "zerobounce1.p.rapidapi.com",
		"useQueryString": true
	});

	req.end(function (res) {
		if (res.error) throw new Error(res.error);
		console.log(res.body);
	});
}
