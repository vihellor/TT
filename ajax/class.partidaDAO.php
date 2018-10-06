 <?php
include_once('./class.DBPDO.php');
include_once('./class.partida.php');


class partidaDAO {
	
	function createPartida(partida $Partida){
		$BD = $_SESSION["bd"];
		$sql = 'CALL createPartida(?,?,?,?)';
		$array = array($Partida->nombrePartida, $Partida->estado, $Partida->jugadores, $Partida->meta);
		$BD->execute($sql,$array);
	}
	/*
	IN _idPartida INT
	*/

	function readPartida(partida $Partida){
		$BD = $_SESSION["bd"];
		$sql = 'CALL readPartida(?)';
		$array = array($Partida->idPartida);
		$resultado = $BD->fetch($sql,$array);
		return new partida($resultado['idPartida'], $resultado['nombrePartida'], $resultado['estado'], $resultado['jugadores'], $resultado['meta']);
	}

	function readAllPartida(){
		$BD = $_SESSION["bd"];
		$sql = 'CALL readAllPartida()';
		$resultado = $BD->fetchAll($sql);
		foreach ($resultado as $row){
		echo implode (', ', $row);
		echo '<br>';
		}
	}

	function updatePartida(partida $Partida){
		$BD = $_SESSION["bd"];
		$sql = 'CALL updatePartida(?,?,?,?,?)';
		$array = array($Partida->idPartida,$Partida->nombrePartida,$Partida->estado,$Partida->jugadores,$Partida->meta);
		$BD->execute($sql,$array);
	}

	function deletePartida(partida $Partida){
		$BD = $_SESSION["bd"];
		$sql = 'CALL deletePartida(?)';
		$array = array($Partida->idPartida);
		$BD->execute($sql,$array);
	}

}

?>  
 
