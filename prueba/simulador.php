<?php 
	function expon($mean){
		$aux= log(1-mt_rand()/mt_getrandmax())*(-$mean);
	}
	function generate($inicio,$cantidad,$param1,$param2){
		$xs = array();
		$ys = array();
		$res = 0;
		$k=0;
		$p=0;
		$ultimo=$inicio;
		$j=$cantidad;
		for ($i=0; $i < $j; $i++) { 
			$k = $ultimo - ($ultimo*$param1) + expon($ultimo*$param2);
			# print "el valor actual es: ", $k
			array_push($xs,$i);
			array_push($ys,$k);
			$ultimo = $k;
			$p+=$k;
		}
		# print $p
		$res=$p/$j;
		# print "la media es: ", res
		return array($xs,$ys);
	}
	generate(50,1000,.005,.0045);
 ?>