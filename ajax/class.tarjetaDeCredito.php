 <?php

class TarjetaDeCredito {
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

 
 
