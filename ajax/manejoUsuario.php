<?php
session_start();
include_once('./class.usuario.php');
include_once('./class.usuarioDAO.php');
include_once('./class.DBPDO.php');




$result = " ";

$peticion = json_decode(file_get_contents('php://input'), true);
if($peticion['funcion'] == "registro"){
		$DAO = new usuarioDAO();
        $usuario = new usuario("",$peticion['nickname'],$peticion['name'],$peticion['app'],$peticion['apm'],$peticion['ocupacion'],$peticion['email'],$peticion['password']);
        $resultado = $DAO->createUsuario($usuario);
        if($resultado['_result']==1){
            $result = "registro";
        }
        else{
            $result =  "registroFalse";
        }
}
if($peticion['funcion'] == "login"){
		$DAO = new usuarioDAO();
        $usuario = new usuario(" ",$peticion['nickname']," "," "," "," "," ",$peticion['password']);
        $usuario = $DAO->readUsuario($usuario);
        if(strlen($usuario->nombre)!=0){
            $myJSON = json_encode($usuario);
            $_SESSION["idUsuario"] = 1;
            $result = ("login");
        }
        else{
            $result = ("loginFalse");
        }
}
if($peticion['funcion'] == "getUsuario"){
	//echo('entroGetUsuario <br>');
        $result =  ($_SESSION["idUsuario"]);
            //$usuario = (object) $_SESSION["usuario"] ;
            //$myJSON = json_encode($usuario);
            //echo $myJSON;
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

echo($result);
exit();
?>
