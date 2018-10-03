/*SIMBOLO DE CARGA*/
window.onload = function (){
   var contenedor = document.getElementById('contenedor_carga');
   contenedor.style.visibility = 'hidden';
   contenedor.style.opacity = '0';
};

$(document).ready(function(){
   $('ul li a:first').addClass('active');
   $('#contenido').load('resources/conocimientos.html');

   $('.nav-link').click(function(){
   	$('ul li a').removeClass('active');
   	$(this).addClass('active');
   	$('#contenido div').hide();

      var link = 'resources/'+ $(this).attr('href')+'.'+'html';
		$('#contenido').load(link);
	    return false;
   });
}); 