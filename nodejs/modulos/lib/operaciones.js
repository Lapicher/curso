console.log("modulo cargado");
var operaciones = {
	suma : function(n1, n2){
		return n1+n2;
	},
	resta : function(n1, n2){
		return n1+n2;
	}
}

module.exports = operaciones;
module.exports.multiplicacion = function(n1, n2){
	return n1*n2;
}
