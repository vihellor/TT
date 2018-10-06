 <?php

class flujo {
	public $idFlujo;
	public $fechaCorte;
	public $tipoFlujo;
	public $monto;
	public $periodicidad;
	public $idListaFlujo;
	public $idUsuario;
	public $nickname;

	function __construct($idFlujo, $fechaCorte, $tipoFlujo, $monto, $periodicidad, $idListaFlujo, $idUsuario, $nickname){
		$this->idFlujo= $idFlujo;
		$this->fechaCorte = $fechaCorte;
		$this->tipoFlujo = $tipoFlujo;
		$this->monto = $monto;
		$this->periodicidad = $periodicidad;
		$this->idListaFlujo = $idListaFlujo;
		$this->idUsuario = $idUsuario;
		$this->nickname = $nickname;
	}
}

?>
 
