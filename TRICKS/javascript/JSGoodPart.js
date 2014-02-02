/*EXCEPCIONES*/
var checkParam = function(a, b){
	if( typeof(a) !== "string" || typeof(b) !== "number"){//condicional que lanza una excepcion, se detendra la ejecucion de las sentencias y se capturara por el 'catch'
		throw{//objeto que capturara catch
			name: "tipo de variables",
			msg: "parametros: (string, numero)"
		}
	}
	return [a, b];
};
var amigos = function(friend, year){
	try{
		var reportFriends = checkParam(friend, year);//si hay error, saltara al catch
		console.log(reportFriends[0]+" tiene "+reportFriends[1]);
	}catch(e){
		console.log("error: "+e.name+"\n"+e.msg);
	}
}