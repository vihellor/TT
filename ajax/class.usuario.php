 <?php
 session_start();

class usuario {
	public $idUsuario;
	public $nickname;
	public $nombre;
	public $apellidoPaterno;
	public $apellidoMaterno;
	public $ocupacion;
	public $correo;
	public $contrasena;

	function __construct($idUsuario, $nickname, $nombre, $apellidoPaterno, $apellidoMaterno, $ocupacion, $correo, $contrasena){
		$this->idUsuario= $idUsuario;
		$this->nickname = $nickname;
		$this->nombre = $nombre;
		$this->apellidoPaterno = $apellidoPaterno;
		$this->apellidoMaterno = $apellidoMaterno;
		$this->ocupacion = $ocupacion;
		$this->correo = $correo;
		$this->contrasena = $contrasena;
	}
}

?>
