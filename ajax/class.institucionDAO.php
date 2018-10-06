 <?php
include_once('./class.DBPDO.php');
include_once('./class.institucion.php');

class institucionDAO xtends institucion{
	
	function createInstitucion(institucion $Institucion){
		$BD = $_SESSION["bd"];
		$sql = 'CALL createInstitucion(?,?)';
		$array = array($Institucion->nombreInstitucion, $Institucion->descripcionInstitucion);
		$BD->execute($sql,$array);
	}

	function readInstitucion(institucion $Institucion){
		$BD = $_SESSION["bd"];
		$sql = 'CALL readInstitucion(?)';
		$array = array($Institucion->idInstitucion);
		$resultado = $BD->fetch($sql,$array);
		return new institucion($resultado['idInstitucion'], $resultado['nombreInstitucion'], $resultado['descripcionInstitucion']);
	}

	function readAllInstitucion(){
		$BD = $_SESSION["bd"];
		$sql = 'CALL readAllInstitucion()';
		$resultado = $BD->fetchAll($sql);
		foreach ($resultado as $row){
		echo implode (', ', $row);
		echo '<br>';
		}
	}

	function updateInstitucion(institucion $Institucion){
		$BD = $_SESSION["bd"];
		$sql = 'CALL updateInstitucion(?,?,?)';
		$array = array($Institucion->idInstitucion,$Institucion->nombreInstitucion,$Institucion->descripcionInstitucion);
		$BD->execute($sql,$array);
	}

	function deleteInstitucion(institucion $Institucion){
		$BD = $_SESSION["bd"];
		$sql = 'CALL deleteInstitucion(?)';
		$array = array($Institucion->idInstitucion);
		$BD->execute($sql,$array);
	}

}


?>  
