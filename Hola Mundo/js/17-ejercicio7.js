'use strict'

/*
Tabla de multiplicar de un número ingresado.
*/

var nro = parseInt(prompt("Ingresa el número:",0))
document.write("<h1>La tabla del " + nro + " es:</h1>");
for(var i = 1; i <= 10; i++){
    document.write(i + " X " + nro + " = " + (i*nro) + "<br/>") ;
}