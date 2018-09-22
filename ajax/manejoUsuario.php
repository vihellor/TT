<?php
include_once('./class.glosarioDAO.php');
include_once('./class.glosario.php');
include_once('./class.usuarioDAO.php');
include_once('./class.usuario.php');
include_once('./class.DBPDO.php');

if( !isset($_SESSION["bd"]) ){
    $_SESSION["bd"] = new DBPDO();
}

$peticion = json_decode(file_get_contents('php://input'), false);

switch ($peticion['funcion']) {
	case "registro":
		$DAO = new usuarioDAO();
		$usuario = new usuario("",$peticion['usuario'],$peticion['nombre'],$peticion['apellidoPaterno'],$peticion['apellidoMaterno'],$peticion['ocupacion'],$peticion['correo'],$peticion['contrasena']);
		$DAO->createUsuario($usuario);
	case "login":
		$DAO = new usuarioDAO();
		$usuario = new usuario("",$peticion['usuario'],"","","","","",$peticion['contrasena']);
		var_dump($DAO->readUsuario($usuario));
	break;
}

?>
