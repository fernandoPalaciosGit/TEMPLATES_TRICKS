window.addEventListener("load", init, false);
function init(){
	console.log("iniciado: figuras.js");
	var canvas = document.getElementById("canvasFig");
	var ctx = canvas.getContext("2d");
	
	/*dibujar ojos*/
	ctx.beginPath();/*indicamos nuevo trazo*/
	ctx.arc(50,50,10,a_radianes(0), a_radianes(360), false);
	ctx.moveTo(78, 65);
	ctx.arc(50,50,30,a_radianes(30), a_radianes(150), true);
	ctx.moveTo(160, 50);
	ctx.arc(150,50,10,a_radianes(0), a_radianes(360), false);
	ctx.moveTo(177, 67);
	ctx.arc(150,50,30,a_radianes(30), a_radianes(150), true);
	ctx.stroke();/*solo lineas*/

	/*dibujar sonrisa*/
	ctx.beginPath();
	ctx.arc(110, 450, 35, a_radianes(50), a_radianes(200), true);
	ctx.stroke();

	


}

function a_radianes(grados){
	return (grados*Math.PI)/180;
}