'use strict'


function holaMundo(texto){
    var hola_mundo = "Dentro de la funcion";
    console.log(texto, typeof numero);
    console.log(holaMundo);
    
}
var numero = 54 ;
var texto = "Hola LeMon" ;
holaMundo(texto);

//genera error porque la variable hola_mundo está definida dentro de la función y solo se puede usar dentro de la función.
//console.log(hola_mundo);