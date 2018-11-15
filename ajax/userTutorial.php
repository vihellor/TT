<?php 
define('WP_USE_THEMES', false);
require('./../tutoriales/wp-blog-header.php');

$number_of_posts = 20;
$args = array( 'numberposts' => $number_of_posts );
$recent_posts = wp_get_recent_posts( $args );
$html="";
foreach( $recent_posts as $recent_post ){
	// $html.=$recent_post['post_title'];
	$html.='<div onclick="mostrar(\''.$recent_post['post_title'].'\')" style="cursor: pointer;" class="w3-card-4 cardTam"><header class="w3-container w3-green"><h3>'.$recent_post['post_title'].'<i class="fa fa-chevron-right fa-fw"></i></h3></header></div>';
	//<div class="w3-left-align"><p>Left aligned text.</p></div>
	// <div class="w3-container w3-border w3-large"></div> 
	$html.="<div id='".$recent_post['post_title']."' style='display: none;' class='division'><button class=\"w3-bar-item w3-button tablink\" onclick=\"retAll('".$recent_post['post_title']."')\"><i class=\"fa fa-angle-left fa-fw\"></i>Atras</button> <br><h1>".$recent_post['post_title']."</h1><div class=\"w3-container w3-border w3-large\"><div style=\"text-align: justify;\">".$recent_post['post_content']."</div></div></div>";
	//$html = preg_grep("/<img class=\".*\"/" ,$html);
	$html = preg_replace("/<img class=\".*\" src/", "<br><br><img style=\"display: block; margin-left: auto; margin-right: auto;\" class=\"w3-image\" src", $html);
	$html = str_replace("/\]\[\/video\]/"," type=\"video/mp4\"></video>",$html);
	$html = str_replace("/\[video/","<video",$html);
	$html = str_replace("/mp4=/"," controls><source src=",$html);
	$html = str_replace("\r","<br>",$html);
	// $html = str_replace("\r","",$html);
	// $html = str_replace(" ","",$html);
	# $html = preg_replace("/<br>\r<br>/", "", $html);
	//$html = preg_replace("/([\b\s]*<[\b\s]*[bB][rR][\s]*/?[\b\s]*>){2,}/", "<br>", $html);
	//$video = preg_grep("/\[video.*\[\/video\]/" ,$html);
	//$video = rtrim($video,"]");
	//$video = ltrim($video,"mp4=");
	//$html = preg_replace("/\[video.*\[\/video\]/", "<br><video width=\"400\" controls><source src=".$video." type=\"video/mp4\"></video>", $html);
	
	//[video width="1280" height="720" mp4="http://localhost/tutoriales/wp-content/uploads/2018/10/videoTT.mp4"][/video]</p></div></div></div><div onclick="mostrar('Hola qué hace???')" class="w3-card-4 cardTam"><header class="w3-container w3-green"><h3>Hola qué hace???<i class="fa fa-chevron-right fa-fw"></i></h3></header></div><div id='Hola qué hace???' style='display: none;' class='division'><button class="w3-bar-item w3-button tablink" onclick="retAll('Hola qué hace???')"><i class="fa fa-angle-left fa-fw"></i>Atras</button> <br> <p>2018-10-18 03:17:08</p> <br><h1>Hola qué hace???</h1><div class="w3-container w3-border w3-large"><div class="w3-left-align"><p></p></div></div></div><div onclick="mostrar('¡Hola mundo!')" class="w3-card-4 cardTam"><header class="w3-container w3-green"><h3>¡Hola mundo!<i class="fa fa-chevron-right fa-fw"></i></h3></header></div><div id='¡Hola mundo!' style='display: none;' class='division'><button class="w3-bar-item w3-button tablink" onclick="retAll('¡Hola mundo!')"><i class="fa fa-angle-left fa-fw"></i>Atras</button> <br> <p>2018-10-12 03:51:29</p> <br><h1>¡Hola mundo!</h1><div class="w3-container w3-border w3-large"><div class="w3-left-align"><p>Bienvenido a WordPress. Esta es tu primera entrada. Edítala o bórrala, ¡y comienza a escribir!</p></div></div></div>
}
//var_dump($html);
echo $html;


?>