// JavaScript Document

// con deviceready nos aseguramos que el dispositivo este listo para ser usado
$(document).bind('deviceready', function(){ //cuando se da ondevide redy se ejecuta el siguiente codigo
    $(function(){
        $('form').submit(function(){ // cuando se ejecuta el submit se ejecuta lo de abajo
            var dataID = $(this).parent().attr('data-datos-id'); //this es lo que dispara el evento en este caso form, busca el atributo adentro del tag que engloba el form agarra el valor del atributo que en este caso es 1 y lo guarda en una variable.
            
			//aca usa ajax, serializar es convertir en string todos los datos a enviar en este caso se llama postdata, convierte todo el el this, osea el formulario
			var postData = $(this).serialize();
            $.ajax({
                type: 'POST', // hace un post
                data: postData+'&lid='+dataID, //mandando los datos del formulario concatenando el data id anterior
                // cargamos la url del servidor externo
                url: 'http://www.fernandobarciela.com/guardar.php', //cambiar la URL por nuestro hosting y subir la carpeta con todo esto
                success: function(data){
                    console.log(data);
                    $('#email').val('');
                    $('#comentario').val('');
                    alert('Tu comentario fue agregado');
                },
                error: function(data){
                    console.log(data);
                    alert('Ocurrio un error al enviar tu comentario');
                }
            });
            return false;
        });
    });
});