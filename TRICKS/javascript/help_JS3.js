/*EXCEPCIONES*/
var checkAmigos = function(friend, year){
    try{
        var reportFriends = checkParam(friend, year);//si hay error, saltara al catch
        console.log(reportFriends[0]+" tiene "+reportFriends[1]);
    }catch(e){
        console.log("errores: "+e.name+"\n"+e.msg);
    }
};

var checkParam = function(a, b){
    if( typeof(a) !== "string" || typeof(b) !== "number"){//condicional que lanza una excepcion, se detendra la ejecucion de las sentencias y se capturara por el 'catch'
        throw{//objeto que capturara catch
            name: "tipo de variables",
            msg: "parametros: (string, numero)"
        };
    }
    return [a, b];
};


/*DETECTAR NAVEGADORES DESKTOP*/
function comprobarnavegador() {
    var navegador = navigator.userAgent.toLowerCase(), posicion;
    /* Variables para cada navegador, la funcion indexof() si no encuentra la cadena devuelve -1,
    las variables se quedaran sin valor si la funcion indexof() no ha encontrado la cadena. */
    var is_safari = navegador.indexOf('safari/') > -1;
    var is_chrome= navegador.indexOf('chrome/') > -1;
    var is_firefox = navegador.indexOf('firefox/') > -1;
    var is_ie = navegador.indexOf('msie ') > -1;

    /* Detectando  si es Safari, vereis que en esta condicion preguntaremos por chrome ademas, esto es porque el
    la cadena de texto userAgent de Safari es un poco especial y muy parecida a chrome debido a que los dos navegadores
    usan webkit. */

    if (is_safari && !is_chrome ) {

        /* Buscamos la cadena 'Version' para obtener su posicion en la cadena de texto, para ello
        utilizaremos la funcion, tolowercase() e indexof() que explicamos anteriormente */
        posicion = navegador.indexOf('Version/');

        /* Una vez que tenemos la posición de la cadena de texto que indica la version capturamos la
        subcadena con substring(), como son 4 caracteres los obtendremos de 9 al 12 que es donde
        acaba la palabra 'version'. Tambien podraimos obtener la version con navigator.appVersion, pero
        la gran mayoria de las veces no es la version correcta. */
        var ver_safari = navegador.substring(posicion+9, posicion+12);

        // Convertimos la cadena de texto a float y mostramos la version y el navegador
        ver_safari = parseFloat(ver_safari);

        window.alert('Su navegador es Safari, Version: ' + ver_safari);
    }

    //Detectando si es Chrome
    if ( is_chrome ) {
        posicion = navegador.indexOf('chrome/');
        var ver_chrome = navegador.substring(posicion+7, posicion+11);
        //Comprobar version
        ver_chrome = parseFloat(ver_chrome);
        window.alert('Su navegador es Google Chrome, Version: ' + ver_chrome);
    }

    //Detectando si es Firefox
    if ( is_firefox ) {
        posicion = navegador.lastIndexOf('firefox/');
        var ver_firefox = navegador.substring(posicion+8, posicion+12);
        //Comprobar version
        ver_firefox = parseFloat(ver_firefox);
        window.alert('Su navegador es Firefox, Version: ' + ver_firefox);
    }

    //Detectando Cualquier version de IE
    if ( is_ie ) {
        posicion = navegador.lastIndexOf('msie ');
        var ver_ie = navegador.substring(posicion+5, posicion+8);
        //Comprobar version
        ver_ie = parseFloat(ver_ie);
        window.alert('Su navegador es Internet Explorer, Version: ' + ver_ie);
    }
}

//Llamamos al funcion que comprueba el nagedaor al cargarse la página
window.onload = comprobarnavegador();


/*DETECTAR NAVEGADORES MOVILES*/
//en el html
var navegador = navigator.userAgent.toLowerCase();
if( navegador.search(/iphone|ipod|android/i) > -1 ){
    document.write("<script type='text/javascript' src='js/mov_required.js'><\/script>");
}

/*redireccionar a traves de la cookie del navegador, mi aplicacion apra mobiles*/
var navegador = navigator.userAgent.toLowerCase();
if( (navegador.match(/iphone|ipod|android/i)) )
    if (document.cookie.indexOf("iphone_redirect=false") === -1)
        window.location = "http://www.bufa.es/mobil";
