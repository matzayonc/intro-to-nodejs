var fs = require("fs");
var http = require("http")
var qs = require("querystring")

var server = http.createServer(function (req, res) {

    console.log(req.method)

    switch (req.method) {
        case "GET":
            fs.readFile("static/index1.html", function (error, data) {
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
    var allData = "";

    req.on("data", function (data) {
        console.log("data: " + data)
        allData += data;
    })

    req.on("end", function (data) {
        var finish = qs.parse(allData)
        console.log(finish.bt1)
        res.end("odsyłam do przeglądarki" + JSON.stringify(finish));
    })
}
