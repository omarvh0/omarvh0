'use strict'
var htpp = require('http')
function webServer(req,res){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.end('<h1>Hola node-js</h1>')
}
http
    .createServer(webServer)
    .listen(3000,'localhost')
console.log('Servidor corriendo en http://localhost:3000/')