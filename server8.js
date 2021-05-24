require("colors");
var http = require("http")
var server = http.createServer(function (req, res) {

    res.writeHead(200, { "content-type": "text/html;charset=utf-8" })

    var color = "black"

    if (req.url == "/A")
        color = "red"
    else if (req.url == "/B")
        color = "green"
    else if (req.url == "/C")
        color = "blue"

    res.end('<h1 style="color:' + color + '">kolorowo</h1>')

}).listen(3000, function () {
    console.log("serwer startuje na porcie 3000")
});

