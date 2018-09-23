 <?php

class listaFlujos {
	public $idFlujo;
	public $nombreFlujo;
	public $descripcionFlujo;

	function __construct($idFlujo, $nombreFlujo, $descripcionFlujo){
		$this->idFlujo= $idFlujo;
		$this->nombreFlujo = $nombreFlujo;
		$this->descripcionFlujo = $descripcionFlujo;
	}
}

?>
 
