 <?php

class tarjetaDebito {
	public $idTarjetaDebito;
	public $comisionFija;
	public $porcentajexManejoCuenta;	
	public $valorComisionFija;
	public $idTarjeta;

	function __construct($idTarjetaDebito,$comisionFija,$porcentajexManejoCuenta,$valorComisionFija,$idTarjeta){
		$this->idTarjetaDebito= $idTarjetaDebito;
		$this->comisionFija = $comisionFija;
		$this->porcentajexManejoCuenta = $porcentajexManejoCuenta;
		$this->valorComisionFija = $valorComisionFija;
		$this->idTarjeta = $idTarjeta;
	}
}

?>

 
