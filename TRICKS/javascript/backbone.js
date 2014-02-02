/*http://documentcloud.github.io/backbone/*/
/*-- MODEL LAYER: capturar y manipular la estructura de los datos de la peticion
----------------------------------------------------------------*/
var TodoModel = Backbone.Model.extend({//CLASE DE MODELO
	ulrRoot: "ajax_getJSON/todos",
	defaults: function(){//valores por defecto para los atributos de nuestro omodelo
		return { description: "si no hay parametro de contructor en la instancia del modelo...",
					status: "estos seran los valores por defecto de laa instanceia.",
					date: new Date() }//de esta manera la fecha se asigna cuando se ejecuta la instancia del modelo y no cuando se cra la clase
	}
});
var todoModel = new TodoModel({id: 1});//INSTANCIA DE MODELO
todoModel.fetch();//GET/todos.json/1
todoModel.get("id");//ID = 2 --> la instancia "todoModel" solo capturara los datos del ajax correspondientes a "id: 1"


/*MANIPULAR datos en el modelo*/
todoModel.set({description: "complete"});
todoModel.get("id");//ID = 2
todoModel.save();//PUT/todos.json/1

/*OBTENER el JSON para la vista*/
todoModel.toJSON();

/*destruir la instancia del modelo*/
todoModel.destroy();


/*-- VIEW LAYER: devolver los datos al DOM
----------------------------------------------------------------*/
var TodoView = Backbone.View.extend({
	render: function(){
		var html = "<h2>+"this.model.get("dato")"+<h2>";
		$(this.el).html(html);/*this.el: elemento de vista/view elemnet*/
	}
});
var todoView = new TodoView({model: todoModel});/*instancia de la vista/view instance*/
/*a la instacia de la vsta le asignammos la instancia del modelo*/
/*cada instancia de la vista (todoView) tiene su propio elemento de la vista(todoView.el)*/
/*POR DEFECTO  el elemento de una instancia es un <div></div>*/
todoView.render();/*ejecuta el render de la instancia*/
console.log(todoView.el);/*elemento de vista*/



/*-- EVENTOS de MODELO
----------------------------------------------------------------*/
todoModel.on("event-name", function(){});//escuchar un evento
todoModel.trigger("event-name");//ejecutar un evento
todoModel.off("event-name", doThing);//eliminar el escuchador de evento

/*tipos eventos*/
todoModel.on("change", doThing);//todoModel.set(); //cuando un atributo se modifica
	todoModel.set({description: "ahora no me sigas"}, {silent: true});//no lo escuchara el evento de "change"

todoModel.on("change:<attr>", doThing);
todoModel.on("destroy", doThing);
todoModel.on("sync", doThing);//todoModel.put();
todoModel.on("error", doThing);
todoModel.on("all", doThing);//cualquier evento que ocurra en un modelo especifico



/*-- DEFINIR VISTA, datos del html: id, class, tag...
----------------------------------------------------------------*/
var AppointmentView = Backbone.View.extend({
  tagName: "li",
  id: "cite-1",
  className: "appointment",
  render: function(){
    var html = "<p>" + this.model.get("description") + "</p>";
    this.$el.html(html);//$(this.el).html(html);
  }
});
var appointment= new AppointmentView();
console.log(appointment.el);
appointment.render();//imprimir vista en html
/*
<li id="cite-1" class="appointment">
	<p>descripcion que hemos capturado con el modelo</p>
</li>
*/



/*usando TEMPLATES en la vista, UNDERSCORE*/
var AppointmentView = Backbone.View.extend({
  template: _.template( "<span><%= titulo %></span>" ),
  render: function(){
    var titulo = this.template(this.model.toJSON());
    this.$el.html(titulo);
  }
});

/*usando TEMPLATES en el contexto global de windows*/
window.templates = {};
window.templates.videoTemplate = _.template( "<span><%= titulo %></span>" );

//los templates los usamos en: Backbone.View.extend({ /*en alguna de las funciones, tendremos acceso porque se encuentra en un acceso globasl de windows*/ });
var titulos = window.templates.videoTemplate({title: "la Bana del patio"});
//ahora titulos es un fragmento html que añadir al DOM: <span>la Bana del patio</span>




/*-- eventos de las vistas
----------------------------------------------------------------*/
var AppointmentView = Backbone.View.extend({
  events: {
    "click span": "alertClick",
    "dblclick" : "open",
    "click .icon.doc" : "select",
    "click .show_notes" : "toggleNotes",
    "click .title .lock" : "editAccessLevel",
    "mouseover .title .date" : "showTooltip"
  },
  alertClick: function(event){
    alert(this.model.get("title"));
    alert("evento de click sobre la instancia/elemento de la vista");
  }
});


/*MODELOS Y VISTAS*/
var TodoModel = Backbone.Model.extend({});/*definimos los datos del modelo*/
var todoModel = new TodoModel({});/*direccion uri desde donde se solicita informacion*/

var TodoView = Backbone.View.extend({properties});/*definimos a traves de funciones como vamos a plasmar la informacion en el DOM*/
var todoView = new TodoView({});/*capturamos la instancia del modelo*/


/*TEMPLATES, se utilizan en las clases de las vistas, sirven para definir cmomo se va imprimir los datos del modelo en el DOM*/
var TodoModel = Backbone.Model.extend({
  toogleStatus: function(){
    if(this.get("status") === "incomplete"){
      this.set({"status": "complete"});
    }else{
      this.set({"status": "incomplete"});
    }
    this.save();//sincronizar los cambios con el server
  }
});

var TodoView = Backbone.View.extend({/*ejemplo de añadir descripcion con render*/
  events: {
    "change input": "toogleStatus"
  },
  toogleStatus: function(){
    this.model.toogleStatus();
  },
  initialize: function(){//se ejecuta al crear una instancia del modelo
    this.model.on("change", this.render, this);//cuango ejecutes un cambio sobre el elemento, ejecuta render()
    this.model.on("destroy", this.remove, this);//cuando destrulllas el elemento: el.destroy() -<> elimina el el del DOM: el.remove();
  },
  template: _.template(
    "<h3 class='<%= status %>'>"+
    "<input type='checkbox' "+
    "<% if(status === 'complete') print('checked') %> />"+
    "<%= description %></h3>"
  ),
  render: function(){
    var desc = this.template(this.model.toJSON);
    this.$el.html(desc);
  }
});
var todoView = new TodoVIew({model: todoModel});
$("a.cambio").on("click", function(){
  todoView.render();
  this.html(todoView.el);
});
/*cuando le demos click al enlace, se añadira contenido al elemento de la instancia e imprimiremos como texto del html del enlace, el elemento de la instancia*/
/*
  <a>//el quien hacemos click
    <div>//el. de la instamcia
      <h3>descripcion del elemento</h3>//atributo del template (lo recoge del modelo)
    </div>
  </a>
*/

/*MODELOS*/
/*clase modelo: defines el estado del modelo de datos*/
var DoctorModel = Backbone.Model.extend({
  initialize: function(){
    console.log(this.attributes);//imprimimos en  consola los atributos de la instancia
    this.on("change: lenguajes", msgLenguaje);//lanzamos un EVENTO DE MODELO
    this.on("error", function(model, error){console.log(error);});//evento de escucha de error
  },
  validate: function(attr){//realizar validaciones previas a los cambios que se apliquen a las instancias de nuestros modelos
    if(attr.lenguajes == "catalan"){
      return "el catalan no es admitido como idioma";//se lanzara el evento de error: this.on("error", function(model, error){});
    }
  },
  defaults: {
    nombre: "Dr",
    edad: "",
    lenguajes: ["Spanis", "English", "German"]
  },
  addLenguajes: function(lang){
    var idiomas = this.get("lenguajes");
    idiomas.push(lang);
    this.set({lenguajes: idiomas});
    this.save();
  },
  msgLenguaje: function(){
    alert("has cambiado el idioma");
  }
});
/*varias instancias del modelo: defines los valores de atributos*/
var PerezDoctor = new DoctorModel({//instancia con atributos especificos
  nombre: "Dr Alfonso",
  apellido: "Perez Galdos",
  edad: 19,
  lenguajes: ["Spanis", "English", "German", "Catalufo"],
  especialidad: "neuro-psicologia"
});
var LandiDoctor = new DoctorModel({});//instancia con atributos predeterminados

//modificammos atributos y hacemos un pull request
LandiDoctor.set({edad: 25});
LandiDoctor.save();

//modificamos atributos desde metodos del propio modelo
LandiDoctor.addLenguajes("mandarin");

//cuando cambie un atributo del elemento (instancia de modelo) == el.set()...