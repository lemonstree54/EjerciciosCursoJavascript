'use strict'

//Parámetros REST y SPREAD

//RESTO = resto
function listadoFrutas(f1, f2, ...resto_frutas){
    console.log("Fruta 1: " + f1);
    console.log("Fruta 2: " + f2);
    console.log(resto_frutas);
}

listadoFrutas("Mango", "Guanabana", "Sandía", "Melón", "Coco");


//SPREAD
var frutas = ["Mango", "Guanabana"];
listadoFrutas(...frutas, "Sandía", "Melón");