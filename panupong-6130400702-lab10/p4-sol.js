var list="";
var request1 = require("request");
    request1.get("https://krunapon.github.io/google/call-kk-restaurants.json", (error, response, body) => {
        if (error) {
            return JSON.parse(body);
        }
        var result =JSON.parse(body);
        var info = result.results;
        for (name of info) {
            list += '<li>'+ name.name +'</li>';
        }
});

const http = require('http');
const port = 8000;
const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type','text/html; charset=UTF-8')
    res.write('<h1>Restaurants in Khon Kaen</h1>')
        res.write('<ol>'+ list + '</ol>')
    });

server.listen(port, () => {
    console.log(`Server running at port ${port}`)
});