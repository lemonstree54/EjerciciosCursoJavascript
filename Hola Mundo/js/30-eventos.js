'use strict'

//Eventos del ratón

window.addEventListener('load', ()=>{
    function cambiarColor(){
        console.log("presionaste CLICK") ;
        var bt = boton.style.background ;
        if (bt = "green"){
            boton.style.background = "red";
    
        }else{
            boton.style.background = "blue" ;
        }
        return true;
    
    }
    
    
    var boton = document.querySelector("#boton");
    
    //se puede capturar cualquier evento de la pantalla. En este caso el evento CLICK
    boton.addEventListener('click', function(){
        //cambiarColor()
        this.style.background = "blue";
        console.log(this);
    
    }) ;
    
    
    //Evento Mouse over
    boton.addEventListener('mouseover', function (){
        boton.style.background = "#ccc" ;
    })
    
    
    //Evento Mouse out
    boton.addEventListener('mouseout', function(){
        boton.style.background = "black" ;
    })
    
    //Evento Focus
    var input = document.querySelector("#campo_nombre");
    input.addEventListener('focus', function(){
        console.log("[Focus] Estás en el input.") ;
    })
    
    //Evento Blur
    input.addEventListener('blur', function(){
        console.log("[Blur] Estás en el blur.") ;
    })
    
    //Evento Keydown. Cuando se pulsa una tecla.
    input.addEventListener('keydown', function(event){
        console.log("[keydown] Presionaste la tecla keydown: .", String.fromCharCode(event.keyCode));
    })
    
    //Evento Keypress. Cuando se presiona la tecla.
    input.addEventListener('keypress', function(event){
        console.log("[keypress] Presionaste la tecla keypress: .", String.fromCharCode(event.keyCode));
    })
    
    //Evento keyup. Capturar el evento al levantar el dedo de la tecla.
    input.addEventListener('keyup', function(event){
        console.log("[keyup] Presionaste la tecla keyup: .", String.fromCharCode(event.keyCode));
    })
    
    }) ;
 
