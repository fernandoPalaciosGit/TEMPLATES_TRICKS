//CONTEXTO DE FORMULARIOS
array() document.forms;//todos los formularios
document.forms[1].name;//segundo formulario del documento
document.forms[1].id;

//CODIFICACION DE CARACTERES DE PPETICION (valores que les pasas a los input)
var path = "pal_server.html";
var peticion = name_param+"="+value_param;
/*redirecionamos la pagina cargada*/
document.location.href = path+"?"+encodeURIComponent(peticion);/*codificacion ASCII*/

/*DONDE LLO RECIBE - server*/
var peticion = decodeURIComponent(document.location.search);
