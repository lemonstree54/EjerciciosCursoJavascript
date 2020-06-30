//ayuda para que al codificar sea más estricto el
//compilador con los errores de codificación.
'use strict'

//Variables JS

var pais = "Colombia";
var continente = "America";
var antiguedad = 2019 ;
var pais_y_continente = pais + " " + continente ;
//let: define variables limitando alcane al bloque, declaración o expresión donde se usa.
//var: define variables global o local en una función sin importar el ámbito del bloque.
let prueba = "Hola";
alert(prueba);


pais = "Ecuador";
continente = "Africa";
console.log(pais);
console.log(continente);
console.log(antiguedad);

console.log(pais, continente, antiguedad);
console.log(pais_y_continente);
alert(pais_y_continente);