window.addEventListener("load", init());
function init(){
	console.log("cargado: circulos.js");
	var canvas = document.getElementById("canvasCirc");
	var ctx = canvas.getContext("2d");
	
	ctx.arc(20, 20, 10, 0, a_radianes(360), false);
	ctx.arc(60, 20, 10, 0, a_radianes(180), false);
	ctx.arc(20, 60, 10, a_radianes(90), a_radianes(180), false);
	ctx.fill();

	var ctx2 = canvas.getContext("2d");
	ctx2.arc(100, 100, 20, a_radianes(0), a_radianes(180), false);
	ctx2.stroke();

}
function a_radianes(grados){
	return (grados * Math.PI)/180;
}


