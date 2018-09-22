 <?php

class glosario {
	public $idConcepto;
	public $concepto;
	public $definicion;

	function __construct($idConcepto, $concepto, $definicion){
		$this->idConcepto= $idConcepto;
		$this->concepto = $concepto;
		$this->definicion = $definicion;
	}
}

?>

