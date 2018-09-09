 <?php
include_once('./back/class.DBPDO.php');

$DB = new DBPDO();



$DB->execute("call createUsuario('Josimar','Gutierrez Avina', 'josigtz', 'estudiante', 'correo', '123456')");
?>
