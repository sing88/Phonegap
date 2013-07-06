function init() {
	// Esperamos a que carguen todas las librerias
	document.addEventListener("deviceready", onDeviceReady, false);

	
	function onDeviceReady() {
		
		jQuery('#btnHola').click(function(){
			alert('Hola soy un alert llamado desde un boton');
		});
		
		jQuery('#btnNombre').click(function(){
			jQuery('#nombre').text(jQuery('#txtNombre').val());
		});
	}

}
