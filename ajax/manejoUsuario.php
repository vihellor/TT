<?php
session_start();
include_once('./class.usuario.php');
include_once('./class.usuarioDAO.php');
include_once('./class.flujo.php');
include_once('./class.flujoDAO.php');
include_once('./class.tarjeta.php');
include_once('./class.tarjetaDAO.php');
include_once('./class.DBPDO.php');

$peticion = json_decode(file_get_contents('php://input'), true);

if($peticion['funcion'] == "registro"){ //CHECKED
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

if($peticion['funcion'] == "login"){ //CHECKED
		$DAO = new usuarioDAO();
        $usuario = new usuario(" ",$peticion['nickname']," "," "," "," "," ",$peticion['password']);
        $usuario = $DAO->readUsuario($usuario);
        if(strlen($usuario->nombre)!=0){
            $myJSON = json_encode($usuario);
            $_SESSION["usuario"] = $myJSON;
            echo ("login");
        }
        else{
            echo ("loginFalse");
        }
}

if($peticion['funcion'] == "getUsuario"){ //CHECKED
	$DAO = new usuarioDAO();
	$usuarioSession = json_decode($_SESSION["usuario"],true);
	$result = $DAO->getUsuario($usuarioSession['idUsuario']);
    echo json_encode($result);
}

if($peticion['funcion'] == "readAllUsuario"){ //CHECKED
	$DAO = new usuarioDAO();
	$result = $DAO->readAllUsuario();
    echo json_encode($result);
}

if($peticion['funcion'] == "updateUsuario"){ //CHECKED
		$DAO = new usuarioDAO;
		$usuarioSession = json_decode($_SESSION["usuario"],true);
		$usuario = new usuario($usuarioSession['idUsuario'],$peticion['nickname'],$peticion['name'],$peticion['app'],$peticion['apm'],$peticion['ocupacion'],$peticion['email'],"");
		$DAO->updateusuario($usuario);
		echo('updateUsuario');
}

if($peticion['funcion'] == "updateContrasena"){ //CHECKED
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

if($peticion['funcion'] == "changeContrasena"){ //CHECKED
		$DAO = new usuarioDAO;
		$usuario = new usuario($peticion['id']," "," "," "," "," "," ",$peticion['OldPassword']);
		$resultado = $DAO->changeContrasena($usuario);
		if($resultado['_result']==1){
			echo("updateContrasena");
		}
		else{
			echo ("updateContrasenaFalse");
		}
}

if($peticion['funcion'] == "deleteUsuario"){ //CHECKED
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


if($peticion['funcion'] == "readIngresos"){ //CHECKED
	$DAO = new flujoDAO;
	$usuario = json_decode($_SESSION["usuario"],true);
	$resultado = $DAO->readAllFlujoIngreso($usuario['idUsuario']);
	echo json_encode($resultado);
}

if($peticion['funcion'] == "readEgresos"){ //CHECKED
	$DAO = new flujoDAO;
	$usuario = json_decode($_SESSION["usuario"],true);
	$resultado = $DAO->readAllFlujoEgreso($usuario['idUsuario']);
	echo json_encode($resultado);
}

if($peticion['funcion'] == "flujoDelete"){ //CHECKED
	$DAO = new flujoDAO;
	$newFlujo = new flujo($peticion['idFlujo'],"","","","","","","");
	$resultado = $DAO->deleteFlujo($newFlujo);
	if($resultado['_result']==1){
		echo ('flujoDelete');
	}else{
		echo ('flujoDeleteFalse');
	}
}

if($peticion['funcion'] == "flujoEdit"){ //CHECKED
	$DAO = new flujoDAO;
	$newFlujo = new flujo($peticion['idFlujo'],$peticion['nombreFlujo'],$peticion['fecha']," ",$peticion['monto'],$peticion['periodicidad']," "," ");
	$DAO->updateFlujo($newFlujo);
		echo ('flujoEdit');
}

if($peticion['funcion'] == "createIngreso"){ //CHECKED
	$DAO = new flujoDAO;
	$usuario = json_decode($_SESSION["usuario"],true);
	$ingreso = new flujo("",$peticion['nombreFlujo'],$peticion['fecha'],1,$peticion['monto'],$peticion['periodicidad'],$usuario['idUsuario'],$usuario['nickname']);
	$resultado = $DAO->createFlujo($ingreso);
	if($resultado['_result']==1){
		echo ('createIngreso');
	}else{
		echo ('createIngresoFalse');
	}
}

if($peticion['funcion'] == "createEgreso"){ //CHECKED
	$DAO = new flujoDAO;
	$usuario = json_decode($_SESSION["usuario"],true);
	$ingreso = new flujo("",$peticion['nombreFlujo'],$peticion['fecha'],0,$peticion['monto'],$peticion['periodicidad'],$usuario['idUsuario'],$usuario['nickname']);
	$resultado = $DAO->createFlujo($ingreso);
	if($resultado['_result']==1){
		echo ('createEgreso');
	}else{
		echo ('createEgresoFalse');
	}
}

if($peticion['funcion'] == "readTarjetasDebito"){ //CHEKED
	$DAO = new tarjetaDAO;
	$usuario = json_decode($_SESSION["usuario"],true);
	$resultado = $DAO->readAllTarjetasDebito($usuario['idUsuario']);
	echo json_encode($resultado);
}

if($peticion['funcion'] == "readTarjetasCredito"){ //CHEKED
	$DAO = new tarjetaDAO;
	$usuario = json_decode($_SESSION["usuario"],true);
	$resultado = $DAO->readAllTarjetasCredito($usuario['idUsuario']);
	echo json_encode($resultado);
}

if($peticion['funcion'] == "deleteTarjeta"){ //CHECKED
		$DAO = new tarjetaDAO;
		$tarjeta = new tarjeta($peticion['idTarjeta'], "", "", "", "", "", "");
		$resultado = $DAO->deleteTarjeta($tarjeta);
		if($resultado['_result']==1){
		echo ('deleteTarjeta');
	}else{
		echo ('deleteTarjetaFalse');
	}
}
//-----------------------------------------------------------------------------------
//$prueba = '{"funcion":"deleteTarjeta","idTarjeta":109865432}';
//$peticion = json_decode($prueba, true);
if($peticion['funcion'] == "createTarjetaDebito"){ //CHECKED
		$DAO = new tarjetaDAO;
		$tarjeta = new tarjeta($peticion['idTarjeta'], "", "", "", "", "", "");
		$resultado = $DAO->deleteTarjeta($tarjeta);
		if($resultado['_result']==1){
		echo ('deleteTarjeta');
	}else{
		echo ('deleteTarjetaFalse');
	}
}
if($peticion['funcion'] == "createTarjetaCredito"){ //CHECKED
		$DAO = new tarjetaDAO;
		$tarjeta = new tarjeta($peticion['idTarjeta'], "", "", "", "", "", "");
		$resultado = $DAO->deleteTarjeta($tarjeta);
		if($resultado['_result']==1){
		echo ('deleteTarjeta');
	}else{
		echo ('deleteTarjetaFalse');
	}
}



if($peticion['funcion'] == "usrEdit"){  //CHECKED
	$DAO = new usuarioDAO;
	$usuario = new usuario($peticion['id'], "", "", "", "", "", "",$peticion['password']);
	$resultado = $DAO->changeContrasena($usuario);
	if($resultado['_result']=1){
		echo ('usrEdit');
	}else{
		echo ('usrEditFalse');
	}
}

if($peticion['funcion'] == "usrDelete"){
	$DAO = new usuarioDAO;
	$usuario = new usuario($peticion['id'], "", "", "", "", "", "", "");
	$resultado = $DAO->deleteUsuario($usuario);
	if($resultado['_result']=1){
		echo ('usrDelete');
	}else{
		echo ('usrDeleteFalse');
	}	
}

if($peticion['funcion'] == "createTarjeta"){ //CHECK
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
?>