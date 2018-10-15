 <?php
include_once('./class.DBPDO.php');
include_once('./class.flujo.php');

class flujoDAO {
	
	function createFlujo(flujo $newFlujo){
		$BD = new DBPDO();
		$sql = 'CALL createFlujo(?,?,?,?,?,?,?)';
		$array = array($newFlujo->fechaCorte, $newFlujo->nombreFlujo, $newFlujo->tipoFlujo, $newFlujo->monto, $newFlujo->periodicidad, $newFlujo->idUsuario, $newFlujo->nickname);
		$resultado = $BD->fetch($sql,$array);
		$BD->close();
		return $resultado;
	}

	function readFlujo(flujo $flujo){
		$BD = new DBPDO();
		$sql = 'CALL readFlujo(?)';
		$array = array($flujo->idFlujo);
		$resultado = $BD->fetch($sql,$array);
		$BD->close();
		return new flujo($resultado['idFlujo'], $resultado['nombreFlujo'], $resultado['fechaCorte'],$resultado['tipoFlujo'],$resultado['monto'],$resultado['periodicidad'],$resultado['idUsuario'],$resultado['nickname']);
	}

	function readAllFlujoEgreso($idUsuario){
		$BD = new DBPDO();
		$sql = 'CALL readAllFlujoEgreso(?)';
		$array = array($idUsuario);
		$resultado = $BD->fetchAll($sql,$array);
		$BD->close();
		return $resultado;
	}

	function readAllFlujoIngreso($idUsuario){
		$BD = new DBPDO();
		$sql = 'CALL readAllFlujoIngreso(?)';
		$array = array($idUsuario);
		$resultado = $BD->fetchAll($sql,$array);
		$BD->close();
		return $resultado;
	}

	function updateFlujo(flujo $newFlujo){
		$BD = new DBPDO();
		$sql = 'CALL updateFlujo(?,?,?,?,?)';
		$array = array($newFlujo->idFlujo,$newFlujo->nombreFlujo,$newFlujo->fechaCorte,$newFlujo->monto,$newFlujo->periodicidad);
		$BD->execute($sql,$array);
		$BD->close();
	}

	function deleteFlujo(flujo $newFlujo){
		$BD = new DBPDO();
		$sql = 'CALL deleteFlujo(?)';
		$array = array($newFlujo->idFlujo);
		$resultado = $BD->fetch($sql,$array);
		$BD->close();
		return $resultado;
	}

}