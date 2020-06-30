'use strict'

//DOM - Document Object Model.
//modificar el objeto "micaja"

var caja1 = document.getElementById("micaja"); // devuelve el html que tiene "micaja".
console.log(caja1);

var caja2 = document.getElementById("micaja").textContent; // Devuelve el texto que tiene la etiqueta.
console.log(caja2);

var caja1 = document.querySelector("#micaja"); //permite hacer lo mismo que getelementbyid

function cambiaColor(color){
    caja1.style.background= color ;
}

//Conseguir elementos por su ID, ya que es único.
caja1.innerHTML = "Texto que reemplaza el de mi caja";
console.log(caja1);
caja1.style.background= "blue"; //cambia el color del fondo del elemento.
caja1.style.padding= "20px"; //cambia el tamaño del elemento.
caja1.style.color = "white"; //cambia el color del texto.
caja1.className = "hola hola hola" ; //cambia el nombre de la clase.

console.log(caja1);


//Conseguir elementos por su etiqueta
var TodosDiv = document.getElementsByTagName('div')

var texto = TodosDiv[2].textContent;
console.log(texto); 

var texto2 = TodosDiv[1];
var texto3 = texto2.innerText = "Hola, estoy cambiando" ;
console.log(texto3); 

var seccion = document.querySelector("#miseccion") ;
var hr = document.createElement("hr");

var valor ;
for(valor in TodosDiv){
    if(typeof TodosDiv[valor].textContent == 'string'){ 
    var parrafo = document.createElement("p");
    var texto4 = document.createTextNode(TodosDiv[valor].textContent);
    parrafo.append(texto4);
    document.querySelector("#miseccion").append(parrafo);
    }
} ;

seccion.append(hr);
//console.log(TodosDiv) ;
//Conseguir elementos por su clase

var divLeo = document.getElementsByClassName('leo');
var divMabel = document.getElementsByClassName('mabel');
divLeo[1].style.background="green";
console.log(divLeo);
divMabel[0].style.background="magenta";
console.log(divMabel);

for(var div in divLeo){
    if(divLeo[div].className == "leo"){
        divLeo[div].style.background="yellow" ;
    }
} ;


//Query selector

var id = document.querySelector("#encabezado"); //solo muestra un solo elemento
console.log(id);

var clase = document.querySelector(".leo"); //solo muestra un solo elemento
console.log(clase);

var etiqueta = document.querySelector("div"); //solo muestra un solo elemento
console.log(etiqueta);

//Con este comando se pueden seleccionar muchos elementos.
//https://developer.mozilla.org/es/docs/Web/API/Document/querySelectorAll