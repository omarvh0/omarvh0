'use strict'
var http = require('http'),
 options={
     host:'mediotiempo.com',
     port: 80,
     path: '/buscador/page/5?text=perfeccion'
 },
 htmlCode=''

 function httpClient(res){
    console.log(`El sitio ${options.host} ha respondido.Codigo de estado: ${res.statusCode}`)
    res.on('data',function(data){
        htmlCode += data
        console.log(data,data.toString())
})}
function httpError(err){
    console.log(`el sitio ${options.host} no respodio:codigo de estado:${err.code}. Error:${err.message} `)
}
 function webServer(req,res){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.end(htmlCode)
 }
 
 //instancia cliente de HTTP
 http
 
    .get(options,httpClient)
    .on('error',httpError)
//instancia servidor http
http
    .createServer(webServer)
    .listen(3000)
console.log('Servidor corriendo en http://localhost:3000/')