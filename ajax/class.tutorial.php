 <?php

class tutorial {
	public $idTutorial;
	public $nombreTutorial;
	public $estado;
	public $idCategoria;

	function __construct($idTutorial, $nombreTutorial, $estado, $idCategoria){
		$this->idTutorial = $idTutorial;
		$this->nombreTutorial = $nombreTutorial;
		$this->estado = $estado;
		$this->idCategoria= $idCategoria;
	}
}

?>

