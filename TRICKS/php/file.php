<?php
$fichero = fopen("IO_prueba.txt", "w"); // abrimos para la escritura
fwrite($fichero, "Value del control de formulario");

$fichero = fopen("IO_prueba.txt", "r"); // abrimos para la lectura
$texto = fread($fichero, 1024);

fclose($fichero); //cerramos flujo de archivo
 ?>