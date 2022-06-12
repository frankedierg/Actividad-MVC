var sesionesModel = {}
var datos = [];
sesionesModel.registro = function(post,callback){

    datos.push({name:post.nombre, lname:post.apellido, address:post.direccion})
    return callback (datos)

}

module.exports.sesionesModel = sesionesModel