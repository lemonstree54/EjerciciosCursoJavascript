'use strict'

window.addEventListener("load", function(){
    console.log("DOM cargado correctamente!!!") ;

    var formulario = document.querySelector("#formulario");
    var box_dashed =document.querySelector(".dashed");
    box_dashed.style.display = "none";

    formulario.addEventListener('submit', function(){
        console.log("Evento capturado!!!");
        
        var nombre = document.querySelector("#nombre").value ;
        var apellido = document.querySelector("#apellidos").value ;
        var edad = parseInt(document.querySelector("#edad").value) ;

        if(nombre.trim() == null || nombre.trim().length == 0){
            document.querySelector("#error_nombre").innerHTML = "El nombre no es válido" ; //para mostrar el mensaje de error debajo del control text.
            alert("El nombre no es válido..");
            return false;
        }else{
            //se puede personalizar el control con colores de texto o de control para indicar que hay un error.
            document.querySelector("#error_nombre").style.display ="none";//oculta el mensaje de error cuando el dato sea válido.
        }

        
        if(apellido.trim() == null || apellido.trim().length == 0){
            alert("Los apellidos no son válidos..");
            return false;
        }
        
        
        if(edad == null || edad <= 0 || isNaN(edad)){
            alert("La edad no es válida..");
            return false;
        }

        box_dashed.style.display = "block";

        var p_nombre = document.querySelector("#p_nombre span");
        var p_apellido = document.querySelector("#p_apellido span");
        var p_edad = document.querySelector("#p_edad span");

        p_nombre.innerHTML = nombre;
        p_apellido.innerHTML = apellido;
        p_edad.innerHTML = edad;
        

        /*
        var datosUsuario = [nombre, apellido, edad];
        var indice ;
        for(indice in datosUsuario){
            var parrafo = document.createElement("p");
            parrafo.append(datosUsuario[indice]);
            box_dashed.append(parrafo);
        }
        */
    }) ;

});
    
