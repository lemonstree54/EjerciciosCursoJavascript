'use strict'

//Plantillas de texto

var nombre = prompt("Ingresa el nombre", "");
var apellido = prompt("Ingresa tus apellidos","");

var texto = "Mi nombre es: " + nombre + " <br/> y mis apellidos: " + apellido;


//Interpolar una variable ${}
var texto1 = `
    <h1>Hola</h1>
    <h3>Me llamo: ${nombre}</h1>
    <h3>Mis apellidos: ${apellido}</h1>
`;
document.write(texto1);