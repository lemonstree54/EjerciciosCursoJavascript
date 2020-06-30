'use strict'

//Ejercicio Local Storage
/*
1. Formulario que permita añadir peliculas.

*/

var formulario = document.querySelector("#formpeliculas");

formulario.addEventListener('submit', function(){
    var titulo = document.querySelector('#addpelicula').value;
    if(titulo.length >= 1){
        localStorage.setItem(titulo, titulo);
    }
    

});

var ul = document.querySelector('#listapeliculas')
for(var index in localStorage){
    localStorage[index]

    if(typeof localStorage[index] == 'string'){
    var li = document.createElement("li");
    li.append(localStorage[index]);
    ul.append(li);
    }
};

var formularioB = document.querySelector("#formBorrarPeliculas");

formularioB.addEventListener('submit', function(){
    var titulo = document.querySelector('#borrarPelicula').value;
    if(titulo.length >= 1){
        localStorage.removeItem(titulo, titulo);
    }
    

});



