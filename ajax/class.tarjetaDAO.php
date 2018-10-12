 <?php
include_once('./class.DBPDO.php');
include_once('./class.tarjeta.php');


class tarjetaDAO {
	
	function createTarjeta(tarjeta $Tarjeta){
		$BD = new DBPDO();
		$sql = 'CALL createTarjeta(?,?,?,?,?,?,?,?)';
		$array = array($Tarjeta->idTarjeta, $Tarjeta->fechaCorte, $Tarjeta->saldo, $Tarjeta->tipoTarjeta, $Tarjeta->idInstitucion, $Tarjeta->idUsuario, $Tarjeta->nickname);
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

	function readAllTarjetasDebito(){
		$BD = new DBPDO();
		$sql = 'CALL readAllTarjetasDebito(?)';
		$resultado = $BD->fetchAll($sql);
		$BD->close();
		return $resultado;
	}

	function readAllTarjetasCredito(){
		$BD = new DBPDO();
		$sql = 'CALL readAllTarjetasDebito(?)';
		$resultado = $BD->fetchAll($sql);
		$BD->close();
		return $resultado;
	}

	function updateTarjeta(tarjeta $Tarjeta){
		$BD = new DBPDO();
		$sql = 'CALL updatePartida(?,?,?,?,?,?,?,?)';
		$array = array($Tarjeta->idTarjeta, $Tarjeta->fechaCorte, $Tarjeta->saldo, $Tarjeta->tipoTarjeta, $Tarjeta->idInstitucion, $Tarjeta->idUsuario, $Tarjeta->nickname);
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
 

 
