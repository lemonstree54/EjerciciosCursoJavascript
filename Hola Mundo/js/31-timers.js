'use strict'

window.addEventListener('load', function(){

    //Timers
    //setInterval = se ejecuta cada periodo de tiempo.
    //setTimeout = se ejecuta una sola vez en un periodo de tiempo.

    function intervaloTiempo(){
        var tiempo  = setInterval( function() {
            console.log("Hola, validando un intervalo de tiempo") ;
    
            var encabezado = document.querySelector("h1")
            if(encabezado.style.fontSize == "50px"){
                encabezado.style.fontSize = "20px" ;
            }else{
                encabezado.style.fontSize = "50px" ;
            }
            
        }, 1000);

        return tiempo;
    }
    
    var tiempo = intervaloTiempo();

    var stop = document.querySelector("#stop")
    stop.addEventListener("click", function(){
        alert("El intervalo ha sido detenido!!!");
        clearInterval(tiempo);
    }) ;

    var start = document.querySelector("#start")
    start.addEventListener("click", function(){
        alert("Has iniciado el intervalo de nuevo!!!") ;
        intervaloTiempo();
    }) ;
    

}) ;

