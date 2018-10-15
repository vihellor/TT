 <?php

class tarjeta {
	public $idTarjeta;
	public $fechaCorte;
	public $saldo;
	public $tipoTarjeta;
	public $idUsuario;
	public $nickname;

	function __construct($idTarjeta, $fechaCorte, $saldo, $tipoTarjeta, $idUsuario, $nickname){
		$this->idTarjeta= $idTarjeta;
		$this->fechaCorte = $fechaCorte;
		$this->saldo = $saldo;
		$this->tipoTarjeta = $tipoTarjeta;
		$this->idUsuario = $idUsuario;
		$this->nickname = $nickname;
	}
}

?>

 
 
