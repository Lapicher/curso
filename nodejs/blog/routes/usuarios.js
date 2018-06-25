var express = require('express');
var router = express.Router();
var Usuario = global.db.Usuario; // modelo de usuarios

// ruta de listado de usuarios.
router.get('/', function(req, res){
    Usuario.find().exec(function(err, usuarios){
        if(err) return res.status(500).send("Error al realizar la consulta a base de datos");
        res.render('list', {
            title     : "Listado de Usuarios",
            usuarios  : usuarios
        });
    })
});

// ruta que muestra html de registro de usuarios
router.get('/add', function(req, res, next){
    res.render('register', {
      title: "Registro de Usuarios"
    });
});

// ruta de consulta de detalle de un usuario por ID.
router.get('/ID/:id', function(req, res){
    Usuario.findById(req.params.id, function(err, usuario){
        if(err) return res.status(500).send("ID de usuario incorrecto");
        res.send(usuario);
    });
});

// ruta de guardado del usuario por medio del formulario.
router.post('/guardar', function(req, res, next){
    var nuevoUsuario = new Usuario({
       nombre : req.body.nombre,
       apellido : req.body.apellido,
       correo : req.body.correo
    });

    nuevoUsuario.save(function(err, usuario){
        if(err) res.json(err);
        res.redirect('./'); // http://192.168.56.101:3000/usuarios/
    });
});

module.exports = router;
