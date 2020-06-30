'use strict'

/*
Hacer un programa que muestre si un número es impar o par.
1.Ventana que solicite número
2.Validar si el número ingresado es válido, sino solicitarlo nuevamente.
*/

var nro = parseInt(prompt("Ingresa un número",0));

while(isNaN(nro)){
    nro = parseInt(prompt("Ingresa un número",0));
}

if(nro%2 ==0){
    alert("El número " + nro + " es par");
}else{
    alert("El número " + nro + " es impar.");
}
