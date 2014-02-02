;window.addEventListener("load", init, false);
function init(){
	if(!document.getElementById) return;
		console.log("cargado: imagen.js");
	var canvas = document.getElementById("canvasImg");
	var ctx = canvas.getContext("2d");
	var imgDJ = document.getElementById("imgDJ");
	ctx.drawImage(imgDJ, 25, -30, 225, 225);
}

