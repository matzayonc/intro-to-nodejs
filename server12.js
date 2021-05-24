require("colors");
var fs = require("fs");
var http = require("http")
var server = http.createServer(function (req, res) {

    console.log("żądany przez przeglądarkę adres: " + req.url)

    if (req.url === "/strona3.html") {
        fs.readFile("static/strona3.html", function (error, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        })
    }
    else if (req.url === "/style.css") {
        fs.readFile("static/css/style.css", function (error, data) {
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.write(data);
            res.end();
        })
    }
    else if (req.url === "/script.js") {
        fs.readFile("static/script/script.js", function (error, data) {
            res.writeHead(200, { 'Content-Type': 'application/javascript' });
            res.write(data);
            res.end();
        })
    }
}).listen(3000, function () {
    console.log("serwer startuje na porcie 3000")
});
