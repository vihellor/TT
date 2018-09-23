<?php
include_once('./class.glosarioDAO.php');
include_once('./class.glosario.php');
include_once('./class.usuarioDAO.php');
include_once('./class.usuario.php');
include_once('./class.DBPDO.php');

if( !isset($_SESSION["bd"]) ){
    $_SESSION["bd"] = new DBPDO();
}

$peticion = json_decode(file_get_contents('php://input'), true);

switch ($peticion['funcion']) {
	case "registro":
		$DAO = new usuarioDAO();
		$usuario = new usuario("",$peticion['nickname'],$peticion['name'],$peticion['app'],$peticion['apm'],$peticion['ocupacion'],$peticion['email'],$peticion['password']);
		$DAO->createUsuario($usuario);
		break;
	case "login":
		$DAO = new usuarioDAO();
		$usuario = new usuario("",$peticion['nickname'],"","","","","",$peticion['contrasena']);
		$usuario = $DAO->readUsuario($usuario);
		if(strlen($usuario->nombre)!=0){
			$_SESSION["validation"] = "true";
			echo("login");
		}
		else{
			$_SESSION["validation"] = "false";
			echo ("false");
		}
		
	break;
}

?>
