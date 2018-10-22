
function updateUsr(hola){
	handleFormSubmit(document.getElementById(hola),'usrEdit');
}
function deleteUsr(hola){
	handleFormSubmit(document.getElementById(hola),'deleteUsuario');
}
function tutoWord(){
	document.getElementById('myFormTutorial').click();
}
/* Formatting function for row details - modify as you need */
function format ( d ) {
    // `d` is the original data object for the row
    return '<table cellspacing="0" border="0" style="padding-left:50px;">'+
        '<tr>'+
            '<td>Full name:</td>'+
            '<td>'+d.ocupacion+'</td>'+
        '</tr>'+
    '</table>';
}
function exampleTable(data){
	$(document).ready(function() {
	    var table = $('#exampleTable').DataTable( {
	        "ajax": data,
	        "columns": [
	            {
	                "className":      'details-control',
	                "orderable":      false,
	                "data":           null,
	                "defaultContent": ''
	            },
	            { "data": "nombre" },
	        ],
	        "order": [[1, 'asc']]
	    } );
	     
	    // Add event listener for opening and closing details
	    $('#example tbody').on('click', 'td.details-control', function () {
	        var tr = $(this).closest('tr');
	        var row = table.row( tr );
	 
	        if ( row.child.isShown() ) {
	            // This row is already open - close it
	            row.child.hide();
	            tr.removeClass('shown');
	        }
	        else {
	            // Open this row
	            row.child( format(row.data()) ).show();
	            tr.addClass('shown');
	        }
	    } );
	} );
}
