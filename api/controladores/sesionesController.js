var sesionesModel = require('../modelos/sesionesModel').sesionesModel

var sesionesController = {}

sesionesController.registro = function(request,response){

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
   var post = {
    nombre:name,
    apellido: lname,
    direccion: address
   }
   sesionesModel.registro(post, function(resultado){
    //response.json(resultado)
    response.json('Bienvenido '+ name + ' '+ lname)
   })
   
  
}


module.exports.sesionesController = sesionesController