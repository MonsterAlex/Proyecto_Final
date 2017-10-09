/*
  Creación de una función personalizada para jQuery que detecta cuando se detiene el scroll en la página
*/
$.fn.scrollEnd = function(callback, timeout) {
  $(this).scroll(function(){
    var $this = $(this);
    if ($this.data('scrollTimeout')) {
      clearTimeout($this.data('scrollTimeout'));
    }
    $this.data('scrollTimeout', setTimeout(callback,timeout));
  });
};
/*
  Función que inicializa el elemento Slider
*/

function inicializarSlider(){
  $("#rangoPrecio").ionRangeSlider({
    type: "double",
    grid: false,
    min: 0,
    max: 100000,
    from: 200,
    to: 80000,
    prefix: "$"
  });
}
/*
  Función que reproduce el video de fondo al hacer scroll, y deteiene la reproducción al detener el scroll
*/
function playVideoOnScroll(){
  var ultimoScroll = 0,
      intervalRewind;
  var video = document.getElementById('vidFondo');
  $(window)
    .scroll((event)=>{
      var scrollActual = $(window).scrollTop();
      if (scrollActual > ultimoScroll){
       video.play();
     } else {
        //this.rewind(1.0, video, intervalRewind);
        video.play();
     }
     ultimoScroll = scrollActual;
    })
    .scrollEnd(()=>{
      video.pause();
    }, 10)
}

inicializarSlider();
playVideoOnScroll();

/*
    Funcion Para obtener informacion del archivo json y peticiones de busqueda
*/

$.ajax({
    url: "data-1.json",
    type: 'GET',
    dataType: 'json',
    data: {"Direccion" : "", "Ciudad" : "", "Telefono" : "", "Codigo_Postal" : "", "Tipo" : "", "Precio" : ""},
    success: function(data){
                    console.log(data);
                },
});
/*
//Mostrar todos los resultados

$("#mostrarTodos").click(function(e) 
{
    e.preventDefault();
	var nombre = $("#nombre").val(),
	apellido = $("#apellido").val(),
	edad = $("#edad").val(),

	datos = {"nombre":nombre, "apellido":apellido,"edad":edad};

	$.ajax({
		url: "datos.php",
		type: "POST",
		data: datos
	}).done(function(respuesta){
		if (respuesta.estado === "ok") {
			console.log(JSON.stringify(respuesta));

			var nombre = respuesta.nombre,
			apellido = respuesta.apellido,
			edad = respuesta.edad;

			$(".respuesta").html("Servidor:<br><pre>"+JSON.stringify(respuesta, null, 2)+"</pre>");
		}
	});
});


//Filtrar por tipo y ciudad

        function buscar() {
    var CiudadBuscada = $("select#selectCiudad").val();
    var TipoBuscada = $("select#selectTipo").val();
    
    //Ciudad
    if (CiudadBuscada != "") 
    {
        $.post("buscador.php", {valorBusqueda: CiudadBuscada}, function(mensaje) 
        {
            $("#Resultados").html(mensaje); //mostrar todo en el div
        }); 
    } 
    else 
    { 
        ("#Resultados").html('');
	};
    
    //Tipo
    if (TipoBuscada != "") 
    {
        $.post("buscador.php", {valorBusqueda: TipoBuscada}, function(mensaje) 
        {
            $("#Resultados").html(mensaje); //mostrar todo en el div
        }); 
    } 
    else 
    { 
        ("#Resultados").html('');
	};
};






/*
(function()
 {
	
    function siRespuesta(r)
    {
        $('#Resultado').html(r);   // Mostrar la respuesta del servidor en el div con el id "respuesta"
    }
 
    function siError(e)
    {
        alert('Ocurrió un error al realizar la petición: '+e.statusText);
    }
 
    function peticion(e)
    {
 
        // Obtener valores de los campos de texto
        var parametros = {
            variable1: $('#text1').val(),
            variable2: $('#text2').val()
        };
 
        // Realizar la petición
    	var post = $.post(
                              "servidor.php",    // Script que se ejecuta en el servidor
    	                      parametros,    	                       
    	                      siRespuesta,    // Función que se ejecuta cuando el servidor responde
    	                      'html'          // Tipo de respuesta del servidor
                              );
 
        /* Registrar evento de la petición (hay mas)
           (no es obligatorio implementarlo, pero es muy recomendable para detectar errores)*/ 
/* 
    	post.error(siError);         // Si ocurrió un error al ejecutar la petición se ejecuta "siError"
    }
 
    $('#mostrarTodos').click(peticion); // Registrar evento al boton "Calcular" con la funcion "peticion"
});*/