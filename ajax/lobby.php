<?php
session_start();

$peticion = json_decode(file_get_contents('php://input'), true);

switch ($peticion['funcion']) {
    case "usr":
        $_SESSION['uno'] = "usr";
        break;
    case "pp":
        $_SESSION['dos'] = "pp";
        break;
    case "add":
        $_SESSION['tres'] = "add";
        break;
    case "remove":
        $_SESSION['cuatro'] = "remove";
        break;
}

var_dump($_SESSION);
exit();
?>
