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

// ruta para renderizar pantalla de edicion.
router.get('/edit/:id', function(req, res){
    var idusuario = req.params.id;
    Usuario.findById(idusuario, function(err, usuario){
        if(err) return res.status(500).send("ID de usuario incorrecto");
        res.render('edit', {
            title : "Editar Usuario",
            usuario : usuario
        });
    })
});

// ruta para escuchar la actualizacion del formulario editar.
router.post('/editar/:idusuario/', function(req, res){
  /*
        DATOS DEL FORM
    {
        nombre : "NAtaly",
        apellido : "Contra",
        correo : "correo"
    }
    */
    var usuario = req.body;
    Usuario.findByIdAndUpdate(req.params.idusuario, usuario, function(err, usuario){
        if(err) return res.status(500).send("Error al actualizar usuario");
        res.redirect('/usuarios');
        //res.render("listo", {msg: "Usuario Actualizado"});
        //res.send("Usuario Actualizado");
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
        res.redirect('/usuarios'); // http://192.168.56.101:3000/usuarios/
    });
});

// ruta para eliminar usuario.
router.get('/delete/:id', function(req, res){
    Usuario.findByIdAndRemove(req.params.id, function(err, usuario){
        if(err) return res.status(500).send("Error al eliminar usuario");
        res.redirect('/usuarios');
    });
});

module.exports = router;
