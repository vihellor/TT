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

if($peticion['funcion'] == "createPartida"){ //CHECKED
		$DAO = new partidaDAO();
        $usuarioSession = json_decode($_SESSION["usuario"],true);
        $partida = new partida("",$peticion['nombrePartida'],"",$peticion['limite'],1,$peticion['meta'],$usuarioSession['idUsuario'],$peticion['montoInicial']);
        $resultado = $DAO->createPartida($partida);
        if($resultado['_result']==1){
            $DAO = new usuarioDAO();
            $usuarioSession = json_decode($_SESSION["usuario"],true);
            $usuario = $DAO->getUsuario($usuarioSession['idUsuario']);
            $_SESSION["usuario"] = json_encode($usuario);
            echo "registroPartida";
        }
        else{
            echo  "registroPartidaFalse";
        }
}

if($peticion['funcion'] == "readAllPartida"){ //CHECKED
		$DAO = new partidaDAO();
        $resultado = $DAO->readAllPartida();
        echo json_encode($resultado);
}

if($peticion['funcion'] == "readPartida"){ //CHECKED
        $DAO = new partidaDAO();
        $usuarioSession = json_decode($_SESSION["usuario"],true);
        $resultado = $DAO->readPartida($usuarioSession['idPartida']);
        echo json_encode($resultado);
}

if($peticion['funcion'] == "getUsuario"){ //CHECKED
    $DAO = new usuarioDAO();
    $usuarioSession = json_decode($_SESSION["usuario"],true);
    $result = $DAO->getUsuario($usuarioSession['idUsuario']);
    echo json_encode($result);
}

if($peticion['funcion'] == "iniciarPartida"){ //CHECKED
        $DAO = new partidaDAO();
        $usuarioSession = json_decode($_SESSION["usuario"],true);
        $DAO->iniciarPartida($usuarioSession['idPartida']);
        echo 'iniciarPartida';
}

if($peticion['funcion'] == "agregarJugador"){ //CHECKED
		$DAO = new partidaDAO();
        $_SESSION["idPartida"]=$peticion['idPartida'];
        $usuarioSession = json_decode($_SESSION["usuario"],true);
        $resultado = $DAO->agregarJugador($usuarioSession['idUsuario'],$peticion['idPartida']);
        if($resultado['_result']==1){
            $DAO = new usuarioDAO();
            $usuarioSession = json_decode($_SESSION["usuario"],true);
            $usuario = $DAO->getUsuario($usuarioSession['idUsuario']);
            $_SESSION["usuario"] = json_encode($usuario);
            echo "agregarJugador";
        }
        else{
            echo  "agregarJugadorFalse";
        }
}
if($peticion['funcion'] == "subirIdPartida"){ //CHECKED
        $_SESSION["idPartida"]=$peticion['idPartida'];
        echo  "subirIdPartida";
}

if($peticion['funcion'] == "dejarPartida"){ //CHECKED
        $DAO = new partidaDAO();
        $usuarioSession = json_decode($_SESSION["usuario"],true);
        $partida = $DAO->readPartida($usuarioSession['idPartida']);
        if($partida['fundador']==$usuarioSession['idUsuario']){
            $resultado = $DAO->deletePartida($usuarioSession['idPartida']);
            if($resultado['_result']==1){
                $_SESSION["idPartida"]=0;
                echo "dejarPartida";
            }
            else{
                echo  "dejarPartidaFalse";
            }
        }else{
             $resultado = $DAO->dejarPartida($usuarioSession['idUsuario'],$usuarioSession['idPartida']);
            if($resultado['_result']==1){
                $_SESSION["idPartida"]=0;
                echo "dejarPartida";
            }
            else{
                echo  "dejarPartidaFalse";
            }
        }
}

if($peticion['funcion'] == "createCasaDeBolsa"){ //CHECK
        $DAO = new casaDeBolsaDAO();
        $casa = new casaDeBolsa("",$peticion['nombreCasa'],$peticion['comision'],$peticion['mensualidad']);
        $resultado = $DAO->createCasaDeBolsa($casa);
        if($resultado['_result']==1){
            echo "createCasa";
        }
        else{
            echo  "createCasaFalse";
        }
}
//$prueba = '{"funcion":"readAllGlosario","idCasa":3,"nombreCasa":"eTor","comision":34,"mensualidad":150}';
//$peticion = json_decode($prueba, true);
if($peticion['funcion'] == "readAllGlosario"){ //CHECKED
        $DAO = new glosarioDAO();
        $resultado = $DAO->readAllGlosario();
        echo json_encode($resultado);
}
if($peticion['funcion'] == "createGlosario"){ //CHECKED
        $DAO = new glosarioDAO();
        $concepto = new glosario("",$peticion['concepto'],$peticion['definicion']);
        $resultado = $DAO->createGlosario($concepto);
        if($resultado['_result']==1){
            echo "createGlosario";
        }
        else{
            echo  "createGlosarioFalse";
        }
}

if($peticion['funcion'] == "updateCasaDeBolsa"){ //CHECK
        $DAO = new casaDeBolsaDAO();
        $casa = new casaDeBolsa($peticion['idCasa'],$peticion['nombreCasa'],$peticion['comision'],$peticion['mensualidad']);
        $resultado = $DAO->createCasaDeBolsa($casa);
        if($resultado['_result']==1){
            echo "createCasa";
        }
        else{
            echo  "createCasaFalse";
        }
}
if($peticion['funcion'] == "readAllCasaDeBolsa"){ //CHECK
        $DAO = new casaDeBolsaDAO();
        $resultado = $DAO->readAllCasaDeBolsa();
        echo json_encode($resultado);
}
if($peticion['funcion'] == "deleteCasaDeBolsa"){ //CHECK
        $DAO = new casaDeBolsaDAO();
        $resultado = $DAO->deleteCasaDeBolsa();
        if($resultado['_result']==1){
            echo "deleteCasa";
        }
        else{
            echo  "deleteCasaFalse";
        }
}
?>