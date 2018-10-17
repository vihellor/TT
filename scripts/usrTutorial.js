function mostrar(hola){
	document.getElementById(hola).style.display = 'block';
	x = document.getElementsByClassName("cardTam");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
}
function retAll(hola){
	document.getElementById(hola).style.display = 'none';
	x = document.getElementsByClassName("cardTam");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "block";
	}
}