
var http = require("http");

var counter = 0;

var server = http.createServer(function (req, res) {

    res.writeHead(200, { "content-type": "text/plain;charset=utf-8" })

    switch (counter) {
        case 0:
            res.writeHead(200, { "content-type": "text/plain;charset=utf-8" })
            break;

        case 1:
            res.writeHead(200, { "content-type": "text/html;charset=utf-8" })
            break;

        case 2:
            res.writeHead(200, { "content-type": "application/json;charset=utf-8" })
            break;

        case 3:
            res.writeHead(200, { "content-type": "text/xml;charset=utf-8" })
            break;

        case 4:
            res.writeHead(200, { "content-type": "video/mp4;charset=utf-8" })
            break;

        case 5:
            res.writeHead(200, { "content-type": "text/css;charset=utf-8" })
            break;

        case 6:
            res.writeHead(200, { "content-type": "application/javascript;charset=utf-8" })
            break;

        case 7:
            res.writeHead(200, { "content-type": "audio/mpeg;charset=utf-8" })
            break;


        default:
            console.log("koniec")
            counter = 0;
            break;
    }
    counter++
    res.end("<h2>" + JSON.stringify(req.headers, null, 5) + "</h2>")
})

server.listen(3000, function () {
    console.log("serwer startuje na porcie 3000")
});