<?php
include_once('./class.glosarioDAO.php');
include_once('./class.glosario.php');
include_once('./class.usuarioDAO.php');
include_once('./class.usuario.php');
include_once('./class.DBPDO.php');

if( !isset($_SESSION["bd"]) ){
    $_SESSION["bd"] = new DBPDO();
}

$json = '{"usuario":"josir","contrasena":"123456","funcion":"login"}';
$peticion = json_decode($json, true);

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
/*
$concepto1 = new glosario('','x','variable que reposa sobre el eje de las ordenadas');
$concepto2 = new glosario('','y','variable que reposa sobre el eje de las absisas');

if( !isset($_SESSION["bd"]) ){
    $_SESSION["bd"] = new DBPDO();
}

$DAO = new glosarioDAO();
$DAO->createGlosario($concepto1);
$DAO->createGlosario($concepto2);
$DAO->readAllGlosario();
*/
?>
