<?php
session_start();
include_once('./class.usuarioDAO.php');
include_once('./class.usuario.php');
include_once('./class.DBPDO.php');
include_once('./pruebaSessions.php');
include_once('./funcionesManejoUsuario.php');

if(session_id() == "" || !isset($_SESSION)){
		my_session_start();
		my_session_regenerate_id();
}

if( !isset($_SESSION["bd"]) ){
    $_SESSION["bd"] = new DBPDO();
}

//var_dump(is_writable(session_id()));
//echo session_save_path();
$peticion = json_decode(file_get_contents('php://input'), true);
if($peticion['funcion'] == "registro"){
	registro($peticion);
}
if($peticion['funcion'] == "login"){
	login($peticion);
}
if($peticion['funcion'] == "getUsuario"){
	getUsuario();
}
if($peticion['funcion'] == "updateUsuario"){
		$DAO = new usuarioDAO;
		$usuario = new usuario($peticion['idUsuario'],$peticion['nickname'],$peticion['name'],$peticion['app'],$peticion['apm'],$peticion['ocupacion'],$peticion['email']);
		$DAO->updateusuario($usuario);
		echo('updateUsuario');
}
if($peticion['funcion'] == "updateContrasena"){
		$DAO = new usuarioDAO;
		$usuario = new usuario($peticion['idUsuario']," "," "," "," "," ",$peticion['newPassword'],$peticion['password']);
		$resultado = $DAO->updateusuario($usuario);
		if($resultado['_result']==1){
			echo("updateContrasena");
		}
		else{
			echo ("updateContrasenaFalse");
		}
}
if($peticion['funcion'] == "deleteUsuario"){
		$DAO = new usuarioDAO;
		$usuario = new usuario($peticion['idUsuario'],"","","","","","","");
		$resultado = $DAO->deleteUsuario($usuario);
		if($resultado['_result']==1){
			echo("deleteUsuario");
		}
		else{
			echo ("deleteUsuarioFalse");
		}
}
?>
