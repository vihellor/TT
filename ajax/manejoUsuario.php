<?php
include_once('./class.usuarioDAO.php');
include_once('./class.usuario.php');
include_once('./class.DBPDO.php');

if( !isset($_SESSION["bd"]) ){
    $_SESSION["bd"] = new DBPDO();
}

$peticion = json_decode(file_get_contents('php://input'), true);
switch ($peticion['funcion']) {
	case "registro":
		$usuario = new usuario("",$peticion['nickname'],$peticion['name'],$peticion['app'],$peticion['apm'],$peticion['ocupacion'],$peticion['email'],$peticion['password']);
		var_dump($usuario);
		$DAO = new usuarioDAO();
		$resultado = $DAO->createUsuario($usuario);
		if($resultado['_result']==1){
			echo("registro");
		}
		else{
			echo ("registroUsuarioFalse");
		}
	break;
	case "login":
		$DAO = new usuarioDAO();
		$usuario = new usuario(" ",$peticion['nickname']," "," "," "," "," ",$peticion['password']);
		$usuario = $DAO->readUsuario($usuario);
		if(strlen($usuario->nombre)!=0){
			$_SESSION["usuario"] = $usuario;
			echo("login");
		}
		else{
			echo ("loginFalse");
		}
	break;
	case "getUsuario":
		$usuario = $_SESSION["usuario"] ;
		$myJSON = json_encode($usuario);
		echo $myJSON;
	break;
	case "updateUsuario":
		$DAO = new usuarioDAO;
		$usuario = new usuario($peticion['idUsuario'],$peticion['nickname'],$peticion['name'],$peticion['app'],$peticion['apm'],$peticion['ocupacion'],$peticion['email']);
		$DAO->updateusuario($usuario);
		echo('updateUsuario');
	break;
	case "updateContrasena":
		$DAO = new usuarioDAO;
		$usuario = new usuario($peticion['idUsuario']," "," "," "," "," ",$peticion['newPassword'],$peticion['password']);
		$resultado = $DAO->updateusuario($usuario);
		if($resultado['_result']==1){
			echo("updateContrasena");
		}
		else{
			echo ("updateContrasenaFalse");
		}
	break;
	case "deleteUsuario":
		$DAO = new usuarioDAO;
		$usuario = new usuario($peticion['idUsuario'],"","","","","","","");
		$resultado = $DAO->deleteUsuario($usuario);
		if($resultado['_result']==1){
			echo("deleteUsuario");
		}
		else{
			echo ("deleteUsuarioFalse");
		}
	break;
}

?>
