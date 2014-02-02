<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>clases en php</title>
</head>
<body>

	<h2>CREACION DE OBJETOS CON A PARTIR DE CLASES</h2>
<?php
/*pruaba con clases y metodos*/
class Carrito{
	var $items;
	function add_item($art, $price){
		$this->items[$art] = $price;/*añdimos el articulo cmon su precio a un array*/
	}
}

/*herencia entre clases*/
class Carrito_propio extends Carrito{
	var $owner;
	function set_owner($name){
		$this->owner = $name;
	}
}

/*creacreamos un objeto a partir de una clase extendida*/
$myCart = new Carrito_propio;
$myCart->set_owner("nando");
echo "Propietario: ".$myCart->owner."<br/>";

$myCart->add_item("manzana", 10);/*propiedad heredada de otra clase*/
$myCart->add_item("pera", 8);
foreach ($myCart->items as $key => $value){
	echo "$key => $value<br/>";
}
 ?>

	<h2>CONTRUCTORES DE CLASES</h2>
<?php
//Una función se convierte en constructor cuando tiene el mismo nombre que la clase
class Carrito2{
	var $owner; var $item;
	function Carrito2($propietario, $art = "el carrito", $price = "gratis"){
		$this->owner = $propietario;
		$this->add_item($art, $price);
	}
	function add_item($art, $price){
		$this->item[$art] = $price;
	}
}
$myCart2 = new Carrito2("mario");
echo "Propietario: ".$myCart2->owner."<br/>";
$myCart2->add_item("chocolate", 25);
foreach ($myCart->items as $key => $value){
	echo "$key => $value<br/>";
}
 ?>
</body>
</html>