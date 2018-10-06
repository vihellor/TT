<?php
include_once('./class.DBPDO.php');
include_once('./class.tarjetaDebito.php');

class tarjetaDebitoDAO {
	
	function createTarjetaDebito(tarjetaDebito $tarjeta){
		$BD = $_SESSION["bd"];
		$sql = 'CALL createTarjetaDebito(?,?,?,?,?)';
		$array = array($tarjeta->idTarjetaDebito, $tarjeta->comisionFija, $tarjeta->porcentajexManejoCuenta, $tarjeta->valorComisionFija, $tarjeta->idTarjeta);
		$BD->execute($sql,$array);
	}

	function readTarjetaDebito(tarjetaDebito $tarjeta){
		$BD = $_SESSION["bd"];
		$sql = 'CALL readTarjetaDebito(?)';
		$array = array($concepto->idTarjetaDebito);
		$resultado = $BD->fetch($sql,$array);
		return new tarjetaDebito($resultado['idTarjetaDebito'], $resultado['comisionFija'], $resultado['porcentajexManejoCuenta'], $resultado['valorComisionFija'],$resultado['idTarjeta']);
	}

	function readAllTarjetaDebito(){
		$BD = $_SESSION["bd"];
		$sql = 'CALL readAllTarjetaDebito()';
		$resultado = $BD->fetchAll($sql);
		foreach ($resultado as $row){
		echo implode (', ', $row);
		echo '<br>';
		}
	}

	function updateTarjetaDebito(tarjetaDebito $tarjeta){
		$BD = $_SESSION["bd"];
		$sql = 'CALL updateTarjetaDebito(?,?,?,?,?)';
		$array = array($tarjeta->idTarjetaDebito, $tarjeta->comisionFija, $tarjeta->porcentajexManejoCuenta, $tarjeta->valorComisionFija, $tarjeta->idTarjeta);
		$BD->execute($sql,$array);
	}

	function deleteTarjetaDebito(tarjetaDebito $tarjeta){
		$BD = $_SESSION["bd"];
		$sql = 'CALL deleteTarjetaDebito(?)';
		$array = array($tarjeta->idTarjetaDebito);
		$BD->execute($sql,$array);
	}

} 
