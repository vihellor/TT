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
		$resultado = $DAO->createUsuario($usuario);
		if($resultado['_result']==1){
			echo("registro");
		}
		else{
			echo ("false");
		}
		#echo ();
		break;
	case "login":
		$DAO = new usuarioDAO();
		$usuario = new usuario("",$peticion['nickname'],"","","","","",$peticion['contrasena']);
		$usuario = $DAO->readUsuario($usuario);
		if(strlen($usuario->nombre)!=0){
			$_SESSION["idUsuario"] = $usuario->idUsuario;
			echo("login");
		}
		else{
			echo ("false");
		}
		
	break;
}

?>
