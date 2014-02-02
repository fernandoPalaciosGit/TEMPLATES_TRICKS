<?php
//DEBUGEAR PHP
print();//imprimir en html argumentos
string var_dump($var);//tipo y contenido de variable
string gettype($var);//tipo de variable
boolean (is_string($var), is_integer($var), is_array($var), is_float($var));//tipo de variable

//VARIABLES GLOBALES
$var = "variable global";
function check_var(){
	global $var;
	return "esto es una $var";
};
echo check_var();

//TIPOS DE VARIABLES
boolean (is_string($var), is_integer($var), is_array($var), is_float($var));//tipo de variable
string gettype($var);//tipo de variable
string var_dump($var);//tipo y contenido de variable

//ESTADO DE UNA VARIABLE
boolean isset($mix_var);//¿esta inicializada la variable?
								//solo la busca, no la interpreta, NO DA ERROR
boolean gettype($mix_var);//¿tipo de variable?
								//la interpreta, asi que SIRVE PARA VATRIABLES SIN INICIALIZAR O  unset($mix_var)
boolean empty($mix_var);//mas potente que isset(), ¿inicializada? + ¿vacia?

//CONSTANTES
boolean define(string $name, mixed $value);
boolean defined(string $name);//SOLO SE APLICA A CONSTANTES, es el homologo de isset()

//LINEA DE CODIGO
define("NUM_LINEA", __LINE__);//NUM_LINEA = 33

//ARRAY
$array1 = [1, 2, "nando", "estuco", false];
$array2 = array(0=>14, 1=>"dias de", 2=>"huelga");

//FORMATEAR ARRAY
/*1*/	foreach ($variable as $key => $value) {
			print "$key => $value";
		}

/*2*/	print_r($array1);

//LONGITUD, CONTAR ELEMENTOS
integer count($array); //Cuenta todos los elementos de un array o en un objeto
integer mb_strlen($string); //Longitud de una cadena de caracteres
integer strlen($string); //Nmero de bytes en lugar del número de caracteres de un string.

//INCLUIR FICHEROS
include "file.php";//el error lanza un warning
require "file.php";//el error lanza un fatal error
include_once "file.php";
require_once "file.php";


//CODIFICACION DE CARACTERES
$str = "A 'quote' is <b>bold</b>";
// Produce: A 'quote' is &lt;b&gt;bold&lt;/b&gt;
echo htmlentities($str);

// Produce: A &#039;quote&#039; is &lt;b&gt;bold&lt;/b&gt;
echo htmlentities($str, ENT_QUOTES);

//FUNCIONES STRING
array() explode($delimiter, $str);//rompe el $string en un array()
string implode($glue, $array);//junta un $array en un string
string |trim|rtrim|ltrim|($str);//elimina espacios en blanco
string str_repeat($str, $multiplier);//repite el $str * $multiplier
string str_replace($str_old, $str_new, $string);//reemplaza un $str_old por un $str_new
integer strcmp($str1, $str2);//compara dos strings
integer strlen($str);//longitud del string
string strrev($str);//devuelve un string invertido
string strtolower($str);
string strtoupper($str);

//MANIPULAR ARRAYS
unset($array)//borrar array
array() unset($array[0]);//eliminamos el primer valor del array
$array[] = "next";//añadir un nuevo elemento a la posicion siguiente del array

//ORDENACION ARRAYS NO ASOCIATIVOS
sort($array, SORT_NUMERIC || SORT_STRING || SORT_REGULAR); //tipo de algoritmo
r_sort($array); //a la inversa

//ORDENACION ARRAYS ASOCIATIVOS
ksort($array); //ordenar por llave
asort($array); //ordenar por valor

//FUNCIONES ARRAYS
array() array_merge($array1, $array2);//combinar 2arrays en uno

array() array_push($array, $elemento);	//AÑADIR un elemento al FINAL de la cola
array() array_pop($array);					//ELIMINAR un elemento al FINAL de la cola

array() array_unshift($array, $elemento);//AÑADIR un elemento al PRINCIPIO de la cola
array() array_unshift($array);//ELIMINAR un elemento al PRINCIPIO de la cola

integer count($array);//numero de elementos de un array
boolean in_array($valor, $array);//encuentra un elemento dentro de un $arrray


//FORMULARIOS - parametros de peticion
$_GET["par_peticion"];//por la URL
$_POST["par_peticion"];//por en ENCABEZADO HTTP
$_REQUEST["par_peticion"];//hibrido


//TIEMPO DE EJECUCION de un script en php (milisegundos)
//microtime() : precision decimal en mls,  timestamp actual -->Z hay que procesarlos
function microtime_float(){
	list($useg, $seg) = explode(" ", microtime());
	return ((float)$useg + (float)$seg);
}

$tiempo_inicio = microtime_float();
// hago un bucle, simplemente para hacer un script que tarde un poco
for ($i = 0; $i < 3000000; $i++){}
$tiempo_fin = microtime_float();

//redondear a los 4 primeros decimales
$tiempo = round($tiempo_fin - $tiempo_inicio, 4)
echo "Tiempo empleado: ".$tiempo;

//PARAEMETROS POR REFERNCIA
function anyadir(&$cadena){
    $cadena .= 'y algo más.';
}
$cad = 'Esto es una cadena, ';
anyadir($cad);
echo $cad;  // imprime 'Esto es una cadena, y algo más.'

//CLASES - POO - OBJETOS
class [Nombre de la Clase] {
	private [atributos] 	//NO podemos acceder al mismo desde fuera de la clase
	public [métodos]		//ACCEDEMOS a traves de las instancias
	public function __construct([parámetros]){}
	private static $nombre1; //self::$nombre1
	static $nombre2; //nom_clase::$nombre2
	const $nombre3; //nom_clase::$nombre3
}

//SEDIONES
session_start(oid)
session_destroy(oid)
?>