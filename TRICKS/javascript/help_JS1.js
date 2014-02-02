/*INICIAR*/
window.addEventListener("load", init, false);
function init(){
	if(!document.getElementById) return;
		/*instrucciones*/
}

/*SELECCIONAR*/
/*por id*/
obj = document.getElementById("obj-id");
/*por class*/
objTag = document.getElementsByTagName("etiqueta");
objTag.className = "obj-class";


/*ACCESO AL DOM*/
document.URL;/*NO cambia la URL*/
document.title;
document.referrer;
document.cookie;
document.lastModified;
document.images[];
document.anchors[];
document.links[];

//PROPIEDADES DEL DOCUMENT
document.documentElement.innerHTML; //contenido html
document.documentElement.innerText; //contenido en texto
document.documentURI; //URL


/*ACCESO AL DOM - anchor / images / liks*/
var img = document.images;
for (var i = 0; i < img.length; i++) {
}


/*PROPIEDADES DE NODOS*/
control.name;
anchor.href;
img.id;
img.length;
parrafo.nodeName;/*etiquetas: ="P"; ="text", ="DD", ="DT"*/
parrafo.nodeType;/*1-nodos html / 3-nodos texto / 9-nodos-documento*/
parrafo.text;/*texto contenido en los nodos html*/
nodoText.nodeValue;/*texto ontenido en los nodos texto*/
					/*nodoText = document.createTextNode("texto");*/

.firstChild;
.lastChild;
.childNodes;/*vector que incluye a todos los elementos hijos*/
.getElementById("id");
.getElementsByTagName("etiqueta");
.createTextNode("texto");
.createElement("etiqueta");
.appendChild("nuevo");
.insertBefore("nuevo nodo", "nodo sustituir");
.replaceChild("nodo");
.removeChild("nodo");
.hasChildNodes(); /*true/false*/
.cloneNode("true"); /*copia deun nodo con todos sus elementos*/



/*HISTORIAL*/
history.length;
history.back();
history.forward();


/*LOCATION*/
location.href;/*SI cambia la URL*/
location.protocol;
location.hostname;
location.port;
location.pathname;
location.search;//porcion de query en la url de la peticion GET http
location.reload();


/*AÑADIR TEXTO*/
parrafo = getElementById("p");
nodoTexto = document.createtTextNode("texto que queremos añadir");/*esto es solo texto*/
contenido = document.createElement("<a href="">sustituto</a>");
parrafo.appendChild(nodoTexto);


/*SUSTITUIR CONTENIDO*/
parrafo = getElementById("p");
nodoTexto = document.createtTextNode("texto que queremos añadir");/*esto es solo texto*/
contenido = document.createElement("<a href="">sustituto</a>");
parrafo.innerHTML(contenido);



/*CLASES ORIENTADO A OBJETOS*/
function Card(name, address, homephone, workphone){/*constructor*/
	this.name=name;
	this.address=address;
	this.homephone=homephone;
	this.workphone=workphone;
	/*aañadimos las funciones como propiedad de la targeta*/
	this.printCard=printCard;
}
function printCard(){/*toString de 'Card'*/
	linea1 = "Nombre : "+this.name+" <br/>";
	linea2 = "Direccion : "+this.address+" <br/>";
	linea3 = "Telefono de Casa : "+this.homephone+" <br/>";
	linea4 = "Telefono de Trabajo : "+this.workphone;
	document.write("<p id='contacto'>"+linea1+linea2+linea3+linea4+"</p><hr/>");
}
/*instanciamos la clase Card()*/
var tom = new Card("Tom Ripley", "La Vaguada", "123123", "456456");
tom.printCard();


/*MATH*/
Math.random();/*aleatorio: [0,1)*/
Math.ceil();/*redondear entero MAYOR mas cercano: Math.ceil(2.8) = 3*/
Math.floor();/*redondear entero MENOR mas cercano: Math.floor(2.8) = 2*/
Math.round();/*redondear entero mas cercano: Math.round(2.8) = 3*/

// ALEATORIO entre [0, 1)
function getRandom() {
  return Math.random();
}

// ALEATORIO DECIMAL entre [min, max]
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

// ALEATORIO ENTERO entre [min, max]
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*dar mas PRECISION a un numero decimal*/
function redondear(num){
	return Math.round(num*1000)/1000;/*3 decimales*/
}

/*NUMBER*/
/*precision decimal*/
Number.toFixed(decimal);
/*precision enteros y deceimales*/
Number.toPrecition(numero);

/*WITH*/
with(objeto){/*centrarse en un solo objeto*/
	document.write("longitud del objeto: "+length);
	document.write("en mayuscula: "+toUpperCase());
}

/*FECHAS*/
var fecha = new Date();

var actual = fecha.toString();
var actualUTC = fecha.toUTCString();

var hora = fecha.getHours();
var min = fecha.getMinutes();
var seg = fecha.getSeconds();

/*FORMATOS FECHAS*/
fecha = new Date();/*actual*/
fecha = new Date(11, 1, 2010, 13, 30, 0);/*1:30PM*/
fecha = new Date("November 1, 2008 08:30:00");

/*SETTERS / GETTERS; si se ha obtendo la fecha actual: new Date()*/
getDate();/*dia*/
getMonth();/*mes*/
getFullYear();/*año 4 digitos*/
getYear();/*año 2 digitos*/
getTime();/*obtiene en milisegundos, la fecha desde 1/01/1970*/
getHours();
getMinutes();
getSeconds();
getMiliseconds();

/*FORMATEO HORARIO*/
toLocalString();/*fecha y hora en el navegador*/
toUTCString();/*fecha y hora en grenditch*/

/*CONVERSOR String > Date*/
var fecha="December 11, 2003 12:00:00";
fecha = Date.parse(fecha);
var hora = fecha.getHours();

/*FECHA FORMATEADA*/
function getWeekDay(date){
	var dias = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
	return dias[ date.getDay() ];
}
function getMonthDay(date){
	var meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre", "Diciembre"];
	return meses[ date.getMonth()];
}
var published = new Date();
console.log(getWeekDay(published)+", "+published.getDate()+" de "+getMonthDay(published)+" de "+published.getFullYear());



/*EVENTOS*/
/*<a onmouseover="manejador(evento)"></a>*/
evento.modifiers;/*que teclas modificadoras: Alt/Ctrl/Mayus (en binario) se han mantenido pulsadas durante el evento*/
evento.pageX;/*Coord X donde se ha ejecutado el evento*//*REFERENCIA: esquina sup-Izq del objeto*/
evento.pageY;/*Coord Y donde se ha ejecutado el evento*/
evento.which;/*Teclado: codigo Unicode/ASCII de la tecla*/
evento.button;/*Raton: 0/1(Izq) - 2(Drch)*/
key = String.fromCharCode(evento.which);/*transforma el codigo ASCII en letras*/
evento.target;/*el objeto donde se aplica el evento*/

/*EVENTOS DE RATON*/event.button;
onmouseover;
onmouseout;
onclick;
onmousedown;/*pulsas el boton*/
onmouseup;/*sueltas el boton*/
ondoubleclick;

/*EVENTOS TECLADO*/event.keyCode;
onkeypress;
onkeyup;
onkeydown;

/*EVENTOS DE CARGA*/
onload;/*se acaa de teminar d ecargar todo el contenido web en el navegador*/
unload;/*cerramos la ventana del navegador*/

/*PREGUNTAR POR EL ACCESO A UNA PAGINA*/
/*IMPERATIVO QUE */
a href="http://www.google.com"
	onclick="return window.confirm('¿estas seguro de q quieres JUGAR?');">google.com /a


/*FRAMES*/
NF=window.open("URL", "nombre_ventana", "width=1000,height=650");
NF.close();
window.close();/*-->NO lo ermite-->window.close==false*/

/*DIMENSIONES DEL MONITOR*/
window.screen.width;
window.screen.heiht;

/*CREAR/CERRAR UN FRAME*/
NF=window.open("../Tema 19 - eventos/eventos.html", "nueva_ventana", "width=600,height=300");
NF.close();

/*MODIFICAR frame*/
NF2.resizeTo(w, h);
NF2.moveTo(x, y);

/*CENTRAR frame*/
/*600*300; son las dimensiones de nuestra pagina*/
x = (window.screen.width/2)-(600/2);
y = (window.screen.height/2)-(300/2);
NF.moveTo(x, y);

/*CONTROLAR EL ESTADO DE LA VENTANA*/
NF.closed;



/*TEMPORIZADOR*/
/*IMP: "comillas_funcion"*/
ID = window.setTimeout("funcion", 2000);/*se ejecuta 1 VEZ*/
window.clearTimeout(ID);

ID = window.setInterval("funcion", 2000);/*BUCLE*/
window.clearInterval(ID);

/*NAVEGADOR*/
navigator.appVersion;



/*EVENTO COMPATIBLE CON NAVEGADORES*/
obj = document.getElementById("idObj");
if(obj.addEventListener){
	obj.addEventListener("click", funcion, false);
}else if(obj.attachEven){
	obj.attachEvent("onclick", funcion, false);
}else{
	obj.onclick = funcion;
}
/*en cualqier caso se ejecutara "funcion"*/


// CODIFICAR CARACTERRES PARA UNA URI
encodeURIComponent("");

/*COMENTARIOS*/
/*
==UserScript==
@name Blanco sobre negro
@namespace http://www.1and1.com
@description Muestra los parrafos como un texto clanco sobre fondo negro
@include *
==/UserScript==
*/


//LOCAL STORAGE
var nota = {texto: textoNota, color: colorNota};
var notas = [];
notas.push(nota);//almacenamos en nuestro array las notas en forma de objetos
function almacenarNotas()
{
	//del array de  notas = [objetos], obtenemos una cadena para JSON
	var jsonNotas = JSON.stringify(notas);
	//este string de JSON lo almmacenamos en localstorage
	localStorage.setItem(KEY, jsonNotas);
}

//al principio durante la carga de la pagina: window.onload()
function cargarNotas(){
	//para recuperarlas, solo necesitamos la llave
	var jsonNotas = localStorage.getItem(KEY);
	//obtenemos un JSON a partir de la cadena
	if( jsonNotas != null){
		notas = JSON.parse(jsonNotas);
		for(var i in notas){
			anyadirNotas(notas[i]);
		}
	}
}

//recorrer todos los elementos almacenados
for(key in localStorage){
	var item = localStorage.getItem(key);
	alert("llave: "+key+"\n"+
		"valor: "+item);
}

//eliminar un elemeto concreto
localStorage.removeItem("llave_especifica");

//eliminar todos los elementos de localStorage
localStorage.clear();

//tamaño del marco mas los bordes
var incremento = fotos.outerWidth(true);

//FILTER, comproba elementos en un arrayaluacion
//compruebas si los elementos en el aray corresponden con  la (ev) que devuelve la function filter
function isBigEnough(element) {
  return element >= 10;
}
var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]