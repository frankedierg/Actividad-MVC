var express = require('express')
var app = express();
var datos = [];

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


 var calculo = function(tipo, val1, val2){
     if (tipo == 'suma') {
         return val1+val2
         
     }

     if (tipo == 'resta') {
        return val1-val2
        
    }
    if (tipo == 'producto') {
        return val1*val2
        
    }
    if (tipo == 'división') {
        return val1/val2
        
    }
     
 }
app.post('/sumar',function(request,response){
    var num1 = parseInt(request.body.num1)
    var num2 = parseInt(request.body.num2)
    response.json({mensaje:'El resultado de la suma es: '+ calculo('suma',num1,num2)})

})

app.post('/restar',function(request,response){
    var num1 = parseInt(request.body.num1)
    var num2 = parseInt(request.body.num2)
    response.json({mensaje:'El resultado de la resta es: '+ calculo('resta',num1,num2)})

})

app.post('/multiplicar',function(request,response){
    var num1 = parseInt(request.body.num1)
    var num2 = parseInt(request.body.num2)    
    response.json({mensaje:'El resultado de la multiplicación es: '+ calculo('producto',num1,num2)})

})

app.post('/dividir',function(request,response){
    var num1 = parseInt(request.body.num1)
    var num2 = parseInt(request.body.num2)
    response.json({mensaje:'El resultado de la división es: '+ calculo('división',num1,num2)})

})

app.post('/registro',function(request,response){
    var name = request.body.name
    var lname = request.body.lname
    var address = request.body.address
  

    console.log(name)
    console.log(lname)
    console.log(address)
    

    if(name == undefined || name == null || name == ''){
        response.json({state:false, mensaje:"Dato nombre es obligatorio"})
        return false;
    }

    if(name.length <=2){
        response.json({state:false, mensaje:"El campo nombre debe ser superior a 2 caracteres"})
        return false;

    }
    if(name.length >=30){
        response.json({state:false, mensaje:"El campo nombre debe ser inferior a 30 caracteres"})
        return false;

    }


    if(lname == undefined || lname == null || lname == ''){
        response.json({state:false, mensaje:"Dato Apellido es obligatorio"})
        return false;
    }

    if(lname.length <=2){
        response.json({state:false, mensaje:"El campo Apellido debe ser superior a 2 caracteres"})
        return false;

    }
    if(lname.length >=30){
        response.json({state:false, mensaje:"El campo Apellido debe ser inferior a 30 caracteres"})
        return false;

    }


    if(address == undefined || address == null || address == ''){
        response.json({state:false, mensaje:"Dato Dirección es obligatorio"})
        return false;
    }

    if(address.length <=5){
        response.json({state:false, mensaje:"El campo dirección debe ser superior a 5 caracteres"})
        return false;

    }
    if(address.length >=60){
        response.json({state:false, mensaje:"El campo Dirección debe ser inferior a 60 caracteres"})
        return false;

    }

    datos.push({name:name, lname:lname, address:address})

    response.json('Bienvenido '+ name + ' '+ lname)
   
})



app.use('/',express.static(__dirname + '/Pagina'))//Expone el frontend

app.listen(3000, function(){
    console.log ('servidor funcionando por puerto 3000')
})
