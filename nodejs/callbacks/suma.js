function suma(n1, n2, Callback){
	var res = n1+n2;
	Callback(res);
}

console.log("Realizando suma");

suma(1,2, function(resultado){
	console.log("Resultado:", resultado);
});
