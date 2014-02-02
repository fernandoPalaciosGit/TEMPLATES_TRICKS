;window.addEventListener("load", init, false);
function init(){
	if(!document.getElementById) return;
	console.log("cargado: intervalo-tiempo.js");

	var texto = document.getElementById("intervalo");
	var contador = 0;

	/*BUCLE*/
	var intervalo = window.setInterval(function(){
		texto.innerHTML=""+contador;
		contador++;
	}, 1000);
	/*a los 10 segundos acabamos elñ bucle*/	
	window.setTimeout(function(){
		window.clearInterval(intervalo);
	}, 10000);/*TARDARA 2 SEGUNDOS MENOS POR CARGAR LA PAGINA*/		

}