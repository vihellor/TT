<?php

if( !isset($_SESSION["bd"]) ){
    $_SESSION["bd"] = new DBPDO();
}

$peticion = json_decode(file_get_contents('php://input'), true);

switch ($peticion['funcion']) {
    case "nuevo":
        $arr = array ( $peticion['nombre'] => array(  ) );
        //file_put_contents("array.json",json_encode($arr));
        //$arr2 = json_decode(file_get_contents("array.json"), true);
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
    case "getData":
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
    case "add":
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
    case "remove":
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
