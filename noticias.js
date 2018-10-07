//require incorpora outros arquivos arquivos
var http = require('http');

var server = http.createServer(function(req, res){

    res.end("<html><body>Portal de noticias</body></html>")
});
console.log("Servidor funcionando");
server.listen(3000);