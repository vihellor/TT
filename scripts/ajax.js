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
function handleFormSubmit (form,accion) {
  
  // Call our function to get the form data.
  var data = formToJSON(form.elements);
  data.funcion = accion;
  
  // Use `JSON.stringify()` to make the output valid, human-readable JSON.
    getJson('./../ajax/manejoUsuario.php',JSON.stringify(data, null, "  ")).then(function(respuesta) {
      var h = respuesta.trim();
      //console.log(accion);
      //console.log("el resultado es:"+h.localeCompare("login"));
        if(accion.localeCompare("getUsuario")==0){
          var jj = JSON.parse(respuesta);
          //console.log(JSON.parse(respuesta));
          //console.log(jj);
          document.getElementById("mainName").innerHTML=jj.nombre;
          document.getElementById("nickname").value=jj.nickname;
          document.getElementById("name").value=jj.nombre;
          document.getElementById("app").value=jj.apellidoPaterno;
          document.getElementById("apm").value=jj.apellidoMaterno;
          document.getElementById("ocupacion").value=jj.ocupacion;
          document.getElementById("email").value=jj.correo;
        }
        else if(accion.localeCompare("readIngresos")==0){
          var jj = JSON.parse(respuesta);
          var x = document.getElementById("tableIngresos").innerHTML;
          var len= x.length;
          var y = x.slice(0,len-9);
          for (i in jj){
            y +='<form id=\'flujo'+jj[i].idFlujo+'\' onsubmit="event.preventDefault(); handleFormSubmit(this,\'ingresos\');"><tr><td><input class="w3-input" form="flujo'+jj[i].idFlujo+'" type="text" name="nombreFlujo" value="'+jj[i].nombreFlujo+'"></td><td><input form="flujo'+jj[i].idFlujo+'" class="w3-input" type="number" name="monto" value="'+jj[i].monto+'"></td><td><input form="flujo'+jj[i].idFlujo+'" class="w3-input" type="number" name="fecha" value="'+jj[i].fechaCorte+'"></td><td><input form="flujo'+jj[i].idFlujo+'" class="w3-input" type="number" name="periodicidad" value="'+jj[i].periodicidad+'"> semanas</td><td><button type="button" onclick="flujoEdit(\'flujo'+jj[i].idFlujo+'\')" name="accion" value="edit"><i class="fa fa-edit fa-fw"></i></button></td><td><button type="button" onclick="flujoDelete(\'flujo'+jj[i].idFlujo+'\')" name="accion" value="delete"><i class="fa fa-times fa-fw"></i></button></td><input form="flujo'+jj[i].idFlujo+'" class="w3-input" type="hidden" name="idFlujo" value="'+jj[i].idFlujo+'"></tr></form>';

          }
          y+='<tr id="trNewIngreso"><form id="newIngreso" onsubmit="event.preventDefault(); handleFormSubmit(this,"createIngreso");"><td></td><td></td><td><input onclick="showIngreso();" type="button" class="w3-btn w3-green w3-xlarge" value="Nuevo"></td></form></tr></tbody>';
          document.getElementById("tableIngresos").innerHTML=y;
          //console.log(y+"aquí acaba");
        }
        else if(accion.localeCompare("readEgresos")==0){
          var jj = JSON.parse(respuesta);
          var x = document.getElementById("tableEgresos").innerHTML;
          var len= x.length;
          var y = x.slice(0,len-9);
          for (i in jj){
            y +='<form id=\'flujo'+jj[i].idFlujo+'\' onsubmit="event.preventDefault(); handleFormSubmit(this,\'ingresos\');"><tr><td><input class="w3-input" form="flujo'+jj[i].idFlujo+'" type="text" name="nombreFlujo" value="'+jj[i].nombreFlujo+'"></td><td><input form="flujo'+jj[i].idFlujo+'" class="w3-input" type="number" name="monto" value="'+jj[i].monto+'"></td><td><input form="flujo'+jj[i].idFlujo+'" class="w3-input" type="number" name="fecha" value="'+jj[i].fechaCorte+'"></td><td><input form="flujo'+jj[i].idFlujo+'" class="w3-input" type="number" name="periodicidad" value="'+jj[i].periodicidad+'"> semanas</td><td><button type="button" onclick="flujoEdit(\'flujo'+jj[i].idFlujo+'\')" name="accion" value="edit"><i class="fa fa-edit fa-fw"></i></button></td><td><button type="button" onclick="flujoDelete(\'flujo'+jj[i].idFlujo+'\')" name="accion" value="delete"><i class="fa fa-times fa-fw"></i></button></td><input form="flujo'+jj[i].idFlujo+'" class="w3-input" type="hidden" name="idFlujo" value="'+jj[i].idFlujo+'"></tr></form>';

          }
          y+='<tr id="trNewEgreso"><form id="newEgreso" onsubmit="event.preventDefault(); handleFormSubmit(this,"createEgreso");"><td></td><td></td><td><input onclick="showEgreso();" type="button" class="w3-btn w3-green w3-xlarge" value="Nuevo"></td></form></tr></tbody>';
          //console.log(y);
          document.getElementById("tableEgresos").innerHTML=y;
        }else if(accion.localeCompare("readAllUsuario")==0){
          var jj = JSON.parse(respuesta);
          var y;
          var x = document.getElementById("manageUsers").innerHTML;
          var len= x.length;
          //console.log(x.slice(0,len-9));
          y = x.slice(0,len-9);
          for (i in jj){
            //console.log(i);
            y +='<tr><form id="usr'+jj[i].idUsuario+'" onsubmit="event.preventDefault(); handleFormSubmit(this,\'usr\');"><td><input form="usr'+jj[i].idUsuario+'" class="w3-input" type="text" name="idUsuario" value="'+jj[i].idUsuario+'" disabled="true"></td><td><input form="usr'+jj[i].idUsuario+'" class="w3-input" type="text" name="nickname" value="'+jj[i].nickname+'" disabled="true"></td><td><input form="usr'+jj[i].idUsuario+'" class="w3-input" type="password" name="password"></td><td><button onclick="updateUsr(\'usr'+jj[i].idUsuario+'\');" type="button" name="accion" value="edit"><i class="fa fa-edit fa-fw"></i></button></td><td><button onclick="deleteUsr(\'usr'+jj[i].idUsuario+'\');" type="button" name="accion" value="delete"><i class="fa fa-times fa-fw"></i></button></td></form></tr>';
          }
          y+="</tbody>";
          document.getElementById("manageUsers").innerHTML=y;
        }else if (h.localeCompare("login")==0) {
          window.location = "./../pages/menu.php";
        }else if (h.localeCompare("loginAdmin")==0) {
          window.location = "./../pages/admin.html";
        }else if (h.localeCompare("updateContrasena")==0) {
          alert("Se actualizó la contraseña correctamente");
        }else if (h.localeCompare("updateContrasenaFalse")==0) {
          alert("Asegurate de haber introducido correctamente tu contraseña o contacta a tu administrador");
        }else if (h.localeCompare("updateUsuario")==0) {
          alert("Se actualizaron tus datos correctamente");
        }else if (h.localeCompare("flujoDelete")==0) {
          alert("Flujo eliminado correctamente");
          clearFlujo();
        }else if (h.localeCompare("flujoDeleteFalse")==0) {
          alert("Error al eliminar el flujo, vuelve a intentarlo");
        }else if (h.localeCompare("flujoEdit")==0) {
          alert("Flujo editado correctamente");
          clearFlujo();
        }else if (h.localeCompare("flujoEditFalse")==0) {
          alert("Error al editar el flujo, vuelve a intentarlo");
        }else if (h.localeCompare("usrEdit")==0) {
          alert("Se actualizaron los datos correctamente");
        }else if (h.localeCompare("usrEditFalse")==0) {
          alert("Error al actualizar tus datos, intentalo de nuevo");
        }else if (h.localeCompare("deleteUsuario")==0) {
          alert("Se eliminó el usuario correctamente");
          window.location = "./../pages/admin.html";
        }else if (h.localeCompare("deleteUsuarioFalse")==0) {
          alert("Error al eliminar usuario, vuelve a intentarlo");
        }else if (h.localeCompare("updateUsuario")==0) {
          alert("usuario editado correctamente");
        }else if (h.localeCompare("updateUsuarioFalse")==0) {
          alert("Error al actualizar tus datos, intentalo de nuevo");
        }else if (h.localeCompare("createIngreso")==0) {
          alert("Ingreso agregado correctamente");
          clearFlujo();
        }else if (h.localeCompare("createIngresoFalse")==0) {
          alert("Error al crear el ingreso, intentelo de nuevo");
        }else if (h.localeCompare("createEgreso")==0) {
          alert("Egreso agregado correctamente");
          clearFlujo();
        }else if (h.localeCompare("createIngresoFalse")==0) {
          alert("Error al crear el engreso, intentelo de nuevo");
        }else if(h.localeCompare("registro")==0){
          //console.log("ejecutando registro...");
          alert("¡Usuario registrado exitosamente! Inicia sesión");
          openLink(event, 'login');
        }else if(h.localeCompare("registroFalse")==0){
          //console.log("ejecutando registro...");
          alert("Ese nombre de usuario ya está registrado");
        }else if(h.localeCompare("loginFalse")==0){
          //console.log("ejecutando registro...");
          alert("Usuario o contraseña incorrectos");
        }
        else{
          console.log("Fallo entonces no haré nada perro");
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
function handleFormSubmit2 (form,accion) {
  
    // Call our function to get the form data.
    var data = formToJSON(form.elements);
    data.funcion = accion;
    
    // Use `JSON.stringify()` to make the output valid, human-readable JSON.
    getJson('./../ajax/userTutorial.php',JSON.stringify(data, null, "  ")).then(function(respuesta) {
      var h = respuesta.trim();
      document.getElementById("tutDiv").innerHTML=h;
      }).catch(function() {
        addTextToPage("Failed to show chapter");
      }).then(function() {
        console.log("saca el spinner");
        //document.querySelector('.spinner').style.display = 'none';
      })


  
  // ...this is where we’d actually do something with the form data...
};
function clearFlujo(){
  document.getElementById("tableIngresos").innerHTML='<tbody><tr class="w3-green"><th>Nombre</th><th>Monto</th><th>Semana de corte</th><th>Periodicidad</th><th></th><th></th></tr>     </tbody>';
  document.getElementById("tableEgresos").innerHTML='<tbody><tr class="w3-green"><th>Nombre</th><th>Monto</th><th>Semana de corte</th><th>Periodicidad</th><th></th><th></th></tr>     </tbody>';
  handleFormSubmit(document.createElement("form"),"readIngresos");
  handleFormSubmit(document.createElement("form"),"readEgresos");
}
function flujoEdit(hola){
  handleFormSubmit(document.getElementById(hola),'flujoEdit');
}
function flujoDelete(hola){
  handleFormSubmit(document.getElementById(hola),'flujoDelete');
}
function clearTarjeta(){
  document.getElementById("tableDebito").innerHTML='<tbody><tr class="w3-green"><th>No de tarjeta</th><th>Fecha de corte</th><th>Saldo</th><th>Comisión fija</th><th>Valor de comisión fija</th><th></th><th></th></tr>     </tbody>';
  document.getElementById("tableCredito").innerHTML='<tbody><tr class="w3-green"><th>No de tarjeta</th><th>Fecha de corte</th><th>Saldo</th><th>Límite de crédito</th><th>Tasa de interés</th><th></th><th></th></tr>     </tbody>';
  handleFormSubmit(document.createElement("form"),"readIngresos");
  handleFormSubmit(document.createElement("form"),"readEgresos");
}
function tarjetaDelete(hola){
  handleFormSubmit(document.getElementById(hola),'deleteTarjeta');
}
function tarjetaEdit(hola){
  handleFormSubmit(document.getElementById(hola),'editTarjeta');
}
function showIngreso(){
  document.getElementById("trNewIngreso").innerHTML='<form id="createIngreso" onsubmit="event.preventDefault(); handleFormSubmit(this,"createEgreso");"></form><td><input class="w3-input" form="createIngreso" type="text" name="nombreFlujo" value=""></td><td><input form="createIngreso" class="w3-input" type="number" name="monto" value=""></td><td><input form="createIngreso" class="w3-input" type="number" name="fecha" value=""></td><td><input form="createIngreso" class="w3-input" type="number" name="periodicidad" value=""> semanas</td><td><button type="button" onclick="mandar(\'createIngreso\')" name="accion" value="crear">Crear</button></td><td></td>';
}
function showEgreso(){
  document.getElementById("trNewEgreso").innerHTML='<form id="createEgreso" onsubmit="event.preventDefault(); handleFormSubmit(this,"createEgreso");"></form><td><input class="w3-input" form="createEgreso" type="text" name="nombreFlujo" value=""></td><td><input form="createEgreso" class="w3-input" type="number" name="monto" value=""></td><td><input form="createEgreso" class="w3-input" type="number" name="fecha" value=""></td><td><input form="createEgreso" class="w3-input" type="number" name="periodicidad" value=""> semanas</td><td><button type="button" onclick="mandar(\'createEgreso\')" name="accion" value="crear">Crear</button></td><td></td>';
}
function mandar(hola){
  handleFormSubmit(document.getElementById(hola),hola);
}

/*
 * This is where things actually get started. We find the form element using
 * its class name, then attach the `handleFormSubmit()` function to the 
 * `submit` event.
 */


