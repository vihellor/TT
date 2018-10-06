<?php
include_once('./class.DBPDO.php');
include_once('./class.tarjetaDeCredito.php');

class tarjetaDeCreditoDAO {
	
	function createTarjetaDeCredito(tarjetaDeCredito $tarjeta){
		$BD = $_SESSION["bd"];
		$sql = 'CALL createTarjetaDeCredito(?,?,?,?)';
		$array = array($tarjeta->idTarjetaDeCredito, $tarjeta->limiteCredito, $tarjeta->tasaInteresAnual, $tarjeta->idTarjeta);
		$BD->execute($sql,$array);
	}

	function readTarjetaDeCredito(tarjetaDeCredito $tarjeta){
		$BD = $_SESSION["bd"];
		$sql = 'CALL readTarjetaDeCredito(?)';
		$array = array($concepto->idTarjetaDeCredito);
		$resultado = $BD->fetch($sql,$array);
		return new tarjetaDeCredito($resultado['idTarjetaDeCredito'], $resultado['limiteCredito'], $resultado['tasaInteresAnual'], $resultado['idTarjeta']);
	}

	function readAllTarjetaDeCredito(){
		$BD = $_SESSION["bd"];
		$sql = 'CALL readAllTarjetaDeCredito()';
		$resultado = $BD->fetchAll($sql);
		foreach ($resultado as $row){
		echo implode (', ', $row);
		echo '<br>';
		}
	}

	function updateTarjetaDeCredito(tarjetaDeCredito $tarjeta){
		$BD = $_SESSION["bd"];
		$sql = 'CALL updateTarjetaDeCredito(?,?,?,?)';
		$array = array($tarjeta->idTarjetaDeCredito, $tarjeta->limiteCredito, $tarjeta->tasaInteresAnual, $tarjeta->idTarjeta);
		$BD->execute($sql,$array);
	}

	function deleteTarjetaDeCredito(tarjetaDeCredito $tarjeta){
		$BD = $_SESSION["bd"];
		$sql = 'CALL deleteTarjetaDeCredito(?)';
		$array = array($tarjeta->idTarjetaDeCredito);
		$BD->execute($sql,$array);
	}

} 
