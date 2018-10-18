 <?php
include_once('./class.DBPDO.php');
include_once('./class.casaDeBolsa.php');


class casaDeBolsaDAO {
	
	function createCasaDeBolsa(casaDeBolsa $casaDeBolsa){
		$BD = new DBPDO();
		$sql = 'CALL createCasaDeBolsa(?,?,?)';
		$array = array($casaDeBolsa->nombre, $casaDeBolsa->comisionCompraAccion, $casaDeBolsa->mensualidadManejoPortafolio);
		$resultado = $BD->fetch($sql,$array);
		$BD->close();
		return $resultado;
	}

	function readAllCasaDeBolsa(){
		$BD = new DBPDO();
		$sql = 'CALL readAllCasaDeBolsa()';
		$resultado = $BD->fetchAll($sql);
		$BD->close();
		return $resultado;
	}

	function deleteCasaDeBolsa($idCasaDeBolsa){
		$BD = new DBPDO();
		$sql = 'CALL deleteCasaDeBolsa(?)';
		$array = array($idCasaDeBolsa);
		$resultado = $BD->fetch($sql,$array);
		$BD->close();
		return $resultado;
	}

	function updateCasaDeBolsa(casaDeBolsa $casa){
		$BD = new DBPDO();
		$sql = 'CALL updateCasaDeBolsa(?,?,?,?)';
		$array = array($casa->idCasaDeBolsa, $casa->nombre, $casa->comisionCompraAccion, $casa->mensualidadManejoPortafolio);
		$resultado = $BD->fetch($sql,$array);
		$BD->close();
		return $resultado;
	}

}

?>  
 
