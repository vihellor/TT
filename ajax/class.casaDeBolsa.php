 <?php

class casaDeBolsa {
	public $idCasaDeBolsa;
	public $nombre;
	public $comisionCompraAccion;
	public $mensualidadManejoPortafolio;

	function __construct($idCasaDeBolsa, $nombre, $comisionCompraAccion, $mensualidadManejoPortafolio){
		$this->idCasaDeBolsa= $idCasaDeBolsa;
		$this->nombre = $nombre;
		$this->comisionCompraAccion = $comisionCompraAccion;
		$this->mensualidadManejoPortafolio = $mensualidadManejoPortafolio;
	}
}

?>