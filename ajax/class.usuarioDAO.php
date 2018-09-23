 <?php
include_once('./class.DBPDO.php');
include_once('./class.usuario.php');

class usuarioDAO {
	
	function createUsuario(usuario $user){
		$BD = $_SESSION["bd"];
		$sql = 'CALL createUsuario(?,?,?,?,?,?,?)';
		$array = array($user->nombre,$user->apellidoPaterno,$user->apellidoMaterno,$user->nickname,$user->ocupacion,$user->correo,$user->contrasena);
		return $BD->fetch($sql,$array);
	}

	function readUsuario(usuario $user){
		$BD = $_SESSION["bd"];
		$sql = 'CALL readUsuario(?,?)';
		$array = array($user->nickname, $user->contrasena);
		$resultado = $BD->fetch($sql,$array);
		return new usuario($resultado['idUsuario'], $resultado['nickname'], $resultado['nombre'], $resultado['apellidoPaterno'],$resultado['apellidoMaterno'], $resultado['ocupacion'], $resultado['correo'], $resultado['contrasena']);
	}

	function updateUsuario(usuario $user){
		$BD = $_SESSION["bd"];
		$sql = 'CALL updateUsuario(?,?,?,?,?,?,?)';
		$array = array($user->nombre,$user->apellidoPaterno,$user->apellidoMaterno,$user->nickname,$user->ocupacion,$user->correo,$user->contrasena);
		$BD->execute($sql,$array);
	}

	function deleteUsuario(usuario $user){
		$BD = $_SESSION["bd"];
		$sql = 'CALL deleteUsuario(?)';
		$array = array($user->correo);
		$BD->execute($sql,$array);
	}

}


?> 

