
var http = require("http");
var server = http.createServer(function (req, res) {
    // parametr res oznacza obiekt odpowiedzi serwera (response)
    // parametr req oznacza obiekt żądania klienta (request)
    res.writeHead(200, { "content-type": "text/html;charset=utf-8" })
    res.end("<h1>Hello world</h1>")
})

server.listen(3000, function () {
    console.log("serwer startuje na porcie 3000")
});