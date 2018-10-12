 <?php
include_once('./class.DBPDO.php');
include_once('./class.usuario.php');


class usuarioDAO{

	function createUsuario(usuario $user){
		$BD = new DBPDO();
		$sql = 'CALL createUsuario(?,?,?,?,?,?,?)';
		$array = array($user->nombre,$user->apellidoPaterno,$user->apellidoMaterno,$user->nickname,$user->ocupacion,$user->correo,$user->contrasena);
		$resultado = $BD->fetch($sql,$array);
		$BD->close();
		return $resultado;
	}

	function readUsuario(usuario $user){
		$BD = new DBPDO();
		$sql = 'CALL readUsuario(?,?)';
		$array = array($user->nickname, $user->contrasena);
		$resultado = $BD->fetch($sql,$array);
		$BD->close();
		return new usuario($resultado['idUsuario'], $resultado['nickname'], $resultado['nombre'], $resultado['apellidoPaterno'],$resultado['apellidoMaterno'], $resultado['ocupacion'], $resultado['correo'], "");
	}

	function readAllUsuario(){
		$BD = new DBPDO();
		$sql = 'CALL readAllUsuario()';
		$resultado = $BD->fetchAll($sql);
		$BD->close();
		return $resultado;
	}

	function getUsuario($idUser){
		$BD = new DBPDO();
		$sql = 'CALL getUsuario(?)';
		$array = array($idUser);
		$resultado = $BD->fetch($sql,$array);
		$BD->close();
		return new usuario($resultado['idUsuario'], $resultado['nickname'], $resultado['nombre'], $resultado['apellidoPaterno'],$resultado['apellidoMaterno'], $resultado['ocupacion'], $resultado['correo'], "");
	}

	function updateUsuario(usuario $user){
		$BD = new DBPDO();
		$sql = 'CALL updateUsuario(?,?,?,?,?,?,?)';
		$array = array($user->idUsuario,$user->nombre,$user->apellidoPaterno,$user->apellidoMaterno,$user->nickname,$user->ocupacion,$user->correo);
		$BD->execute($sql,$array);
		$BD->close();
	}

	function updateContrasena(usuario $user){
		$BD = new DBPDO();
		$sql = 'CALL updateContrasena(?,?,?)';
		$array = array($user->idUsuario,$user->contrasena,$user->correo);
		$resultado = $BD->fetch($sql,$array);
		$BD->close();
		return $resultado;
	}

	function changeContrasena(usuario $user){
		$BD = new DBPDO();
		$sql = 'CALL changeContrasena(?,?)';
		$array = array($user->idUsuario,$user->contrasena);
		$resultado = $BD->fetch($sql,$array);
		$BD->close();
		return $resultado;
	}

	function deleteUsuario(usuario $user){
		$BD = new DBPDO();
		$sql = 'CALL deleteUsuario(?)';
		$array = array($user->idUsuario);
		$resultado = $BD->fetch($sql,$array);
		$BD->close();
		return $resultado;
	}

}


?> 

