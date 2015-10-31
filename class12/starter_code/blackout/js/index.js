$(document).ready(function() {

//Variables - Storing whether the lights are on or off.
var lights = 'on'; 
 

//Event Listener - Waiting for user to click the light switch button 
$('#light_switch').click(switchLights); 

//Function
function switchLights() {
	if(lights === 'on') { //tests to see if the lights are on 
		$('body').css('background-color','black');	
		lights = 'off'; //Reassign variable 
	}
	else if (lights === 'off') {
		$('body').css('background-color','white');
		lights = 'on'; 
	}
}

}); 


// var lightsOn = true 
// tests -> if (lightsOn === true) OR could also say if(lightsOn)