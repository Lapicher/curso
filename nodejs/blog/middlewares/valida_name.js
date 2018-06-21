module.exports = function(params){
	return function(req, res, next){
		
		var name = req.query.name;
		if(!req.query.name)
			return next();	
		if(!isNaN(name[0]))
			return res.status(400).send("El nombre no debe iniciar con numeros")
		next();
	}
}
