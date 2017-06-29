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
    if(tarea == ""){
      alert("Debes escribir una tarea");
    }else {
      $('#mensaje').append('<div><span class="text-left"><p>' + tarea + '<button>Remove</button></p></span></div>');
      $('#mensajes2').append('<div><span class="text-left">' + tarea + '<button>Remove</button></p></span></div>');
    }
  });
});
