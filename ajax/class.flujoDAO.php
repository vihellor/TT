 <?php
include_once('./class.DBPDO.php');
include_once('./class.flujo.php');

class flujoDAO {
	
	function createFlujo(flujo $flujo){
		$BD = $_SESSION["bd"];
		$sql = 'CALL createFlujo(?,?,?,?,?,?,?)';
		$array = array($flujo->nombreFlujo, $flujo->fechaCorte, $flujo->tipoFlujo, $flujo->monto, $flujo->periodicidad, $flujo->idUsuario, $flujo->nickname);
		$BD->execute($sql,$array);
	}

	function readFlujo(flujo $flujo){
		$BD = $_SESSION["bd"];
		$sql = 'CALL readFlujo(?)';
		$array = array($flujo->idFlujo);
		$resultado = $BD->fetch($sql,$array);
		return new flujo($resultado['idFlujo'], $resultado['nombreFlujo'], $resultado['fechaCorte'],$resultado['tipoFlujo'],$resultado['monto'],$resultado['periodicidad'],$resultado['idUsuario'],$resultado['nickname']);
	}

	function readAllFlujoEgreso($idUsuario){
		$BD = $_SESSION["bd"];
		$sql = 'CALL readAllFlujoEgreso(?)';
		$array = array($idUsuario);
		$resultado = $BD->fetchAll($sql,$array);
		return $resultado;
	}

	function readAllFlujoIngreso($idUsuario){
		$BD = $_SESSION["bd"];
		$sql = 'CALL readAllFlujoIngreso(?)';
		$array = array($idUsuario);
		$resultado = $BD->fetchAll($sql,$array);
		return $resultado;
	}

	function updateFlujo(flujo $flujo){
		$BD = $_SESSION["bd"];
		$sql = 'CALL updateGlosario(?,?,?)';
		$array = array($concepto->idConcepto,$concepto->concepto,$concepto->definicion);
		$BD->execute($sql,$array);
	}

	function deleteFlujo(flujo $flujo){
		$BD = $_SESSION["bd"];
		$sql = 'CALL deleteGlosario(?)';
		$array = array($concepto->concepto);
		$BD->execute($sql,$array);
	}

}