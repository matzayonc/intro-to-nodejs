var fs = require("fs");
var http = require("http")
var formidable = require("formidable")
var qs = require("querystring")

var server = http.createServer(function (req, res) {

    console.log(req.method)

    switch (req.method) {
        case "GET":
            fs.readFile("static/index20.html", function (error, data) {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data)
                res.end();
            })
            break;
        case "POST":
            servResponse(req, res)
            break;
    }

}).listen(3000, function () {
    console.log("serwer startuje na porcie 3000")
});


function servResponse(req, res) {

    var form = new formidable.IncomingForm();
    form.uploadDir = "static/upload/"
    form.parse(req, function (err, fields, files) {

        res.writeHead(200, { 'content-type': 'text/plain;charset=utf-8' });
        res.end("plik zapisany");

    });



}
