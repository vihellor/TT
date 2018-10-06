<?php

include_once('./funcionesManejoUsuario.php');
session_start();

$peticion = json_encode("{'funcion':'login','nickname':'josimar','password':'1234'}");
$dec = json_decode($peticion,true);

login($peticion);
getUsuario();


?>