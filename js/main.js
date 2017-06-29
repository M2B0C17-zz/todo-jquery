$(document).ready(function(){
  var tarea = $('input'),
  var btn = $('#btnAgregar'),
  var ul = $('#mensaje'),
  var rmvBtn = $('.rmvBtn');


  btn.on('click', function(e) {
  e.preventDefault();

  if(tarea == ""){
    alert("Debes escribir una tarea");
  } else {
    $('·mensaje').prepend('<li><input type="checkbox" class="check"> ' + tarea.val() + ' <button class="rmvBtn">x</button></li>');
    tarea.val('');
    }
  });   

  function remove() {
    $(this).closest('li').remove();
  }

  function marcado() {
    if (this.checked) {
      $(this).closest('li').addClass('done');
    } else {
      $(this).closest('li').removeClass('done');
    }
  }

  $(document).on('click', '.listaTarea', markThis);

  $(document).on('click', '.rmvBtn', removeItem);
   
});


 
$(document).ready(function(){
   $("button").click(function(e){ // no se como hacerlo sin el botón, pense en enter pero no lo logre
    e.preventDefault();
    var tarea1 = $('#toDoInput1').val();
    var marcar1 = $('#mensajes2').prop("checked",true);
    // No funciona lo /**/
    /*var caja = [];

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