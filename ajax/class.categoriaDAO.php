 <?php
include_once('./class.DBPDO.php');
include_once('./class.categoria.php');

class categoriaDAO {
	
	function createCategoria(categoria $Categoria){
		$BD = $_SESSION["bd"];
		$sql = 'CALL createCategoria(?,?)';
		$array = array($Categoria->nombreCategoria);
		$BD->execute($sql,$array);
	}

	function readCategoria(categoria $Categoria){
		$BD = $_SESSION["bd"];
		$sql = 'CALL readCategoria(?)';
		$array = array($Categoria->idCategoria);
		$resultado = $BD->fetch($sql,$array);
		return new categoria($resultado['idCategoria'], $resultado['nombreCategoria']);
	}

	function readAllCategoria(){
		$BD = $_SESSION["bd"];
		$sql = 'CALL readAllCategoria()';
		$resultado = $BD->fetchAll($sql);
		foreach ($resultado as $row){
		echo implode (', ', $row);
		echo '<br>';
		}
	}

	function updateCategoria(categoria $Categoria){
		$BD = $_SESSION["bd"];
		$sql = 'CALL updateCategoria(?,?,?)';
		$array = array($Categoria->idCategoria,$Categoria->nombreCategoria);
		$BD->execute($sql,$array);
	}

	function deleteCategoria(categoria $Categoria){
		$BD = $_SESSION["bd"];
		$sql = 'CALL deleteCategoria(?)';
		$array = array($Categoria->idCategoria);
		$BD->execute($sql,$array);
	}

}


?> 
