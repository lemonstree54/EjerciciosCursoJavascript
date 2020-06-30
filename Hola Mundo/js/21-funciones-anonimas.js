'use strict'

//Funciones ANONIMAS=  Funcion sin nombre que se puede guardar en una variable.


var pelicula = function(nombre){
    return "La pelicula es: " + nombre ;
}

pelicula("Talentos ocultos");



//Funciones de Callbacks = función que ejecuta dentro otra.
function sumate(nro1, nro2, sumaYmuestra, sumaPorDos){
    var sumar= (nro1+nro2);

    sumaYmuestra(sumar);
    sumaPorDos(sumar);
    return sumar;
}


sumate(6, 9, function(dato){
    console.log("La suma es: ", dato);
}, 
function(dato){
    console.log("La suma por dos es: ", (dato*2));
}) ;



//Funciones de FLECHA = se sustituye la palabra function por la flecha =>
function sumate(nro1, nro2, sumaYmuestra, sumaPorDos){
    var sumar= (nro1+nro2);

    sumaYmuestra(sumar);
    sumaPorDos(sumar);
    return sumar;
}


sumate(6, 9, (dato) =>{
    console.log("La suma es: ", dato);
}, 
dato =>{
    console.log("La suma por dos es: ", (dato*2));
}) ;

