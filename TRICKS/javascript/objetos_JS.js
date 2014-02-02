//el prototipo es un OBJETO de contexto global en JS : 'new Object'
var obj1 = new Object();
obj1.name = "Objeto numero 1";
obj1.getName = function(){
   console.log(this.name);
};
//ahora el objeto es tal que:
//Object {name: "Objeto numero 1", getName: function}

//ELIMINAR UNA PROPIEDAD DE OBJETO
delete obj1.getName;
//ahora el objeto es tal que:
//Object {name: "Objeto numero 1", getName: function}
Object {name: "Objeto numero 1"}

//otra forma de construirlo
var obj1 = {
	name: "Objeto numero 1",
	getName: function(){
		console.log(this.name);
	}
};

//LISTAR PROPIEDADES DEL OBJETO
for(var index in obj1) {
    console.log(index+" : "+ obj1[index]);
}

//COPIAR UN PROTOTIPO A OTRO:
//herencia de las propiedades de un prototipo a otro
var Gato = function () {
    this.ojos = 2;
    this.piernas = 4;
}
var Siames = function () {
    this.color = "blanco";
    this.color_ojos = "azul";
}
Siames.prototype = new Gato();
//los objetos de tipo 'new Siames()',
//heredaran todas las propiedades de 'new Gato()'

//Probemos
var Catboy = new Siames();
alert(Catboy.ojos);//Retorna 2
alert(Catboy.color);//Retorna "blanco"


//PROPIEDADES Y FUNCIONES PRIVADAS
//todas las propiedades de un objeto (sean variables o metodos), son de acceso publico a traves del onjeto creado por su prototipo, pero tambien pueden haber propiedades del prototipo, que son inaccesible por el objeto que hereda de  él, es decir, son privadas
var Gato = function(nom){
     //propiedades publicas (accesible por los objetos):THIS
     this.nombre = nom;
     var that = this;//ahora podremos acceder a las propiedades privadas THIS.

     //propiedades privadas del prototipo
     var frecuencia = "moderada";
     var irAlBanyo = function(frecuencia){
         console.log(that.nombre+" va al baño con frecuencia "+frecuencia);
     };

     this.getFrecuencia = function(){
         irAlBanyo(frecuencia);
     };
};
var gatito = new Gato("Wally");
gatito.getFrecuencia();//"Wally va al baño con frecuencia moderada"

//los METODOS PRIVADOS NO SO DINAMICOS, en el sentido que no se pueden definir condicionalmente en tiempo de ejecución.
//Así que el siguiente //código NO funcionará: NO USAR!
var Saludator = function(nom, enPlural) {
    this.nombre = nom;
    this.saluda = function() {
        alert("hola "+quien(this.nombre))
    }

    //NO HACER ESTO NUNCA!!!!!!!
    if (enPlural) {
        function quien(n) { // Arggg!!
            return n + "s"
        }
    } else {
        function quien(n) { // Ouch!!
            return n
        }
    }
}
var obj1 = new Saludator("mundo", false)
var obj2 = new Saludator("mundo", true)
obj1.saluda() // "hola mundo"
obj2.saluda() // "hola mundo", pero es incorrecto!

//En su lugar, definiendo los métodos con funciones como expresiones,
//si que funciona correctamente, ya que la creación del método no es más que una
//asignación que se produce dentro de una bifurcación condicional:
var Saludator = function(nom, enPlural) {
    this.nombre = nom
    this.saluda = function() {
        alert("hola "+this.quien())
    }
    if (enPlural) {
        this.quien = function() {
            return this.nombre + "s" // En plural
        }
    } else {
        this.quien = function() {
            return this.nombre  // En singular!!
        }
    }
}
var obj1 = new Saludator("mundo", false)
var obj2 = new Saludator("mundo", true)
obj1.saluda() // "hola mundo"
obj2.saluda() // "hola mundos", correto!


//METODOS Y ATRIBUTOS ESTATICOS DE UN PROTOTIPO
//tambien nos podemos encontrar con propiedades asccesibles //directamente desde el prototipo, sin acceder necesariamente //desde un objeto instanciado desde el mismo, entondes estas //seran llamadas: 'prototipo'.'propiedad'; ejem: 'prototype'
Saludator.prototype