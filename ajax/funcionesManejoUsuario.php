<?php
session_start();
include_once('./class.usuarioDAO.php');
include_once('./class.usuario.php');
include_once('./class.DBPDO.php');
include_once('./pruebaSessions.php');

function registro($peticion){
    $DAO = new usuarioDAO();
    $usuario = new usuario("",$peticion['nickname'],$peticion['name'],$peticion['app'],$peticion['apm'],$peticion['ocupacion'],$peticion['email'],$peticion['password']);
    $resultado = $DAO->createUsuario($usuario);
    if($resultado['_result']==1){
        echo("registro");
    }
    else{
        echo ("registroFalse");
    }
}

function login ($peticion) {
    var_dump ($peticion);
    $DAO = new usuarioDAO();
    $usuario = new usuario(" ",$peticion['nickname']," "," "," "," "," ",$peticion['password']);
    $usuario = $DAO->readUsuario($usuario);
    if(strlen($usuario->nombre)!=0){
        $myJSON = json_encode($usuario);
        $_SESSION["idUsuario"] = $usuario->idUsuario;
        echo("login");
        exit();
    }
    else{
        echo("loginFalse");
        exit();
    }
}

// My session regenerate id function
function getUsuario() {
    //echo('entroGetUsuario <br>');
    return ($_SESSION["idUsuario"]);
        //$usuario = (object) $_SESSION["usuario"] ;
        //$myJSON = json_encode($usuario);
        //echo $myJSON;
}
?>