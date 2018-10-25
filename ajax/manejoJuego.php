<?php
session_start();
include_once('./class.partida.php');
include_once('./class.partidaDAO.php');
include_once('./class.casaDeBolsa.php');
include_once('./class.casaDeBolsaDAO.php');
include_once('./class.usuario.php');
include_once('./class.usuarioDAO.php');
include_once('./class.glosario.php');
include_once('./class.glosarioDAO.php');
include_once('./class.DBPDO.php');

$peticion = json_decode(file_get_contents('php://input'), true);

if($peticion['funcion'] == "readPartida"){ //CHECKED
        $DAO = new partidaDAO();
        $usuarioSession = json_decode($_SESSION["usuario"],true);
        $resultado = $DAO->readPartida($usuarioSession['idPartida']);
        echo json_encode($resultado);
}
if($peticion['funcion'] == "getFundador"){ //CHECKED
    $DAO = new usuarioDAO();
    $result = $DAO->getUsuario($peticion['idUsuario']);
    echo json_encode($result);
}
if($peticion['funcion'] == "getUsuario"){ //CHECKED
    $DAO = new usuarioDAO();
    $usuarioSession = json_decode($_SESSION["usuario"],true);
    $result = $DAO->getUsuario($usuarioSession['idUsuario']);
    echo json_encode($result);
}
if($peticion['funcion'] == "readIngresos"){ //CHECKED
	$DAO = new flujoDAO;
	$resultado = $DAO->readAllFlujoIngreso($peticion['idUsuario']);
	echo json_encode($resultado);
}
if($peticion['funcion'] == "readEgresos"){ //CHECKED
	$DAO = new flujoDAO;
	$resultado = $DAO->readAllFlujoEgreso($peticion['idUsuario']);
	echo json_encode($resultado);
}
?>