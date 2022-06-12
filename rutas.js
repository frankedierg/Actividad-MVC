var matematicas = require('./api/controladores/matematicasController').matematicas
app.post('/sumar',function(request,response){
    matematicas.sumar(request,response)

})

app.post('/restar',function(request,response){
   matematicas.restar(request,response)
  
})

app.post('/multiplicar',function(request,response){   
   matematicas.multiplicar(request,response)
})

app.post('/dividir',function(request,response){
   matematicas.dividir(request,response)
})

var sesiones = require('./api/controladores/sesionesController').sesionesController

app.post('/registro',function(request,response){
    sesiones.registro(request,response)
   })
