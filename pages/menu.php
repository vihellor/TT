<?php
  session_start();
?>
<!DOCTYPE html>
<html>
<head>
  <title>TTI</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="./../style/w3.css">
  <link rel="stylesheet" href="./../style/css?family=Raleway">
  <link rel="stylesheet" href="./../style/css/fontawesome-all.min.css">
  <script src="./../scripts/ajax.js"></script>
  <style>
  html,body,h1,h2,h3,h4,h5 {font-family: "Raleway", sans-serif}
  </style>
</head>
<body class="w3-light-grey">

<!-- Top container -->
<div class="w3-bar w3-top w3-black w3-large" style="z-index:4">
  <button class="w3-bar-item w3-button w3-hide-large w3-hover-none w3-hover-text-light-grey" onclick="w3_open();"><i class="fa fa-bars"></i>  Menu</button>
  <span class="w3-bar-item w3-right">TTI 1.0</span>
</div>

<!-- Sidebar/menu -->
<nav class="w3-sidebar w3-collapse w3-white w3-animate-left" style="z-index:3;width:300px;" id="mySidebar"><br>
  <div class="w3-container w3-row">
    <div class="w3-col s4">
      <img src="./../imgs/avatar2.png" class="w3-circle w3-margin-right" style="width:46px">
    </div>
    <div class="w3-col s8 w3-bar">
      <span>Bienvenido, <strong>Mike</strong></span><br>    <!--Agregar JS para obtener el nombre del usuario-->
      <a href="" class="w3-bar-item w3-button"><i class="fa fa-user"></i></a>
      <a href="./configuracion.html" class="w3-bar-item w3-button"><i class="fa fa-cog"></i></a>
    </div>
  </div>
  <hr>
  <div class="w3-container">
    <h5>Herramientas</h5>
  </div>
  <div class="w3-bar-block">
    <a href="#" class="w3-bar-item w3-button w3-padding-16 w3-hide-large w3-dark-grey w3-hover-black" onclick="w3_close()" title="close menu"><i class="fa fa-times fa-fw"></i>  Close Menu</a>
    <button class="w3-bar-item w3-button tablink w3-green" onclick="openLink(event, 'Inicio')"><i class="fa fa-home fa-fw"></i>  Inicio</button>
    <button class="w3-bar-item w3-button tablink" onclick="openLink(event, 'Configuracion')"><i class="fa fa-th-list fa-fw"></i>  Configuración</button>
    <button class="w3-bar-item w3-button tablink" onclick="openLink(event, 'buscarPartida')"><i class="fa fa-bullseye fa-fw"></i>  Buscar partida</button>
    <button class="w3-bar-item w3-button tablink" onclick="openLink(event, 'nuevaPartida')"><i class="fa fa-gamepad fa-fw"></i> Nueva partida</button>
    <button class="w3-bar-item w3-button tablink" onclick="openLink(event, 'tutorial')"><i class="fa fa-sort-alpha-down fa-fw"></i> Tutorial</button>
    <button class="w3-bar-item w3-button tablink"><i class="fa fa-book fa-fw"></i> Glosario</button>
    <!-- <a href="#" class="w3-bar-item w3-button w3-padding"><i class="fa fa-history fa-fw"></i> Regresar </a> -->
    
  </div>
</nav>

<!-- Overlay effect when opening sidebar on small screens -->
<div class="w3-overlay w3-hide-large w3-animate-opacity" onclick="w3_close()" style="cursor:pointer" title="close side menu" id="myOverlay"></div>

<!-- !PAGE CONTENT! -->
<div class="w3-main" style="margin-left:300px; margin-top:43px">


  <!--inicio-->
  <div id="Inicio" class="w3-panel menuItem w3-animate-left" style="text-align: center;">
    <div class="w3-row-padding" >
      <div class="w3-twothird" >
        <br><br>
        <h1>Bienvenido!!</h1>
        <!--<a href="./nuevoJuego.html"><input type="button" class="w3-button w3-xlarge w3-round-xlarge w3-white w3-border w3-border-green w3-hover-green" name="nuevoJuego" value="Nuevo juego"></a><br><br><br>
        <a href="./tutorial.html"><input type="button" class="w3-button w3-xlarge w3-round-xlarge w3-white w3-border w3-border-green w3-hover-green" name="tutorial" value="Tutorial"></a>
        <br><br><br>
        <a href="./buscarPartida.html"><input type="button" class="w3-button w3-xlarge w3-round-xlarge w3-white w3-border w3-border-green w3-hover-green" name="buscarPartida"  value="Buscar partida" ></a> -->
        
      </div>
    </div>
  </div>
  <!--  Configuración -->
  <div id="Configuracion" class="w3-panel menuItem w3-animate-left" style="display:none; text-align: center;">
    <div class="w3-row-padding" >
        <!--
        <br>
        <h2><b>Configuración</b></h2>
        <br><br>-->
        <br><br>
        <div class="flexContainer">
          <div>
            <img src="./../imgs/avatar2.png" class="w3-circle w3-margin-right" alt="Profile image" style="width: 400px">
          </div>
          <div>
            <br>
            <form onsubmit="event.preventDefault(); handleFormSubmit(this,'updateUsuario');">
              <input type="text" class="w3-input w3-xlarge" name="nickname" value="Mike" placeholder="Nickname" required="true"><br><br>
              <input type="text" class="w3-input w3-xlarge" name="name" value="Miguel" placeholder="Nombre" required="true"><br><br>
              <input type="text" class="w3-input w3-xlarge" name="app" value="Perez" placeholder="Apellidos" required="true"><br><br>
              <input type="text" class="w3-input w3-xlarge" name="apm" value="Muñoz" placeholder="Apellidos" required="true"><br><br>
              <input type="text" class="w3-input w3-xlarge" name="ocupacion" value="Estudiante" placeholder="Ocupación" required="true"><br><br>
              <input type="email" class="w3-input w3-xlarge" name="email" value="mike@coreo.com" placeholder="Correo electrónico" required="true"><br><br>
              <input type="submit" class="w3-btn w3-green w3-xlarge" value="Cambiar">
            </form>

          </div>
        </div>
        
        <h2 onclick="acordeon('cambioContra')" ><b><i id="disUs" class="fa fa-chevron-circle-right"></i>Cambio Contraseña</b></h2>
        <div id="cambioContra" class="w3-hide w3-animate-zoom flexContainer">
          <form onsubmit="event.preventDefault(); handleFormSubmit(this,'updateContrasena');">
            <p>
              <label class="w3-text-green w3-large"><b>Contraseña anterior</b></label>
              <input type="password" class="w3-input w3-xlarge" name="OldPasword" required="true">
            </p>
            <div class="w3-cell-row">
              <div class="w3-container w3-cell w3-mobile">
                <p>
                  <label class="w3-text-green w3-large"><b>Nueva contraseña</b></label>
                  <input type="password" class="w3-input w3-xlarge" name="newPassword" required="true">
                </p>
              </div>
              <div class="w3-container w3-cell w3-mobile">
                <p>
                  <label class="w3-text-green w3-large"><b>Repetir contraseña</b></label>
                  <input type="password" class="w3-input w3-xlarge" name="newPassword2" required="true">
                </p>
              </div>
            </div>

            <input type="submit" class="w3-btn w3-green w3-xlarge" value="Cambiar contraseña">
          </form>
        </div>
    </div>

  

    <div class="w3-row-padding">
      <div class="flexContainer2">
      <div class="w3-card-4">
        <header class="w3-cell-row">
          <div id="l1" class="w3-third w3-container w3-light-gray w3-cell">
            <a onclick="openLink2(event, 'ingresos')"><h4>Ingresos</h4></a>
          </div>
          
          <div id="l2" class="w3-third w3-container w3-green w3-cell">
            <a onclick="openLink2(event, 'egresos')"><h4>Egresos</h4></a>
          </div>

          <div id="l3" class="w3-third w3-container w3-green w3-cell">
            <a onclick="openLink2(event, 'tarjeta')"><h4>Tarjeta</h4></a>
          </div>
      
        </header>
        <div class="w3-container w3-light-gray">
          <div id="ingresos" class="w3-animate-right flexContainer2 ">
             <div class="w3-responsive">
              <table class="w3-table-all">
                <tr class="w3-green">
                  <th>Nombre</th>
                  <th>Monto</th>
                  <th>Fecha</th>
                  <th>Periodicidad</th>
                  <th></th>
                  <th></th>
                </tr>
                <tr>
                  <form onsubmit="event.preventDefault(); handleFormSubmit2(this);">
                    <td><input class="w3-input" type="text" name="sueldo" value="Sueldo"></td>
                    <td><input class="w3-input" type="number" name="sueldo" value="10000"></td>
                    <td><input class="w3-input" type="number" name="fecha" value="1"></td>
                    <td><input class="w3-input" type="number" name="periodicidad" value="2"> semanas</td>
                    <td><button type="submit" name="funcion" value="edit"><i class="fa fa-edit fa-fw"></i></button></td>
                    <td><button type="submit" name="funcion" value="delete"><i class="fa fa-times fa-fw"  aria-hidden="true"></i></button></td>
                  </form>
                  
                </tr>
                <tr>
                  <td>Bono productividad</td>
                  <td>5,000</td>
                  <td>01/15/14</td>
                  <td>4 semanas</td>
                  <td><a href=""><i class="fa fa-edit fa-fw"></i></a></td>
                  <td><a href=""><i class="fa fa-times fa-fw"></i></a></td>
                </tr>
              </table>
            </div> 
          </div>
          <div id="registro" class="w3-animate-left flexContainer2 " style="display:none;">
            <form onsubmit="event.preventDefault(); validar(this,'registro');">
              <div class="w3-cell-row">
                <p>
                  <label class="w3-text-green w3-large"><b>Nickname</b></label>
                  <br>
                  <input type="text" name="nickname" class="w3-input w3-border" required="true">
                </p>
              </div>
          <div class="w3-cell-row">
            <div class="w3-container w3-cell w3-mobile">
              <p>
                  <label class="w3-text-green w3-large"><b>Nombre o Nombres</b></label>
                  <input type="text" name="name" class="w3-input w3-border" required="true">
            </p>
            </div>
            <div class="w3-container w3-cell w3-mobile">
              <p>
                  <label class="w3-text-green w3-large"><b>Apellido Paterno</b></label>
                  <input type="text" name="app" class="w3-input w3-border" required="true">
                </p>
            </div>
            <div class="w3-container w3-cell w3-mobile">
              <p>
                <label class="w3-text-green w3-large"><b>Apellido materno</b></label>
                  <input type="text" name="apm" class="w3-input w3-border" required="true">
              </p>
            </div>
          </div>
          <div class="w3-cell-row">
            <p>
                  <label class="w3-text-green w3-large"><b>Ocupación</b></label>
                  <br>
                  <input type="text" name="ocupacion" class="w3-input w3-border">
                </p>
          </div>
              <div class="w3-cell-row">
                <p>
                  <label class="w3-text-green w3-large"><b>Email</b></label>
                  <br>
                  <input type="email" name="email" class="w3-input w3-border" required="true">
                </p>
              </div>
              
              <div class="w3-cell-row">
            <div class="w3-container w3-cell w3-mobile">
              <p>
                  <label class="w3-text-green w3-large"><b>Contraseña</b></label>
                  <input type="password" name="password" class="w3-input w3-border" required="true">
            </p>
            </div>
            <div class="w3-container w3-cell w3-mobile">
              <p>
                  <label class="w3-text-green w3-large"><b>Confirmación Contraseña</b></label>
                  <input type="password" name="password2" class="w3-input w3-border" required="true">
                </p>
            </div>
          </div>

              <input id="submitR" type="submit" class="w3-btn w3-green w3-xlarge" value="Continuar">
            </form>
          </div>
        </div>
      </div>
    </div>
      <div class="flexContainer">
        <div class="w3-margin">
          <h2><b><i></i>Ingresos</b></h2>
          <div class="w3-responsive">
            <table class="w3-table-all w3-centered">
              <tr class="w3-green">
                <th>Nombre</th>
                <th>Monto</th>
                <th>Fecha</th>
                <th>Periodicidad</th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <form onsubmit="event.preventDefault(); handleFormSubmit2(this);">
                  <td><input type="text" name="sueldo" value="Sueldo"></td>
                  <td><input type="number" name="sueldo" value="10000"></td>
                  <td><input type="number" name="fecha" value="1"></td>
                  <td><input type="number" name="periodicidad" value="2"> semanas</td>
                  <td><button type="submit" name="funcion" value="edit"><i class="fa fa-edit fa-fw"></i></button></td>
                  <td><button type="submit" name="funcion" value="delete"><i class="fa fa-times fa-fw"  aria-hidden="true"></i></button></td>
                </form>
                
              </tr>
              <tr>
                <td>Bono productividad</td>
                <td>5,000</td>
                <td>01/15/14</td>
                <td>4 semanas</td>
                <td><a href=""><i class="fa fa-edit fa-fw"></i></a></td>
                <td><a href=""><i class="fa fa-times fa-fw"></i></a></td>
              </tr>
            </table>
          </div>
        </div>
        <div class="w3-margin">
          <h2><b><i></i>Egresos</b></h2>
          <div class="w3-responsive">
            <table class="w3-table-all w3-centered">
              <tr class="w3-green">
                <th>Nombre</th>
                <th>Monto</th>
                <th>Fecha</th>
                <th>Periodicidad</th>
                <th></th>
              </tr>
              <tr>
                <td>Gas</td>
                <td>300</td>
                <td>11/20/14</td>
                <td>8 semanas</td>
                <td><a href=""><i class="fa fa-times fa-fw"></i></a></td>
              </tr>
              <tr>
                <td>Luz</td>
                <td>560</td>
                <td>01/10/15</td>
                <td>8 semanas</td>
                <td><a href=""><i class="fa fa-times fa-fw"></i></a></td>
              </tr>
              <tr>
                <td>Agua</td>
                <td>140</td>
                <td>30/05/17</td>
                <td>8 semanas</td>
                <td><a href=""><i class="fa fa-times fa-fw"></i></a></td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      
    </div>
  </div>
  <!--  Buscar partida -->
  <div id="buscarPartida" class="w3-panel menuItem w3-animate-left"  style="display:none; text-align: center;">
    <div class="w3-row-padding" >
      <br>
      <h2><b><i></i>Partidas disponibles</b></h2>
      <div class="w3-responsive">
        <table class="w3-table-all w3-centered">
          <tr class="w3-green">
            <th>Nombre</th>
            <th>Max. Jugadores</th>
            <th>Jugadores actuales</th>
            <th>Meta</th>
            <th></th>
          </tr>
          <tr>
            <td>Segunda partida</td>
            <td>5</td>
            <td>2</td>
            <td>10,000</td>
            <td><a href="./esperaJugadores.html"><input type="button" class="w3-button" name="unirse" value="Unirse" style="text-align: center;"></a></td>
          </tr>
          <tr>
            <td>La chida</td>
            <td>3</td>
            <td>1</td>
            <td>700,000</td>
            <td><a href="./esperaJugadores.html"><input type="button" class="w3-button" name="unirse" value="Unirse" style="text-align: center;"></a></td>
          </tr>
          <tr>
            <td>Los grandes</td>
            <td>5</td>
            <td>4</td>
            <td>35,000</td>
            <td><a href="./esperaJugadores.html"><input type="button" class="w3-button" name="unirse" value="Unirse" style="text-align: center;"></a></td>
          </tr>
          <tr>
            <td>Aprendiendo</td>
            <td>2</td>
            <td>1</td>
            <td>5,000</td>
            <td><a href="./esperaJugadores.html"><input type="button" class="w3-button" name="unirse" value="Unirse" style="text-align: center;"></a></td>
          </tr>
        </table>
      </div>
    </div>
  </div>
  <!--  Nueva partida -->
  <div id="nuevaPartida" class="w3-panel menuItem w3-animate-left" style="display:none; text-align: center;">
    <div class="w3-row-padding" >
      <div class="w3-twothird" >
        <br>
        <h2><b><i></i>Nueva partida</b></h2>
        <input type="text" class="w3-input w3-xlarge" name="partida" placeholder="Nombre de la partida" style="text-align: center;" required="true"><br><br>
        <input type="number" class="w3-input w3-xlarge" name="noJugadores" placeholder="Número de jugadores" style="text-align: center;" required="true"><br><br>
        <input type="number" class="w3-input w3-xlarge" name="montoInicial" placeholder="Monto inicial" style="text-align: center;" required="true"><br><br>
        <input type="number" class="w3-input w3-xlarge" name="meta" placeholder="Meta" style="text-align: center;" required="true"><br>
        <br>
        <br><br>
        <a href="./esperaJugadores.html"><input type="button" class="w3-button w3-xlarge w3-round-xlarge w3-white w3-border w3-border-green w3-hover-green" name="continuar" value="Crear partida" style="text-align: center;"></a>
      </div>
    </div>
  </div>
  <!--  Tutorial -->
  <div id="tutorial" class="w3-panel menuItem w3-animate-left" style="display:none; text-align: center;">
    <div class="w3-row-padding" >
      <br>
      <br>
      <div class="flexContainer">
        <div class="w3-card-4 cardTam">
          <header class="w3-container w3-green">
            <h3>Mi balance general <i class="fa fa-chevron-right"></i></h3>
          </header>
          <div class="w3-container">
            <p>Ingresos, gastos, ahorro</p>
          </div>
        </div>
        <div class="w3-card-4 cardTam">
          <header class="w3-container w3-green">
            <h3>Conceptos básicos <i class="fa fa-chevron-right"></i></h3>
          </header>
          <div class="w3-container">
            <p>Riesgo, inflación, diversificación, perfil de inversión, rendimiento</p>
          </div>
        </div>
        <div class="w3-card-4 cardTam">
          <a href="./tutoriales/deudaGuber.html" style="text-decoration: none">
            <header class="w3-container w3-green">
              <h3>Deuda gubernamental <i class="fa fa-chevron-right"></i></h3>
            </header>
            <div class="w3-container">
              <p> Precio nominal, Plazo, Tasas de interés, CETES, BONDES, UDIBONOS</p>
            </div>
          </a>
        </div>
        <div class="w3-card-4 cardTam">
          <a href="./tutoriales/mercadoCapitales.html" style="text-decoration: none">
            <header class="w3-container w3-green">
              <h3>Mercado de capitales <i class="fa fa-chevron-right"></i></h3>
            </header>
            <div class="w3-container">
              <p>Bolsa de valores, acción, tipos de acciones, calificaciones crediticias, dividendos, ganancia de capital, minusvalía, ganancia de capital</p>
            </div>
          </a>
        </div>
        <div class="w3-card-4 cardTam">
          <header class="w3-container w3-green">
            <h3>Casas de bolsa <i class="fa fa-chevron-right"></i></h3>
          </header>
          <div class="w3-container">
            <p>Comisión, instituciones reguladoras, comisión por manejo de cuenta, comisión por compra/venta</p>
          </div>
        </div>
        <div class="w3-card-4 cardTam">
          <header class="w3-container w3-green">
            <h3>Análisis fundamental <i class="fa fa-chevron-right"></i></h3>
          </header>
          <div class="w3-container">
            <p>Descripción de la empresa, noticias, prospecto de inversión, ingresos, ingresos netos, margen de utilidad neta</p>
          </div>
        </div>
        <div class="w3-card-4 cardTam">
          <header class="w3-container w3-green">
            <h3>Otros <i class="fa fa-chevron-right"></i></h3>
          </header>
          <div class="w3-container">
            <p>..., ..., ..., ..., ...</p>
          </div>
        </div>

      </div>
    </div>
  </div>
  <!-- End page content -->
</div>

<script>

// Get the Sidebar
var mySidebar = document.getElementById("mySidebar");
// Get the DIV with overlay effect
var overlayBg = document.getElementById("myOverlay");
// Toggle between showing and hiding the sidebar, and add overlay effect
function w3_open() {
    if (mySidebar.style.display === 'block') {
        mySidebar.style.display = 'none';
        overlayBg.style.display = "none";
    } else {
        mySidebar.style.display = 'block';
        overlayBg.style.display = "block";
    }
}
// Close the sidebar with the close button
function w3_close() {
    mySidebar.style.display = "none";
    overlayBg.style.display = "none";
}
// Show the content
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
}
function validar(form,accion){
  var data = formToJSON(form.elements);
  //console.log(data['newPassword'].localeCompare(data['newPassword2']));
  if(data['newPassword'].localeCompare(data['newPassword2'])==0)
    handleFormSubmit(form,accion);
  else
    alert('Las contraseñas no coinciden.');
}
</script>

<script>
function acordeon(id) {
  var x = document.getElementById(id);
    var y = document.getElementById("disUs");
    if (y.className == "fa fa-chevron-circle-right") {
        y.className = y.className.replace("fa fa-chevron-circle-right","fa fa-chevron-circle-down");
    } else {
        y.className = y.className.replace("fa fa-chevron-circle-down", "fa fa-chevron-circle-right");
    }
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}
  handleFormSubmit(document.createElement("form"),"getUsuario");
</script>

</body>
</html>