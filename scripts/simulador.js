function expon(mean){
	var aux= Math.log(1- Math.random())*(-mean);
	return aux;
};
function generate(inicio,cantidad,param1,param2){
	var xs = [];
	var ys = [];
	var res = 0;
	var k=0;
	var p=0;
	var ultimo=inicio;
	var j=cantidad;
	for (var i=0; i < j; i++) { 
		k = ultimo - (ultimo*param1) + expon(ultimo*param2);
		// print "el valor actual es: ", $k
		//console.log("el valor actual es: "+k);
		xs.push(i);
		ys.push(k);
		ultimo = k;
		p+=k;
	}
	// print $p
	var res=p/j;
	// print "la media es: ", res
	return ys;
};
function generarAcciones(){
	var arr = [];
	arr.push(generate(50,1440,.0045,.005));//1
	arr.push(generate(63,1440,.0045,.005));//2
	arr.push(generate(43,1440,.0045,.005));//3
	arr.push(generate(22,1440,.0045,.005));//4
	arr.push(generate(98,1440,.0045,.005));//5
	arr.push(generate(71,1440,.0045,.005));//6
	arr.push(generate(39,1440,.0045,.005));//7
	arr.push(generate(58,1440,.0045,.005));//8
	//console.log(arr[0]);
	return arr;
};

var meses = [
		'Enero',
		'Febrero',
		'Marzo',
		'Abril',
		'Mayo',
		'Junio',
		'Julio',
		'Agosto',
		'Septiembre',
		'Octubre',
		'Noviembre',
		'Diciembre'
	];
var myChart;
var colors=[chartColors.red,chartColors.orange,chartColors.yellow,chartColors.green,chartColors.blue,chartColors.purple,chartColors.black,chartColors.grey];
function crearChart(dataR,tableName,idChart,varChart,numTotal,dataNames,x){
	var inicio = numTotal-96;
	if (inicio<0) {
		inicio=0;
	}
	var sem=inicio%4;
	var mes=inicio%12;
	var anio=2017;
	var aux = [];
	var labelsR = [];
	for (var i = inicio; i < numTotal; i++) {
		aux=[];
		aux.push((sem+1).toString());
		sem+=1;
		if (sem==4)
			sem=0;
		if (i%4==0){
			aux.push(meses[mes]);
			mes+=1;
			if (mes==12)
				mes=0;
		}
		if (i%48==0){
			aux.push(anio.toString());
			anio+=1;
		}
		//console.log(aux);
		labelsR.push(aux);
	}
	var dataSets=[];
	console.log(typeof dataNames === "string");
	if (typeof dataNames === "string") {
		var aux = {
			label: dataNames,
			data: dataR.slice(inicio,numTotal),
			borderColor: colors[x],
			backgroundColor: 'rgba(0, 0, 0, 0)',
			fill: false,
			lineTension: 0
		};
		dataSets.push(aux);
	}
	else{
		for (var i = 0; i < dataNames.length; i++) {
			var aux = {
				label: dataNames[i],
				data: dataR[i].slice(inicio,numTotal),
				borderColor: colors[i],
				backgroundColor: 'rgba(0, 0, 0, 0)',
				fill: false,
				lineTension: 0
			};
			dataSets.push(aux);
		}
	}
	
  /*console.log("yeeeeeeeeeeeeeeeei3");
  console.log(data3.length);
  for (var j =  0; j < 48; j++) {
    //console.log(j);
    console.log(data3[j]);
  }*/
  var config = {
      type: 'line',
      data: {
        labels: labelsR,
        datasets: dataSets
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: tableName
        },
        tooltips: {
          mode: 'index'
        },

        scales: {
			xAxes: [{
				display: true
			}],
			yAxes: [{
				display: true,
				scaleLabel: {
					display: true,
					labelString: 'Valor'
				}
			}]
		}
      }
    };
    console.log("yeeeeeeeeeeeeeeeei4");
    var ctx = document.getElementById(idChart).getContext('2d');
    if(typeof varChart !== 'undefined'){
      varChart.destroy();
    }
    varChart = new Chart(ctx, config);
        /*//2 5 8 11    (n-2)%3 == 0 then add monto to graph*/
 };