function init() {
	// Esperamos a que carguen todas las librerias
	document.addEventListener("deviceready", onDeviceReady, false);

	
	function onDeviceReady() {		
		//alert("Hola mundo");
		/*jQuery("#boton").click(function(){
			alert("Soy un boton");
		});*/
		jQuery("#boton_saludar").click(function(){
			var nombre = jQuery("#nombre").val();
			alert("Hola "+nombre+", como estas?");
		});
		
		jQuery('#ajax').click(function(){
			
			var url= 'http://viasoluciones.com/phonegap/demo.php';
			
			jQuery.ajaxSetup({
				async:false
			});
			
			jQuery.ajax({
				url: url,
				datatype: 'json',
				type: 'post',
				success: function(xhr,textstatus){
					alert(textstatus);
					var i=0;
					var html = '';
					var htmlFila = '';
					for(i=0;i< xhr.nombres.length;i++){
						htmlFila = '<li>' + xhr.nombres[i] + '</li>';
						html = html + htmlFila;
					}
					jQuery('#team').html(html);
				}
			});
			
		});
	}

}
