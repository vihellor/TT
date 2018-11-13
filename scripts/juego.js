var iFrequency = 5000; // expressed in miliseconds
var myInterval = 0;
var names=['PANM','GICR','GNLA','PETROIL','GAEM','GIM','RAQUIM','GFINMA'];
var dineroJugador=[];
var names2=[
  "Panificadora Nacional S.A.B. de C.V.",
  "Grupo Industrial de Carnes y Refrigerados S.A.B. de C.V.",
  "Grupo nacional de lácteos S.A.B. de C.V.",
  "Petróleos y energía S.A.B. de C.V.",
  "Grupo Aéreo Mexicano S.A.B. de C.V.",
  "Grupo Industrial Mexicano S.A.B. de C.V.",
  "Radio Quim S.A.B de C.V.",
  "Grupo Financiero Mancol S.A.B. de C.V."
  
  ];
var datosAccion=[ //varianza compra/venta || valor invertido || numero de titulos
  [(Math.random()*.00155)+.00095,0,0],
  [(Math.random()*.00155)+.00095,0,0],
  [(Math.random()*.00155)+.00095,0,0],
  [(Math.random()*.00155)+.00095,0,0],
  [(Math.random()*.00155)+.00095,0,0],
  [(Math.random()*.00155)+.00095,0,0],
  [(Math.random()*.00155)+.00095,0,0],
  [(Math.random()*.00155)+.00095,0,0]
  ];
var cetesComprados=[];
var salirAlguien=[200,400,600];
var salirVacaciones=[1300,3000,6000];
var hacerFiesta=[500,1000,1500,2000,5000];
var comprarRopa=[1500,2500,4000];
var comprarFuera=[60,80,90,120];
var velas=[];
var medias=[];
var cierres=[];
var meta;
var semanaGanadora=0;
var data;
var ingresos = [];
var egresos = [];
var cetes = [9.5,9.4,9.2];
var tasas = [9.5,9.4,9.2];
var dineroActual = 0;
//ingresos menos egresos
var capitalDisponible = [];
//valor agregado de los cetes
var metaArr=[];
var ganancias=[];
for (var i = 0; i < 1488; i++) {
  ganancias.push(0);
}
//agregando caprichos
var caprichos=[];
for (var i = 0; i < 1488; i++) {
  caprichos.push(0);
}
var noticias=[];
for (var i = 0; i < 1488; i++) {
  noticias.push(["Notificaciones de la semana: "+(i-47)]);
}
var dataFlujo;
var casaBolsa={
  nombre: "kuspit",
  comision: 0.0025,
  mensualidad: 50
};
// Get the Sidebar
var mySidebar = document.getElementById("mySidebar");
// Get the DIV with overlay effect
var overlayBg = document.getElementById("myOverlay");

var interval = setInterval(count,1000);
bandera=0;

var idUsuario;
var nameUsuario;
var idFundador;
var mInicial;

document.getElementById('datosComision').innerHTML="Nombre: "+casaBolsa.nombre+" &emsp; Mensualidad: $"+casaBolsa.mensualidad+"  &emsp; Comisión compra/venta: "+(casaBolsa.comision*100)+"%";
var diaActual=48;
var canvasBalance;
var canvasCapitales;
var canvasCapitales2;

function post(url,objSend) {

  var requestPromise = new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
    var req = new XMLHttpRequest();
    req.open('post', url,true);
    req.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    req.send(JSON.stringify(JSON.parse(objSend)));
    req.onload = function() {
      // 'load' triggers for 404s etc
      // so check the status
      if (req.status == 200) {
        // Resolve the promise with the response text
        //console.log("llegamos a este punto mi capitan");
        //console.log(req.response);
        resolve(req.response);
      }
      else {
        // Otherwise reject with the status text
        reject(Error(req.statusText));
      }
    };

    // Handle network errors
    req.onerror = function() {
      reject(Error("Network Error"));
    };

    // Make the request
  });

  return requestPromise.then(function(results) {
    //console.log("llegamos a este punto mi capitan");
    //console.log(results);
    return results;
  });
}




function getJson(url,objSend) {
  //var json = toJSONString( this );
  //console.log("pues algo intenta correrse");
  return post(url,objSend).then();
}
function generateIngresos(){
  console.log("tamanio ingresos = "+ingresos.length);
  console.log("tamanio egresos = "+egresos.length);
  var data1=[];
  var aux=parseInt(mInicial);
  for (var j =  0; j < 1440; j++) {
    for (var i =  0; i < ingresos.length; i++) {
      //console.log(j+" : "+i+" : "+(j-ingresos[i][1])%ingresos[i][2]);
      //console.log("1: "+ingresos[i][1]);
      //console.log("2: "+ingresos[i][2]);
      if (((j-Math.abs(ingresos[i][1]-1))%ingresos[i][2])==0) {
        aux+=parseInt(ingresos[i][0]);
      }
    }
    if (aux>0) {
      noticias[j+48].push("Se ha recibido un ingreso de: "+aux);
      //noticias.splice(j, 0, "Se ha recibido un ingreso de: "+aux);
    }
    else{
      noticias[j+48].push("No hubo ingresos esta semana");
      //noticias.splice(j, 0, "No hubo ingresos esta semana");
    }
    data1.push(aux);
    aux=0;
  }
  /*console.log("yeeeeeeeeeeeeeeeei");
  console.log(data1.length);
  for (var j =  0; j < 48; j++) {
    //console.log(j);
    console.log(data1[j]);
  }*/
  var data2=[];
  for (var j =  0; j < 1440; j++) {
    aux=0;
    for (var i =  0; i < egresos.length; i++) {
      if ((j-Math.abs(egresos[i][1]-1))%egresos[i][2]==0) {
        aux+=parseInt(egresos[i][0]);
      }
    }
    if (aux>0) {
      noticias[j+48].push("Se ha hecho un cargo de: "+aux);
      //noticias.splice(j, 0, "Se ha hecho un cargo de: "+aux);
    }
    data2.push(aux);
  }
  /*console.log("yeeeeeeeeeeeeeeeei2");
  console.log(data2.length);
  for (var j =  0; j < 48; j++) {
    //console.log(j);
    console.log(data2[j]);
  }*/
  var data3=[];
  aux=0;
  for (var j =  0; j < 1440; j++) {
    data3.push(data1[j]-data2[j]);
    //console.log(noticias[j]);
  }
  actualizarNoticia();
  capitalDisponible=data3;
  //dineroActual=capitalDisponible[diaActual-48];
  //console.log("Dinero actual: "+dineroActual);
  actualizarDia();
  mostrarJuego();
}

//función para leer de un html el form deseado
function toJSONString( form ) {
  var obj = {};
  var elements = form.querySelectorAll( "input, select, textarea" );
  for( var i = 0; i < elements.length; ++i ) {
    var element = elements[i];
    var name = element.name;
    if(element.type == "checkbox"){
      value=element.checked;
    }
    else
      var value = element.value;
    document.getElementById("bugLog").innerHTML += "nombre: "+name+"valor:"+value+"\n";

    if( name ) {
      obj[ name ] = value;
    }
  }

  return JSON.stringify( obj );
}

/**
 * Checks that an element has a non-empty `name` and `value` property.
 * @param  {Element} element  the element to check
 * @return {Bool}             true if the element is an input, false if not
 */
const isValidElement = element => {
  return element.name && element.value;
};

/**
 * Checks if an element’s value can be saved (e.g. not an unselected checkbox).
 * @param  {Element} element  the element to check
 * @return {Boolean}          true if the value should be added, false if not
 */
const isValidValue = element => {
  return (!['checkbox', 'radio'].includes(element.type) || element.checked);
};

/**
 * Checks if an input is a checkbox, because checkboxes allow multiple values.
 * @param  {Element} element  the element to check
 * @return {Boolean}          true if the element is a checkbox, false if not
 */
const isCheckbox = element => element.type === 'checkbox';

/**
 * Checks if an input is a `select` with the `multiple` attribute.
 * @param  {Element} element  the element to check
 * @return {Boolean}          true if the element is a multiselect, false if not
 */
const isMultiSelect = element => element.options && element.multiple;

/**
 * Retrieves the selected options from a multi-select as an array.
 * @param  {HTMLOptionsCollection} options  the options for the select
 * @return {Array}                          an array of selected option values
 */
const getSelectValues = options => [].reduce.call(options, (values, option) => {
  return option.selected ? values.concat(option.value) : values;
}, []);

/**
 * A more verbose implementation of `formToJSON()` to explain how it works.
 *
 * NOTE: This function is unused, and is only here for the purpose of explaining how
 * reducing form elements works.
 *
 * @param  {HTMLFormControlsCollection} elements  the form elements
 * @return {Object}                               form data as an object literal
 */
const formToJSON_deconstructed = elements => {
  
  // This is the function that is called on each element of the array.
  const reducerFunction = (data, element) => {
    
    // Add the current field to the object.
    data[element.name] = element.value;
    
    // For the demo only: show each step in the reducer’s progress.
    console.log(JSON.stringify(data));

    return data;
  };
  
  // This is used as the initial value of `data` in `reducerFunction()`.
  const reducerInitialValue = {};
  
  // To help visualize what happens, log the inital value, which we know is `{}`.
  console.log('Initial `data` value:', JSON.stringify(reducerInitialValue));
  
  // Now we reduce by `call`-ing `Array.prototype.reduce()` on `elements`.
  const formData = [].reduce.call(elements, reducerFunction, reducerInitialValue);
  
  // The result is then returned for use elsewhere.
  return formData;
};

/**
 * Retrieves input data from a form and returns it as a JSON object.
 * @param  {HTMLFormControlsCollection} elements  the form elements
 * @return {Object}                               form data as an object literal
 */
const formToJSON = elements => [].reduce.call(elements, (data, element) => {

  // Make sure the element has the required properties and should be added.
  if (isValidElement(element) && isValidValue(element)) {

    /*
     * Some fields allow for more than one value, so we need to check if this
     * is one of those fields and, if so, store the values as an array.
     */
    if (isCheckbox(element)) {
      data[element.name] = (data[element.name] || []).concat(element.value);
    } else if (isMultiSelect(element)) {
      data[element.name] = getSelectValues(element);
    } else {
      data[element.name] = element.value;
    }
  }

  return data;
}, {});

/**
 * A handler function to prevent default submission and run our custom script.
 * @param  {Event} event  the submit event triggered by the user
 * @return {void}
 */
// Toggle between showing and hiding the sidebar, and add overlay effect
function openLink(evt, animName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("menuItem");
  w3_close();
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
     tablinks[i].className = tablinks[i].className.replace(" w3-green", "");
  }
  document.getElementById(animName).style.display = "block";
  evt.currentTarget.className += " w3-green";
};
function openLink2(evt, animName) {
  var l0 =document.getElementById('l0');
  var l1 =document.getElementById('l1');
  var l2 =document.getElementById('l2');
  var lx =document.getElementById('lx');
  if (animName.localeCompare("ingresos")==0) {
    console.log("ingresos");
    document.getElementById('cetes').style.display = "none";
    document.getElementById('inversiones').style.display = "none";
    document.getElementById('ingresos').style.display = "block";
    document.getElementById('egresos').style.display = "none";
    l0.className=l0.className.replace("w3-green", "w3-light-gray");
    l1.className=l1.className.replace("w3-light-gray","w3-green");
    l2.className=l2.className.replace("w3-green", "w3-light-gray");
    lx.className=lx.className.replace("w3-green", "w3-light-gray");

  }else if (animName.localeCompare("egresos")==0) {
    console.log("egresos");
    document.getElementById('cetes').style.display = "none";
    document.getElementById('inversiones').style.display = "none";
    document.getElementById('ingresos').style.display = "none";  
    document.getElementById('egresos').style.display = "block";
    l0.className=l0.className.replace("w3-green", "w3-light-gray");
    l1.className=l1.className.replace("w3-green", "w3-light-gray");
    l2.className=l2.className.replace("w3-light-gray","w3-green");
    lx.className=lx.className.replace("w3-green", "w3-light-gray");
  }
  else if (animName.localeCompare("cetes")==0) {
    console.log("cetes");
    document.getElementById('cetes').style.display = "block";
    document.getElementById('inversiones').style.display = "none";
    document.getElementById('ingresos').style.display = "none";  
    document.getElementById('egresos').style.display = "none";
    l0.className=l0.className.replace("w3-green", "w3-light-gray");
    l1.className=l1.className.replace("w3-green", "w3-light-gray");
    l2.className=l2.className.replace("w3-green", "w3-light-gray");
    lx.className=lx.className.replace("w3-light-gray","w3-green");
  }
  else{
    console.log("inversiones");
    document.getElementById('cetes').style.display = "none";
    document.getElementById('inversiones').style.display = "block";
    document.getElementById('ingresos').style.display = "none";  
    document.getElementById('egresos').style.display = "none";
    l0.className=l0.className.replace("w3-light-gray","w3-green");
    l1.className=l1.className.replace("w3-green", "w3-light-gray");
    l2.className=l2.className.replace("w3-green", "w3-light-gray");
    lx.className=lx.className.replace("w3-green", "w3-light-gray");
  }
};
function openLink3(evt, animName) {
  var velas = document.getElementById("velas");
  var mediaMov = document.getElementById("mediaMov");
  console.log(animName);
  if ("velas".localeCompare(animName)) {
    mediaMov.style.display = "block";  
    velas.style.display = "none";
    l4.className=l4.className.replace("w3-light-gray","w3-green");
    l3.className=l3.className.replace("w3-green", "w3-light-gray");
  }else{
    velas.style.display = "block";
    mediaMov.style.display = "none";
    l3.className=l3.className.replace("w3-light-gray","w3-green");
    l4.className=l4.className.replace("w3-green", "w3-light-gray");
  }
};

function w3_open() {
    if (mySidebar.style.display === 'block') {
        mySidebar.style.display = 'none';
        overlayBg.style.display = "none";
    } else {
        mySidebar.style.display = 'block';
        overlayBg.style.display = "block";
    }
};
// Close the sidebar with the close button
function w3_close() {
    mySidebar.style.display = "none";
    overlayBg.style.display = "none";
};

var c=60;
var timer_is_on=false;

function displayCount() {
  //console.log("timer: "+c);
    document.getElementById('timer').innerHTML=Math.floor(c/60)+":"+Math.floor((c%60)/10)+Math.floor((c%60)%10);
};

function count() {
  //console.log("contando");
    if(timer_is_on) {
        c=c-1;
        if(c==0){
          c=60;
          diaActual+=1;
          actualizarDia();
        }
        displayCount();
    }
};

function iniciar(){
  handleFormSubmit(document.createElement("form"),"getUsuario");
  handleFormSubmit(document.createElement("form"),"readPartida");
  data=generate2(1440);
};
function mostrarJuego(){
  timer_is_on=true;
  document.getElementById('mySidebar').style.display ="block";
  document.getElementById('topBar').style.display ="block";
  document.getElementById('mainDiv').style.display ="block";
  document.getElementById('mySidebar').className+=" w3-collapse";
  document.getElementById('spinner').style.display ="none";
}
function actualizarPrecio(){
  var select = document.getElementById('select-choice').value;
  var nTit = document.getElementById('numberTitulos').value;
  document.getElementById('costoBruto').value=(nTit*data[select][diaActual]).toFixed(2);
  document.getElementById('costoNeto').value=(nTit*(data[select][diaActual]+data[select][diaActual]*casaBolsa.comision)).toFixed(2);
};
function actualizarPrecioVenta(){
  var select = document.getElementById('select-choiceVenta').value;
  var nTit = document.getElementById('numberTitulosVenta').value;
  var vAct=data[select][diaActual];
  // console.log("dia actual: "+diaActual+"valor"+i+" actual:"+vAct);
  var variacion=datosAccion[select][0];
  var vReal=(vAct+(vAct*variacion));
  var titulos=datosAccion[select][2];
  document.getElementById('numberTitulosVenta').max=titulos;
  document.getElementById('gananciaBruta').value=(nTit*vReal).toFixed(2);
  document.getElementById('gananciaNeta').value=(nTit*(vReal-vReal*casaBolsa.comision)).toFixed(2);
  if(titulos==0)
    document.getElementById('botonVenta').disabled=true;
  else
    document.getElementById('botonVenta').disabled=false;
};

function actualizarPrecioCete(){
  var select = document.getElementById('select-choiceCete').value;
  var nTit = document.getElementById('numberTitulosCete').value;
  var precio = nTit*cetes[select];
  document.getElementById('costoCete').value=precio.toFixed(2);
  var retornocete;
  var isr=0.46;
  var plazo;
  if(select == 0){
    plazo=28;
  }
  if(select == 1){
    plazo=182;
  }
  if(select == 2){
    plazo=364;
  }
  var intBruto=precio*plazo*tasas[select]/36000;
  //(nTit*cetes[select]*28/100)(tasa[0]/360-)
    
  document.getElementById('retornoCete').value=intBruto.toFixed(2);
  document.getElementById('gananciaCete').value=(intBruto-precio*plazo*isr/36500).toFixed(2);  
  // document.getElementById('porcentajeCete').value=(nTit*(data[select][diaActual]+data[select][diaActual]*casaBolsa.comision)).toFixed(2);  
  
};

//window.onload = function() {
//    iniciar();
//  };
//console.log((Math.random()*.00155)+.00095);
//crearChart(data[0],'Panorama','canvas',varChart,diaActual,names[0]);

function proyectar(x){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  var p = [cierres[x],medias[x]];
  var n = ["cierres "+names[x],"media"+names[x]];
  mostrarVelas(x,names[x]);
  crearChart2(p,'Panorama','mediaChart',canvasCapitales,diaActual+1,n,x);
  document.getElementById('alertDiv').style.display="block";
  document.getElementById('alertDiv2').style.display="block";
};
function compraAccion(){
  var accion=document.getElementById('select-choice').value;
  var costo=document.getElementById('costoNeto').value;
  if (costo<dineroActual) {
    datosAccion[accion][1]+=Number(costo);
    datosAccion[accion][2]+=Number(document.getElementById('numberTitulos').value);
    dineroActual-=Number(costo);
    alert("¡Compra realizada exitosamente!");
    verCapitalDisponible();
    actualizarTablasAcciones();
    close_alert();
  }
  else{
    alert("¡No tienes suficiente dinero!");
  }
};
function ventaAccion(){
  var accion=document.getElementById('select-choiceVenta').value;
  var ganancia=document.getElementById('gananciaNeta').value;
  datosAccion[accion][1]-=Number(ganancia);
  datosAccion[accion][2]-=Number(document.getElementById('numberTitulosVenta').value);
  dineroActual+=Number(ganancia);
  alert("¡Venta realizada exitosamente!");
  verCapitalDisponible();
  actualizarTablasAcciones();
  close_alert();
};
function compraCete(){
  var cete=document.getElementById('select-choiceCete').value;
  var costo=document.getElementById('costoCete').value;
  var ganancia=document.getElementById('gananciaCete').value;
  var tiempo;
  if (cete==0) {
    tiempo=4;
  }
  else if (cete==1) {
    tiempo=24;
  }
  else if (cete==2) {
    tiempo=48;
  }
  if (costo<dineroActual) {
    // datosAccion[accion][1]+=Number(document.getElementById('costoNeto').value);
    // datosAccion[accion][2]+=Number(document.getElementById('numberTitulos').value);
    ganancias[diaActual-48+tiempo]+=costo+ganancia;
    cetesComprados.push({
      dia: (Number(diaActual)+Number(tiempo)),
      ganancia: (Number(costo)+Number(ganancia)),
    });
    dineroActual-=Number(costo);
    alert("¡Compra realizada exitosamente!");
    actualizarTablasAcciones();
    close_alert();
  }
  else{
    alert("¡No tienes suficiente dinero!");
  }
};
function comprarCapital(){
  document.getElementById('alertDiv').style.display="block";
  document.getElementById('comprarAcciones').style.display="block";
};
function venderCapital(){
  actualizarPrecioVenta();
  document.getElementById('alertDiv').style.display="block";
  document.getElementById('venderAcciones').style.display="block";
};
function comprarCetes(num){
  document.getElementById('alertDiv').style.display="block";
  document.getElementById('comprarCetes').style.display="block";
};
function close_alert(){
  if(typeof canvasBalance !== 'undefined'){
    canvasBalance.destroy();
  }
  if(typeof canvasCapitales !== 'undefined'){
    canvasCapitales.destroy();
  }
  document.getElementById('alertDiv2').innerHTML='<header class="w3-cell-row"><div id="l3" class="w3-half w3-container w3-green w3-cell"><a onclick="openLink3(event, \'velas\')" style="cursor:pointer;"><h4>Velas</h4></a></div><div id="l4" class="w3-half w3-container w3-light-gray w3-cell"><a onclick="openLink3(event, \'mediaMov\')" style="cursor:pointer;"><h4>Media móvil</h4></a></div></header><div class="w3-container w3-light-gray"><div id="velas" class="w3-animate-top flexContainer2"><div class="chart-container" style="position: relative; width:70vw"><canvas id="velasChart"></canvas></div></div><div id="mediaMov" class="w3-animate-top flexContainer2" style="display:none;"><div class="chart-container" style="position: relative; width:70vw"><canvas id="mediaChart"></canvas></div></div><br></div>';
  document.getElementById('alertDiv').style.display="none";
  document.getElementById('alertDiv2').style.display="none";
  document.getElementById('comprarAcciones').style.display="none";
  document.getElementById('venderAcciones').style.display="none";
  document.getElementById('comprarCetes').style.display="none";
};
function keyPress (e) {
    if(e.key === "Escape") {
        console.log("hola");
    }
};
function actualizarNoticia(){
  document.getElementById('tableNoticias').innerHTML="";
  for (var i = 0; i < noticias[diaActual].length; i++) {
    document.getElementById('tableNoticias').innerHTML+="<tr><td>"+noticias[diaActual][i]+"</td></tr>";
  }
}
function actualizarCetes(){

  var t = diaActual%48;
  var tf;
  if(t>24){
    tf=-t;
  }
  else
    tf=t;

  //28 días
  var media1 = 9.551;
  var de1 = .0572;
  var cete1 = tf/2269+media1+expon(de1)-de1/2;
  var tasa1 = 100-cete1*10;
  document.getElementById('cete1').innerHTML='<td>CETES</td><td>'+cete1.toFixed(3)+'</td><td>'+tasa1.toFixed(3)+'%</td><td>28 días</td>'
  // console.log(cete1);
  //182 días
  var media2 = 9.521;
  var de2 = .0631;
  var cete2 = tf/340000+media2+expon(de2)-de2/2;
  var tasa2 = 100-cete2*10;
  document.getElementById('cete2').innerHTML='<td>CETES</td><td>'+cete2.toFixed(3)+'</td><td>'+tasa2.toFixed(3)+'%</td><td>182 días</td>'
  // console.log(cete2);
  //364 días
  var media3 = 9.252;
  var de3 = .0668;
  var cete3 = tf*89/142000+media3+expon(de3)-de3/2;
  var tasa3 = 100-cete3*10;
  document.getElementById('cete3').innerHTML='<td>CETES</td><td>'+cete3.toFixed(3)+'</td><td>'+tasa3.toFixed(3)+'%</td><td>364 días</td>'
  // console.log(cete3);
  cetes[0]=cete1;
  cetes[1]=cete2;
  cetes[2]=cete3;
  tasas[0]=tasa1;
  tasas[1]=tasa2;
  tasas[2]=tasa3;
}
function actualizarDia(){
  if(typeof canvasBalance !== 'undefined'){
    canvasBalance.destroy();
  }
  if(typeof canvasCapitales !== 'undefined'){
    canvasCapitales.destroy();
  }
  actualizarCapitalDisponible();
  actualizarTablasAcciones();
  actualizarCetes();
  actualizarNoticia();
};
function actualizarTablasAcciones(){
  var textTableAccion="";
  var textMisInversiones="";
  var acum=[0,0,0,0];
  var textCete="<tr>";
  for (var i = 0; i < cetesComprados.length; i++) {
    textCete+="<td>faltan "+(cetesComprados[i].dia-diaActual)+" semanas para obetener $"+cetesComprados[i].ganancia.toFixed(2)+"</td>"
  }
  textCete+="</tr>";
  for (var i = 0; i < names.length; i++) {
      var vAnt=data[i][diaActual-1];
      var vAct=data[i][diaActual];
      console.log("dia actual: "+diaActual+"valor"+i+" actual:"+vAct);
      var variacion=datosAccion[i][0];
      var vReal=(vAct+(vAct*variacion));
      var gasto=datosAccion[i][1];
      if (gasto<0){
        datosAccion[i][1]=0;
        gasto=0;
      }
      var titulos=datosAccion[i][2];
      var text1;
      var text2;
      var text3;
      if (vAnt>vAct)
        text1="<tr><td>"+names[i]+"</td><td>"+names2[i]+"</td><td><font color='red'>-"+((vAnt/vAct)-1).toFixed(4)+"%</font></td><td><i>$"+vAct.toFixed(2)+"</i></td><td><i>$"+vReal.toFixed(2)+"</i></td><td><i>$"+gasto.toFixed(2)+"</i></td>";
      else if (vAnt<vAct)
        text1="<tr><td>"+names[i]+"</td><td>"+names2[i]+"</td><td><font color='green'>"+((vAct/vAnt)-1).toFixed(4)+"%</font></td><td><i>$"+vAct.toFixed(2)+"</i></td><td><i>$"+vReal.toFixed(2)+" </i></td><td><i>$"+gasto.toFixed(2)+"</i></td>";
      else
        text1="<tr><td>"+names[i]+"</td><td>"+names2[i]+"</td><td>0%</td><td><i>$"+vAct.toFixed(4)+"</i></td><td><i>$"+vReal.toFixed(2)+"</i></td><td><i>$"+gasto.toFixed(2)+"</i></td>";
      if (gasto>titulos*vAct)
        text2="<td><font color='red'>$"+(titulos*vAct).toFixed(2)+"</font></td><td><i>"+titulos+"</i></td><td><button onclick='proyectar("+i+");'>Panorama</button></td></tr>";
      else if (gasto<titulos*vAct)
        text2="<td><font color='green'>$"+(titulos*vAct).toFixed(2)+"</font></td><td><i>"+titulos+"</i></td><td><button onclick='proyectar("+i+");'>Panorama</button></td></tr>";
      else
        text2="<td>$"+(titulos*vAct).toFixed(2)+"</td><td><i>"+titulos+"</i></td><td><button onclick='proyectar("+i+");'>Panorama</button></td></tr>";
      
      if ((titulos*vAct)<gasto)
        text3="<tr><td>"+names[i]+"</td><td><font color='red'>-"+Math.abs((titulos*vAct*100/gasto)-100).toFixed(2)+"%</font></td><td>$"+gasto.toFixed(2)+"</td><td><font color='red'>$"+(titulos*vAct).toFixed(2)+"</font></td><td>"+titulos+"</td></tr>";
      else if ((titulos*vAct)>gasto)
        text3="<tr><td>"+names[i]+"</td><td><font color='green'>"+Math.abs((titulos*vAct*100/gasto)-100).toFixed(2)+"%</font></td><td>$"+gasto.toFixed(2)+"</td><td><font color='green'>$"+(titulos*vAct).toFixed(2)+"</font></td><td>"+titulos+"</td></tr>";
      else
        text3="<tr><td>"+names[i]+"</td><td>0%</td><td>$"+gasto.toFixed(2)+"</td><td>$"+(titulos*vAct).toFixed(2)+"</td><td>"+titulos+"</td></tr>";
      acum[0]+=Math.abs((gasto/vReal)-1);
      acum[1]+=Math.abs(gasto);
      acum[2]+=Math.abs(titulos*vAct);
      acum[3]+=Math.abs(titulos);
      textTableAccion+=text1+text2;
      textMisInversiones+=text3;
    }
    console.log();
    if (acum[2]<acum[1]){
      textMisInversiones+="<tr><td></td><td><font color='red'>-"+Math.abs((acum[2]*100/acum[1])-100).toFixed(2)+"%</font></td><td>$"+acum[1].toFixed(2)+"</td><td><font color='red'>$"+acum[2].toFixed(2)+"</font></td><td>"+acum[3]+"</td></tr>";
    }
    else if (acum[2]>acum[1]){
      textMisInversiones+="<tr><td></td><td><font color='green'>"+Math.abs((acum[2]*100/acum[1])-100).toFixed(2)+"%</font></td><td>$"+acum[1].toFixed(2)+"</td><td><font color='green'>$"+acum[2].toFixed(2)+"</font></td><td>"+acum[3]+"</td></tr>";
    }
    else{
      textMisInversiones+="<tr><td>Total:</td><td>0%</td><td>$"+acum[1].toFixed(2)+"</td><td>$"+acum[2].toFixed(2)+"</td><td>"+acum[3]+"</td></tr>";
    }
  document.getElementById('tableCetes').innerHTML=textCete;
  document.getElementById('tableAcciones').innerHTML=textTableAccion;
  document.getElementById('misInversiones').innerHTML=textMisInversiones;
};

function actualizarCapitalDisponible(){
  dineroJugador.push(dineroActual);
  dineroActual+=capitalDisponible[diaActual-48];
  dineroActual+=ganancias[diaActual-48];
  dineroActual+=caprichos[diaActual-48];
  verCapitalDisponible();
  
  // console.log("dinero actual: "+dineroActual);
};
function verCapitalDisponible(){
  document.getElementById('dineroActual3').innerHTML="Capital disponible: $"+dineroActual;
  document.getElementById('dineroActual2').innerHTML="Capital disponible: $"+dineroActual;
  document.getElementById('dineroActual1').innerHTML="Capital disponible: $"+dineroActual;
};
window.onload = function() {
    iniciar();
  };
var banIngresos=false;
var banEgresos=false;
function handleFormSubmit (form,accion) {
  
  // Call our function to get the form data.
  var data = formToJSON(form.elements);
  data.funcion = accion;
  
  // Use `JSON.stringify()` to make the output valid, human-readable JSON.
    getJson('./../ajax/manejoJuego.php',JSON.stringify(data, null, "  ")).then(function(respuesta) {
      var h = respuesta.trim();
      //console.log(accion);
      //console.log("el resultado es:"+h.localeCompare("login"));
        if(accion.localeCompare("getUsuario")==0){
          var jj = JSON.parse(respuesta);
          nameUsuario=jj.nickname;
          idUsuario=jj.idUsuario;
          console.log("getUsuario: "+nameUsuario);
          //console.log(JSON.parse(respuesta));
          //console.log(jj);
          document.getElementById("mainName").innerHTML=nameUsuario;
        }
        else if(accion.localeCompare("readPartida")==0){
          var jj = JSON.parse(respuesta);
          //console.log("readPartida: "+JSON.stringify(jj));
          idFundador=jj[0].fundador;
          //console.log("fundador: "+jj[0].fundador);
          meta =jj[0].meta;
          document.getElementById('datosBalance').innerHTML="Nombre de partida: "+jj[0].nombrePartida+" &emsp; Monto inicial: $"+jj[0].montoInicial+"  &emsp; Meta: $"+jj[0].meta;
          document.getElementById('inputIngresos').value=idFundador;
          document.getElementById('inputEgresos').value=idFundador;
          document.getElementById('submitIngresos').click();
          document.getElementById('submitEgresos').click();
          mInicial=jj[0].montoInicial;
          //console.log(JSON.parse(respuesta));
          //console.log(jj);
        }else if(accion.localeCompare("readIngresos")==0){
          var jj = JSON.parse(respuesta);
          var x = document.getElementById("tableIngresos").innerHTML;
          var len= x.length;
          var y = x.slice(0,len-9);
          for (i in jj){
            y +='<tr><td>'+jj[i].nombreFlujo+'</td><td>$'+jj[i].monto+'</td><td>Semana '+jj[i].fechaCorte+'</td><td>'+jj[i].periodicidad+' semanas</td><input form="flujo'+jj[i].idFlujo+'" class="w3-input" type="hidden" name="idFlujo" value="'+jj[i].idFlujo+'"></tr>';
            var aux = [jj[i].monto,jj[i].fechaCorte,jj[i].periodicidad,jj[i].nombreFlujo];
            ingresos.push(aux);
          }
          y+='</tbody>';
          document.getElementById("tableIngresos").innerHTML=y;
          banIngresos=true;
          if(banEgresos)
            dataFlujo=generateIngresos();
          //console.log("ingresos\n"+ingresos);
          //console.log(y+"aquí acaba");
        }
        else if(accion.localeCompare("readEgresos")==0){
          var jj = JSON.parse(respuesta);
          var x = document.getElementById("tableEgresos").innerHTML;
          var len= x.length;
          var y = x.slice(0,len-9);
          for (i in jj){
            y +='<tr><td>'+jj[i].nombreFlujo+'</td><td>$'+jj[i].monto+'</td><td>Semana '+jj[i].fechaCorte+'</td><td>'+jj[i].periodicidad+' semanas</td><input form="flujo'+jj[i].idFlujo+'" class="w3-input" type="hidden" name="idFlujo" value="'+jj[i].idFlujo+'"></tr>';
            var aux = [jj[i].monto,jj[i].fechaCorte,jj[i].periodicidad];
            egresos.push(aux);
          }
          y+='</tbody>';
          //crearChart(); //2 5 8 11    (n-2)%3 == 0 then add monto to graph
          //console.log("egresos\n"+egresos);
          document.getElementById("tableEgresos").innerHTML=y;
          banEgresos=true;
          if(banIngresos)
            dataFlujo=generateIngresos();
        }
        //console.log("llegamos a la historia"+h);
      }).catch(function() {
        addTextToPage("Failed to show chapter");
      }).then(function() {
        console.log("saca el spinner");
        //document.querySelector('.spinner').style.display = 'none';
      })
  // ...this is where we’d actually do something with the form data...
};











































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
//  console.log(expon(-1));
//}

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
  var auxCapricho;;
  for (var i=1; i < j; i++) { 
    // console.log("semana "+i);
    //desastreNatural = porcentaje(5); //expon(0.01)/2)
    if (porcentaje(5)) {
      desastreNatural=-0.1;
      noticias[i].push("Ha ocurrido un desastre natural.");
      // console.log("agregando desastre natural");
      //10% = 0
    }
    if (porcentaje(12.5)) {
      situacionPolitica=0.15;
      if (bm()) {
        noticias[i-1].push("La situación politica del país muestra buenas expectativas en la bolsa.");
        // console.log("agregando noticia de situación política buena");
      }
      else{
        situacionPolitica*=-1;
        noticias[i-1].push("La situación politica del país muestra malas expectativas en la bolsa.");
        // console.log("agregando noticia de situación política mala");
      }
    }
    if (porcentaje(5)) {
      industriaAlimenticia=0.15;
      if (bm()) {
        noticias[i-1].push("La industria alimenticia tiene expectativas de crecimiento.");
        // console.log("noticia de la industria alimenticia buena");
      }
      else{
        industriaAlimenticia*=-1;
        noticias[i-1].push("La industria alimenticia se ha visto afectada en sus expectativas de crecimiento.");
        // console.log("noticia de la industria alimenticia mala");
      }
    }
    if (porcentaje(5)) {
      industria=0.15;
      if (bm()) {
        noticias[i-1].push("Se crean expectativas de crecimiento por inovacion en la industria manufacturera.");
        // console.log("noticia de la industria industria buena");
      }
      else{
        industria*=-1;
        noticias[i-1].push("Las politicas arancelarias internacionales han afectado a la industria manufacturera.");
        // console.log("noticia de la industria industria mala");
      }
    }
    if (porcentaje(5)) {
      industriaEnergia=0.15;
      if (bm()) {
        noticias[i-1].push("Las politicas nacionales incentivan a la empresas de energía.");
        // console.log("noticia de la industria energía buena");
      }
      else{
        industriaEnergia*=-1;
        noticias[i-1].push("Explosión de plataforma petrolera en el Golfo de México.");
        // console.log("noticia de la industria energía mala");
      }
    }
    if (porcentaje(5)) {
      industriaFinanzas=0.15;
      if (bm()) {
        noticias[i-1].push("La ley de Fintech beneficia a todas las empresas financieras");
        // console.log("noticia de la industria finanzas buena");
      }
      else{
        industriaFinanzas*=-1;
        noticias[i-1].push("Se emite una propuesta de recaudación severa a las Fintech");
        // console.log("noticia de la industria finanzas mala");
      }
    }
    if (porcentaje(5)) {
      industriaTransporte=0.15;
      if (bm()) {
        noticias[i-1].push("La industrias de logistica y transporte se beneficia con las uevas carreteras");
        // console.log("noticia de la industria transporte buena");
      }
      else{
        industriaTransporte*=-1;
        noticias[i-1].push("Surge un escandalo sobre las empresas de transporte y el narcotráfico.");
        // console.log("noticia de la industria transporte mala");
      }
    }
    if (porcentaje(5)) {
      industriaEntretenimiento=0.15;
      if (bm()) {
        noticias[i-1].push("Noticia de la industria entretenimiento buen");
        // console.log("noticia de la industria entretenimiento buena");
      }
      else{
        industriaEntretenimiento*=-1;
        noticias[i-1].push("Noticia de la industria entretenimiento mala");
        // console.log("noticia de la industria entretenimiento mala");
      }
    }
    if (porcentaje(25)) {
      //salir con alguien
      auxCapricho=salirAlguien[Math.floor(Math.random()*salirAlguien.length)];
      caprichos[i-1]+=auxCapricho;
      noticias[i-1].push("Has decidido salir con alguien y te costó: "+auxCapricho);
      // console.log("Has decidido salir con alguien y te costó: "+salirAlguien[Math.floor(Math.random()*salirAlguien.length)]);
    }
    if (porcentaje(2.08)) {
      //Tomar vacaciones
      auxCapricho=salirVacaciones[Math.floor(Math.random()*salirVacaciones.length)];
      caprichos[i-1]+=auxCapricho;
      noticias[i-1].push("Has decidido tomar unas vacaciones... te costó: "+auxCapricho);
      // console.log("Has decidido tomar unas vacaciones... te costó: "+salirVacaciones[Math.floor(Math.random()*salirVacaciones.length)]);
    }
    if (porcentaje(4.16)) {
      //Hacer una fiesta
      auxCapricho=hacerFiesta[Math.floor(Math.random()*hacerFiesta.length)];
      caprichos[i-1]+=auxCapricho;
      noticias[i-1].push("Es momento de una fiesta y te cuesta: "+auxCapricho);
      // console.log("Es momento de una fiesta y te cuesta: "+hacerFiesta[Math.floor(Math.random()*hacerFiesta.length)]);
    }
    if (porcentaje(5)) {
      //Comprar ropa
      auxCapricho=comprarRopa[Math.floor(Math.random()*comprarRopa.length)];
      caprichos[i-1]+=auxCapricho;
      noticias[i-1].push("Viste tu ropero muy triste, fuiste a comprar y gastaste: "+auxCapricho);
      // console.log("Viste tu ropero muy triste, fuiste a comprar y gastaste: "+comprarRopa[Math.floor(Math.random()*comprarRopa.length)]);
    }
    if (porcentaje(25)) {
      //Comer fuera
      auxCapricho=comprarFuera[Math.floor(Math.random()*comprarFuera.length)];
      caprichos[i-1]+=auxCapricho;
      noticias[i-1].push("Querias comer afuera y nadie te limita entonces gastaste: "+auxCapricho);
      // console.log("Querias comer afuera y nadie te limita entonces gastaste: "+comprarFuera[Math.floor(Math.random()*comprarFuera.length)]);
    }
    //PANM
    accion=0;
    agregado= (expon(desastreNatural)/2+expon(situacionPolitica)/2+expon(industriaAlimenticia)/2)/6;


    date = date.clone().add(1, 'd');
    // console.log(date.valueOf());

    if(i%4==0){
      date = date.clone().add(1, 'M');
      date = date.clone().date(1);
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
  //mostrarVelas();
  //mostrarMedia();
  // console.log(velas[0]);
  // console.log(medias[0]);
  // console.log(cierres[0]);
  return cierres;
};
function finalizarPartida(){
  timer_is_on=false;
  document.getElementById('mySidebar').className="";
  document.getElementById('mySidebar').style.display ="none";
  document.getElementById('topBar').style.display ="none";
  document.getElementById('mainDiv').style.display ="none";
  document.getElementById('spinner').style.display ="block";
  document.getElementById('mySidebar').style.display ="none";
  for (var i = diaActual-47; i < 1440; i++) {
    diaActual++;
    actualizarCapitalDisponible();
    verificarSemana();
  }
  // crearChart(dataR,tableName,idChart,varChart,ini,numTotal,dataNames,x)
  var vp;
  var x=0;
  // ddata.push(metaArr);
  var n = ["meta",nameUsuario];
  for (var i = 0; i < 1488; i++) {
    metaArr.push(Number(meta));
  }
  var ddata=[metaArr,dineroJugador.splice(1)];
  // console.log(dineroJugador.splice(1));
  // console.log(ddata);
  
  document.getElementById('tiempoMeta').innerHTML="Te tomó: "+semanaGanadora+" semanas para ganar!";
  crearChart(ddata,'Desempeño','chartFinal',vp,0,semanaGanadora+1,n,x);
  document.getElementById('spinner').style.display ="none";
  document.getElementById('partidaTerminada').style.display ="block";

  // console.log(dineroJugador);
  // console.log(semanaGanadora+":::"+dineroJugador[semanaGanadora]);

};
function verificarSemana(){
  if (semanaGanadora==0)
    if (dineroActual>=meta)
      semanaGanadora=diaActual-47;
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
    'Ene',
    'Feb',
    'Mar',
    'Abr',
    'May',
    'Jun',
    'Jul',
    'Ago',
    'Sep',
    'Oct',
    'Nov',
    'Dic'
  ];
var myChart;
var colors=[chartColors.red,chartColors.orange,chartColors.yellow,chartColors.green,chartColors.blue,chartColors.purple,chartColors.black,chartColors.grey];
function mostrarVelas(x,label){
  //var dataPrueba = getRandomData('April 01 2017', 60);
  var numTotal=diaActual+1;
  var inicio = numTotal-49;
  if (inicio%2==1) {
    inicio-=1;
  }
  if (inicio<0) {
    inicio=0;
  }
  canvasCapitales2 = document.getElementById("velasChart").getContext("2d");
    new Chart(canvasCapitales2, {
      type: 'candlestick',
      data: {
        datasets: [{
          label: label,
          data: velas[x].slice(inicio,numTotal),
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
function crearChart(dataR,tableName,idChart,varChart,ini,numTotal,dataNames,x){
  var inicio = ini;
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
  // console.log(dataNames);
  // console.log(typeof dataNames === "string");
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
      // console.log("i:"+i);
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
  var mes=(inicio-1)%12;
  var anio=2017;
  var aux = [];
  var labelsR = [];
  for (var i = inicio; i < numTotal; i++) {
    aux=[];
    if (i%48==0){
      aux+=anio.toString()+" ";
      anio+=1;
    }
    if (i%4==0){
      mes+=1;
      if (mes==12)
        mes=0;
    }
    aux+=meses[mes]+" ";
    aux+=(sem+1).toString();
    sem+=1;
    if (sem==4)
      sem=0;
    //console.log(aux);
    labelsR.push(aux);
  }
  var dataSets=[];
  //console.log(typeof dataNames === "string");
  //console.log(dataR.slice(inicio,numTotal));
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
          borderColor: colors[0],
          backgroundColor: 'rgba(0, 0, 0, 0)',
          fill: false,
          lineTension: 0
        };
      }
      else{
        var aux = {
          label: dataNames[i],
          data: dataR[i].slice(inicio,numTotal),
          borderColor: colors[4],
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