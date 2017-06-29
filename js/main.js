/*Guardar Datos*/

function guardarDatos(){
  localStorage.mensaje = document.getElementById('mensaje').value;
  localStorage.mensajes2 = document.getElementById('mensajes2').value;
}

/*JQuery*/
$(document).ready(function(){
  $("button").click(function(e){ // no se como hacerlo sin el botón, pense en enter pero no lo logre
    e.preventDefault();
    var tarea = $('#toDoInput1').val();
    var marcar = $("#mensaje").prop("checked", true); // no funciona u.u

    if(tarea == ""){
      alert("Debes escribir una tarea");
    }else {
      $('#mensaje').append('<div><span class="text-left"><p>' /*+ marcar*/ + tarea + '<button>Remove</button></p></span></div>');
    }
  });
});

$(document).ready(function(){
  $("button").click(function(e){ // no se como hacerlo sin el botón, pense en enter pero no lo logre
    e.preventDefault();
    var tarea1 = $('#toDoInput1').val();
    var marcar1 = $("#mensajes2").prop("checked",true);
    // No funciona lo /**/
  /*  var caja = [];

    $("#toDoInput1 input[type=checkbox]:checked").each(
    function ()
    {
        caja.push($(this).data("mensajes2"));
    });
  */
    if(tarea == checked){
      $('#mensajes2').append('<div><span class="text-left">' + tarea + '<button>Remove</button></p></span></div>');
    }
  });
});