
const express = require('express')
const app =express()

app.listen(3000,()=>{
      console.log('Aplicacion corriendo en el puerto 3000')

})

//rutas

app.get('/',(request,response)=>{
    response.json({
        nombre:'Jose Montoya'
    })
})