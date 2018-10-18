 <?php

class partida {
	public $idPartida;
	public $nombrePartida;
	public $estado;
	public $limiteJugadores;
	public $jugadores;
	public $meta;
	public $fundador;
	public $montoInicial;

	function __construct($idPartida, $nombrePartida, $estado, $limiteJugadores, $jugadores, $meta, $fundador, $montoInicial){
		$this->idPartida= $idPartida;
		$this->nombrePartida = $nombrePartida;
		$this->estado = $estado;
		$this->limiteJugadores = $limiteJugadores;
		$this->jugadores = $jugadores;
		$this->meta = $meta;
		$this->fundador = $fundador;
		$this->montoInicial = $montoInicial;
	}
}

?>

 
 
