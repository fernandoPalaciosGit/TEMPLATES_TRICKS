var	READY_STATE_UNINITIALIZED = 0,
		READY_STATE_LOADING = 1,
		READY_STATE_LOADED = 2,
		READY_STATE_INTERACTIVE = 3,
		READY_STATE_COMPLETE = 4,
		httpRequest = false,
		cuentaAtras = null,
		timeoutAjax = 4000; //limite de tiempo de espera de petición

var init = function(){
	if( window.XMLHttpRequest )
		httpRequest = new XMLHttpRequest();
	else if( window.ActiveXObject )
		httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
	else
		httpRequest = false;

	// lanzar la petición AJAX
	document.getElementById("btnPeticion").addEventListener("click", function(){
		var ajaxParams = {
			url: '/relativePath/file' || 'http://www.absolutePath/file',
			type: 'GET' || 'POST',
			dataType: 'text' || 'xml',
			data: null || {param1: 'value1'}
		};
		ajaxRequest(ajaxParams.url, ajaxParams.type, ajaxParams.dataType, ajaxParams.data);
	}, false);
};

//petición AJAX
var ajaxRequest = function(urlRequest, metodo, dataType, dataSend){
	if( httpRequest ){
		//temporizador de espera de petición AJAX
		cuentaAtras = setTimeout( httpRequest.abort(), timeoutAjax );

		//abre el canal HTTP con la dirección del recurso
		httpRequest.open(metodo, urlRequest, true);

		// se dispara cuando se ha recibido la respuesta AJAX
		httpRequest.onreadystatechange = function(){
			if( httpRequest.readyState === READY_STATE_COMPLETE && httpRequest.status === 200 ){
				clearTimeout(cuentaAtras);
				switch ( dataType ){
					case "text":
						dataType = httpRequest.responseText;
						break;
					case "xml":
						dataType = httpRequest.responseXML;
						break;
				}
				ajaxCallback(dataType);
			}else
				console.log("petición AJAX fallida: "+httpRequest.statusText);
		};

		// se dispara al abortar la operación
		httpRequest.onabort = function(){
			console.log("conexión retardada, intentarlo mas tarde");
		};

		httpRequest.send(dataSend); // envía la petición con los parámetros solicitados por el servidor
	} else
		console.log("Este navegador no soporta peticiones asíncronas");
};

//recupera los datos de la petición AJAX
var ajaxCallback = function(dataResponse){
	console.log(dataResponse);
};