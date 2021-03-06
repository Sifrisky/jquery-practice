# jquery-practice

# jquery

Elementos esenciales para poder trabajar con esta librería paso a paso.

## ¿QUÉ ES JQUERY?
Es una librería de JavaScript rápida, pequeña y poderosa en funciones. Podemos manejar eventos, manipular el DOM HTML, agregar animaciones, Ajax entre otras cositas.

## VENTAJAS DE UTILIZAR JQUERY.
Para mi las principales ventajas de utilizar jQuery son:

- Compatibilidad con navegadores antiguos.
- Fácil escritura y comprensión del código.
- Es Open Source.
- Muchos Plugins
- Facilidad de utilizar AJAX

Ahora lo bonito... comencemos a trabajar con Jquery!

**********************************************************************************************************************************************************************

## INSTALACIÓN DE JQUERY EN NUESTRO SITIO WEB.
Exiten dos métodos:
1. El más fácil de todos es a través de un CDN.
2. Descargar la libería y crear un nuevo archivo JS con todos sus códigos.

## ¿POR QUE PREFIERO A TRAVES DE UN CDN?

Las principales ventajas son:

- Está alojado en muchos servidores en todo el mundo, por lo tanto la probabilidad de que se caiga es bajisima.
- Si nuestro usuario ya visitó un sitio web con tu mismo CDN, ya lo tiene en el navegador web, por lo tanto no tendrá que descargarlo nuevamente :)

## ESTRUCTURA DE UN DOCUMENTO HTML CON JQUERY CDN.

A continuación dejo el sitio web donde podrán utilizar el CDN de jquery: https://code.jquery.com/

Por ejemplo yo utilizaré la versión comprimida:

CDN JQUERY
``
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js" integrity="sha512-bLT0Qm9VnAYZDflyKcBaQ2gg0hSYNQrJ8RilYldYQ1FxQYoCLtUjuuRuZo+fjqhx/qtq/1itJ0C2ejDxltZVFg==" crossorigin="anonymous"></script>
``

## BOOTSTRAP.
Trabajare con solo los hilos de css
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">

## PRIMEROS PASOS (Aquí puedes revisar la documentación oficial de jQuery). 
Para ejecutar el código jQuery tenemos que esperar que todo el documento HTML esté cargado, para eso llamamos a jQuery con el signo de "$" y seleccionamos el documento y la función .ready

``
$( document ).ready(function() {
 
  // Todo el código aquí.
  
 
});
``

## SELECTORES CON JQUERY.
En este primer ejemplo seleccionaremos una etiqueta, un ID y una clase CSS para manipular el contenido HTML de una etiqueta "h1", además de comparar el código de jQuery con JavaScript.

``
$(document).ready(function () { 

    $('h1').html('texto modificado con etiqueta h1');
    $('#idh1').html('texto modificado con ID');
    $('.text-center').html('texto modificado con clase');
    
    //Forma con Javascript
    //document.querySelector('h1').innerHTML = 'Texto modificado';
})
``

## DOM (MANIPULANDO EL DOCUMENTO) CON JQUERY.
En este ejemplo veremos como agregar una clase o bien removerla en jQuery.

$(document).ready(function () { 

    //Agrengando Clase
    $('h1').addClass('display-4');

    //Quitando Clase
    $('h2').removeClass('text-center');

})

<!--podemos usar cualquier etiqueta container o contenido
en la h1 <h1 class="display-4"> esto pone la letra mas linda mas delgada-->

$( document ).ready(function() {
    //console.log('funcionando');
    
    // Todo el código aquí.
 
    //la etiqueta html reemplaza todo el codigo del mensaje que tengamos (incorpora un nuevo texto)
    //seleccionando h1 a traves de una etiqueta y toma todos los h1 del sitio web. 
    //Se puede seleccionar a traves de una clase.
   $('h1').html('Etiqueta h1'); 
   
   
   //se ejecuta lo ultimo de la linea, reemplaza a h1 y luego al texto desde clase.
   $('.display-4').html('desde clase');

//reemplazar desde id
$('#idh1').html('desde id');

Las operaciones anteriores en js seria el equivalente a "document.querySelector"

Ejemplo:

  document.querySelector('h1').innerHTML = "Etiqueta h1";
  document.querySelector('.display').innerHTML = "desde clase";
  document.querySelector('#idh1').innerHTML = "desde id";

  // $('.container h1').html('cambio de texto');
  // $('.container h1:first').html('cambio de texto');
  
 ACCEDEMOS AL CONTAINER PERO AL PRIMERO.
   $('.container h1:last').html('cambio de texto');
});-->

## OTRAS FUNCIONES MAS UTILIZADAS SON:

- append()
- toggleClass()
- css()
- remove()
- attr()

## EVENTOS CON JQUERY.
Existen muchos eventos que podemos realizar con jQuery, pero el más utilizado es el evento click, el cual tiene dos opciones.

$(document).ready(function () {
    
    - Evento click Agregando clase.
    
    $('#boton1').click(function(){
        $('#contenido').addClass('text-center');
    });


    - Evento click Agregando estilo en css.
    
    $('#boton2').click(function(){
        $('#contenido h2').css('color','salmon'); //SELEcciono elemento y luego aplicar la funcion
    });

    - Alternativa al evento click.
    
    $('#boton3').on('click',function(){
        $('#contenido h2').toggleClass('display-4');
    });

});

## Mas ejemplos con el evento keyup().

$(document).ready(function() {
  //Declarar variables reutilizables
  var input = $("#nombre");
  var contenido = $("#contenido");

  - Evento keyup.
   input.keyup(function() {
    console.log(input.val()); //verificamos en consola
    contenido.html(input.val()); //agregamos en contenido

  - Podemos verificar si está vacio el input.
    
    if (input.val() === "") {
      contenido.html("Estoy esperando...");
    }
  });
});

## OTROS EVENTOS MAS UTILIZADOS SON:

- submit()
- preventDefault()
- EFECTOS CON JQUERY

## Podemos agregar atractivos efectos muy fácilmente con jQuery, aquí te dejo un ejemplo:

$(document).ready(function() {
  var ocultar = $("#ocultar");
  var mostrar = $("#mostrar");
  var toggle = $("#toggle");
  var elemento = $("#elemento");

  ocultar.click(function() {
    elemento.hide(1000);
  });

  mostrar.click(function() {
    elemento.show(1000);
  });

  toggle.click(function() {
    elemento.toggle(1000);
  });
});

## OTROS EFECTOS MAS UTILIZADOS.

- fadeIn()
- slideDown()
- animate()
- stop()
- Callback Functions
- Chaining

## Letras con lineas delgadas. 
Podemos usar cualquier etiqueta container o contenido en la h1  <!--<h1 class="display-4">-->

 - La etiqueta html reemplaza todo el codigo del mensaje que tengamos (incorpora un nuevo texto)
 $( document ).ready(function() {
   console.log('funcionando');
   
 - Seleccionando h1 a traves de una etiqueta y toma todos los h1 del sitio web
   $('h1').html('Etiqueta h1');
   
 - Se puede seleccionar a traves de una clase. Aqui se ejecuta lo ultimo de la linea, reemplaza a h1 y luego al texto desde clase
  $('.display-4').html('desde clase'); 

- Reemplazar desde id
$('#idh1').html('desde id');

  ## Las operaciones anteriores en js seria el equivalente a "document.querySelector"
  
  Ejemplo:
  document.querySelector('h1').innerHTML = "Etiqueta h1";
  document.querySelector('.display').innerHTML = "desde clase";
  document.querySelector('#idh1').innerHTML = "desde id";

 // $('.container h1').html('cambio de texto');
 // $('.container h1:first').html('cambio de texto');
   $('.container h1:last').html('cambio de texto'); //ACCEDEMOS AL CONTAINER PERO AL PRIMERO
});

## Si quiero una imagen. repito en index y escribo una sola vez en jquery
 
       <img src="" alt="">
       <img src="" alt="">
       <img src="" alt="">

 ## Trabajando con botones: 
  - Hago espaciado my-5 a la clase container.
  - Agrego los botones y creo un nuevo div de resultado.
  - Un parrafo, clase div con dark y texto 4 y margen top 5.
 
## REALIZANDO EVENTO CON BOTONES

## Detectar los eventos.

var parrafo= $('#resultado p');

- Agrega.

$('.btn-primary').click(function(){
  parrafo.addClass('display-4');
})

- Quita.

$('.btn-danger').click(function(){
  parrafo.removeClass('display-4');
})

- Agrega y quita (lo que hace cada boton lo hace toggle en uno).

$('.btn-warning').click(function(){
  parrafo.toggleClass('display-4');
})
});


