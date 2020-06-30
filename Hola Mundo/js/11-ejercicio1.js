'use strict'
//Programa que pida dos números y que muestre cuál es el mayor, menor o si son iguales.
//Si los números no son numéricos o iguales a 0, DEBE volver a pedir.
var nro1 = parseInt(prompt("Ingresa el número uno", 0));
var nro2 = parseInt(prompt("Ingresa el número 2", 0));

console.log(nro1, nro2) ;

while(nro1 <= 0 || nro2 <= 0 || isNaN(nro1) || isNaN(nro2)){

    nro1 = parseInt(prompt("Ingresa el número uno", 0));
    nro2 = parseInt(prompt("Ingresa el número 2", 0));
}

    if(nro1 == nro2){
        alert("Los números" + nro1 + " - " + nro2 + " son iguales");
    }else if(nro1 > nro2){
        alert("Número " + nro1 + " es mayor al número " + nro2);
    }else if(nro2 > nro1){
        alert("Número " + nro2 + " es mayor al número " + nro1);
    }else{
        alert("Los valores ingresados no son correctos.");
    }

