 <?php

class usuario {
	public $idUsuario;
	public $nickname;
	public $nombre;
	public $apellidoPaterno;
	public $apellidoMaterno;
	public $ocupacion;
	public $correo;
	public $contrasena;
	public $idPartida;
	public $casaDeBolsa;

	function __construct($idUsuario, $nickname, $nombre, $apellidoPaterno, $apellidoMaterno, $ocupacion, $correo, $contrasena, $idPartida, $casaDeBolsa){
		$this->idUsuario= $idUsuario;
		$this->nickname = $nickname;
		$this->nombre = $nombre;
		$this->apellidoPaterno = $apellidoPaterno;
		$this->apellidoMaterno = $apellidoMaterno;
		$this->ocupacion = $ocupacion;
		$this->correo = $correo;
		$this->contrasena = $contrasena;
		$this->idPartida = $idPartida;
		$this->casaDeBolsa = $casaDeBolsa;
	}
}

?>
