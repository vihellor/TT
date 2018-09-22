<?php
	//$hola = json_encode(file_get_contents('php://input'));
	$hola = json_decode(file_get_contents('php://input'), false);
    error_log($hola->funcion);

    echo(json_encode(file_get_contents('php://input')));
?>