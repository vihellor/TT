 <?php
include_once('./back/class.DBPDO.php');

$DB = new DBPDO();



$DB->execute("call createUsuario(Victor,'Gutierrez Avina', 'josigtz', 'estudiante', 'correo', '123456')");
?>
