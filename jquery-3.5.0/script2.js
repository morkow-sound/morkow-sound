	jQuery(document).ready(function(){
		// tag, class, id
	    //$('.jQ').css({'color': 'red' });
		//$('#jQ').css({'color': 'red' });
		//присвоение через var переменная = $('обращение к tag, class, id').data('название индификатора');
		var id = $('h1').data('name');
		
		alert(id);
		
		//атрибуты
		
		//$('h2[title="Работа с атрибутами через jquery-3"]').css({'color':'green'});
		//$('h1,h2[title="Работа с атрибутами через jquery-3"]').css({'background-color':'#d0d0d0' , 'width':'25%' , 'margin':'auto' , 'opacity':'0.75'});
		
	});