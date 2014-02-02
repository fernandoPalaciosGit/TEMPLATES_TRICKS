;/*VARIABLES GLOBALES*/
var canvas =  document.getElementById("canvasAnimacion");
var ctx = canvas.getContext("2d");
var botonAnimacion = document.getElementById("iniciarAnimacion");

/*ANIMACION*/
var velocidad = 10;
var direccion = velocidad;
var intervalo;
var iniciar = false;
var x=50, y=10;
 
;window.addEventListener("load", init, false);
function init(){
	if(!document.getElementById) return;
	console.log("cargado: animacion.js");
	
	ctx.fillStyle = "red";
	ctx.arc(x, y, 10, 0, 7);
	ctx.fill();

	/*boton de animacion*/
	iniciarAnimacion.addEventListener("click", animar, false);
}


function animar(){
	if(iniciar){
		this.value = "Iniciar";
		/*pausa la animacion*/
		window.clearInterval(intervalo);
		iniciar=false;
	}else{
		this.value = "Detener";
		/*EJECUTAMOS LA ANIMACION*/
		/*32 es el tiempo de intervalo , son los fotogramas*/
		intervalo = window.setInterval(function(){
			moverYdibujar(canvas, ctx);
		}, 32);
		iniciar = true;
	}

}

/*dibujar circulo*/
function dibujar(canvas, ctx, x, y){
	/*limpiar canvas, si no se superponen los dibujos dentro: solucion, reiniciar el contecto, igualar el ancho*/
	canvas.width = canvas.width;
	ctx.fillStyle = "red";
	ctx.arc(x, y, 10, 0, 7);
	ctx.fill();
}

/*mover las coordenadas*/
function moverYdibujar(canvas, ctx){
	/*la pelota va hacia abajo (+)*/
	/*la pelota va hacia arriba (-)*/
	if(y > (canvas.height -20)) direccion = -velocidad;
	if(y < (20)) direccion = velocidad;
	y += direccion;
	dibujar(canvas, ctx, x, y);
}