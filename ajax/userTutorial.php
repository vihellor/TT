<?php 
define('WP_USE_THEMES', false);
require('./../tutoriales/wp-blog-header.php');

$number_of_posts = 5;
$args = array( 'numberposts' => $number_of_posts );
$recent_posts = wp_get_recent_posts( $args );
$html="";
foreach( $recent_posts as $recent_post ){
	$html.='<div onclick="mostrar(\''.$recent_post['post_title'].'\')" class="w3-card-4 cardTam"><header class="w3-container w3-green"><h3>'.$recent_post['post_title'].'<i class="fa fa-chevron-right fa-fw"></i></h3></header></div>';
	//<div class="w3-left-align"><p>Left aligned text.</p></div>
	// <div class="w3-container w3-border w3-large"></div> 
	$html.="<div id='".$recent_post['post_title']."' style='display: none;' class='division'><button class=\"w3-bar-item w3-button tablink\" onclick=\"retAll('".$recent_post['post_title']."')\"><i class=\"fa fa-angle-left fa-fw\"></i>Atras</button> <br> <h7>".$recent_post['post_date']."</h7> <br><h1>".$recent_post['post_title']."</h1><div class=\"w3-container w3-border w3-large\"><div class=\"w3-left-align\"><p>".$recent_post['post_content']."</p></div></div></div>";
}
echo $html;


?>