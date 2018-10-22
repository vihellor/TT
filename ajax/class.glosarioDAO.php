 <?php
include_once('./class.DBPDO.php');
include_once('./class.glosario.php');

class glosarioDAO {
	
	function createGlosario(glosario $concepto){
		$BD = new DBPDO();
		$sql = 'CALL createGlosario(?,?)';
		$array = array($concepto->concepto, $concepto->definicion);
		$resultado = $BD->fetch($sql,$array);
		$BD->close();
		return $resultado;
	}

	function readGlosario(glosario $concepto){
		$BD = new DBPDO();
		$sql = 'CALL readGlosario(?)';
		$array = array($concepto->idConcepto);
		$resultado = $BD->fetch($sql,$array);
		$BD->close();
		return new glosario($resultado['idConcepto'], $resultado['concepto'], $resultado['definicion']);
	}

	function readAllGlosario(){
		$BD = new DBPDO();
		$sql = 'CALL readAllGlosario()';
		$resultado = $BD->fetchAll($sql);
		$BD->close();
		return $resultado;
	}

	function updateGlosario(glosario $concepto){
		$BD = new DBPDO();
		$sql = 'CALL updateGlosario(?,?,?)';
		$array = array($concepto->idConcepto,$concepto->concepto,$concepto->definicion);
		$BD->execute($sql,$array);
		$BD->close();
	}

	function deleteGlosario(glosario $concepto){
		$BD = new DBPDO();
		$sql = 'CALL deleteGlosario(?)';
		$array = array($concepto->concepto);
		$resultado = $BD->execute($sql,$array);
		$BD->close();
		return $resultado;
	}

}


?> 
