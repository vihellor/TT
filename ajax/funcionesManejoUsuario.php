<?php
session_start();
include_once('./class.usuarioDAO.php');
include_once('./class.usuario.php');
include_once('./class.DBPDO.php');
include_once('./pruebaSessions.php');

 if( !isset($_SESSION["bd"]) ){
        $_SESSION["bd"] = new DBPDO();
    }

    $result = "";

    function registro($peticion){
        $DAO = new usuarioDAO();
        $usuario = new usuario("",$peticion['nickname'],$peticion['name'],$peticion['app'],$peticion['apm'],$peticion['ocupacion'],$peticion['email'],$peticion['password']);
        $resultado = $DAO->createUsuario($usuario);
        if($resultado['_result']==1){
            $result = "registro";
        }
        else{
            return ("registroFalse");
        }
    }

    function login ($peticion) {
        $DAO = new usuarioDAO();
        $usuario = new usuario(" ",$peticion['nickname']," "," "," "," "," ",$peticion['password']);
        $usuario = $DAO->readUsuario($usuario);
        if(strlen($usuario->nombre)!=0){
            $myJSON = json_encode($usuario);
            $_SESSION["idUsuario"] = 'maanzana';
            return ("login");
            exit();
        }
        else{
            return ("loginFalse");
            exit();
        }
    }

    // My session regenerate id function
    function getUsuario() {
        //echo('entroGetUsuario <br>');
        return  ($_SESSION["idUsuario"]);
            //$usuario = (object) $_SESSION["usuario"] ;
            //$myJSON = json_encode($usuario);
            //echo $myJSON;
    }

?>