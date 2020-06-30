'use strict'

/*
Una calculadora:
Pida dos números por pantalla
Si un número no es correcto, lo debe solicitar nuevamente.
Mostrar en el cuerpo de la pagina una alerta por consola el resultado de sumar, restar, multplicar y dividir los números.
*/

var nro1 = parseInt(prompt("Ingresa un número 1",0));
var nro2 = parseInt(prompt("Ingresa un número 2",0));

while(nro1 < 0 || nro2 < 0 || isNaN(nro1) || isNaN(nro2)){
    nro1 = parseInt(prompt("Ingresa un número 1 ",0));
    nro2 = parseInt(prompt("Ingresa un número 2 ",0));
}

var resultado = "La suma es " + (nro1+nro2) + "<br/>" + " La resta es: " + (nro1 - nro2) + "<br/>" + 
                " La multiplicación es " + (nro1*nro2) + "<br/>" + " La división es " + (nro1/nro2);

var resultado2 = "La suma es " + (nro1+nro2) + " \n" + " La resta es: " + (nro1 - nro2) + " \n" + 
                " La multiplicación es " + (nro1*nro2) + " \n" + " La división es " + (nro1/nro2);


document.write(resultado2);
alert(resultado2);