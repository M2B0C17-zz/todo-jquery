/*Guardar Datos*/

function guardarDatos(){
  localStorage.mensaje = document.getElementById('mensaje').value;
  localStorage.mensajes2 = document.getElementById('mensajes2').value;
}

/*JQuery*/
$(document).ready(function(){
  $('.listaTarea').html(localStorage.getItem('listItems'));
  $("button").click(function(e){ // no se como hacerlo sin el botón, pense en enter pero no lo logre
    e.preventDefault();
    var tarea = $('#toDoInput1').val();
    var marcar = $("ul").append('<input type="checkbox>'); // no funciona u.u

    if(tarea == ""){
      alert("Debes escribir una tarea");
    }else if{
      $('.listaTarea').append("<li><input class='checkbox' type='checkbox'/>" + tarea + "<a class='remove'>x</a><hr></li>");
      localStorage.setItem('listItems', $('.listaTarea').html());
      $('#toDoInput1').val("");
    }
  });
  
  $(document).on('change', '.checkbox', function()
    {
      if($(this).attr('checked'))
      {
        $(this).removeAttr('checked');
      }
      else
      {
        $(this).attr('checked', 'checked');
      }

      $(this).parent().toggleClass('completed');
       
      localStorage.setItem('listItems', $('.listaTarea').html());
    });
   
    $(document).on('click', '.remove', function()
    {
      $(this).parent().remove();
      localStorage.setItem('listItems', $('.listaTarea').html());
    });
  });



  $("button").click(function(e){ // no se como hacerlo sin el botón, pense en enter pero no lo logre
    e.preventDefault();
    var tarea1 = $('#toDoInput1').val();
    var marcar1 = $("ul").append('<input type="checkbox>'); // no funciona u.u
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