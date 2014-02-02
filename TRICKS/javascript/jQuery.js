/*BLOQUE JQUERY*/
$(document).on("ready", function(){
});

/*BLOQUE JQUERY dentro de un javaScript*/
window.onload = init;

/*especificamos un bloque jQuery a traves de una funcion anonima */
(function($, window){/*especificamos que $ € jQuery*/
	/*INSTRUCCION jQuery*/
})(jQuery, window);/*pasamos window, que es una variable global de javaScript
 					a la funcion anonima de jQuery, xa q la reconozca*/

/*EVENTO que se ejecuta UNA SOLA VEZ*/
$('button').on('click', function() {
	 var results = $(this).closest('.tour').find('.results');
	 //le apagamos el evento de click
	 results.append('<p>añadir como ultimo hijo</p>');
	 $(this).off("click");
});

//EVENTO con varios "NAMESPACE" sobre el mismo elemento, que ejecutan cosas diferentes
// Obtener el tiempo
$('button').on('click.weather', function() {
	var results = $(this).closest('li').find('.results');
	results.append('<p>el tiempo</p>');
	$(this).off('click.weather');
});
// Obtener la photos
$('button').on('click.photos', function() {
	var tour = $(this).closest('li');
	var results = tour.find('.results');
	results.append('<p><img src="/assets/photos/'+tour.data('loc')+'.jpg" /></p>');
	$(this).off('click.photos');
});

//accionar EVENTOS automaticamente
$(document).ready(function(){
	$("button").on("click.weather", elTiempo);
	$("button").on("clicc.pictures", lasFotos);
	$("button").trigger("click");//al cargarse la pagina, los eventos de "click" se accionaran automaticamente
};

//crear PLUGINS de jQuery
//son funciones que extienden el elemento que los invoca: $(this) = el.$.fn.funcion()
(function($, window, undefined){
	$.fn.funcAnonima = function(){
		console.log("funcion externa");
	};

})(jQuery, window);
// $("#id").funcAnonima();


//extender objetos que pasamos como parametros a una funcion
$.fn.precios = function(dias){
	var eleccion = $.extend({
		dias : 3,
		vacaiones : this,
		precioDia : $(this).data("precio")
	}, dias);
	eleccion.vacaciones.on("click.precio", "button", function(){
		/*
		elecion.dias = 5 //se sobrescriben si hay dos elementos con la misma llave, se escoge el ultimo
		eleccion.vacaciones = $(".vacaciones")
		elec cion.precioDia= $(".vacaciones").data("precio")
		*/
	});
};
$(".vacaciones").precios( {dias:5} );//le paso como parametro un objetio que se une a los otyros en una sola variable