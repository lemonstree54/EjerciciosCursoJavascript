'use strict'

/*
Pedir 6 números por pantalla e ingresarlos en un array.
Mostrar el array entero en el cuerpo de la página y en la consola y mostrarlo.
Ordenarlo y mostrarlo.
Invertir su orden y mostrarlo.
Mostrar cuántos elementos tiene el array.
Búsqueda de un valor introducido por el usuario, que muestre si lo encuentra y su índice.
*/

function mostrarArray(elementos, texto = ""){
    document.write("<h1>Contenido del array " + texto + " </h1>" + elementos);
    document.write("<ul>") ;

    elementos.forEach((elemento, index)=>{
    document.write("<li>" + elemento + "</li>");
}) ;
    document.write("</ul>") ;
} ;

var numeros = [];

for(var i = 1; i<= 6; i++){
    numeros.push(parseInt(prompt("Ingresa un número: ", 0)));
}
console.log(numeros);


//Ordenar y mostrar arreglo
numeros.sort(function(a,b){return a-b}); //para ordenar ascendente númericamente (function(a,b){return a-b});
mostrarArray(numeros, "Ordenado") ;

//Inventir y mostrar arreglo
numeros.reverse();
mostrarArray(numeros, "Al revés") ;


//Cuántos elementos
document.write("<h1> El arreglo tiene: " + numeros.length + " elementos </h1>");

var busqueda = parseInt(prompt("Buscar el número: ", 0));
//var posicion = numeros.some(busqueda => busquedaNumero < 1) ;

var posicion = numeros.findIndex(numero => numero == busqueda);

if(posicion && posicion != -1){
    document.write("<hr/><h1>Valor encontrado: " + busqueda + "</h1>");
    document.write("<h1>Posición del número: " + posicion + "<hr/></h1>");
}else{
    document.write("<hr/><h1>número " + busqueda + " NO encontrado: </h1>");
}




