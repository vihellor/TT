 <?php
include_once('./class.DBPDO.php');
include_once('./class.usuario.php');


class usuarioDAO{

	function createUsuario(usuario $user){
		$BD = DBPDO::getInstance()->getConnection();
		$sql = 'CALL createUsuario(?,?,?,?,?,?,?)';
		$array = array($user->nombre,$user->apellidoPaterno,$user->apellidoMaterno,$user->nickname,$user->ocupacion,$user->correo,$user->contrasena);
		return $BD->fetch($sql,$array);
	}

	function readUsuario(usuario $user){
		$BD = DBPDO::getInstance()->getConnection();
		$sql = 'CALL readUsuario(?,?)';
		$array = array($user->nickname, $user->contrasena);
		$resultado = $BD->fetch($sql,$array);
		return new usuario($resultado['idUsuario'], $resultado['nickname'], $resultado['nombre'], $resultado['apellidoPaterno'],$resultado['apellidoMaterno'], $resultado['ocupacion'], $resultado['correo'], "");
	}

	function updateUsuario(usuario $user){
		$BD = DBPDO::getInstance()->getConnection();
		$sql = 'CALL updateUsuario(?,?,?,?,?,?,?)';
		$array = array($user->idUsuario,$user->nombre,$user->apellidoPaterno,$user->apellidoMaterno,$user->nickname,$user->ocupacion,$user->correo);
		$BD->execute($sql,$array);
	}

	function updateContrasena(usuario $user){
		$BD = DBPDO::getInstance()->getConnection();
		$sql = 'CALL updateContrasena(?,?,?)';
		$array = array($user->idUsuario,$user->contrasena,$user->correo);
		$BD->execute($sql,$array);
	}

	function deleteUsuario(usuario $user){
		$BD = DBPDO::getInstance()->getConnection();
		$sql = 'CALL deleteUsuario(?)';
		$array = array($user->correo);
		$BD->execute($sql,$array);
	}

}


?> 

