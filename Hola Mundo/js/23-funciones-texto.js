'use strict'

//Transformación de textos
/*
var numero = 1954 ;
var texto = "Hola mundo javascript" ;
var texto1 = "Es un bueno curso" ;

console.log(numero.toString());
console.log(typeof numero.toString());

var datos = texto.toUpperCase();
console.log(datos.length);

var otro = texto1.toLowerCase();
console.log(otro.length);

var nombre ="Leonardo Monsalve";
console.log("Mi nombre tiene: " + nombre.length + " caracteres.");

var textoTotal = texto + texto1 ;
console.log(textoTotal);

var textoConcatenado = texto.concat("" + texto1 + "" + texto);
*/

//Busquedas
/*
var texto = "Hola mundo curso javascript" ;
var texto1 = "Es un bueno curso" ;

var busqueda = texto1.indexOf("curso"); //busca una cadena.
console.log(busqueda);

var busqueda1 = texto1.lastIndexOf("curso"); //busca la última aparición de una cadena.
console.log("Busqueda 1: " + busqueda1);

var busqueda2 = texto1.search("curs"); //busca una cadena dentro de otra.
console.log("Busqueda 2: " + busqueda2);

var busqueda3 = texto1.match("curso"); //busca una cadena dentro de otra.
console.log("Busqueda 3: " + busqueda3);

var busqueda4 = texto1.match(/curso/gi); //busca una cadena dentro de otra a partir de la primera aparición.
console.log("Busqueda 4: " + busqueda4);

var busqueda5 = texto1.substr(12 , 5); //extrae una cadena dentro de otra cadena.
console.log("Busqueda 5: " + busqueda5);

var busqueda6 = texto1.charAt(20); //Busca un caracter en una ubicación específica.
console.log("Busqueda 17: " + busqueda6);

var busqueda7 = texto1.startsWith("Es");  //Busca en el inicio de una cadena.
console.log("Busqueda 7: " + busqueda7);

var busqueda8 = texto1.includes("bueno");
console.log("Busqueda 8: " + busqueda8);
*/

//Funciones de reemplazo.

var texto = "    Hola mundo curso javascript  " ;
var texto1 = "Es un bueno curso       " ;

var busqueda = texto1.replace("bueno", "excelente"); //Reemplaza una cadena con otra dentro de otra.
console.log(busqueda);

var busqueda1 = texto1.slice(15); //separa el texto a partir de la ubicación dada.
console.log(busqueda1);

var busqueda2 = texto1.split(" ");
console.log(busqueda2);

var busqueda3 = texto1.trim();
console.log(busqueda3);



