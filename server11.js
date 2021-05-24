require("colors");
var fs = require("fs");
var http = require("http")
var server = http.createServer(function (req, res) {

    fs.readFile("static/index.html", function (error, data) {

        if (request.url == "/index.html") {

            fs.readFile("static/index.html", function (error, data) {
                response.writeHead(200, { 'Content-Type': 'text/html' });
                response.write(data);
                response.end();
            })
        }
        else if (request.url == "/second") {

            fs.readFile("static/second", function (error, data) {
                response.writeHead(200, { 'Content-Type': 'text/plain' });
                response.write(data);
                response.end();
            })
        }

        else {
            response.writeHead(404, { 'Content-Type': 'text/html' });
            response.write("<h1>404 - brak takiej strony</h1>");
            response.end();

        }

    });


}).listen(3000, function () {
    console.log("serwer startuje na porcie 3000")
});
