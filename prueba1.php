 <?php
    error_log(json_encode(file_get_contents('php://input')));
    echo(json_encode(file_get_contents('php://input')));
?>
