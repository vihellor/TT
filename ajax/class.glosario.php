 <?php
 
class glosario {
	public $idConcepto;
	public $concepto;
	public $definicion;
	public $idTutorial;

	function __construct($idConcepto, $concepto, $definicion, $idTutorial = ""){
		$this->idConcepto= $idConcepto;
		$this->concepto = $concepto;
		$this->definicion = $definicion;
		$this->idTutorial = $idTutorial;
	}
}

?>

