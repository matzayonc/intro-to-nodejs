var fs = require("fs");
var http = require("http")
var qs = require("querystring")

var server = http.createServer(function (req, res) {

    var url = decodeURI(req.url)

    var path = "static" + url
    var seg = url.split(".")
    var ext = seg[seg.length - 1]

    switch (req.method) {
        case "GET":
            if (req.url == "/") {
                fs.readFile("static/index5.html", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.write(data)
                    res.end();
                })
            }
            else if(req.url == "a"/*"/js/JQ.js"*/){
                fs.readFile("static/js/JQ.js", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'application/javascript' });
                    res.write(data)
                    res.end();
                })
            }
            else{
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
                    else
                        res.writeHead(404);

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
    var allData = "";

    req.on("data", function (data) {
        allData += data;
    })

    req.on("end", function (data) {
        var finish = qs.parse(allData)

        var now = new Date()
        finish.time = now.getTime()

        res.end(JSON.stringify(finish));
    })
}
