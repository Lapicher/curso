function consulta(n1,n2,n3, callback){
	console.log("Inicia mi programa");
	callback();
}
// hola
console.log("Inicia mi programa");

consulta(1,2,3, function(){
	setTimeout(function(){
		console.log("termino mi programa");
	}, 3000);
});

console.log("Ya termino???");


