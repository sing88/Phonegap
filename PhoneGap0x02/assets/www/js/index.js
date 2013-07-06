function init() {
	// Esperamos a que carguen todas las librerias
	document.addEventListener("deviceready", onDeviceReady, false);

	
	function onDeviceReady() {
		var oper = '';	
		var num1 = 0;
		var num2 = 0;
		// Boton para limpiar.
		jQuery('#btnCe').click(function(){
			jQuery('#txtNumero').val('');
		});
		
		//Botones para las operaciones.
		jQuery('#btnDiv').click(function(){
			
			num1 = jQuery('#txtNumero').val();
			jQuery('#txtNumero').val('');
			oper = '/';
		});
		
		jQuery('#btnPor').click(function(){
			
			num1 = jQuery('#txtNumero').val();
			jQuery('#txtNumero').val('');
			oper = '*';
		});
		
		jQuery('#btnMenos').click(function(){
			
			num1 = jQuery('#txtNumero').val();
			jQuery('#txtNumero').val('');
			oper = '-';
		});
		
		jQuery('#btnMas').click(function(){
			oper = '+';
			num1 = jQuery('#txtNumero').val();
			jQuery('#txtNumero').val('');
		});
		
		// Botones para los numeros
				
		jQuery('#btn1').click(function(){
			agregar('1');
		});
		
		jQuery('#btn2').click(function(){
			agregar('2');
		});
		
		jQuery('#btn3').click(function(){
			agregar('3');
		});
		
		jQuery('#btn4').click(function(){
			agregar('4');
		});
		
		jQuery('#btn5').click(function(){
			agregar('5');
		});
		
		jQuery('#btn6').click(function(){
			agregar('6');
		});
		
		jQuery('#btn7').click(function(){
			agregar('7');
		});
		
		jQuery('#btn8').click(function(){
			agregar('8');
		});
		
		jQuery('#btn9').click(function(){
			agregar('9');
		});
		
		jQuery('#btn0').click(function(){
			agregar('0');
		});
		
		jQuery('#btnPunto').click(function(){
			agregar('.');
		});
		
		jQuery('#btnIgual').click(function(){
			var resultado = 0;
			num2 = jQuery('#txtNumero').val();	
				
			if(oper === '+'){
				resultado = parseFloat(num1) + parseFloat(num2);
			}
			if(oper === '-'){
				resultado = parseFloat(num1) - parseFloat(num2);
			}
			if(oper === '*'){
				resultado = parseFloat(num1) * parseFloat(num2);
			}
			if(oper === '/'){
				resultado = parseFloat(num1) / parseFloat(num2);
			}
			if(resultado !== 0){
				jQuery('#txtNumero').val(resultado);
				num1 = 0;
				num2 = 0;
				oper = '';
			}
		});
	}
	function agregar(numeroNuevo){
		var numero = jQuery('#txtNumero').val();
		numero = numero.concat(numeroNuevo);
		jQuery('#txtNumero').val(numero);
	}
}
