var noticias=[];
for (var i = 0; i < 1440; i++) {
  noticias.push(["Notificaciones del día: "+i]);
}
var canvasCapitales;
var names=['PANM','GICR','GNLA','PETROIL','GAEM','GIM','RAQUIM','GFINMA'];
var diaActual=48;
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
function riesgosAcciones(cantidad,numAcciones){
	var empresa=porcentaje(100);

};
function porcentaje(por){
	return ((Math.random()*100) < por);
};
function bm(){
	return (Math.random() < 0.5);
};
//for (var i = 0; i < 100; i++) {
//	console.log(expon(-1));
//}
var salirAlguien=[200,400,600];
var salirVacaciones=[1300,3000,6000];
var hacerFiesta=[500,1000,1500,2000,5000];
var comprarRopa=[1500,2500,4000];
var comprarFuera=[60,80,90,120];
var velas=[];
var medias=[];
var cierres=[];

function generate2(cantidad){
	var ys = [];
	var xs = [];
	var res = 0;
	var k=0;
	var p=0;
	var dateFormat = 'MMMM DD YYYY';
	var date = moment('January 01 2017', dateFormat);
	velas.push([{o: 49,
			h: 51,
			l: 48,
			c: 50,
			t: date.valueOf(),}]);
	medias.push([50]);
	cierres.push([50]);
	ys.push([50]);
	velas.push([{o: 62,
			h: 64,
			l: 61,
			c: 63,
			t: date.valueOf(),}]);
	medias.push([63]);
	cierres.push([63]);
	ys.push([63]);
	velas.push([{o: 42,
			h: 44,
			l: 41,
			c: 43,
			t: date.valueOf(),}]);
	medias.push([43]);
	cierres.push([43]);
	ys.push([43]);
	velas.push([{o: 21,
			h: 23,
			l: 20,
			c: 22,
			t: date.valueOf(),}]);
	medias.push([22]);
	cierres.push([22]);
	ys.push([22]);
	velas.push([{o: 97,
			h: 99,
			l: 96,
			c: 98,
			t: date.valueOf()}]);
	medias.push([98]);
	cierres.push([98]);
	ys.push([98]);
	velas.push([{o: 70,
			h: 72,
			l: 69,
			c: 71,
			t: date.valueOf(),}]);
	medias.push([71]);
	cierres.push([71]);
	ys.push([71]);
	velas.push([{o: 38,
			h: 40,
			l: 37,
			c: 39,
			t: date.valueOf(),}]);
	medias.push([39]);
	cierres.push([39]);
	ys.push([39]);
	velas.push([{o: 57,
			h: 59,
			l: 56,
			c: 58,
			t: date.valueOf(),}]);
	medias.push([58]);
	cierres.push([58]);
	ys.push([58]);
	//var ultimo=inicio;
	var j=cantidad;
	var desastreNatural = 0;
	var situacionPolitica = 0;
	var industriaAlimenticia = 0;
	var industria = 0;
	var industriaEnergia = 0;
	var industriaFinanzas = 0;
	var industriaTransporte = 0;
	var industriaEntretenimiento = 0;

	var auxd1;
	var auxd2;
	var auxd3;
	var auxd4;
	var auxd5;
	var auxdmax;
	var auxdmin;
	var agregado;
	var media;
	var accion;
	for (var i=1; i < j; i++) { 
		// console.log("semana "+i);
		//desastreNatural = porcentaje(5); //expon(0.01)/2)
		if (porcentaje(5)) {
			desastreNatural=-0.1;
			noticias[i].push("agregando desastre natural");
			// console.log("agregando desastre natural");
			//10% = 0
		}
		if (porcentaje(12.5)) {
			situacionPolitica=0.15;
			if (bm()) {
				noticias[i-1].push("agregando noticia de situación política buena");
				// console.log("agregando noticia de situación política buena");
			}
			else{
				situacionPolitica*=-1;
				noticias[i-1].push("agregando noticia de situación política mala");
				// console.log("agregando noticia de situación política mala");
			}
		}
		if (porcentaje(5)) {
			industriaAlimenticia=0.15;
			if (bm()) {
				noticias[i-1].push("noticia de la industria alimenticia buena");
				// console.log("noticia de la industria alimenticia buena");
			}
			else{
				industriaAlimenticia*=-1;
				noticias[i-1].push("noticia de la industria alimenticia mala");
				// console.log("noticia de la industria alimenticia mala");
			}
		}
		if (porcentaje(5)) {
			industria=0.15;
			if (bm()) {
				noticias[i-1].push("noticia de la industria industria buena");
				// console.log("noticia de la industria industria buena");
			}
			else{
				industria*=-1;
				noticias[i-1].push("noticia de la industria industria mala");
				// console.log("noticia de la industria industria mala");
			}
		}
		if (porcentaje(5)) {
			industriaEnergia=0.15;
			if (bm()) {
				noticias[i-1].push("noticia de la industria energía buena");
				// console.log("noticia de la industria energía buena");
			}
			else{
				industriaEnergia*=-1;
				noticias[i-1].push("noticia de la industria energía mala");
				// console.log("noticia de la industria energía mala");
			}
		}
		if (porcentaje(5)) {
			industriaFinanzas=0.15;
			if (bm()) {
				noticias[i-1].push("noticia de la industria finanzas buena");
				// console.log("noticia de la industria finanzas buena");
			}
			else{
				industriaFinanzas*=-1;
				noticias[i-1].push("noticia de la industria finanzas mala");
				// console.log("noticia de la industria finanzas mala");
			}
		}
		if (porcentaje(5)) {
			industriaTransporte=0.15;
			if (bm()) {
				noticias[i-1].push("noticia de la industria transporte buena");
				// console.log("noticia de la industria transporte buena");
			}
			else{
				industriaTransporte*=-1;
				noticias[i-1].push("noticia de la industria transporte mala");
				// console.log("noticia de la industria transporte mala");
			}
		}
		if (porcentaje(5)) {
			industriaEntretenimiento=0.15;
			if (bm()) {
				noticias[i-1].push("noticia de la industria entretenimiento buena");
				// console.log("noticia de la industria entretenimiento buena");
			}
			else{
				industriaEntretenimiento*=-1;
				noticias[i-1].push("noticia de la industria entretenimiento mala");
				// console.log("noticia de la industria entretenimiento mala");
			}
		}
		if (porcentaje(25)) {
			//salir con alguien
			noticias[i-1].push("Has decidido salir con alguien y te costó: "+salirAlguien[Math.floor(Math.random()*salirAlguien.length)]);
			// console.log("Has decidido salir con alguien y te costó: "+salirAlguien[Math.floor(Math.random()*salirAlguien.length)]);
		}
		if (porcentaje(2.08)) {
			//Tomar vacaciones
			noticias[i-1].push("Has decidido tomar unas vacaciones... te costó: "+salirVacaciones[Math.floor(Math.random()*salirVacaciones.length)]);
			// console.log("Has decidido tomar unas vacaciones... te costó: "+salirVacaciones[Math.floor(Math.random()*salirVacaciones.length)]);
		}
		if (porcentaje(4.16)) {
			//Hacer una fiesta
			noticias[i-1].push("Es momento de una fiesta y te cuesta: "+hacerFiesta[Math.floor(Math.random()*hacerFiesta.length)]);
			// console.log("Es momento de una fiesta y te cuesta: "+hacerFiesta[Math.floor(Math.random()*hacerFiesta.length)]);
		}
		if (porcentaje(5)) {
			//Comprar ropa
			noticias[i-1].push("Viste tu ropero muy triste, fuiste a comprar y gastaste: "+comprarRopa[Math.floor(Math.random()*comprarRopa.length)]);
			// console.log("Viste tu ropero muy triste, fuiste a comprar y gastaste: "+comprarRopa[Math.floor(Math.random()*comprarRopa.length)]);
		}
		if (porcentaje(25)) {
			//Comer fuera
			noticias[i-1].push("Querias comer afuera y nadie te limita entonces gastaste: "+comprarFuera[Math.floor(Math.random()*comprarFuera.length)]);
			// console.log("Querias comer afuera y nadie te limita entonces gastaste: "+comprarFuera[Math.floor(Math.random()*comprarFuera.length)]);
		}
		//PANM
		accion=0;
		agregado= (expon(desastreNatural)/2+expon(situacionPolitica)/2+expon(industriaAlimenticia)/2)/6;


		date = date.clone().add(1, 'd');
		// console.log(date.valueOf());

		if(i%5==0){
			date = date.clone().subtract(3, 'd');
			date = date.clone().add(1, 'M');
			// console.log(date.valueOf());
		}

		// console.log("agregado:"+agregado);
		auxd1 = ys[accion][i-1] - (ys[accion][i-1]*.0045) + expon(ys[accion][i-1]*.005)+ ys[accion][i-1]*agregado;
		auxd2 = auxd1 - (auxd1*.0045) + expon(auxd1*.005)+ auxd1*agregado;
		auxd3 = auxd2 - (auxd2*.0045) + expon(auxd2*.005)+ auxd2*agregado;
		auxd4 = auxd3 - (auxd3*.0045) + expon(auxd3*.005)+ auxd3*agregado;
		auxd5 = auxd4 - (auxd4*.0045) + expon(auxd4*.005)+ auxd4*agregado;
		auxdmax = Math.max(auxd1, auxd2, auxd3, auxd4, auxd5);
		auxdmin = Math.min(auxd1, auxd2, auxd3, auxd4, auxd5);
		velas[accion].push({
			o: auxd1,
			h: auxdmax,
			l: auxdmin,
			c: auxd5,
			t: date.valueOf(),
		});
		
		media=(auxd1+auxd2+auxd3+auxd4+auxd5)/5;
		medias[accion].push(media);
		cierres[accion].push(auxd5);
		ys[accion].push(auxd5);
		//GICR
		accion=1;
		agregado= (expon(desastreNatural)/2+expon(situacionPolitica)/2+expon(industriaAlimenticia)/2)/6;
		// console.log("agregado:"+agregado);
		auxd1 = ys[accion][i-1] - (ys[accion][i-1]*.0045) + expon(ys[accion][i-1]*.005)+ ys[accion][i-1]*agregado;
		auxd2 = auxd1 - (auxd1*.0045) + expon(auxd1*.005)+ auxd1*agregado;
		auxd3 = auxd2 - (auxd2*.0045) + expon(auxd2*.005)+ auxd2*agregado;
		auxd4 = auxd3 - (auxd3*.0045) + expon(auxd3*.005)+ auxd3*agregado;
		auxd5 = auxd4 - (auxd4*.0045) + expon(auxd4*.005)+ auxd4*agregado;
		auxdmax = Math.max(auxd1, auxd2, auxd3, auxd4, auxd5);
		auxdmin = Math.min(auxd1, auxd2, auxd3, auxd4, auxd5);
		velas[accion].push({
			o: auxd1,
			h: auxdmax,
			l: auxdmin,
			c: auxd5,
			t: date.valueOf(),
		});
		
		media=(auxd1+auxd2+auxd3+auxd4+auxd5)/5;
		medias[accion].push(media);
		cierres[accion].push(auxd5);
		ys[accion].push(auxd5);

		//GNLA
		accion=2;
		agregado= (expon(desastreNatural)/2+expon(situacionPolitica)/2+expon(industriaAlimenticia)/2)/6;
		// console.log("agregado:"+agregado);
		auxd1 = ys[accion][i-1] - (ys[accion][i-1]*.0045) + expon(ys[accion][i-1]*.005)+ ys[accion][i-1]*agregado;
		auxd2 = auxd1 - (auxd1*.0045) + expon(auxd1*.005)+ auxd1*agregado;
		auxd3 = auxd2 - (auxd2*.0045) + expon(auxd2*.005)+ auxd2*agregado;
		auxd4 = auxd3 - (auxd3*.0045) + expon(auxd3*.005)+ auxd3*agregado;
		auxd5 = auxd4 - (auxd4*.0045) + expon(auxd4*.005)+ auxd4*agregado;
		auxdmax = Math.max(auxd1, auxd2, auxd3, auxd4, auxd5);
		auxdmin = Math.min(auxd1, auxd2, auxd3, auxd4, auxd5);
		velas[accion].push({
			o: auxd1,
			h: auxdmax,
			l: auxdmin,
			c: auxd5,
			t: date.valueOf(),
		});
		
		media=(auxd1+auxd2+auxd3+auxd4+auxd5)/5;
		medias[accion].push(media);
		cierres[accion].push(auxd5);
		ys[accion].push(auxd5);

		//PETROIL
		accion=3;
		agregado= (expon(desastreNatural)/2+expon(situacionPolitica)/2+expon(industriaAlimenticia)/2)/6;
		// console.log("agregado:"+agregado);
		auxd1 = ys[accion][i-1] - (ys[accion][i-1]*.0045) + expon(ys[accion][i-1]*.005)+ ys[accion][i-1]*agregado;
		auxd2 = auxd1 - (auxd1*.0045) + expon(auxd1*.005)+ auxd1*agregado;
		auxd3 = auxd2 - (auxd2*.0045) + expon(auxd2*.005)+ auxd2*agregado;
		auxd4 = auxd3 - (auxd3*.0045) + expon(auxd3*.005)+ auxd3*agregado;
		auxd5 = auxd4 - (auxd4*.0045) + expon(auxd4*.005)+ auxd4*agregado;
		auxdmax = Math.max(auxd1, auxd2, auxd3, auxd4, auxd5);
		auxdmin = Math.min(auxd1, auxd2, auxd3, auxd4, auxd5);
		velas[accion].push({
			o: auxd1,
			h: auxdmax,
			l: auxdmin,
			c: auxd5,
			t: date.valueOf(),
		});
		
		media=(auxd1+auxd2+auxd3+auxd4+auxd5)/5;
		medias[accion].push(media);
		cierres[accion].push(auxd5);
		ys[accion].push(auxd5);

		//GAEM
		accion=4;
		agregado= (expon(desastreNatural)/2+expon(situacionPolitica)/2+expon(industriaAlimenticia)/2)/6;
		// console.log("agregado:"+agregado);
		auxd1 = ys[accion][i-1] - (ys[accion][i-1]*.0045) + expon(ys[accion][i-1]*.005)+ ys[accion][i-1]*agregado;
		auxd2 = auxd1 - (auxd1*.0045) + expon(auxd1*.005)+ auxd1*agregado;
		auxd3 = auxd2 - (auxd2*.0045) + expon(auxd2*.005)+ auxd2*agregado;
		auxd4 = auxd3 - (auxd3*.0045) + expon(auxd3*.005)+ auxd3*agregado;
		auxd5 = auxd4 - (auxd4*.0045) + expon(auxd4*.005)+ auxd4*agregado;
		auxdmax = Math.max(auxd1, auxd2, auxd3, auxd4, auxd5);
		auxdmin = Math.min(auxd1, auxd2, auxd3, auxd4, auxd5);
		velas[accion].push({
			o: auxd1,
			h: auxdmax,
			l: auxdmin,
			c: auxd5,
			t: date.valueOf(),
		});
		
		media=(auxd1+auxd2+auxd3+auxd4+auxd5)/5;
		medias[accion].push(media);
		cierres[accion].push(auxd5);
		ys[accion].push(auxd5);

		//GIM
		accion=5;
		agregado= (expon(desastreNatural)/2+expon(situacionPolitica)/2+expon(industriaAlimenticia)/2)/6;
		// console.log("agregado:"+agregado);
		auxd1 = ys[accion][i-1] - (ys[accion][i-1]*.0045) + expon(ys[accion][i-1]*.005)+ ys[accion][i-1]*agregado;
		auxd2 = auxd1 - (auxd1*.0045) + expon(auxd1*.005)+ auxd1*agregado;
		auxd3 = auxd2 - (auxd2*.0045) + expon(auxd2*.005)+ auxd2*agregado;
		auxd4 = auxd3 - (auxd3*.0045) + expon(auxd3*.005)+ auxd3*agregado;
		auxd5 = auxd4 - (auxd4*.0045) + expon(auxd4*.005)+ auxd4*agregado;
		auxdmax = Math.max(auxd1, auxd2, auxd3, auxd4, auxd5);
		auxdmin = Math.min(auxd1, auxd2, auxd3, auxd4, auxd5);
		velas[accion].push({
			o: auxd1,
			h: auxdmax,
			l: auxdmin,
			c: auxd5,
			t: date.valueOf(),
		});
		
		media=(auxd1+auxd2+auxd3+auxd4+auxd5)/5;
		medias[accion].push(media);
		cierres[accion].push(auxd5);
		ys[accion].push(auxd5);

		//RAQUIM
		accion=6;
		agregado= (expon(desastreNatural)/2+expon(situacionPolitica)/2+expon(industriaAlimenticia)/2)/6;
		// console.log("agregado:"+agregado);
		auxd1 = ys[accion][i-1] - (ys[accion][i-1]*.0045) + expon(ys[accion][i-1]*.005)+ ys[accion][i-1]*agregado;
		auxd2 = auxd1 - (auxd1*.0045) + expon(auxd1*.005)+ auxd1*agregado;
		auxd3 = auxd2 - (auxd2*.0045) + expon(auxd2*.005)+ auxd2*agregado;
		auxd4 = auxd3 - (auxd3*.0045) + expon(auxd3*.005)+ auxd3*agregado;
		auxd5 = auxd4 - (auxd4*.0045) + expon(auxd4*.005)+ auxd4*agregado;
		auxdmax = Math.max(auxd1, auxd2, auxd3, auxd4, auxd5);
		auxdmin = Math.min(auxd1, auxd2, auxd3, auxd4, auxd5);
		velas[accion].push({
			o: auxd1,
			h: auxdmax,
			l: auxdmin,
			c: auxd5,
			t: date.valueOf(),
		});
		
		media=(auxd1+auxd2+auxd3+auxd4+auxd5)/5;
		medias[accion].push(media);
		cierres[accion].push(auxd5);
		ys[accion].push(auxd5);

		//GFINMA
		accion=7;
		agregado= (expon(desastreNatural)/2+expon(situacionPolitica)/2+expon(industriaAlimenticia)/2)/6;
		// console.log("agregado:"+agregado);
		auxd1 = ys[accion][i-1] - (ys[accion][i-1]*.0045) + expon(ys[accion][i-1]*.005)+ ys[accion][i-1]*agregado;
		auxd2 = auxd1 - (auxd1*.0045) + expon(auxd1*.005)+ auxd1*agregado;
		auxd3 = auxd2 - (auxd2*.0045) + expon(auxd2*.005)+ auxd2*agregado;
		auxd4 = auxd3 - (auxd3*.0045) + expon(auxd3*.005)+ auxd3*agregado;
		auxd5 = auxd4 - (auxd4*.0045) + expon(auxd4*.005)+ auxd4*agregado;
		auxdmax = Math.max(auxd1, auxd2, auxd3, auxd4, auxd5);
		auxdmin = Math.min(auxd1, auxd2, auxd3, auxd4, auxd5);

		velas[accion].push({
			o: auxd1,
			h: auxdmax,
			l: auxdmin,
			c: auxd5,
			t: date.valueOf(),
		});
		
		media=(auxd1+auxd2+auxd3+auxd4+auxd5)/5;
		medias[accion].push(media);
		cierres[accion].push(auxd5);
		ys[accion].push(auxd5);


		desastreNatural=0;
		situacionPolitica=0;
		industriaAlimenticia=0;
		industria = 0;
		industriaEnergia = 0;
		industriaFinanzas = 0;
		industriaTransporte = 0;
		industriaEntretenimiento = 0;
		//k = ultimo - (ultimo*param1) + expon(ultimo*param2);
		// print "el valor actual es: ", $k
		//console.log("el valor actual es: "+k);
		//xs.push(i);
		//ys.push(k);
		//ultimo = k;
		//p+=k;
	}
	mostrarVelas();
	mostrarMedia();
	console.log(velas[0]);
	// console.log(medias[0]);
	// console.log(cierres[0]);
};
  /*
Productos de consumo frecuente:
PANM
GICR
GNLA

Energía:
PETROIL

Transporte:
GAEM

Industria:
GIM

Entretenimiento:
RAQUIM

Servicios financieros:
GFINMA
    Noticias sobre la empresa 5% por ciento de probabilidad de que haya una noticia sobre la empresa 

  15% de probabilidad de que afecten poco, 5% de que afecten mucho y 80% de que no afecten [36]. 

    Reportes trimestrales 

  Disparados cada trimestre y con un 20% de probabilidad de que afecten a la empresa y un 5% de que la afecten mucho [37]. 
  amediados de abril, medios de julio, mediados de octubre, mediados de enero

    Situación política 12.5% de probabilidad de que suceda una noticia política importante [38]. Nivel de afectación variable de hasta un 15% del valor de las empresas 

    Noticias sobre la industria de la empresa 5% de probabilidad de que se dispare y una afectación de hasta 15% sobre las empresas afectadas. 

    Desastres naturales 5% de probabilidad que sucedan con afectación de hasta 10% [39].
 */
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
function mostrarVelas(){
	//var dataPrueba = getRandomData('April 01 2017', 60);
	var numTotal=diaActual+1;
	var inicio = numTotal-49;
	if (inicio%2==1) {
		inicio-=1;
	}
	if (inicio<0) {
		inicio=0;
	}
	var ctx3 = document.getElementById("velasChart").getContext("2d");
		new Chart(ctx3, {
			type: 'candlestick',
			data: {
				datasets: [{
					label: "CHRT - Chart.js Corporation",
					data: velas[0].slice(inicio,numTotal),
					fractionalDigitsCount: 5,
				}]
			},
			options: {
				tooltips: {
					position: 'nearest',
					mode: 'index',
				},
			},
		});
}
function mostrarMedia(){
	var x=0;
	var p = [cierres[x],medias[x]];
	var n = ["cierres "+names[x],"media"+names[x]];
	crearChart2(p,'Panorama','mediaChart',canvasCapitales,diaActual+1,n,x);
}
function crearChart(dataR,tableName,idChart,varChart,numTotal,dataNames,x){
	var inicio = numTotal-49;
	if (inicio%2==1) {
		inicio-=1;
	}
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
 function crearChart2(dataR,tableName,idChart,varChart,numTotal,dataNames,x){
	var inicio = numTotal-49;
	if (inicio%2==1) {
		inicio-=1;
	}
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
	console.log(dataR.slice(inicio,numTotal));
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
			if(i%2==0){
				var aux = {
					label: dataNames[i],
					data: dataR[i].slice(inicio,numTotal),
					borderColor: colors[i],
					backgroundColor: 'rgba(0, 0, 0, 0)',
					fill: false,
					lineTension: 0
				};
			}
			else{
				var aux = {
					label: dataNames[i],
					data: dataR[i].slice(inicio,numTotal),
					borderColor: colors[i],
					backgroundColor: 'rgba(0, 0, 0, 0)',
					fill: false,
					cubicInterpolationMode: 'monotone'
				};
			}
			
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