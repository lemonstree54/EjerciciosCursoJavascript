'use strict'

/*
Mostrar todos los números impares que hay en tre dos números ingresados por el usuario.
*/

var nro1 = parseInt(prompt("Ingresa el número 1: ", 0)) ;
var nro2 = parseInt(prompt("Ingresa el número 2: ", 0)) ;

while(nro1 < nro2){
    nro1++;

    if(nro1%2 != 0){
        console.log("El número " + nro1 + " es impar.");
    }

}