$( document ).ready(function() {
    //console.log('funcionando');
    
 
//SELECCIONAR ELEMENTOS EN JQUERY:
//seleccionando h1 a traves de una etiqueta y toma todos los h1 del sitio web
/*$('h1').html('Etiqueta h1');  
//Se puede seleccionar a traves de una clase.
$('.display-4').html('desde clase'); //se ejecuta lo ultimo de la linea, reemplaza a h1 y luego al texto desde clase.
//reemplazar desde id
$('#idh1').html('desde id');
 
  //SELECCIONAR ELEMENTOS EN JS:
  /*docuement.querySelector('h1').innerHTML = "Etiqueta h1";
  docuement.querySelector('.display').innerHTML = "desde clase";
  docuement.querySelector('#idh1').innerHTML = "desde id";*/

  // $('.container h1').html('cambio de texto');
  // $('.container h1:first').html('cambio de texto');
  //$('.container h1:last').html('cambio de texto');

  /*$('#idh1').addClass('text-danger');
  $('#idh1').removeClass('display-4');

  $('#contenido').append('<h1>otro elemento al final</h1>');
  $('#contenido').prepend('<h1>otro elemento al inicio</h1>');

$('#color-azul').css('color', 'blue');
$('#color-azul').css({color: 'blue', background: 'salmon', padding: '20px'});

$('#color-azul').hide();

$('img').attr('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_hbUApsP7Dsm3dj3X6fvzol4_f9Q6ITmaDA&usqp=CAU');

$('img:last').attr('width', '150');

//REALIZANDO EVENTOR CON BOTONES

//Primero detectar los eventos.

var parrafo= $('#resultado p');
//agrega
$('.btn-primary').click(function(){
  parrafo.addClass('display-4');
})
//quita
$('.btn-danger').click(function(){
  parrafo.removeClass('display-4');
})

//agrega y quita (lo que hace cada boton lo hace toggle en uno)
$('.btn-warning').click(function(){
  parrafo.toggleClass('display-4');
})

//FORMULARIO --> submit que recibe? una funcion evento submit
$('#formulario').submit(function(evento){
  evento.preventDefault();
    //console.log('click');
  //identificador id name, nos devuelve lo que escribe el usuario, lo guardamos y esta var es la que pintamos en la consola
  var nombre= $('#nombre').val();
  console.log(nombre);
})*/

//EFECTOS JQUERY, PINTAR, SACAR, HACER LAS 2 FUNCIONES!!

/*var resultado= $('#resultado');

$('.btn-primary').click(function(){
  resultado.hide(1000);
})
$('.btn-danger').click(function(){
  resultado.show();
})
$('.btn-warning').click(function(){
  resultado.toggle(1000); //hace las 2 funciones oculta y muestra
})*/

//EFECTOS FADEIN, toma slow que es una nimacion lenta y los segundos.


/*var resultado= $('#resultado');

$('.btn-primary').click(function(){
  resultado.fadeOut(3000);
})
$('.btn-danger').click(function(){
  resultado.fadeIn(2000); //cambair el nombre de botones
})
$('.btn-warning').click(function(){
  resultado.toggle(1000); //hace las 2 funciones oculta y muestra
})*/

//EFFECT-ANIMATION

/*var resultado= $('#resultado');

$('.btn-primary').click(function(){
  resultado.animate({
    left: '250px',
  opacity: '0.5',
  height: '+=150px',
  width: '+=150px', // +=sugnifica tamaño actual mas 150
},'3000'); //se agranda en 3 sec
})*/


//EFECTO INVERSO
//EFFECT-ANIMATION

var resultado= $('#resultado');

$('.btn-primary').click(function(){
  resultado.animate({
    left: '250px',
    opacity: '0.5',
    height: '+=150px',
    width: '+=150px' // +=sugnifica tamaño actual mas 150
  },3000, function(){
    resultado.animate({
    left: '-250px',
    opacity: '1',
    height: '-=150px',
    width: '-=150px'
    }, 1000)
  })
});
});

//ver porque no funciona el boton negro!! style en html


