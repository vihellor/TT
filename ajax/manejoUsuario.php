<?php
session_start();
include_once('./class.usuario.php');
include_once('./class.usuarioDAO.php');
include_once('./class.flujo.php');
include_once('./class.flujoDAO.php');
include_once('./class.DBPDO.php');

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
        echo $result;
}
if($peticion['funcion'] == "login"){
		$DAO = new usuarioDAO();
        $usuario = new usuario(" ",$peticion['nickname']," "," "," "," "," ",$peticion['password']);
        $usuario = $DAO->readUsuario($usuario);
        if(strlen($usuario->nombre)!=0){
            $myJSON = json_encode($usuario);
            $_SESSION["usuario"] = $myJSON;
            $result = ("login");
        }
        else{
            $result = ("loginFalse");
        }
        echo $result;
}
if($peticion['funcion'] == "getUsuario"){
	$DAO = new usuarioDAO();
	$usuario = $DAO->readUsuario($_SESSION["usuario"]);
    $result =  ($_SESSION["usuario"]);
    echo json_encode($result);
}
if($peticion['funcion'] == "updateUsuario"){
		$DAO = new usuarioDAO;
		$usuarioSession = json_decode($_SESSION["usuario"],true);
		$usuario = new usuario($usuarioSession['idUsuario'],$peticion['nickname'],$peticion['name'],$peticion['app'],$peticion['apm'],$peticion['ocupacion'],$peticion['email'],"");
		$DAO->updateusuario($usuario);
		echo('updateUsuario');
}
if($peticion['funcion'] == "updateContrasena"){
		$DAO = new usuarioDAO;
		$usuarioSession = json_decode($_SESSION["usuario"],true);
		$usuario = new usuario($usuarioSession['idUsuario']," "," "," "," "," ",$peticion['newPassword'],$peticion['OldPassword']);
		$resultado = $DAO->updateContrasena($usuario);
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
if($peticion['funcion'] == "createTarjeta"){
		$DAO = new tarjetaDAO;
		$tarjeta = new tarjeta($peticion['idTarjeta'],$peticion['fechaCorte'],$peticion['saldo'],$peticion['tipoTarjeta'],$peticion['idInstitucion'],$peticion['idUsuario'],$peticion['nickname']);
		$resultado = $DAO->createTarjeta($tarjeta);
		if($peticion['tipoTarjeta'] == 0){
			$tarjetaDebito = new tarjetaDebito($peticion['idTarjetaDebito'],$peticion['comisionFija'],$peticion['porcentajexManejoCuenta'],$peticion['valorComisionFija'],$peticion['idTarjeta']);
			$DAO = new tarjetaDebitoDAO;
			$resultado = $DAO->createTarjetaDebito($tarjetaDebito);
		}
		if($peticion['tipoTarjeta'] == 1){
			$tarjetaCredito = new tarjetaDeCredito($peticion['idTarjetaDeCredito'],$peticion['limiteCredito'],$peticion['tasaInteresAnual'],$peticion['idTarjeta']);
			$DAO = new tarjetaDebitoDeCredito;
			$resultado = $DAO->createTarjetaDeCredito($tarjetaCredito);
		}
		if($resultado['_result']==1){
			echo("createTarjeta");
		}
		else{
			echo ("createTarjetaFalse");
		}
}
if($peticion['funcion'] == "readIngresos"){
	$DAO = new flujoDAO;
	$usuario = json_decode($_SESSION["usuario"],true);
	$resultado = $DAO->readAllFlujoIngreso($usuario['idUsuario']);
	echo json_encode($resultado);
}
if($peticion['funcion'] == "readEgresos"){
	$DAO = new flujoDAO;
	$usuario = json_decode($_SESSION["usuario"],true);
	$resultado = $DAO->readAllFlujoEgreso($usuario['idUsuario']);
	echo json_encode($resultado);
}
if($peticion['funcion'] == "createIngreso"){
	$DAO = new flujoDAO;
	$ingreso = new flujo($peticion['nombreFlujo'],$peticion['fechaCorte'],$peticion['tipoFlujo'],$peticion['monto'],$peticion['periodicidad'],$peticion['idUsuario'],$peticion['nickname']);
	$resultado = $DAO->readAllInstitucion();
	echo json_encode($resultado);
}
if($peticion['funcion'] == "createEgreso"){
}

?>