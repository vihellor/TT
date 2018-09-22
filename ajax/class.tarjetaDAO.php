 <?php
include_once('./class.DBPDO.php');
include_once('./class.tarjeta.php');


class tarjetaDAO {
	
	function createTarjeta(tarjeta $Tarjeta){
		$BD = $_SESSION["bd"];
		$sql = 'CALL createTarjeta(?,?,?,?,?,?,?,?)';
		$array = array($Tarjeta->idTarjeta, $Tarjeta->fechaCorte, $Tarjeta->saldo, $Tarjeta->tipoTarjeta, $Tarjeta->idInstitucion, $Tarjeta->idUsuario, $Tarjeta->nickname);
		$BD->execute($sql,$array);
	}

	function readTarjeta(tarjeta $Tarjeta){
		$BD = $_SESSION["bd"];
		$sql = 'CALL readTarjeta(?)';
		$array = array($Tarjeta->idTarjeta);
		$resultado = $BD->fetch($sql,$array);
		return new tarjeta($resultado['idTarjeta'], $resultado['fechaCorte'], $resultado['saldo'], $resultado['tipoTarjeta'], $resultado['idInstitucion'],$resultado['idUsuario'],$resultado['nickname']);
	}

	function readAllTarjeta(){
		$BD = $_SESSION["bd"];
		$sql = 'CALL readAllTarjeta()';
		$resultado = $BD->fetchAll($sql);
		foreach ($resultado as $row){
		echo implode (', ', $row);
		echo '<br>';
		}
	}

	function updateTarjeta(tarjeta $Tarjeta){
		$BD = $_SESSION["bd"];
		$sql = 'CALL updatePartida(?,?,?,?,?,?,?,?)';
		$array = array($Tarjeta->idTarjeta, $Tarjeta->fechaCorte, $Tarjeta->saldo, $Tarjeta->tipoTarjeta, $Tarjeta->idInstitucion, $Tarjeta->idUsuario, $Tarjeta->nickname);
		$BD->execute($sql,$array);
	}

	function deleteTarjeta(tarjeta $Tarjeta){
		$BD = $_SESSION["bd"];
		$sql = 'CALL deleteTarjeta(?)';
		$array = array($Tarjeta->idTarjeta);
		$BD->execute($sql,$array);
	}

}

?>  
 

 
