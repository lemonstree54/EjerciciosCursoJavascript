'use strict'

//FUNCIONES
//Una función es una agrupación reutilizable de un conjunto de instrucciones. Ejecuta una tarea específica.

/*
//Función con parámetros obligatorios
var nro1 = 0;
var nro2 = 0;
function calculadora(nro1, nro2){

    console.log("suma " + (nro1+nro2));
    console.log("Resta " + (nro1-nro2));
    console.log("Multiplicación " + (nro1*nro2));
    console.log("División " + (nro1/nro2));
    console.log("************************************") ;

    return "Hola ejemplo de función";
}

calculadora(6 , 7);
//var resultado = calculadora() ;

//Invocar funciones
for(var i = 1; i<=10; i++){
    console.log(i);
    calculadora(i,5);
}
*/


//Funcion con parametros opcionales


function porconsola(nro1, nro2){
    console.log("suma " + (nro1+nro2));
    console.log("Resta " + (nro1-nro2));
    console.log("Multiplicación " + (nro1*nro2));
    console.log("División " + (nro1/nro2));
    console.log("************************************") ;
}

function porpantalla(nro1, nro2){
    document.write("suma " + (nro1+nro2) + "<br/>");
    document.write("Resta " + (nro1-nro2) + "<br/>");
    document.write("Multiplicación " + (nro1*nro2) + "<br/>");
    document.write("División " + (nro1/nro2) + "<br/>");
    document.write("************************" + "<br/>");

}

function calculadora(nro1, nro2, mostrar=false){

    if(mostrar==false){
        porconsola(nro1 , nro2);

    return "Hola ejemplo de función";
    }else{
        porpantalla(nro1, nro2);
    }

    return true;

}

calculadora(5 , 5, false);
//var resultado = calculadora() ;

/*
//Invocar funciones
for(var i = 1; i<=10; i++){
    console.log(i);
    calculadora(i,5, false);
}
*/
