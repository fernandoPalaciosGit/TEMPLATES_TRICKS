<?php
if( isset($_REQUEST["nomCliente"]) ){
	$nameCliente = $_REQUEST["nomCliente"];
	$passCliente = $_REQUEST["passCliente"];

	//conexion a la BBDD
	$conexion = new mysqli("localhost", "root", "4316");
	$conexion->select_db("tiendaprueba");

	//HIGIENIZAR ENTRADA
	//sqlInjection:	'OR'm'=''	//estas comparando un string vacio y te devuelve true la peticion, entonces count = 1
	//real_escape_string: escapa los caracteres del controld e formulario para que la bbdd NO la interprete como statement de la query
	//solo sirve para higienizar los strings, los numeros no se higienizan
	$nameCliente = prevenirSQLInjection($nameCliente, $conexion);
	$passCliente = prevenirSQLInjection($passCliente, $conexion);
	$sql = "select count(*) AS cuantos from clientes where nom_cliente='$nameCliente' AND pass_cliente='$passCliente'";

	//para estatements diferentes a DDL devuelve un true o false
	$registros = $conexion->query($sql, MYSQLI_STORE_RESULT);

	$registro = $registros->fetch_assoc();
	// echo var_dump($registro);
	if( $registro["cuantos"] > "0"){
		echo "!!!loguedo $nameCliente!!!";
	}else echo "este usuario no esta registrado";

	$registros->close();
	$conexion->close();

}else echo "No ha habido peticion de login";

function prevenirSQLInjection($valor, $conn){
	//si esta activado las magic quotes en el server apache (init.php), los caracteres especiales de los parametros que se le pasan a la quuery se escapan automaticamente,  entonces para leerlos, debemos remover sus diagonales
	if( get_magic_quotes_gpc() )
		$valor = stripcslashes($valor);

	//por otro lado, no es necesario higienizar los numeros, pero podemos comprobar que no se tratan de ellos y proceder a escapar sus caracteres
	if( !is_numeric($valor) )
		$valor = $conn->real_escape_string($valor);

	return $valor;
}
 ?>
