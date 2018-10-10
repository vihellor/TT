var cont=0;
function verificarT(selected){
	if(selected.value.localeCompare("texto")==0){
		document.getElementsByName("text"+selected.name.slice(3,))[0].style.display="block";
		document.getElementsByName("file"+selected.name.slice(3,))[0].style.display="none";
		//console.log(x.display);
		//console.log(y.display);
	}
	else{
		document.getElementsByName("text"+selected.name.slice(3,))[0].style.display="none";
		document.getElementsByName("file"+selected.name.slice(3,))[0].style.display="block";
		//console.log(x.display);
		//console.log(y.display);
	}
}
function resetT(){
	cont=0;
	var x = document.getElementById('tutoTable');
	var input1 = '<tr class="w3-green"><th>tipo</th><th>Dato</th></tr><tr><td><select name="sel'+cont+'" onchange="verificar(this);"><option value="texto">Texto</option><option value="imagen">Imagen</option><option value="video">Video</option></select></td><td><textarea rows="4" cols="50" name="text'+cont+'" form="usrform"></textarea><input type="file" name="file'+cont+'" style="display:none;"></td></tr>';
    x.innerHTML=input1;
}
function addT(){
	cont++;
	var x = document.getElementById('tutoTable');
	var input1 = '<tr><td><select name="sel'+cont+'" onchange="verificar(this);"><option value="texto">Texto</option><option value="imagen">Imagen</option><option value="video">Video</option></select></td><td><textarea rows="4" cols="50" name="text'+cont+'" form="usrform"></textarea><input type="file" name="file'+cont+'" style="display:none;"></td></tr>';
    x.innerHTML+=input1;
}
function crearTutorial(){
	handleFormSubmit2(document.getElementById('tutoForm'),'nuevoTutorial');
}