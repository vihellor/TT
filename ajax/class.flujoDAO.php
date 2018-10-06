 <?php
include_once('./class.DBPDO.php');
include_once('./class.flujo.php');

class glosarioDAO {
	
	function createGlosario(glosario $concepto){
		$BD = $_SESSION["bd"];
		$sql = 'CALL createGlosario(?,?)';
		$array = array($concepto->concepto, $concepto->definicion);
		$BD->execute($sql,$array);
	}

	function readGlosario(glosario $concepto){
		$BD = $_SESSION["bd"];
		$sql = 'CALL readGlosario(?)';
		$array = array($concepto->idConcepto);
		$resultado = $BD->fetch($sql,$array);
		return new glosario($resultado['idConcepto'], $resultado['concepto'], $resultado['definicion']);
	}

	function readAllGlosario(){
		$BD = $_SESSION["bd"];
		$sql = 'CALL readAllGlosario()';
		$resultado = $BD->fetchAll($sql);
		foreach ($resultado as $row){
		echo implode (', ', $row);
		echo '<br>';
		}
	}

	function updateGlosario(glosario $concepto){
		$BD = $_SESSION["bd"];
		$sql = 'CALL updateGlosario(?,?,?)';
		$array = array($concepto->idConcepto,$concepto->concepto,$concepto->definicion);
		$BD->execute($sql,$array);
	}

	function deleteGlosario(glosario $concepto){
		$BD = $_SESSION["bd"];
		$sql = 'CALL deleteGlosario(?)';
		$array = array($concepto->concepto);
		$BD->execute($sql,$array);
	}

}