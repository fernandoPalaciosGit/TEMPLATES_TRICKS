window.addEventListener("load", init);
function init() {
	console.log("cargado: rectangulos.js");
	var canvas = document.getElementById("canvasRect");
	/* CTX objeto de canvas que permitiran dibujar graficos */
	var ctx = canvas.getContext("2d");

	console.log(ctx);/* obtenemos los atributos del objeto */
	
	/*GLOBAL-ALPHA*//*como el opacity*/
	ctx.globalAlpha=0.5;

	/* PRIMERO: fefinimos sus atributos : fillStyle/StrokeStyle/lineWidth*/
	/* FINAL: lo dibujamos: fillRect/strokeRect */
	ctx.fillStyle = "red";
	ctx.fillRect(20, 20, 50, 50);

	ctx.fillStyle = "orange";
	ctx.strokeStyle = "blue";
	ctx.strokeRect(90, 90, 50, 50);/* se dibuja el borde */
	ctx.fillRect(90, 90, 50, 50);/* se dibuja el rectangulo */

	ctx.fillStyle = "yellow";
	ctx.fillRect(160, 20, 50, 50);
	
	/*GROSOR DE LINEAS*/
	ctx.fillStyle="rgba(0,0,200,0.3)";
	ctx.strokeStyle="orange";
	ctx.lineWidth = 15;
	ctx.fillRect(200, 90, 50, 50);
	ctx.strokeRect(200, 90, 50, 50);
		
}