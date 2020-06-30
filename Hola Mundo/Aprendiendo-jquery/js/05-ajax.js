$(document).ready(function(){
    //alert("Validando peticiones AJAX....");

    //Load :  hacer petición ajax por GET e incrustar el resultado dentro de un div u otro control.
    //$("#datos").load("https://reqres.in/");   //Cargar todo el html por AJAX de la url.

    //Peticiones AJAX Métodos GET y POST
    $.get("https://reqres.in/api/users", {page: 1}, function(response){
       //console.log(response);
       response.data.forEach((element, index) => {
           $("#datos").append("<p>" + element.first_name + " " + element.last_name + " " + element.email + "</p>");
       });
    });

    $("#formulario").submit(function(e){
        e.preventDefault();
        var usuario = {
            "name": $('input[name="name"]').val(),
            "email": $('input[email="email"]').val()
        };
        console.log(usuario);

        /*
        $.post($(this).attr("action"), usuario, function(response){
            console.log(response);
        }).done(function(){
            //alert("Usuario creado correctamente.");
            document.write("Usuario creado correctamente.");
        });
        */

        //Petición AJAX con el método $.ajax
        $.ajax({
            type:  'POST',
            //datatype: 'json',
            url: $(this).attr("action"),
            data:   usuario,
            beforesend:     function(){
                console.log("Enviando datos usuario...");
            },
            success:    function(response){
                console.log(response);
            },
            error:  function(){
                console.log("Ocurrió un error");
            },
            timeout:    2000

        });
               
        return false;

    });

});