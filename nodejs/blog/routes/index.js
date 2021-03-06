
var express = require('express');
var router = express.Router();
var middleware_valida = require('../middlewares/valida_name');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// ejemplo pasando variables por url.
router.get('/acerca/:name', function(req, res, next){
	var nombre = req.params.name;
	if(!isNaN(nombre[0]))
		return res.status(400).send("Error, el nombre no debe iniciar con numeros")
	next();
},function(req, res, next){
	var nombre = req.params.name;
	// realizar logica negocio
	//res.status(400).send({name:nombre});
	res.send("<h1> Mi nombre es: "+nombre+"</h1>");
});

// ejemplo pasando variables por querystring
router.get('/acerca', middleware_valida(), function(req, res, next){
	var persona = {
		name: req.query.name,
		job : req.query.job
	}
	res.render('acerca', persona);
});

// ejemplo redireccionando la peticion a otra url.
router.get('/google', function(req, res, next){
	res.redirect('http://www.google.com');
});


module.exports = router;
