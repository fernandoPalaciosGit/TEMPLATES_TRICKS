<?php
/* ==========================================================================
   CONEXION CON PDO
   ========================================================================== */
try {
	$conn = new PDO('mysql:host=localhost;dbname=bbdd', 'user', 'pass');
	$conn->query('SET NAMES \'utf8\'');
	$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); //fijar errores de PDOException
} catch (PDOException $e) {
	echo "Error de conexion a BBDDD nº:".$e->getCode()."<br/>".$e->getMessage()."";
	exit;
}

$registros = null;//cerramos buffer de peticion
$conn = null;//cerramos conexion a Mysql
?>




<?php
/* ==========================================================================
   CONEXION CON MYSQLI
   ========================================================================== */
$conexionDwes = new mysqli('localhost', 'user', 'pass', 'bbdd');
$conn->query('SET NAMES \'utf8\''); //codificacion de los datos que lee Mysql
if( $conn->connect_errno  !=  null){
	echo "Error de conexion a BBDDD nº:". $conn->connect_errno."<br/>".$conn->connect_error."";
	exit; //interrumpimos el interprete de php
}

//RECORRE VALORES MYSQLI
$registros = $conn->query("QUERY", MYSQLI_STORE_RESULT || MYSQLI_USE_RESULT );
// defecto || los varecuperando a medida qu elos usa

// Movemos el  puntero con una iteracion
while($registro = $registros->fetch_assoc()){
	echo var_dump($registro)."<br/>"; //resultado de la query
}

$registros->close();//cerramos buffer de peticion
$conn->close();//cerramos conexion a Mysql
?>