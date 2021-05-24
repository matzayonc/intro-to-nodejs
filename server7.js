require("colors");
var http = require("http")
var server = http.createServer(function (req, res) {
    if (req.url == "/A")
        console.log("localhost:3000/A".red)
    else if (req.url == "/B")
        console.log("localhost:3000/B".green)
    else if (req.url == "/C")
        console.log("localhost:3000/C".blue)

        
}).listen(3000, function () {
    console.log("serwer startuje na porcie 3000")
});

