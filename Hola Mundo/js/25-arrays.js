'use strict'

//Arrays, arreglos, matrices

var nombre = "Leonardo Monsalve";

var nombres = ["Mabel", "Vanesa", "Harry", "Leo", 55];

/*
for(var i = 0; i <= nombres.length; i++){
    console.log(nombres[i]) + "<br/>";
} ;

var lenguajes = ["Csharp","Java","VB", "microsoft", true] ;
for(var k = 0; k <=lenguajes.length; k++){
    console.log(lenguajes[k] ) +  "<br/>";
} ;

//var elemento = parseInt(prompt("Elegir elemento:", 0));
document.write("<h1> Nombres familia:</h1>")
document.write("</ul>");
for(var m = 0; m <=nombres.length; m++){
        document.write("</li>" + nombres[m] + "</li>" + "<br/>") ;
    
}

*/

//Itera todo el arreglo.
nombres.forEach((elemento, indice)=>{
    document.write("</li>" + indice + " - "+elemento + "</li>" + "<br/>") ;

});

//Buscar en un arreglo con funcion de callback.

var busqueda = nombres.find(nombre => nombre == "Leo") ;

var busqueda1 = nombres.findIndex(nombre => nombre == "Leo") ;

console.log(busqueda, busqueda1);

var numeros = [1 ,2 ,3 ,4 ,5];

var busquedaNumero = numeros.some(numero => numero < 1) ;

console.log(busquedaNumero);

