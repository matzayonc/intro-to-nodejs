
var http = require("http");
var server = http.createServer(function (req, res) {
    console.log(req.headers["user-agent"].search("Firefox"))

    res.writeHead(200, { "content-type": "text/html;charset=utf-8" })
    if (req.headers["user-agent"].search("Firefox") != -1)
        res.end("<h1>Twoja przeglądarka to Firefox</h1>")
    else if (req.headers["user-agent"].search("Chrome") != -1)
        res.end("<h1>Twoja przeglądarka to Chrome </h1>")
    else
        res.end("<h1>To jest inna przeglądarka </h1>")
})

server.listen(3000, function () {
    console.log("serwer startuje na porcie 3000")
});

