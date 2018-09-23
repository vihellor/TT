 <?php

class partida {
	public $idPartida;
	public $nombrePartida;
	public $estado;
	public $jugadores;
	public $meta;

	function __construct($idPartida, $nombrePartida, $estado,$jugadores,$meta){
		$this->idPartida= $idPartida;
		$this->nombrePartida = $nombrePartida;
		$this->estado = $estado;
		$this->jugadores = $jugadores;
		$this->meta = $meta;
	}
}

?>

 
 
