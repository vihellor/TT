function expon(mean){
	var aux= log(1- Math.random())*(-mean);
}
function generate(inicio,cantidad,param1,param2){
	var xs = array();
	var ys = array();
	var res = 0;
	var k=0;
	var p=0;
	var ultimo=inicio;
	var j=cantidad;
	for (var i=0; i < j; i++) { 
		k = ultimo - (ultimo*param1) + expon(ultimo*param2);
		// print "el valor actual es: ", $k
		xs.push(i);
		ys.push(k);
		ultimo = k;
		p+=k;
	}
	// print $p
	var res=p/j;
	// print "la media es: ", res
	return [xs,ys];
}
generate(50,1000,.005,.0045);