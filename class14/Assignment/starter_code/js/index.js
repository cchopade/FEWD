//REQUIREMENTS
//DONE - Create an array with the following values: "NYC", "SF", "LA", "ATX", "SYD"; use the array to add values to the <select> menu by using a for loop in JavaScript (don't update the HTML to do this!)
//When the user changes the input of the drop-down, update the background image based on what they selected
//DONE - Use $.append() in your iteration on the drop-down menu
//DONE - Use the $.attr() function to update html classes
//Get the value of user input using $.val()
//Use the $.change event handler to capture user actions
//Use if/else if/else conditionals to control the flow of your application
//Display your pseudocode as Javascript comments

$(document).ready(function() {

//Variables
var array = ["NYC" , "SF" , "LA" , "ATX" , "SYD"]; //Creating my array 


//Function - Creating my loop for the dropdown menu 
for (var i = 0; i < array.length; i++) {
	$('#city-type').append('<option>' + array[i] + '</option>'); //appending the city-type select with options that are all of my array values 
}

//Event Listener - When I change the city-type value, the changeBackground function runs 
$('#city-type').change(changeBackground);

//Function - changing the background 
function changeBackground(event) {
	event.preventDefault(); 
	city = $('#city-type').val(); 

	if(city === 'SF') { 
		$('body').attr('class','sf');
	}
	else if(city === 'LA') { 
		$('body').attr('class','la');
	}
	else if (city === 'ATX') {
		$('body').attr('class','austin');
	}
	else if (city === 'SYD') {
		$('body').attr('class','sydney');
	}
	else if (city === 'NYC') {
		$('body').attr('class','nyc'); 
	}
}



});