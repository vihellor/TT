 <?php

class flujo {
	public $idFlujo;
	public $nombreFlujo;
	public $fechaCorte;
	public $tipoFlujo;
	public $monto;
	public $periodicidad;
	public $idUsuario;
	public $nickname;

	function __construct($idFlujo, $nombreFlujo, $fechaCorte, $tipoFlujo, $monto, 
		$periodicidad, $idUsuario, $nickname){
		$this->idFlujo= $idFlujo;
		$this->nombreFlujo= $nombreFlujo;
		$this->fechaCorte = $fechaCorte;
		$this->tipoFlujo = $tipoFlujo;
		$this->monto = $monto;
		$this->periodicidad = $periodicidad;
		$this->idUsuario = $idUsuario;
		$this->nickname = $nickname;
	}
}

?>
 
