 <?php

class institucion {
	public $idInstitucion;
	public $nombreInstitucion;
	public $descripcionInstitucion;

	function __construct($idInstitucion, $nombreInstitucion, $descripcionInstitucion){
		$this->idInstitucion= $idInstitucion;
		$this->nombreInstitucion = $nombreInstitucion;
		$this->descripcionInstitucion = $descripcionInstitucion;
	}
}

?>
