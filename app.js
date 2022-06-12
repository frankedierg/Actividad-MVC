var express = require('express')
global.app = express();
global.datos = [];

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


require('./rutas')
 global.calculo = function(tipo, val1, val2){
     if (tipo == 'suma') {
         return val1+val2
         
     }

     if (tipo == 'resta') {
        return val1-val2
        
    }
    if (tipo == 'producto') {
        return val1*val2
        
    }
    if (tipo == 'division') {
        return val1/val2
        
    }
     
 }

app.use('/',express.static(__dirname + '/Pagina'))//Expone el frontend

app.listen(3000, function(){
    console.log ('servidor funcionando por puerto 3000')
})
