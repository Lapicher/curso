var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// ejemplo pasando variables por url.
router.get('/acerca/:name', function(req, res, next){
	var nombre = req.params.name;
	// realizar logica negocio
	res.send("<h1> Mi nombre es: "+nombre+"</h1>");
});

// ejemplo pasando variables por querystring
router.get('/acerca', function(req, res, next){
	var persona = {
		name: req.query.name,
		job : req.query.job
	}
	res.render('acerca', persona);
})



module.exports = router;
