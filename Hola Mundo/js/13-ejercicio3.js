'use strict'

/*
Hacer un programa que muestre todos los números entre dos números introducidos por el usuario
*/

var nro1 = parseInt(prompt("Ingresa el número 1: ",0));
var nro2 = parseInt(prompt("Ingresa el número 2: ",0));

document.write("<h1>De" + nro1 + "a " + nro2 + " están estos números</h1>"); //Permite añadir texto en el body de la página.
for(var i = nro1; i <= nro2; i++){
    document.write(i + "<br/>");
}