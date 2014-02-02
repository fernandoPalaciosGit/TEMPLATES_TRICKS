/*AJAX*/
$(document).ready(function() {
	$('.confirmation').on('click', 'button', function() {
		$.ajax('confirmation.html', {
			timeout: 3000,
			success: function(response) { $('.ticket').html(response).slideDown(); },
			error: function(request, errorType, errorMessage) {
				alert('Error: ' + errorType + ' with message: ' + errorMessage);
			},
			beforeSend: function() { $('.confirmation').addClass('is-loading'); },
			complete: function() { $('.confirmation').removeClass('is-loading'); }
		});
	});
	$('.confirmation').on('click', '.view-boarding-pass', function(event) {
		event.preventDefault();
		$('.view-boarding-pass').hide();
		$('.boarding-pass').show();
	});
});

/*SOLO LA CONFIRMACION DE UNA PETICION A AJAX*/
var confirmation = {
	init : function() {//se recogen los eventos
		$('.confirmation').on('click', 'button', this.loadConfirmation);//evento de peticion Ajax
		$('.confirmation').on('click', '.view-boarding-pass', this.showBoardingPass);//evento para acceder a los datos obtenidos
	},
	loadConfirmation : function(){
		$.ajax('confirmation.html', { /*AJAX*/ });
	},
	showBoardingPass : function(event){ /*como viene de un enlace <a>, debemos detener la ejecucion del DOM: "event.preventDefault();"*/ }
};
$(document).ready(function(){
	confirmation.init();
});

//MULTIPLES PETICIONE AJAX
//las funciones creadas seran CASES (Vacaciones), las cuales representan objetos (this), que iran conteniendo funciones que llamar (this.deatlles)
function Confirmation(el) {//le pasamos un elemento del DOM por parametro
	this.el = el;
	this.el.on('click', 'button', this.loadConfirmation);
	this.el.on('click', '.view-boarding-pass', this.showBoardingPass);
	this.loadConfirmation = function() { ... }
	this.showBoardingPass = function(event) { ... }
}
$(document).ready(function() {
	//creamos INSTACIAS de la clase
	var paris = new Confirmation($('#paris'));
	var london = new Confirmation($('#london'));
});

//NOS CENTRAMOS EN LA CONFIRMACION, que es la peticion AJAX
function Confirmation(el) {
	this.el = el;
	this.ticket = this.el.find('.ticket');

	this.loadConfirmation = function() {
		$.ajax('confirmation.html', {
			timeout: 3000,
			success: function(response) {
				this.ticket .html(response).slideDown();
			}
		});
	}

	this.el.on('click', '.view-boarding-pass', this.showBoardingPass);
	this.el.on('click', 'button', this.loadConfirmation);
}
var londres = new Confirmation($("#londres"));

//FORMULARIOS CON AJAX
//la peticion es de tipo post y atiende al evento de submit (<input type="submit">)
$("form").on("submit", function(event){
	event.preventDefault();//evitamos que el comportamiento predeternminado del DOM al enviar una peticion de tipo POST al server, refresque la pagina
	var form = $(this);
	$.ajax("/url", {
		type : "POST",
		data : form.serialize(),/*funcion que reune todos los campos del formulario*/
		success : function(result){
			form.remove();//ya no necesitamos el formulario
		}
	});
});

//FORMULARIOS CON AJAX y un CALLBACK de JSON
$("form").on("submit", function(event){
	event.preventDefault();
	var form = $(this);
	$.ajax(form.attr("action"), {
		type: form.attr("method"),
		data : form.serialize(),
		dataType: 'json',
		success : function(result){
			form.remove();
			request(result);
		},
		contentType: 'application/json'
	});
});
//result : objeto de json que contiene el resultado de la peticions
function request(result){
	var html = "";
	html+="<p>"+result.key1+"</p>";
	html+="<p>"+result.key2+"</p>";
	$("#contenidoAjax").html(html);
};

//PETICON a un  JSON que nos devuelva un ARRAY DE OBJETO SCON EL MISMO FORMATO
$.each(collection, function(<index>, <object>) {})
/*
<div class='favorite-0'>
...
</div>
<div class='favorite-1'>
...
</div>
<div class='favorite-2'>
...
</div>
*/
$("form").on("submit", function(event){
	event.preventDefault();
	var form = $(this);
	$.ajax(form.attr("action"), {
		type: form.attr("method"),
		data : form.serialize(),
		dataType: 'json',
		success : function(result){
			form.remove();
			request(result);
		},
		contentType: 'application/json'
	});
});
//result : objeto de json que contiene el resultado de la peticions
function request(result){/*AÑADIMOS A ELEMENTOS EXISTENTES EN EL HTML*/
	$.each(result, function(index, city){
		var favourite = $(".favorite-"+index);//apunto al elemnto del DOM donde quiero insertar la respuesta
		favorite.find("p").html(city.name);
		favorite.find("img").attr("src", city.image);
	});
};
/**OTRA SOLUCION: CREAMOS ELEMENTOS CON LA PETICION**/
function request(result){
	var statusElements = $.each(result, function(index, city){
		var favourite = $("<li></li>");
		favourite.append("<h3>"+city.name+"</h3>");
		favourite.append("'<figure><img src='img/"+city.image+"' alt='city of "+city.name+"'></figure>'");
		return favourite;
	});
	$(".contenidoAjax").html(statusElements);
};