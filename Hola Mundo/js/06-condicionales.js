'use scrict'

//Condicional if
var edad = 35 ;
var edad2 = 40 ;
if(edad >= 18 ){
    console.log("La persona con " + edad + " años es mayor de edad: ") ;

    if(edad < 18){
        console.log("La persona es menor de edad porque tiene "+ edad + " años");
    }
     
    if(edad > 50){
        console.log("La persona con estos años " + edad + " es un anciano");
    }
    
}else{
    console.log("La persona es un niño porque tiene " + edad);
}

/*
Operadores lógicos
AND : &&
OR : ||   
NEGACIÓN : !
*/

var modelo = 2015 ;
edad = 18 ;

//Negación
if(modelo != 2019){
    console.log("El modelo " + modelo + " no es 2019." ) ;
} 

//And
if(edad == 18 && modelo == 2017){
    console.log("La persona nación en el año 1999 porque tiene " + edad + " años.") ;
}else{
    console.log("Los datos ingresados no son correctos!!!")
}


//Switch
