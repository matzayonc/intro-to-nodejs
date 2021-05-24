require("colors");
var fs = require("fs");
var http = require("http")

function getExtension(name){

}

var server = http.createServer(function (req, res) {

    var url = decodeURI(req.url)

    if(url == "/")
        url = "/index.html"

    console.log("żądany przez przeglądarkę adres: " + url)

    var path = "static" + url
    var tab = url.split(".")
    var ext = tab[tab.lenght-1]

    fs.readFile(path, function (error, data) {

        if (ext == "html")
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        else if (ext == "css")
            res.writeHead(200, { 'Content-Type': 'text/css' });
        else if (ext == "js")
            res.writeHead(200, { 'Content-Type': 'application/javascript' });       
        else if (ext == "jpg")
            res.writeHead(200, { 'Content-Type': 'image/jpg' });        
        else if (ext == "png")
            res.writeHead(200, { 'Content-Type': 'image/png' });
        else{
            res.writeHead(404);
            res.end();
            return
        }


        res.write(data);
        res.end();
    })


}).listen(3000, function () {
    console.log("serwer startuje na porcie 3000")
});
