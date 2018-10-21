 <?php
include_once('./class.DBPDO.php');
include_once('./class.partida.php');


class partidaDAO {
	
	function createPartida(partida $Partida){
		$BD = new DBPDO();
		$sql = 'CALL createPartida(?,?,?,?,?,?)';
		$array = array($Partida->nombrePartida, $Partida->limiteJugadores, $Partida->jugadores, $Partida->meta, $Partida->fundador, $Partida->montoInicial);
		$resultado = $BD->fetch($sql,$array);
		$BD->close();
		return $resultado;
	}
	/*
	IN _idPartida INT
	*/

	function readPartida($idPartida){
		$BD = new DBPDO();
		$sql = 'CALL readPartida(?)';
		$array = array($idPartida);
		$resultado = $BD->fetch($sql,$array);
		$BD->close();
		return $resultado;
	}

	function iniciarPartida($idPartida){
		$BD = new DBPDO();
		$sql = 'CALL iniciarPartida(?)';
		$array = array($idPartida);
		$BD->execute($sql,$array);
		$BD->close();
	}

	function readAllPartida(){
		$BD = new DBPDO();
		$sql = 'CALL readAllPartida()';
		$resultado = $BD->fetchAll($sql);
		$BD->close();
		return $resultado;
	}

	function agregarJugador($idUsuario,$idPartida){
		$BD = new DBPDO();
		$sql = 'CALL agregarJugador(?,?)';
		$array = array($idUsuario,$idPartida);
		$resultado = $BD->fetch($sql,$array);
		$BD->close();
		return $resultado;
	}

	function deletePartida($idPartida){
		$BD = new DBPDO();
		$sql = 'CALL deletePartida(?)';
		$array = array($idPartida);
		$resultado = $BD->fetch($sql,$array);
		$BD->close();
		return $resultado;
	}

	function dejarPartida($idUsuario,$idPartida){
		$BD = new DBPDO();
		$sql = 'CALL dejarPartida(?,?)';
		$array = array($idUsuario,$idPartida);
		$resultado = $BD->fetch($sql,$array);
		$BD->close();
		return $resultado;
	}

}

?>  
 
