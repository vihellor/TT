 <?php
include_once('./class.DBPDO.php');
include_once('./class.tarjeta.php');


class tarjetaDAO {
	
	function createTarjeta(tarjeta $Tarjeta){
		$BD = new DBPDO();
		$sql = 'CALL createTarjeta(?,?,?,?,?,?,?)';
		$array = array($Tarjeta->idTarjeta, $Tarjeta->fechaCorte, $Tarjeta->saldo, $Tarjeta->tipoTarjeta, $Tarjeta->idUsuario, $Tarjeta->nickname);
		$resultado = $BD->fetch($sql,$array);
		$BD->close();
		return $resultado;
	}

	function readTarjeta(tarjeta $Tarjeta){
		$BD = new DBPDO();
		$sql = 'CALL readTarjeta(?)';
		$array = array($Tarjeta->idTarjeta);
		$resultado = $BD->fetch($sql,$array);
		$BD->close();
		return new tarjeta($resultado['idTarjeta'], $resultado['fechaCorte'], $resultado['saldo'], $resultado['tipoTarjeta'], $resultado['idInstitucion'],$resultado['idUsuario'],$resultado['nickname']);
	}

	function readAllTarjetasDebito($idUsuario){
		$BD = new DBPDO();
		$sql = 'CALL readAllTarjetasDebito(?)';
		$array = array($idUsuario);
		$resultado = $BD->fetchAll($sql,$array);
		$BD->close();
		return $resultado;
	}

	function readAllTarjetasCredito($idUsuario){
		$BD = new DBPDO();
		$sql = 'CALL readAllTarjetasCredito(?)';
		$array = array($idUsuario);
		$resultado = $BD->fetchAll($sql,$array);
		$BD->close();
		return $resultado;
	}

	function updateTarjeta(tarjeta $Tarjeta){
		$BD = new DBPDO();
		$sql = 'CALL updateTarjeta(?,?,?,?,?)';
		$array = array($Tarjeta->idTarjeta, $Tarjeta->fechaCorte, $Tarjeta->saldo, $Tarjeta->tipoTarjeta);
		$BD->execute($sql,$array);
		$BD->close();
	}

	function deleteTarjeta(tarjeta $Tarjeta){
		$BD = new DBPDO();
		$sql = 'CALL deleteTarjeta(?)';
		$array = array($Tarjeta->idTarjeta);
		$resultado = $BD->fetch($sql,$array);
		$BD->close();
		return $resultado;
	}

}

?>  
 

 
