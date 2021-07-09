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
    reemplazo=`${__dirname}/public/`
    constante_de_reemplazo=reemplazo.replace(/\\/g, "/")
    
    
    proble1=(data[0].replace(/\\/g, "/")).replace(`${constante_de_reemplazo}`, ""),
    proble2=(data[1].replace(/\\/g, "/")).replace(`${constante_de_reemplazo}`, ""),
    proble3=(data[2].replace(/\\/g, "/")).replace(`${constante_de_reemplazo}`, ""),
    proble4=(data[3].replace(/\\/g, "/")).replace(`${constante_de_reemplazo}`, ""),
    proble5=(data[4].replace(/\\/g, "/")).replace(`${constante_de_reemplazo}`, ""),
    proble6 =(data[5].replace(/\\/g, "/")).replace(`${constante_de_reemplazo}`, ""),
    proble7 =(data[6].replace(/\\/g, "/")).replace(`${constante_de_reemplazo}`, ""),
    proble8 =(data[7].replace(/\\/g, "/")).replace(`${constante_de_reemplazo}`, ""),
    proble9 =(data[8].replace(/\\/g, "/")).replace(`${constante_de_reemplazo}`, ""),
    proble10 =(data[9].replace(/\\/g, "/")).replace(`${constante_de_reemplazo}`, ""),
    proble11 =(data[10].replace(/\\/g, "/")).replace(`${constante_de_reemplazo}`, ""),
    proble12 =(data[11].replace(/\\/g, "/")).replace(`${constante_de_reemplazo}`, ""),
    proble13 =(data[12].replace(/\\/g, "/")).replace(`${constante_de_reemplazo}`, ""),
    proble14 =(data[13].replace(/\\/g, "/")).replace(`${constante_de_reemplazo}`, ""),
    proble15 =(data[14].replace(/\\/g, "/")).replace(`${constante_de_reemplazo}`, ""),
    proble16 =(data[15].replace(/\\/g, "/")).replace(`${constante_de_reemplazo}`, ""),
    proble17 =(data[16].replace(/\\/g, "/")).replace(`${constante_de_reemplazo}`, ""),
    proble18 =(data[17].replace(/\\/g, "/")).replace(`${constante_de_reemplazo}`, ""),
    proble19 =(data[18].replace(/\\/g, "/")).replace(`${constante_de_reemplazo}`, ""),
    proble20 =(data[19].replace(/\\/g, "/")).replace(`${constante_de_reemplazo}`, ""),
    proble21 =(data[20].replace(/\\/g, "/")).replace(`${constante_de_reemplazo}`, ""),
    proble22 =(data[21].replace(/\\/g, "/")).replace(`${constante_de_reemplazo}`, ""),
    proble23 =(data[22].replace(/\\/g, "/")).replace(`${constante_de_reemplazo}`, ""),
    proble24 =(data[23].replace(/\\/g, "/")).replace(`${constante_de_reemplazo}`, ""),
    proble25 =(data[24].replace(/\\/g, "/")).replace(`${constante_de_reemplazo}`, "");

         //esta analiza las resoluciones
filewalker("public/resolucion", function(err, data){
        if(err){
            throw err;
        }
        
        // ["c://some-existent-path/file.txt","c:/some-existent-path/subfolder"]
        console.log(data);
       
        
        rel1=(data[0].replace(/\\/g, "/")).replace(`${constante_de_reemplazo}`, ""),
        rel2=(data[1].replace(/\\/g, "/")).replace(`${constante_de_reemplazo}`, ""),
        rel3=(data[2].replace(/\\/g, "/")).replace(`${constante_de_reemplazo}`, ""),
        rel4=(data[3].replace(/\\/g, "/")).replace(`${constante_de_reemplazo}`, ""),
        rel5=(data[4].replace(/\\/g, "/")).replace(`${constante_de_reemplazo}`, ""),
        rel6 =(data[5].replace(/\\/g, "/")).replace(`${constante_de_reemplazo}`, ""),
        rel7 =(data[6].replace(/\\/g, "/")).replace(`${constante_de_reemplazo}`, ""),
        rel8 =(data[7].replace(/\\/g, "/")).replace(`${constante_de_reemplazo}`, ""),
        rel9 =(data[8].replace(/\\/g, "/")).replace(`${constante_de_reemplazo}`, ""),
        rel10 =(data[9].replace(/\\/g, "/")).replace(`${constante_de_reemplazo}`, ""),
        rel11 =(data[10].replace(/\\/g, "/")).replace(`${constante_de_reemplazo}`, ""),
        rel12 =(data[11].replace(/\\/g, "/")).replace(`${constante_de_reemplazo}`, ""),
        rel13 =(data[12].replace(/\\/g, "/")).replace(`${constante_de_reemplazo}`, ""),
        rel14 =(data[13].replace(/\\/g, "/")).replace(`${constante_de_reemplazo}`, ""),
        rel15 =(data[14].replace(/\\/g, "/")).replace(`${constante_de_reemplazo}`, ""),
        rel16 =(data[15].replace(/\\/g, "/")).replace(`${constante_de_reemplazo}`, ""),
        rel17 =(data[16].replace(/\\/g, "/")).replace(`${constante_de_reemplazo}`, ""),
        rel18 =(data[17].replace(/\\/g, "/")).replace(`${constante_de_reemplazo}`, ""),
        rel19 =(data[18].replace(/\\/g, "/")).replace(`${constante_de_reemplazo}`, ""),
        rel20 =(data[19].replace(/\\/g, "/")).replace(`${constante_de_reemplazo}`, ""),
        rel21 =(data[20].replace(/\\/g, "/")).replace(`${constante_de_reemplazo}`, ""),
        rel22 =(data[21].replace(/\\/g, "/")).replace(`${constante_de_reemplazo}`, ""),
        rel23 =(data[22].replace(/\\/g, "/")).replace(`${constante_de_reemplazo}`, ""),
        rel24 =(data[23].replace(/\\/g, "/")).replace(`${constante_de_reemplazo}`, ""),
        rel25 =(data[24].replace(/\\/g, "/")).replace(`${constante_de_reemplazo}`, "");
       
     res1=proble1.charAt(12),res2=proble2.charAt(12),res3=proble3.charAt(12),res4=proble4.charAt(12),res5=proble5.charAt(12),res6=proble6.charAt(12),res7=proble7.charAt(12),
     res8=proble8.charAt(12),res9=proble9.charAt(12),res10=proble10.charAt(12),res11=proble11.charAt(12),res12=proble12.charAt(12),res13=proble13.charAt(12),res14=proble14.charAt(12),res15=proble15.charAt(12),res16=proble16.charAt(12)
     res17=proble17.charAt(12),res18=proble18.charAt(12),res19=proble19.charAt(12),res20=proble20.charAt(12),res21=proble21.charAt(12),res22=proble22.charAt(12),res23=proble23.charAt(12),res24=proble24.charAt(12),res25=proble25.charAt(12);
            
        
        console.log(proble3);
        console.log(rel8);
          console.log(`"${constante_de_reemplazo}/public/"`);
          console.log(__dirname)
         //esta crea o actualiza el archivo javascript         
fs.writeFile('public/javascript/problemas.js', 
`let problema1 = {
    imgProblema:" ${proble1}",
    respuesta: "${res1}",
    imgResolucion: " ${rel1}"
}

let problema2 = {
    imgProblema: "${proble2}",
    respuesta:"${res2}",
    imgResolucion: " ${rel2}"
}

let problema3 = {
    imgProblema: "${proble3}",
    respuesta: "${res3}",
    imgResolucion: " ${rel3}"
}

let problema4 = {
    imgProblema: "${proble4}",
    respuesta: "${res4}",
    imgResolucion: " ${rel4}"
}

let problema5 = {
    imgProblema: "${proble5}",
    respuesta: "${res5}",
    imgResolucion: " ${rel5}"
}



let problema6 = {
    imgProblema: "${proble6}",
    respuesta: "${res6}",
    imgResolucion: " ${rel6}"
}

let problema7 = {
    imgProblema:" ${proble7}",
    respuesta: "${res7}",
    imgResolucion: " ${rel7}"
}

let problema8 = {
    imgProblema: "${proble8}",
    respuesta: "${res8}",
    imgResolucion: " ${rel8}"
}

let problema9 = {
    imgProblema: "${proble9}",
    respuesta: "${res9}",
    imgResolucion: " ${rel9}"
}

let problema10 = {
    imgProblema: "${proble10}",
    respuesta: "${res10}",
    imgResolucion: " ${rel10}"
}

let problema11 = {
    imgProblema: "${proble11}",
    respuesta: "${res11}",
    imgResolucion: " ${rel11}"  
}

let problema12 = {
    imgProblema: "${proble12}",
    respuesta: "${res12}",
    imgResolucion: " ${rel12}"   
}

let problema13 = {
    imgProblema: "${proble13}",
    respuesta: "${res13}",
    imgResolucion: " ${rel13}"   
}

let problema14 = {
    imgProblema: "${proble14}",
    respuesta: "${res14}",
    imgResolucion: " ${rel14}"   
}

let problema15 = {
    imgProblema: "${proble15}",
    respuesta: "${res15}",
    imgResolucion: " ${rel15}"    
}

let problema16 = {
    imgProblema: "${proble16}",
    respuesta: "${res16}",
    imgResolucion: " ${rel16}"    
}

let problema17 = {
    imgProblema: "${proble17}",
    respuesta: "${res17}",
    imgResolucion: " ${rel17}"  
}


let problema18 = {
    imgProblema: "${proble18}",
    respuesta: "${res18}",
    imgResolucion: " ${rel18}"
}

let problema19 = {
    imgProblema: "${proble19}",
    respuesta: "${res19}",
    imgResolucion: " ${rel19}"
}

let problema20 = {
    imgProblema: "${proble20}",
    respuesta:"${res20}",
    imgResolucion: " ${rel20}"
}

let problema21 = {
    imgProblema: "${proble21}",
    respuesta:"${res21}",
    imgResolucion: " ${rel21}"
}

let problema22 = {
    imgProblema: "${proble22}",
    respuesta:"${res22}",
    imgResolucion: " ${rel22}"
}

let problema23 = {
    imgProblema: "${proble23}",
    respuesta: "${res23}",
    imgResolucion: " ${rel23}"
}

let problema24 = {
    imgProblema: "${proble24}",
    respuesta: "${res24}",
    imgResolucion: " ${rel24}"
}


let problema25 = {
    imgProblema: "${proble25}",
    respuesta: "${res25}",
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