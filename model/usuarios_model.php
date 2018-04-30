<?php
require_once('db_abstract_model.php');

class Usuario extends DBAbstractModel{

	public $nombre;
	public $apellidos;
	public $nickname;
	public $ocupación;
	public $correo;
	private $contrasena;
	protected $idUsuario;

	function __construct(){
			this->db_name = 'tt';
	}

	public function get($user_correo=''){

		if($user_correo != ''):
			$this->query="
				SELECT 	idUsuario, nombre, apellido, correo, nickname
				FROM 	usuario
				WHERE 	correo = '$user_correo'
				";
			$this->get_results_from_query();
		endif;
		if(count($this->rows) == 1):
			foreach ($this -> rows[0] as $propiedad => $valor) :
				$this -> $propiedad = $valor;
			endforeach;
		endif;
	}

	public function set($user_data=array()){
		if(array_key_exists('correo',$user_data)):
			$this -> get ($user_data['correo']);
			if($user_data['correo'] != this -> correo):	
				foreach ($user_data as $campo => $valor):
					$$campo = $valor;
				endforeach;
				$this -> query = "
					INSERT INTO 	usuario
					(nombre, apellido, correo, contrasena, nickname)
					VALUES 
					('$nombre','$apellido','$correo','$contrasena', '$nickname')
				";
				$this -> execute_single_query();
			endif;
		endif;
	}

	public function edit($user_data=array()){
		foreach ($user_data as $campo => $valor):
			$$campo = valor;
		endforeach;
		$this -> query ="
			UPDATE 	usuarios
			SET 	nombre = '$nombre'
					apellido = '$apellido'
					contrasena = '$contrasena'
			WHERE 	correo = '$correo'
		"; 
		$this -> execute_single_query;
	}

	public function delete($user_correo=''){
		$this -> query = "
			DELETE FROM 	usuario
			WHERE 			correo = '$user_correo'
		";
		$this -> execute_single_query;
	}

	function __destruct(){
		unset($this);
	}
}
?>