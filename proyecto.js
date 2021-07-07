const { Console } = require('console');
const express = require('express');
const app = express();              //modulos
const fs = require('fs');          
const path = require('path');
//declaracion de la funcion para analizar carpetas
function filewalker(dir, done) {
    let results = [];

    fs.readdir(dir, function(err, list) {
        if (err) return done(err);

        var pending = list.length;

        if (!pending) return done(null, results);

        list.forEach(function(file){
            file = path.resolve(dir, file);

            fs.stat(file, function(err, stat){
                // If directory, execute a recursive call
                if (stat && stat.isDirectory()) {
                    // Add directory to array [comment if you need to remove the directories from the array]
                    results.push(file);

                    filewalker(file, function(err, res){
                        results = results.concat(res);
                        if (!--pending) done(null, results);
                    });
                } else {
                    results.push(file);

                    if (!--pending) done(null, results);
                }
            });
        });
    });
};

//esta funcion analiza la carpeta con los problemas

filewalker("public/problemas", function(err, data){
    if(err){
        throw err;
    }
    
    // ["c://some-existent-path/file.txt","c:/some-existent-path/subfolder"]
    console.log(data.length);
    
    
    proble1=(data[0].replace(/\\/g, "/")).replace("C:/Users/luis/Desktop/curso javascript+/first-node-express-app-master/public/", ""),
    proble2=(data[1].replace(/\\/g, "/")).replace("C:/Users/luis/Desktop/curso javascript+/first-node-express-app-master/public/", ""),
    proble3=(data[2].replace(/\\/g, "/")).replace("C:/Users/luis/Desktop/curso javascript+/first-node-express-app-master/public/", ""),
    proble4=(data[3].replace(/\\/g, "/")).replace("C:/Users/luis/Desktop/curso javascript+/first-node-express-app-master/public/", ""),
    proble5=(data[4].replace(/\\/g, "/")).replace("C:/Users/luis/Desktop/curso javascript+/first-node-express-app-master/public/", ""),
    proble6 =(data[5].replace(/\\/g, "/")).replace("C:/Users/luis/Desktop/curso javascript+/first-node-express-app-master/public/", ""),
    proble7 =(data[6].replace(/\\/g, "/")).replace("C:/Users/luis/Desktop/curso javascript+/first-node-express-app-master/public/", ""),
    proble8 =(data[7].replace(/\\/g, "/")).replace("C:/Users/luis/Desktop/curso javascript+/first-node-express-app-master/public/", ""),
    proble9 =(data[8].replace(/\\/g, "/")).replace("C:/Users/luis/Desktop/curso javascript+/first-node-express-app-master/public/", ""),
    proble10 =(data[9].replace(/\\/g, "/")).replace("C:/Users/luis/Desktop/curso javascript+/first-node-express-app-master/public/", ""),
    proble11 =(data[10].replace(/\\/g, "/")).replace("C:/Users/luis/Desktop/curso javascript+/first-node-express-app-master/public/", ""),
    proble12 =(data[11].replace(/\\/g, "/")).replace("C:/Users/luis/Desktop/curso javascript+/first-node-express-app-master/public/", ""),
    proble13 =(data[12].replace(/\\/g, "/")).replace("C:/Users/luis/Desktop/curso javascript+/first-node-express-app-master/public/", ""),
    proble14 =(data[13].replace(/\\/g, "/")).replace("C:/Users/luis/Desktop/curso javascript+/first-node-express-app-master/public/", ""),
    proble15 =(data[14].replace(/\\/g, "/")).replace("C:/Users/luis/Desktop/curso javascript+/first-node-express-app-master/public/", ""),
    proble16 =(data[15].replace(/\\/g, "/")).replace("C:/Users/luis/Desktop/curso javascript+/first-node-express-app-master/public/", ""),
    proble17 =(data[16].replace(/\\/g, "/")).replace("C:/Users/luis/Desktop/curso javascript+/first-node-express-app-master/public/", ""),
    proble18 =(data[17].replace(/\\/g, "/")).replace("C:/Users/luis/Desktop/curso javascript+/first-node-express-app-master/public/", ""),
    proble19 =(data[18].replace(/\\/g, "/")).replace("C:/Users/luis/Desktop/curso javascript+/first-node-express-app-master/public/", ""),
    proble20 =(data[19].replace(/\\/g, "/")).replace("C:/Users/luis/Desktop/curso javascript+/first-node-express-app-master/public/", ""),
    proble21 =(data[20].replace(/\\/g, "/")).replace("C:/Users/luis/Desktop/curso javascript+/first-node-express-app-master/public/", ""),
    proble22 =(data[21].replace(/\\/g, "/")).replace("C:/Users/luis/Desktop/curso javascript+/first-node-express-app-master/public/", ""),
    proble23 =(data[22].replace(/\\/g, "/")).replace("C:/Users/luis/Desktop/curso javascript+/first-node-express-app-master/public/", ""),
    proble24 =(data[23].replace(/\\/g, "/")).replace("C:/Users/luis/Desktop/curso javascript+/first-node-express-app-master/public/", ""),
    proble25 =(data[24].replace(/\\/g, "/")).replace("C:/Users/luis/Desktop/curso javascript+/first-node-express-app-master/public/", "");

         //esta analiza las resoluciones
filewalker("public/resolucion", function(err, data){
        if(err){
            throw err;
        }
        
        // ["c://some-existent-path/file.txt","c:/some-existent-path/subfolder"]
        console.log(data.length);
        
        
        rel1=(data[0].replace(/\\/g, "/")).replace("C:/Users/luis/Desktop/curso javascript+/first-node-express-app-master/public/", ""),
        rel2=(data[1].replace(/\\/g, "/")).replace("C:/Users/luis/Desktop/curso javascript+/first-node-express-app-master/public/", ""),
        rel3=(data[2].replace(/\\/g, "/")).replace("C:/Users/luis/Desktop/curso javascript+/first-node-express-app-master/public/", ""),
        rel4=(data[3].replace(/\\/g, "/")).replace("C:/Users/luis/Desktop/curso javascript+/first-node-express-app-master/public/", ""),
        rel5=(data[4].replace(/\\/g, "/")).replace("C:/Users/luis/Desktop/curso javascript+/first-node-express-app-master/public/", ""),
        rel6 =(data[5].replace(/\\/g, "/")).replace("C:/Users/luis/Desktop/curso javascript+/first-node-express-app-master/public/", ""),
        rel7 =(data[6].replace(/\\/g, "/")).replace("C:/Users/luis/Desktop/curso javascript+/first-node-express-app-master/public/", ""),
        rel8 =(data[7].replace(/\\/g, "/")).replace("C:/Users/luis/Desktop/curso javascript+/first-node-express-app-master/public/", ""),
        rel9 =(data[8].replace(/\\/g, "/")).replace("C:/Users/luis/Desktop/curso javascript+/first-node-express-app-master/public/", ""),
        rel10 =(data[9].replace(/\\/g, "/")).replace("C:/Users/luis/Desktop/curso javascript+/first-node-express-app-master/public/", ""),
        rel11 =(data[10].replace(/\\/g, "/")).replace("C:/Users/luis/Desktop/curso javascript+/first-node-express-app-master/public/", ""),
        rel12 =(data[11].replace(/\\/g, "/")).replace("C:/Users/luis/Desktop/curso javascript+/first-node-express-app-master/public/", ""),
        rel13 =(data[12].replace(/\\/g, "/")).replace("C:/Users/luis/Desktop/curso javascript+/first-node-express-app-master/public/", ""),
        rel14 =(data[13].replace(/\\/g, "/")).replace("C:/Users/luis/Desktop/curso javascript+/first-node-express-app-master/public/", ""),
        rel15 =(data[14].replace(/\\/g, "/")).replace("C:/Users/luis/Desktop/curso javascript+/first-node-express-app-master/public/", ""),
        rel16 =(data[15].replace(/\\/g, "/")).replace("C:/Users/luis/Desktop/curso javascript+/first-node-express-app-master/public/", ""),
        rel17 =(data[16].replace(/\\/g, "/")).replace("C:/Users/luis/Desktop/curso javascript+/first-node-express-app-master/public/", ""),
        rel18 =(data[17].replace(/\\/g, "/")).replace("C:/Users/luis/Desktop/curso javascript+/first-node-express-app-master/public/", ""),
        rel19 =(data[18].replace(/\\/g, "/")).replace("C:/Users/luis/Desktop/curso javascript+/first-node-express-app-master/public/", ""),
        rel20 =(data[19].replace(/\\/g, "/")).replace("C:/Users/luis/Desktop/curso javascript+/first-node-express-app-master/public/", ""),
        rel21 =(data[20].replace(/\\/g, "/")).replace("C:/Users/luis/Desktop/curso javascript+/first-node-express-app-master/public/", ""),
        rel22 =(data[21].replace(/\\/g, "/")).replace("C:/Users/luis/Desktop/curso javascript+/first-node-express-app-master/public/", ""),
        rel23 =(data[22].replace(/\\/g, "/")).replace("C:/Users/luis/Desktop/curso javascript+/first-node-express-app-master/public/", ""),
        rel24 =(data[23].replace(/\\/g, "/")).replace("C:/Users/luis/Desktop/curso javascript+/first-node-express-app-master/public/", ""),
        rel25 =(data[24].replace(/\\/g, "/")).replace("C:/Users/luis/Desktop/curso javascript+/first-node-express-app-master/public/", "");
          
         //esta crea o actualiza el archivo javascript         
fs.writeFile('public/javascript/problemas.js', 
`let problema1 = {
    imgProblema:" ${proble1}",
    respuesta: "b",
    imgResolucion: " ${rel1}"
}

let problema2 = {
    imgProblema: "${proble2}",
    respuesta: "c",
    imgResolucion: " ${rel2}"
}

let problema3 = {
    imgProblema: "${proble3}",
    respuesta: "c",
    imgResolucion: " ${rel3}"
}

let problema4 = {
    imgProblema: "${proble4}",
    respuesta: "b",
    imgResolucion: " ${rel4}"
}

let problema5 = {
    imgProblema: "${proble5}",
    respuesta: "c",
    imgResolucion: " ${rel5}"
}



let problema6 = {
    imgProblema: "${proble6}",
    respuesta: "d",
    imgResolucion: " ${rel6}"
}

let problema7 = {
    imgProblema:" ${proble7}",
    respuesta: "c",
    imgResolucion: " ${rel7}"
}

let problema8 = {
    imgProblema: "${proble8}",
    respuesta: "c",
    imgResolucion: " ${rel8}"
}

let problema9 = {
    imgProblema: "${proble9}",
    respuesta: "c",
    imgResolucion: " ${rel9}"
}

let problema10 = {
    imgProblema: "${proble10}",
    respuesta: "b",
    imgResolucion: " ${rel10}"
}

let problema11 = {
    imgProblema: "${proble11}",
    respuesta: "d",
    imgResolucion: " ${rel11}"  
}

let problema12 = {
    imgProblema: "${proble12}",
    respuesta: "d",
    imgResolucion: " ${rel12}"   
}

let problema13 = {
    imgProblema: "${proble13}",
    respuesta: "c",
    imgResolucion: " ${rel13}"   
}

let problema14 = {
    imgProblema: "${proble14}",
    respuesta: "a",
    imgResolucion: " ${rel14}"   
}

let problema15 = {
    imgProblema: "${proble15}",
    respuesta: "c",
    imgResolucion: " ${rel15}"    
}

let problema16 = {
    imgProblema: "${proble16}",
    respuesta: "c",
    imgResolucion: " ${rel16}"    
}

let problema17 = {
    imgProblema: "${proble17}",
    respuesta: "d",
    imgResolucion: " ${rel17}"  
}


let problema18 = {
    imgProblema: "${proble18}",
    respuesta: "d",
    imgResolucion: " ${rel18}"
}

let problema19 = {
    imgProblema: "${proble19}",
    respuesta: "c",
    imgResolucion: " ${rel19}"
}

let problema20 = {
    imgProblema: "${proble20}",
    respuesta: "b",
    imgResolucion: " ${rel20}"
}

let problema21 = {
    imgProblema: "${proble21}",
    respuesta: "b",
    imgResolucion: " ${rel21}"
}

let problema22 = {
    imgProblema: "${proble22}",
    respuesta: "a",
    imgResolucion: " ${rel22}"
}

let problema23 = {
    imgProblema: "${proble23}",
    respuesta: "b",
    imgResolucion: " ${rel23}"
}

let problema24 = {
    imgProblema: "${proble24}",
    respuesta: "a",
    imgResolucion: " ${rel24}"
}


let problema25 = {
    imgProblema: "${proble25}",
    respuesta: "b",
    imgResolucion: " ${rel25}"
}

let problemasPucp = [problema1, problema2, problema3, problema4, problema5 ,problema6, problema7, problema8, problema9, problema10, problema11, problema12, problema13, problema14, problema15, problema16, problema17, problema18, problema19, problema20, problema21, problema22, problema23, problema24, problema25]`



, (err) => {
    if (err) throw err;
    console.log('Archivo Creado Satisfactoriamente');
  });

    });    
    
   

   

});



app.use(express.json());

//esto es lo que estoy haciendo para obtener la carpeta elegida por el usuario,de un submit/formulario
app.post('/user/:userId',(req,res)=>{
       console.log(req.body);
       console.log(req.params)
       res.send('Post Request Received')

});

app.get('/baa',(req,res)=>{
    res.send('Hello work,i love you so much');
});
//este inicia el archivo estatico html
app.use(express.static('public'));


//inicia el sv
  app.listen(5000,()=>{
       console.log('Server on port 5000');
  });