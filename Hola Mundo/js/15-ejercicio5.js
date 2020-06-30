'use strict'

/*
Mostrar los números divisores de un número ingresados por el usuario.
*/

var nro = parseInt(prompt("Ingresa el número: ",0));

for(var i = 1; i <= nro; i++){
    if(nro%i == 0){
        console.log("El número es divisor " + i);
    }
}