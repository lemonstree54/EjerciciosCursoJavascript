'use stric'

//Local storage (webstorage en html5): guardar información en el navegador a modo de sesión y que persista y esté disponible mientras se navega en las páginas.

//Verificar si el local storage está disponible dependiendo de la versión del browser
if(typeof(Storage) !== 'undefined'){
    console.log("LocalStorage disponible.")
}else{
    console.log("LocalStorage NO disponible por problemas de compatibilidad.")
} ;

//Guardar datos en el local storage
localStorage.setItem("titulo", "Curso JS");

//Recuperar elemento
console.log(localStorage.getItem("titulo"));

//Recuperar elemento del local storage y mostrarlo en un control, en este caso en un Div.
document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");

//Guardar objetos en el local storage
var usuario = {
    nombre: "'Leonardo M",
    email: "lmonsalve@glingeriesas.com",
    web: "https://lmonsalve.com"
} ;

//Para guardar un objeto (datos) en el local storage es necesario convertirlos a un string o formato numérico.
//Para enviarlos por HTTP también se deben convertir a un string.
localStorage.setItem("usuario", JSON.stringify(usuario));


//Recuperar el objeto jsonstring del local storage y convertirlo a un objeto JSON.
var userjs = JSON.parse(localStorage.getItem("usuario"));
console.log(userjs);

document.querySelector("#datos").append(userjs.nombre);
//Limpia el objeto del local storage
localStorage.removeItem("usuario");

//Limpia todo el local storage
localStorage.clear();





