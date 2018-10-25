var iFrequency = 5000; // expressed in miliseconds
var myInterval = 0;

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

// Get the Sidebar
var mySidebar = document.getElementById("mySidebar");
// Get the DIV with overlay effect
var overlayBg = document.getElementById("myOverlay");
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

var c=300;
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
          c=300;
          diaActual+=1;
          actualizarDia();
        }
        displayCount();
    }
};

function iniciar(){
  document.getElementById('mySidebar').style.display ="block";
  document.getElementById('topBar').style.display ="block";
  document.getElementById('mainDiv').style.display ="block";
  document.getElementById('mySidebar').className+=" w3-collapse";
  document.getElementById('spinner').style.display ="none";
  timer_is_on=true;
};

//window.onload = function() {
//    iniciar();
//  };
var names=['PETROIL','GAEM','PANM','GIM','RAQUIM','GFINMA','GICR','GNLA'];
var names2=[
  "Petróleos y energía S.A.B. de C.V.",
  "Grupo Aéreo Mexicano S.A.B. de C.V.",
  "Panificadora Nacional S.A.B. de C.V.",
  "Grupo Industrial Mexicano S.A.B. de C.V.",
  "Radio Quim S.A.B de C.V.",
  "Grupo Financiero Mancol S.A.B. de C.V.",
  "Grupo Industrial de Carnes y Refrigerados S.A.B. de C.V.",
  "Grupo nacional de lácteos S.A.B. de C.V."
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

var data=generarAcciones();
var casaBolsa={
  nombre: "kuspit",
  comision: 0.0025,
  mensualidad: 50
};
document.getElementById('datosComision').innerHTML="Nombre: "+casaBolsa.nombre+" &emsp; Mensualidad: "+casaBolsa.mensualidad+"  &emsp; Comisión compra/venta: "+(casaBolsa.comision*100)+"%";
var diaActual=48;
var canvasBalance;
var canvasCapitales;
//console.log((Math.random()*.00155)+.00095);
//crearChart(data[0],'Panorama','canvas',varChart,diaActual,names[0]);

function proyectar(x){
  crearChart(data[x],'Panorama','chartAlert',canvasCapitales,diaActual,names[x]);
  document.getElementById('alertDiv').style.display="block";
  document.getElementById('alertDiv2').style.display="block";
}
function close_alert(){
  document.getElementById('alertDiv').style.display="none";
  document.getElementById('alertDiv2').style.display="none";
}
function keyPress (e) {
    if(e.key === "Escape") {
        console.log("hola");
    }
}
function actualizarDia(){
  if(typeof canvasBalance !== 'undefined'){
    canvasBalance.destroy();
  }
  if(typeof canvasCapitales !== 'undefined'){
    canvasCapitales.destroy();
  }
  var textTableAccion="";
  var textMisInversiones="";
  for (var i = 0; i < names.length; i++) {
      var vAnt=data[i][diaActual-1];
      var vAct=data[i][diaActual];
      var variacion=datosAccion[i][0];
      var vReal=(vAct+(vAct*variacion));
      var gasto=datosAccion[i][1];
      var titulos=datosAccion[i][2];
      var text1;
      var text2;
      var text3;
      if (vAnt>vAct)
        text1="<tr><td>"+names[i]+"</td><td>"+names2[i]+"</td><td><font color='red'>-"+((vAnt/vAct)-1).toFixed(4)+"%</font></td><td><i>$"+vAct.toFixed(2)+"</i></td><td><i>$"+vReal.toFixed(2)+"</i></td><td><i>$"+gasto+"</i></td>";
      else if (vAnt<vAct)
        text1="<tr><td>"+names[i]+"</td><td>"+names2[i]+"</td><td><font color='green'>"+((vAct/vAnt)-1).toFixed(4)+"%</font></td><td><i>$"+vAct.toFixed(2)+"</i></td><td><i>$"+vReal.toFixed(2)+" </i></td><td><i>$"+gasto+"</i></td>";
      else
        text1="<tr><td>"+names[i]+"</td><td>"+names2[i]+"</td><td>0%</td><td><i>$"+vAct.toFixed(4)+"</i></td><td><i>$"+vReal.toFixed(2)+"</i></td><td><i>$"+gasto+"</i></td>";
      if (gasto>titulos*vAct)
        text2="<td><font color='red'>$"+(titulos*vAct)+"</font></td><td><i>"+titulos+"</i></td><td><button onclick='proyectar("+i+");'>Proyectar</button></td></tr>";
      else if (gasto<titulos*vAct)
        text2="<td><font color='green'>$"+(titulos*vAct)+"</font></td><td><i>"+titulos+"</i></td><td><button onclick='proyectar("+i+");'>Proyectar</button></td></tr>";
      else
        text2="<td>$"+(titulos*vAct)+"</td><td><i>"+titulos+"</i></td><td><button onclick='proyectar("+i+");'>Proyectar</button></td></tr>";
      
      if ((titulos*vAct)<gasto)
        text3="<tr><td>"+names[i]+"</td><td><font color='red'>-"+((gasto/vReal)-1)+"%</font></td><td><i>$"+gasto+"</i></td><td><font color='red'>$"+(titulos*vAct)+"</font></td><td><i>"+titulos+"</i></td></tr>";
      else if ((titulos*vAct)>gasto)
        text3="<tr><td>"+names[i]+"</td><td><font color='green'>"+((vReal/gasto)-1)+"%</font></td><td><i>$"+gasto+"</i></td><td><font color='red'>$"+(titulos*vAct)+"</font></td><td><i>"+titulos+"</i></td></tr>";
      else
        text3="<tr><td>"+names[i]+"</td><td>0%</td><td><i>$"+gasto+"</i></td><td>"+(titulos*vAct)+"</td><td><i>"+titulos+"</i></td></tr>";

      textTableAccion+=text1+text2;
      textMisInversiones+=text3;
    }
    document.getElementById('tableAcciones').innerHTML=textTableAccion;
    document.getElementById('misInversiones').innerHTML=textMisInversiones;
}
window.onload = function() {
    actualizarDia();
    iniciar();
  };
var interval = setInterval(count,1000);
var ingresos = [];
var egresos = [];
bandera=0;
function handleFormSubmit (form,accion) {
  
  // Call our function to get the form data.
  var data = formToJSON(form.elements);
  data.funcion = accion;
  
  // Use `JSON.stringify()` to make the output valid, human-readable JSON.
    getJson('./../ajax/manejoJuego.php',JSON.stringify(data, null, "  ")).then(function(respuesta) {
      var h = respuesta.trim();
      //console.log(accion);
      //console.log("el resultado es:"+h.localeCompare("login"));
        if(accion.localeCompare("getFundador")==0){
          var jj = JSON.parse(respuesta);
          //console.log(JSON.parse(respuesta));
          //console.log(jj);
          document.getElementById("mainName").innerHTML=jj.nombre;
        }
        else if(accion.localeCompare("readIngresos")==0){
          var jj = JSON.parse(respuesta);
          var x = document.getElementById("tableIngresos").innerHTML;
          var len= x.length;
          var y = x.slice(0,len-9);
          for (i in jj){
            y +='<form id=\'flujo'+jj[i].idFlujo+'\' onsubmit="event.preventDefault(); handleFormSubmit(this,\'ingresos\');"><tr><td><input class="w3-input" form="flujo'+jj[i].idFlujo+'" type="text" name="nombreFlujo" value="'+jj[i].nombreFlujo+'"></td><td><input form="flujo'+jj[i].idFlujo+'" class="w3-input" type="number" name="monto" value="'+jj[i].monto+'"></td><td><input form="flujo'+jj[i].idFlujo+'" class="w3-input" type="number" name="fecha" value="'+jj[i].fechaCorte+'"></td><td><input form="flujo'+jj[i].idFlujo+'" class="w3-input" type="number" name="periodicidad" value="'+jj[i].periodicidad+'"> semanas</td><td><button type="button" onclick="flujoEdit(\'flujo'+jj[i].idFlujo+'\')" name="accion" value="edit"><i class="fa fa-edit fa-fw"></i></button></td><td><button type="button" onclick="flujoDelete(\'flujo'+jj[i].idFlujo+'\')" name="accion" value="delete"><i class="fa fa-times fa-fw"></i></button></td><input form="flujo'+jj[i].idFlujo+'" class="w3-input" type="hidden" name="idFlujo" value="'+jj[i].idFlujo+'"></tr></form>';
            var aux = [jj[i].monto,jj[i].fechaCorte,jj[i].periodicidad];
            ingresos.push(aux);
          }
          y+='<tr id="trNewIngreso"><form id="newIngreso" onsubmit="event.preventDefault(); handleFormSubmit(this,"createIngreso");"><td></td><td></td><td><input onclick="showIngreso();" type="button" class="w3-btn w3-green w3-xlarge" value="Nuevo"></td></form></tr></tbody>';
          document.getElementById("tableIngresos").innerHTML=y;
          console.log("ingresos\n"+ingresos);
          //console.log(y+"aquí acaba");
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