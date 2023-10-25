var fecha=new Date();
var anio=fecha.getFullYear();
var dia=fecha.getDay();
var mes=fecha.getMonth();
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var nombreDelMes = meses[mes]; // Obtiene el nombre del mes actual
document.getElementById("calendario").innerHTML = ' <div id="anio">'+anio+'</div>' +
    '<div id="dia">'+dia+'</div>' + '<div id="mes">'+nombreDelMes+'</div>';



