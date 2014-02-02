;window.addEventListener("load", init, false);
function init(){
	if(!document.getElementById) return;
		console.log("cargado: sonrisa.js");
		
		/*1 - dibujar una sononrisa desde funcion*/
		var canvas1 = document.getElementById("canvasSmile1");
		var ctx1 = canvas1.getContext("2d");
		setSmile(ctx1, "blue");

		/*2 - una pila a traves de un punto se restauracion (SAVE+REASTORE)*/
		var canvas2 = document.getElementById("canvasSmile2");
		var ctx2 = canvas2.getContext("2d");
		/*cara*/
		setSmile(ctx2, "red");
		/*rectangulos*/
		ctx2.strokeStyle="black";/*estilo GLOBAL*/
		ctx2.fillStyle="yellow";
		ctx2.strokeRect(240, 10, 20, 30);
		ctx2.fillRect(240, 50, 30, 20);
		/*rectanculo*/
		setRectangulo(ctx2, 15, "rgba(0,0,200,0.3)", "peru");
}

function a_radianes(grados){
	return (grados*Math.PI)/180;
}

function setSmile(ctx, color){
	/*debe estar embebida en un SAVE+REASTORE, para no interrumpir en los estilos globales*/
	ctx.save();
	ctx.strokeStyle=color;
	ctx.beginPath();/*OJOS*/
	ctx.arc(50, 50, 10, a_radianes(0), a_radianes(360), true);
	ctx.moveTo(50,80);
	ctx.arc(50, 50, 30, a_radianes(90), a_radianes(180), true);
	ctx.moveTo(160,50);
	ctx.arc(150, 50, 10, a_radianes(0), a_radianes(360), true);
	ctx.moveTo(150,80);
	ctx.arc(150, 50, 30, a_radianes(90), a_radianes(360), false);
	ctx.stroke();/*dibujamos ojos*/

	ctx.beginPath();/*BOCA*/
	ctx.arc(90, 110, 30, a_radianes(0), a_radianes(180), false);
	ctx.stroke();/*dibujamos boca*/
	ctx.restore();
}

function setRectangulo(ctx, linea, borde, relleno){
	ctx.save();
	ctx.lineWidth = linea;
	ctx.strokeStyle = borde;
	ctx.fillStyle = relleno;
	ctx.fillRect(200, 90, 50, 50);
	ctx.strokeRect(200, 90, 50, 50);	
	ctx.restore();
}
