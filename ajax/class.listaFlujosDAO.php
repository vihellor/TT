  <?php
include_once('./class.DBPDO.php');
include_once('./class.listaFlujos.php');

class listaFlujosDAO {
	
	function createFlujo(listaFlujos $flujo){
		$BD = $_SESSION["bd"];
		$sql = 'CALL createFlujo(?,?)';
		$array = array($flujo->nombreFlujo, $flujo->descripcionFlujo);
		$BD->execute($sql,$array);
	}

	function readInstitucion(listaFlujos $flujo){
		$BD = $_SESSION["bd"];
		$sql = 'CALL readFlujo(?)';
		$array = array($flujo->idFlujo);
		$resultado = $BD->fetch($sql,$array);
		return new listaFlujos($resultado['idFlujo'], $resultado['nombreFlujo'], $resultado['descripcionFlujo']);
	}

	function readAllFlujo(){
		$BD = $_SESSION["bd"];
		$sql = 'CALL readAllFlujo()';
		$resultado = $BD->fetchAll($sql);
		foreach ($resultado as $row){
		echo implode (', ', $row);
		echo '<br>';
		}
	}

	function updateFlujo(listaFlujos $flujo){
		$BD = $_SESSION["bd"];
		$sql = 'CALL updateFlujo(?,?,?)';
		$array = array($flujo->idFlujo,$flujo->nombreFlujo,$flujo->descripcionFlujo);
		$BD->execute($sql,$array);
	}

	function deleteFlujo(listaFlujos $flujo){
		$BD = $_SESSION["bd"];
		$sql = 'CALL deleteFlujo(?)';
		$array = array($flujo->idFlujo);
		$BD->execute($sql,$array);
	}

}


?>  
