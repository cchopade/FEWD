// Pseudocode 
// DONE- Call $.val() on inputs to get the string value of your user's input
//DONE - Store user input in var city
//DONE - Use $.on(submit) or $.click to figure out when the user clicks the "submit" button
// DONE- Create if / else if / else conditionals to control the flow of your application
//DONE - Write at least six different lines of pseudocode and display them inline as JavaScript comments
//DONE - Prevent a form submission using the event.preventDefault() function
// DONE- Use the $.ready() handler to delay your code from executing until all DOM assets have been loaded
//DONE - Get the first element from an attribute name using $.attr()
// DONE - Use the || operator in your conditionals to allow for multiple string values to execute if/else if statement code


//Psuedocode 

//If the variable equals "New York" or "New York City" or "NY" once the user hits submit, change the background-image in css nyc.jpg

//If the variable equals "San Francisco" or "SF" or "Bay Area" once the user hits submit, change the background-image in css sf.jpg

//If the variable equals "Los Angeles" or "LA" or "LAX" once the user hits submit, change the background-image in css la.jpg

//If the variable equals "Austin" or "ATX" once the user hits submit, change the background-image in css austin.jpg

// If the variable equals "Sydney" or "SYD" once the user hits submit, change the background-image in css sydney.jpg


$(document).ready(function() {

//Variable - Store the user input 
var city;

//Event Listener - Waiting for user to enter what they're going to write and click subit
$('#submit-btn').click(switchBackground); 

//Function
function switchBackground(event) {
	event.preventDefault();
	city = $('#city-type').val();
	if(city === 'San Francisco'|| city === 'SF' || city === 'Bay Area') { 
		$('body').attr('class','sf');
	}
	else if(city === 'Los Angeles'|| city === 'LA' || city === 'LAX') { 
		$('body').attr('class','la');
	}
	else if (city === 'Austin'|| city === 'ATX') {
		$('body').attr('class','austin');
	}
	else if (city === 'Sydney'|| city === 'SYD') {
		$('body').attr('class','sydney');
	}
	else if (city === 'New York' || city === 'New York City' || city === 'NY') {
		$('body').attr('class','nyc'); 
	}
}

}); 


