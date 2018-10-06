 <?php

class puntajes {
	public $idRespuesta;
	public $respuesta;
	public $idTutorial;
	public $idUsuario;
	public $nickname;
	public $idPreguntas;

	function __construct($idRespuesta, $respuesta, $idTutorial, $idUsuario, $nickname, $idPreguntas){
		$this->idRespuesta = $idRespuesta;
		$this->respuesta = $respuesta;
		$this->idTutorial = $idTutorial;
		$this->idUsuario = $idUsuario;
		$this->nickname = $nickname;
		$this->idPreguntas = $idPreguntas;
	}
}

?>

