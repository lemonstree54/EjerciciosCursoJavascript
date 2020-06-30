$(document).ready(function(){
    //alert("Página load...");

    //Mover elementos por la página.
    $(".elemento").draggable();    

    //Redimiensionar elementos.
    $(".elemento").resizable();

    //Seleccionar elementos u ordenarlos.
    //$(".listaSeleccionable").selectable(); //no se puede utilizar al mismo tiempo con el Sortable
    $(".listaSeleccionable").sortable({
        update: function(event, ui){
            console.log("Lista cambió...");        
        }
    });

    //Drop
    $("#elemento-movido").draggable();
    $("#area").droppable({
        drop: function(){
            console.log("Arrastrar y soltar");
        }

    });


    //Efectos
    $("#mostrar").click (function(){
            //$(".caja-efectos").toggle("fade");
            //$(".caja-efectos").toggle("explode");
            //$(".caja-efectos").toggle("blind");
            //$(".caja-efectos").toggle("slide");
            //$(".caja-efectos").toggle("drop");
            //$(".caja-efectos").toggle("puff");
            //$(".caja-efectos").toggle("fold");
            //$(".caja-efectos").toggle("scale");
            $(".caja-efectos").toggle("shake", 100);
    });

    //Tooltip
    $(document).tooltip();

    //Dialogo
    $("#cuadro_dialogo").click(function(){
        $("#popup").dialog();
    });
    
    //Calendario datepicker
    $("#calendario").datepicker();

    //Tabs
    $("#pestanas").tabs();


    });

