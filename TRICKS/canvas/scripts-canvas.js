/*instancias de CANVAS*/
var canvas = document.getElementById("miCanvas");
var ctx = canvas.getContext("2d");

/*dibujar RECTANGULO*/
ctx.fillRect(x, y, ancho, alto);/*rectangulo con relleno*/
ctx.strokeRect();/*rectangulo sin relleno, con borde*/
ctx.clearRect();/*rectangulo transparente*/

/*estilos de figuras*/
ctx.fillStyle = "yellow";
ctx.fillStyle="rgba(0,0,200,0.3)";
ctx.lineWidth = 15;

/*borrar CANVAS*/
function erase(canvas, ctx){
	ctx.clearRect(0,0,canvas.width, canvas.height);
}

/*dibujar ARCOS*/
ctx.arc(x, y, radio, anguloInicial, anguloFinal, sentido);/*RADIANES*/
ctx.arc(x, y, 10, 0, a_radianes(360), false);
ctx.stroke();/*dibujamos el arco SIN relleno*/

/*calcular radianes*/
function a_radianes(grados){
	return (grados * Math.PI)/180;
}

/*TRAZOS ARCOS*/
//primer arco
ctx.beginPath();
ctx.arc(x,y,radio,a_radianes(anguloInicial),a_radianes(anguloFinal), sentido);
ctx.moveTo(x, y);
ctx.arc(x,y,radio,a_radianes(anguloInicial),a_radianes(anguloFinal), sentido);
ctx.stroke();

//segundo arco
ctx.beginPath();
ctx.arc(x,y,radio,a_radianes(anguloInicial),a_radianes(anguloFinal), sentido);
ctx.stroke();

/*dibujar IMAGENES*/
//la imagen W x H: <img src="" alt="" width="" height=""/>
//todos los atributos
var imagen = new Image();
imagen.src = "imagenes/img.png";
ctx.drawImage(imagen, coordX, coordY, width, height);

/*SAVE & RESTORE*/
//se comportan como una pila: el ultimo punto en almacenar (SAVE) es el primero en recuperar (RESTORE)
ctx.save();
ctx.restore();


/*objetos JSON*/
/*clave: "valor"*/
var titular = {
	nombre : "Fernando",
	apellido: "Palcios",
	edad: 19,
	email: "http://www.google.es"
};
console.log("imprimir claves JSON: "+titular["nombre"]+", "+titular["apellido"]);


/*ARREGLOS, VECTORES*/
var arreglo = new Array(19);/*19 elementos*/
var arreglo = ["mis", 2, "amigos"];
/*agregar elemento*/
arreglo[3]="Hackers";
/*agregar elemento al finel de la cola*/
arreglo.push("en");
arreglo.push("jake");

console.log("elementos arreglo: "+arreglo[0]+", "+arreglo[1]+", "+arreglo[2]);
console.log("longitud del arreglo: "+arreglo.length);
console.log("ultimo elemento: "arreglo[arreglo.length-1]);
/*recorrer todos los arreglos*/
for (var i = 0; i < arreglo.length; i++) {
	console.log(arreglo[i]);
};
for (var i = arreglo.length - 1; i >= 0; i--) {/*INVERSA*/
	console.log(arreglo[i]);
};
