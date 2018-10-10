 <?php
include_once('./class.DBPDO.php');
include_once('./class.flujo.php');

class flujoDAO {
	
	function createFlujo(flujo $flujo){
		$BD = new DBPDO();
		$sql = 'CALL createFlujo(?,?,?,?,?,?,?)';
		$array = array($flujo->nombreFlujo, $flujo->fechaCorte, $flujo->tipoFlujo, $flujo->monto, $flujo->periodicidad, $flujo->idUsuario, $flujo->nickname);
		$resultado = $BD->execute($sql,$array);
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

	function updateFlujo(flujo $flujo){
		$BD = new DBPDO();
		$sql = 'CALL updateGlosario(?,?,?)';
		$array = array($concepto->idConcepto,$concepto->concepto,$concepto->definicion);
		$BD->execute($sql,$array);
		$BD->close();
	}

	function deleteFlujo(flujo $flujo){
		$BD = new DBPDO();
		$sql = 'CALL deleteGlosario(?)';
		$array = array($concepto->concepto);
		$resultado = $BD->execute($sql,$array);
		$BD->close();
		return $resultado;
	}

}