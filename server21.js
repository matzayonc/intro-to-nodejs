var fs = require("fs");
var http = require("http")
var formidable = require('formidable')
var qs = require("querystring")

var percent = 0


var server = http.createServer(function (req, res) {

    var url = decodeURI(req.url)

    var path = "static" + url
    var seg = url.split(".")
    var ext = seg[seg.length - 1]

    console.log(path)

    switch (req.method) {
        case "GET":
            if (req.url == "/") {
                fs.readFile("static/index21.html", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.write(data)
                    res.end();
                })
            }
            else if (req.url == "a"/*"/js/JQ.js"*/) {
                fs.readFile("static/js/JQ.js", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'application/javascript' });
                    res.write(data)
                    res.end();
                })
            }
            else {
                fs.readFile(path, function (error, data) {

                    if (ext == "html")
                        res.writeHead(200, { 'Content-Type': 'text/html' });
                    else if (ext == "css")
                        res.writeHead(200, { 'Content-Type': 'text/css' });
                    else if (ext == "js")
                        res.writeHead(200, { 'Content-Type': 'application/javascript' });
                    else if (ext == "jpg")
                        res.writeHead(200, { 'Content-Type': 'image/jpg' });
                    else if (ext == "png")
                        res.writeHead(200, { 'Content-Type': 'image/png' });
                    else {
                        res.writeHead(404);
                        res.end();
                        return false
                    }

                    res.write(data);
                    res.end();

                })
            }

            break;
        case "POST":
            servResponse(req, res)
            break;
    }

}).listen(3000, function () {
    console.log("serwer startuje na porcie 3000")
});



function servResponse(req, res) {

    res.writeHead(200, { 'content-type': 'text/plain;charset=utf-8' });


    switch (decodeURI(req.url)) {
        case "/progress":
            console.log("progress", percent)
            res.end(JSON.stringify({progress: percent}))
            break;
        case "/upload":

            var form = new formidable.IncomingForm();
            form.uploadDir = "static/upload/"


            form.parse(req, function (err, fields, files) {

                console.log(files.file.path)
                res.end("plik zapisany");

            });


            form.on("progress", (bytesReceived, bytesExpected) => {
                percent = bytesReceived/bytesExpected*100
                //console.log("progress ", percent+"%", bytesExpected, bytesReceived, new Date().getTime())
            })

            form.on("fileBegin", function (name, value) {
                percent = 0
                console.log("fileBegin" , new Date().getTime())
            })

            form.on("end", function () {
                console.log("end" , new Date().getTime())
            })



            break;
    
        default:
            console.log("Nie ma takiej")
            res.writeHead(200, { 'content-type': 'text/plain;charset=utf-8' })
            res.end("Nie ma takiej")
            break;
    }







}
