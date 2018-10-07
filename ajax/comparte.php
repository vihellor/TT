<?php

include_once('./funcionesManejoUsuario.php');
session_start();

$peticion = json_decode('{"funcion":"login","nickname":"josimar","password":"1234"}',true);

login($peticion);
getUsuario();


?>