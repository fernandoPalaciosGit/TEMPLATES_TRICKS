var initDragDrop = function(){
	/*DRAG: elementos que se arrastran <div clas="circulos">*/
	var circulos = $(".circulo");
	$.each(circulos, function(index, circulo){
		circulo.addEventListener("dragstart", dragIniciado, false);
		circulo.addEventListener("dragend", dragFinalizado, false);
	});

	/*DROP: elementos sobre los que se sueltan*/
	$(".containerCircles")[0].addEventListener("dragover", dragSobreContainer,false);
	$(".containerCircles")[0].addEventListener("dragleave", dragSalioContainer,false);
	$(".containerCircles")[0].addEventListener("drop", recibioContainer,false);
}

var dragIniciado = function(event){/*CREAMOS EL NODO*/
	$(this).css("background-color", "blue");

	//identificamos el elemntto que se arrastra
	var dataClass = "transfer";
	event.target.classList.add(dataClass);

	/*colocamos informacion al evento sobre (la clase que acabamos de crear y añadir al elemento arrastrado), para que puea ser transferido*/
	event.dataTransfer.setData("text/html", dataClass);
}

var dragFinalizado = function(event){
	$(this).css("background-color", "orange");
}

var dragSobreContainer = function(event){
	/*para evitar ejecutar otros eventos sobre el elemento contenedor*/
	event.preventDefault();
	event.target.classList.add("dropInit");// == $(this).toggleClass("dropInit");
	return false;
}

var dragSalioContainer = function(event){
	event.target.classList.remove("dropInit");
}

//----------------TRASPASANDO ELEMENTOS----------------*/
var recibioContainer = function(event){/*SOLTAMOS EL NODO*/
	event.target.classList.remove("dropInit");

	/*recibimos la informacion que lleva evento gragInit*/
	var dataClass = event.dataTransfer.getData("text/html");

	//añadimos los elementos arrastrados al contenedor
	var transfer = document.getElementsByClassName(dataClass);
	$(this).append(transfer);

	//eliminamos la informacion de los elementops que se añaden
	$(this).find(transfer).removeClass(dataClass);
}

//----------------DUPLICANDO ELEMENTOS----------------*/
var recibioContainer = function(event){
	event.target.classList.remove("dropInit");

	var dataClass = event.dataTransfer.getData("text/html");

	var transfer = document.getElementsByClassName(dataClass);
	var copy = transfer[0].cloneNode(true); //duplaicamos el elemento transferido
	transfer[0].classList.remove(dataClass);

	$(this).append(copy);
	$(this).find(copy).removeClass(dataClass);
}

