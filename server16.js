var fs = require("fs");
var http = require("http")
var qs = require("querystring")

var server = http.createServer(function (req, res) {

    console.log(req.method)

    switch (req.method) {
        case "GET":
            if (req.url == "/") {
                fs.readFile("static/index3.html", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.write(data)
                    res.end();
                })
            }
            else {
                fs.readFile("static/js/JQ.js", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'application/javascript' });
                    res.write(data)
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
        console.log("data: " + data)
        allData += data;
    })

    req.on("end", function (data) {
        var finish = qs.parse(allData)
        finish.suma = parseInt(finish.a) + parseInt(finish.b)
        finish.iloczyn = parseInt(finish.a) * parseInt(finish.b)
        console.log(finish)

        res.end(JSON.stringify(parseInt(finish.a) * parseInt(finish.b)));
    })
}
