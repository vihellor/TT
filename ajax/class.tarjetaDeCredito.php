 <?php
require_once "class.tarjeta.php";

class TarjetaDeCredito extends tarjeta{
	public $idTarjetaDeCredito;
	public $limiteCredito;
	public $tasaInteresAnual;	
	public $idTarjeta;

	function __construct($idTarjetaDeCredito,$limiteCredito,$tasaInteresAnual,$idTarjeta){
		$this->idTarjetaDeCredito= $idTarjetaDeCredito;
		$this->limiteCredito = $limiteCredito;
		$this->tasaInteresAnual = $tasaInteresAnual;
		$this->idTarjeta = $idTarjeta;
	}
}

?>

 
 
