
var http = require('http');
var math = require('./lib/operaciones');
//var math2 = require('./lib/operaciones');
//var math3 = require('./lib/operaciones');

console.log("Programa Iniciado");

console.log("La suma es:", math.suma(2,3));
console.log("La resta es:", math.resta(5,2));
console.log("La multiplicacion es:", math.multiplicacion(2,2));
