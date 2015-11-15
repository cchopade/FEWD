//Make it better
$(document).ready(function() {

	$('li').click(function() { 
		 var buttonClassName = $(this).attr('class'); //Gets the background color -- this is a "getter" jquery function instead of a "setter"
		 $('body').attr('class', buttonClassName); 
	}); 

});