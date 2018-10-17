<meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="./../style/w3.css">
  <link rel="stylesheet" href="./../style/bubles.css">
  <link rel="stylesheet" href="./../style/css?family=Raleway">
  <script src="/scripts/usrTutorial.js"></script>
<?php 
define('WP_USE_THEMES', false);
require('tutoriales/wp-blog-header.php');

$number_of_posts = 5;
$args = array( 'numberposts' => $number_of_posts );
$recent_posts = wp_get_recent_posts( $args );
foreach( $recent_posts as $recent_post ){
	echo '<div onclick="mostrar(\''.$recent_post['post_title'].'\')" class="w3-card-4 cardTam"><header class="w3-container w3-green"><h3>'.$recent_post['post_title'].'<i class="fa fa-chevron-right fa-fw"></i></h3></header></div>';
	echo "<div id='".$recent_post['post_title']."' style='display: none;' class='division'><button class=\"w3-bar-item w3-button tablink\" onclick=\"retAll('".$recent_post['post_title']."')\"><i class=\"fa fa-angle-left fa-fw\"></i>Atras</button> <br> <span>".$recent_post['post_date']."</span> <br><h3>".$recent_post['post_title']."</h3><p>".$recent_post['post_content']."</p></div>";
}


?>